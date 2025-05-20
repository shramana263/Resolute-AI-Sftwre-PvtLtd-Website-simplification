import React, { useState, useReducer, useMemo, useCallback, memo } from "react"
import type { ReactElement } from "react"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Home,
  DollarSign,
  Percent,
  Calendar,
  Building,
  Shield,
  MapPin,
  PieChart,
  BarChart3,
  ArrowRight,
  HelpCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import debounce from 'lodash.debounce'

// Define the state type
type CalculatorState = {
  homePrice: number
  downPayment: number
  downPaymentPercent: number
  loanTerm: number
  interestRate: number
  propertyTax: number
  homeInsurance: number
  zipCode: string
  monthlyPayment: number
  principalInterest: number
  monthlyTax: number
  monthlyInsurance: number
}

// Define action types
type CalculatorAction =
  | { type: 'SET_HOME_PRICE'; value: number }
  | { type: 'SET_DOWN_PAYMENT'; value: number }
  | { type: 'SET_DOWN_PAYMENT_PERCENT'; value: number }
  | { type: 'SET_LOAN_TERM'; value: number }
  | { type: 'SET_INTEREST_RATE'; value: number }
  | { type: 'SET_PROPERTY_TAX'; value: number }
  | { type: 'SET_HOME_INSURANCE'; value: number }
  | { type: 'SET_ZIP_CODE'; value: string }

// Format currency helper (memoized)
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

// Calculate monthly payments helper
const calculateMonthlyPayments = (state: CalculatorState): CalculatorState => {
  const { homePrice, downPayment, interestRate, loanTerm, propertyTax, homeInsurance } = state;
  
  // Calculate loan info
  const loanAmount = homePrice - downPayment;
  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;
  
  // Calculate principal and interest
  let principalInterest = 0;
  if (interestRate > 0) {
    principalInterest =
      (loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
  } else {
    principalInterest = loanAmount / numberOfPayments;
  }
  
  // Calculate monthly tax and insurance
  const monthlyTax = propertyTax / 12;
  const monthlyInsurance = homeInsurance / 12;
  const monthlyPayment = principalInterest + monthlyTax + monthlyInsurance;
  
  return {
    ...state,
    principalInterest,
    monthlyTax,
    monthlyInsurance,
    monthlyPayment
  };
};

// Hero Section Component
const HeroSection = memo(() => (
  <div className="relative bg-gradient-to-r from-purple-900 to-indigo-800 text-white">
    <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center"></div>
    <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Mortgage Calculator</h1>
        <p className="text-xl text-purple-100 mb-8">
          Plan your home purchase with confidence. Estimate your monthly payments and see a detailed breakdown of
          costs.
        </p>
      </div>
    </div>
  </div>
));

// Input with Icon Component
type InputWithIconProps = {
  icon: ReactElement
  value: string | number
  onChange: (value: any) => void
  className?: string
  type?: string
  placeholder?: string
  maxLength?: number
  step?: string
}

const InputWithIcon = memo(({ icon, value, onChange, className = "", type = "text", placeholder = "", maxLength, step }: InputWithIconProps) => (
  <div className="relative">
    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
      {icon}
    </div>
    <Input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`pl-10 ${className}`}
      placeholder={placeholder}
      maxLength={maxLength}
      step={step}
    />
  </div>
));

// Label with Tooltip component
const LabelWithTooltip = memo(({ icon, label, tooltip }: { icon: ReactElement, label: string, tooltip?: string }) => (
  <label className="text-sm font-medium text-gray-700 flex items-center">
    {icon}
    {label}
    {tooltip && (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <HelpCircle className="h-3.5 w-3.5 ml-1 text-gray-400" />
          </TooltipTrigger>
          <TooltipContent>
            <p className="max-w-xs">{tooltip}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )}
  </label>
));

// Payment Summary Component
const PaymentSummary = memo(({ state }: { state: CalculatorState }) => (
  <Card className="sticky top-8 overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-white to-purple-50">
    <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <CardTitle className="text-2xl">Your Estimated Payment</CardTitle>
      <CardDescription className="text-purple-100">Based on your inputs</CardDescription>
    </CardHeader>
    <CardContent className="pt-6">
      <div className="text-center mb-8">
        <div className="text-5xl font-bold text-purple-700 mb-2">{formatCurrency(state.monthlyPayment)}</div>
        <div className="text-gray-600">per month</div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4 flex items-center">
            <PieChart className="h-5 w-5 mr-2 text-purple-600" />
            Payment Breakdown
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-purple-600 mr-2"></div>
                <span className="text-gray-700">Principal & Interest</span>
              </div>
              <span className="font-medium text-gray-900">{formatCurrency(state.principalInterest)}/mo</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></div>
                <span className="text-gray-700">Property Taxes</span>
              </div>
              <span className="font-medium text-gray-900">{formatCurrency(state.monthlyTax)}/mo</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-purple-400 mr-2"></div>
                <span className="text-gray-700">Home Insurance</span>
              </div>
              <span className="font-medium text-gray-900">{formatCurrency(state.monthlyInsurance)}/mo</span>
            </div>
            <div className="h-px bg-gray-200 my-3"></div>
            <div className="flex justify-between font-bold">
              <span className="text-gray-900">Total Payment</span>
              <span className="text-purple-700">{formatCurrency(state.monthlyPayment)}/mo</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4 flex items-center">
            <BarChart3 className="h-5 w-5 mr-2 text-purple-600" />
            Loan Details
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Loan Amount</span>
              <span className="font-medium text-gray-900">{formatCurrency(state.homePrice - state.downPayment)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Down Payment</span>
              <span className="font-medium text-gray-900">
                {formatCurrency(state.downPayment)} ({state.downPaymentPercent}%)
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Loan Term</span>
              <span className="font-medium text-gray-900">{state.loanTerm} years</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Interest Rate</span>
              <span className="font-medium text-gray-900">{state.interestRate}%</span>
            </div>
          </div>
        </div>

        <Button className="w-full py-6 text-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">
          Get Pre-Approved <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </CardContent>
  </Card>
));

// Resource Card Component
const ResourceCard = memo(({ image, title, description }: { image: string, title: string, description: string }) => (
  <Card className="overflow-hidden hover:shadow-xl transition-shadow">
    <div className="h-48 bg-purple-200 relative">
      <img
        src={image}
        alt={title}
        width={600}
        height={400}
        className="w-full h-full object-cover"
      />
    </div>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <Button
        variant="outline"
        className="w-full text-purple-600 border-purple-200 hover:bg-purple-50 hover:border-purple-300"
      >
        Read Guide <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </CardContent>
  </Card>
));

// Resources Section Component
const ResourcesSection = memo(() => (
  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Helpful Resources</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Learn more about mortgages and the homebuying process with these guides.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <ResourceCard 
          image="/placeholder.svg?height=400&width=600" 
          title="First-Time Homebuyer Guide" 
          description="Everything you need to know about buying your first home" 
        />
        
        <ResourceCard 
          image="/placeholder.svg?height=400&width=600" 
          title="Understanding Mortgage Rates" 
          description="How rates are determined and what affects them" 
        />
        
        <ResourceCard 
          image="/placeholder.svg?height=400&width=600" 
          title="Closing Costs Explained" 
          description="A breakdown of all the fees involved in closing" 
        />
      </div>
    </div>
  </div>
));

// Placeholder Tab Content Component
const PlaceholderTabContent = memo(({ title, description }: { title: string, description: string }) => (
  <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center py-16">
    <img
      src="/placeholder.svg?height=300&width=300"
      alt={title}
      width={300}
      height={300}
      className="mx-auto mb-8"
    />
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 max-w-2xl mx-auto mb-8">{description}</p>
    <Button className="bg-purple-600 hover:bg-purple-700 text-white">Coming Soon</Button>
  </div>
));

// Main Calculator Form Component
const CalculatorForm = memo(({ state, dispatch }: { state: CalculatorState, dispatch: React.Dispatch<CalculatorAction> }) => {
  // Debounced dispatchers for slider inputs that might cause frequent updates
  const debouncedSetHomePrice = useCallback(
    debounce((value) => dispatch({ type: 'SET_HOME_PRICE', value }), 100),
    [dispatch]
  );
  
  const debouncedSetDownPaymentPercent = useCallback(
    debounce((value) => dispatch({ type: 'SET_DOWN_PAYMENT_PERCENT', value }), 100),
    [dispatch]
  );
  
  const debouncedSetInterestRate = useCallback(
    debounce((value) => dispatch({ type: 'SET_INTEREST_RATE', value }), 100),
    [dispatch]
  );

  return (
    <div className="space-y-8 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Mortgage Details</h2>
        <p className="text-gray-600">Adjust the values to calculate your monthly payment</p>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <LabelWithTooltip 
            icon={<Home className="h-4 w-4 mr-2 text-purple-600" />} 
            label="Home Price" 
          />
          <span className="text-lg font-bold text-purple-700">{formatCurrency(state.homePrice)}</span>
        </div>
        <Slider
          value={[state.homePrice]}
          min={50000}
          max={1000000}
          step={1000}
          onValueChange={(value) => debouncedSetHomePrice(value[0])}
          className="mb-2"
        />
        <InputWithIcon
          icon={<DollarSign className="h-4 w-4" />}
          type="number"
          value={state.homePrice}
          onChange={(value) => dispatch({ type: 'SET_HOME_PRICE', value: Number(value) })}
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <LabelWithTooltip 
            icon={<DollarSign className="h-4 w-4 mr-2 text-purple-600" />} 
            label="Down Payment" 
          />
          <span className="text-lg font-bold text-purple-700">
            {formatCurrency(state.downPayment)} ({state.downPaymentPercent}%)
          </span>
        </div>
        <Slider
          value={[state.downPaymentPercent]}
          min={0}
          max={50}
          step={0.5}
          onValueChange={(value) => debouncedSetDownPaymentPercent(value[0])}
          className="mb-2"
        />
        <InputWithIcon
          icon={<DollarSign className="h-4 w-4" />}
          type="number"
          value={state.downPayment}
          onChange={(value) => dispatch({ type: 'SET_DOWN_PAYMENT', value: Number(value) })}
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <LabelWithTooltip 
            icon={<Calendar className="h-4 w-4 mr-2 text-purple-600" />} 
            label="Loan Term" 
          />
          <span className="text-lg font-bold text-purple-700">{state.loanTerm} years</span>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[15, 20, 30].map((term) => (
            <button
              key={term}
              className={`py-3 px-4 rounded-lg border-2 transition-all ${state.loanTerm === term
                  ? "border-purple-600 bg-purple-50 text-purple-700 font-medium"
                  : "border-gray-200 text-gray-700 hover:border-purple-200"
                }`}
              onClick={() => dispatch({ type: 'SET_LOAN_TERM', value: term })}
            >
              {term} years
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <LabelWithTooltip 
            icon={<Percent className="h-4 w-4 mr-2 text-purple-600" />} 
            label="Interest Rate" 
          />
          <span className="text-lg font-bold text-purple-700">{state.interestRate}%</span>
        </div>
        <Slider
          value={[state.interestRate]}
          min={1}
          max={10}
          step={0.125}
          onValueChange={(value) => debouncedSetInterestRate(value[0])}
          className="mb-2"
        />
        <InputWithIcon
          icon={<Percent className="h-4 w-4" />}
          type="number"
          value={state.interestRate}
          onChange={(value) => dispatch({ type: 'SET_INTEREST_RATE', value: Number(value) })}
          step="0.125"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <LabelWithTooltip 
              icon={<Building className="h-4 w-4 mr-2 text-purple-600" />} 
              label="Property Tax (yearly)" 
              tooltip="Annual property taxes vary by location. The average is 1-2% of home value."
            />
          </div>
          <InputWithIcon
            icon={<DollarSign className="h-4 w-4" />}
            type="number"
            value={state.propertyTax}
            onChange={(value) => dispatch({ type: 'SET_PROPERTY_TAX', value: Number(value) })}
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <LabelWithTooltip 
              icon={<Shield className="h-4 w-4 mr-2 text-purple-600" />} 
              label="Home Insurance (yearly)" 
              tooltip="Annual homeowners insurance typically costs $800-$1,500 depending on location and coverage."
            />
          </div>
          <InputWithIcon
            icon={<DollarSign className="h-4 w-4" />}
            type="number"
            value={state.homeInsurance}
            onChange={(value) => dispatch({ type: 'SET_HOME_INSURANCE', value: Number(value) })}
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <LabelWithTooltip 
            icon={<MapPin className="h-4 w-4 mr-2 text-purple-600" />} 
            label="Zip Code" 
            tooltip="Your zip code helps us provide more accurate estimates for property taxes and insurance."
          />
        </div>
        <InputWithIcon
          icon={<MapPin className="h-4 w-4" />}
          type="text"
          value={state.zipCode}
          onChange={(value) => dispatch({ type: 'SET_ZIP_CODE', value: String(value) })}
          placeholder="Enter your zip code"
          maxLength={5}
        />
      </div>
    </div>
  );
});

// Main component
export default function MortgageCalculator() {
  // Optimized reducer function
  const calculatorReducer = useCallback((state: CalculatorState, action: CalculatorAction): CalculatorState => {
    let newState = { ...state };
    
    switch (action.type) {
      case 'SET_HOME_PRICE':
        newState.homePrice = action.value;
        // Update down payment amount based on percentage
        newState.downPayment = Math.round((action.value * state.downPaymentPercent) / 100);
        break;
        
      case 'SET_DOWN_PAYMENT':
        newState.downPayment = action.value;
        // Update down payment percentage
        newState.downPaymentPercent = Number.parseFloat(((action.value / state.homePrice) * 100).toFixed(1));
        break;
        
      case 'SET_DOWN_PAYMENT_PERCENT':
        newState.downPaymentPercent = action.value;
        // Update down payment amount
        newState.downPayment = Math.round((state.homePrice * action.value) / 100);
        break;
        
      case 'SET_LOAN_TERM':
        newState.loanTerm = action.value;
        break;
        
      case 'SET_INTEREST_RATE':
        newState.interestRate = action.value;
        break;
        
      case 'SET_PROPERTY_TAX':
        newState.propertyTax = action.value;
        break;
        
      case 'SET_HOME_INSURANCE':
        newState.homeInsurance = action.value;
        break;
        
      case 'SET_ZIP_CODE':
        newState.zipCode = action.value;
        break;
    }
    
    // Calculate monthly payments after any state change
    return calculateMonthlyPayments(newState);
  }, []);
  
  // Initial state
  const initialState: CalculatorState = {
    homePrice: 300000,
    downPayment: 60000,
    downPaymentPercent: 20,
    loanTerm: 30,
    interestRate: 4.5,
    propertyTax: 2500,
    homeInsurance: 1200,
    zipCode: '',
    monthlyPayment: 0,
    principalInterest: 0,
    monthlyTax: 0,
    monthlyInsurance: 0
  };
  
  // Calculate initial monthly payments only once
  const initialStateWithPayments = useMemo(() => calculateMonthlyPayments(initialState), []);
  
  const [state, dispatch] = useReducer(calculatorReducer, initialStateWithPayments);
  const [, setActiveTab] = useState("mortgage");

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Calculator Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <Tabs defaultValue="mortgage" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full max-w-3xl mx-auto md:grid-cols-3 mb-12 bg-purple-50">
            <TabsTrigger value="mortgage" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
              <Home className="h-4 w-4 mr-2" />
              Mortgage Calculator
            </TabsTrigger>
            <TabsTrigger
              value="affordability"
              className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
            >
              <DollarSign className="h-4 w-4 mr-2" />
              Affordability Calculator
            </TabsTrigger>
            <TabsTrigger value="refinance" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
              <Percent className="h-4 w-4 mr-2" />
              Refinance Calculator
            </TabsTrigger>
          </TabsList>

          <TabsContent value="mortgage" className="mt-0">
            <div className="grid md:grid-cols-2 gap-12">
              <CalculatorForm state={state} dispatch={dispatch} />
              <PaymentSummary state={state} />
            </div>
          </TabsContent>

          <TabsContent value="affordability" className="mt-0">
            <PlaceholderTabContent 
              title="Affordability Calculator" 
              description="Find out how much house you can afford based on your income, expenses, and financial goals."
            />
          </TabsContent>

          <TabsContent value="refinance" className="mt-0">
            <PlaceholderTabContent 
              title="Refinance Calculator" 
              description="See if refinancing makes sense for you by comparing your current mortgage with potential new options."
            />
          </TabsContent>
        </Tabs>
      </div>

      {/* Additional Resources */}
      <ResourcesSection />
    </div>
  )
}
