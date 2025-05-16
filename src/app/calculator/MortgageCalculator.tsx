import { useState, useEffect } from "react"
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

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(300000)
  const [downPayment, setDownPayment] = useState(60000)
  const [downPaymentPercent, setDownPaymentPercent] = useState(20)
  const [loanTerm, setLoanTerm] = useState(30)
  const [interestRate, setInterestRate] = useState(4.5)
  const [propertyTax, setPropertyTax] = useState(2500)
  const [homeInsurance, setHomeInsurance] = useState(1200)
  const [zipCode, setZipCode] = useState("")
  const [activeTab, setActiveTab] = useState("mortgage")

  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [principalInterest, setPrincipalInterest] = useState(0)
  const [monthlyTax, setMonthlyTax] = useState(0)
  const [monthlyInsurance, setMonthlyInsurance] = useState(0)

  // Update down payment percentage when down payment changes
  useEffect(() => {
    const percent = (downPayment / homePrice) * 100
    setDownPaymentPercent(Number.parseFloat(percent.toFixed(1)))
  }, [downPayment, homePrice])

  // Update down payment when percentage changes
  useEffect(() => {
    const payment = (homePrice * downPaymentPercent) / 100
    setDownPayment(Math.round(payment))
  }, [downPaymentPercent, homePrice])

  // Calculate monthly payment
  useEffect(() => {
    // Calculate principal and interest
    const loanAmount = homePrice - downPayment
    const monthlyInterestRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm * 12

    let pi = 0
    if (interestRate > 0) {
      pi =
        (loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1)
    } else {
      pi = loanAmount / numberOfPayments
    }

    // Calculate monthly tax and insurance
    const tax = propertyTax / 12
    const insurance = homeInsurance / 12

    // Set state values
    setPrincipalInterest(pi)
    setMonthlyTax(tax)
    setMonthlyInsurance(insurance)
    setMonthlyPayment(pi + tax + insurance)
  }, [homePrice, downPayment, interestRate, loanTerm, propertyTax, homeInsurance])

  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div>
      {/* Hero Section */}
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
              <div className="space-y-8 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="border-b pb-4">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Mortgage Details</h2>
                  <p className="text-gray-600">Adjust the values to calculate your monthly payment</p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center">
                      <Home className="h-4 w-4 mr-2 text-purple-600" />
                      Home Price
                    </label>
                    <span className="text-lg font-bold text-purple-700">{formatCurrency(homePrice)}</span>
                  </div>
                  <Slider
                    value={[homePrice]}
                    min={50000}
                    max={1000000}
                    step={1000}
                    onValueChange={(value) => setHomePrice(value[0])}
                    className="mb-2"
                  />
                  <div className="relative mt-2">
                    <DollarSign className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <Input
                      type="number"
                      value={homePrice}
                      onChange={(e) => setHomePrice(Number(e.target.value))}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center">
                      <DollarSign className="h-4 w-4 mr-2 text-purple-600" />
                      Down Payment
                    </label>
                    <span className="text-lg font-bold text-purple-700">
                      {formatCurrency(downPayment)} ({downPaymentPercent}%)
                    </span>
                  </div>
                  <Slider
                    value={[downPaymentPercent]}
                    min={0}
                    max={50}
                    step={0.5}
                    onValueChange={(value) => setDownPaymentPercent(value[0])}
                    className="mb-2"
                  />
                  <div className="relative mt-2">
                    <DollarSign className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <Input
                      type="number"
                      value={downPayment}
                      onChange={(e) => setDownPayment(Number(e.target.value))}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-purple-600" />
                      Loan Term
                    </label>
                    <span className="text-lg font-bold text-purple-700">{loanTerm} years</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {[15, 20, 30].map((term) => (
                      <button
                        key={term}
                        className={`py-3 px-4 rounded-lg border-2 transition-all ${
                          loanTerm === term
                            ? "border-purple-600 bg-purple-50 text-purple-700 font-medium"
                            : "border-gray-200 text-gray-700 hover:border-purple-200"
                        }`}
                        onClick={() => setLoanTerm(term)}
                      >
                        {term} years
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center">
                      <Percent className="h-4 w-4 mr-2 text-purple-600" />
                      Interest Rate
                    </label>
                    <span className="text-lg font-bold text-purple-700">{interestRate}%</span>
                  </div>
                  <Slider
                    value={[interestRate]}
                    min={1}
                    max={10}
                    step={0.125}
                    onValueChange={(value) => setInterestRate(value[0])}
                    className="mb-2"
                  />
                  <div className="relative mt-2">
                    <Percent className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <Input
                      type="number"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      step="0.125"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-medium text-gray-700 flex items-center">
                        <Building className="h-4 w-4 mr-2 text-purple-600" />
                        Property Tax (yearly)
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <HelpCircle className="h-3.5 w-3.5 ml-1 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs">
                                Annual property taxes vary by location. The average is 1-2% of home value.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </label>
                    </div>
                    <div className="relative">
                      <DollarSign className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                      <Input
                        type="number"
                        value={propertyTax}
                        onChange={(e) => setPropertyTax(Number(e.target.value))}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-medium text-gray-700 flex items-center">
                        <Shield className="h-4 w-4 mr-2 text-purple-600" />
                        Home Insurance (yearly)
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <HelpCircle className="h-3.5 w-3.5 ml-1 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs">
                                Annual homeowners insurance typically costs $800-$1,500 depending on location and
                                coverage.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </label>
                    </div>
                    <div className="relative">
                      <DollarSign className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                      <Input
                        type="number"
                        value={homeInsurance}
                        onChange={(e) => setHomeInsurance(Number(e.target.value))}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-purple-600" />
                      Zip Code
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-3.5 w-3.5 ml-1 text-gray-400" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">
                              Your zip code helps us provide more accurate estimates for property taxes and insurance.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </label>
                  </div>
                  <div className="relative">
                    <MapPin className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <Input
                      type="text"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      placeholder="Enter your zip code"
                      maxLength={5}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div>
                <Card className="sticky top-8 overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-white to-purple-50">
                  <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                    <CardTitle className="text-2xl">Your Estimated Payment</CardTitle>
                    <CardDescription className="text-purple-100">Based on your inputs</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="text-center mb-8">
                      <div className="text-5xl font-bold text-purple-700 mb-2">{formatCurrency(monthlyPayment)}</div>
                      <div className="text-gray-600">per month</div>
                    </div>

                    <div className="relative h-64 mb-8">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img
                          src="/placeholder.svg?height=300&width=300"
                          alt="Payment breakdown chart"
                          width={300}
                          height={300}
                          className="w-full h-auto max-w-[250px]"
                        />
                      </div>
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
                            <span className="font-medium text-gray-900">{formatCurrency(principalInterest)}/mo</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <div className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></div>
                              <span className="text-gray-700">Property Taxes</span>
                            </div>
                            <span className="font-medium text-gray-900">{formatCurrency(monthlyTax)}/mo</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <div className="w-3 h-3 rounded-full bg-purple-400 mr-2"></div>
                              <span className="text-gray-700">Home Insurance</span>
                            </div>
                            <span className="font-medium text-gray-900">{formatCurrency(monthlyInsurance)}/mo</span>
                          </div>
                          <div className="h-px bg-gray-200 my-3"></div>
                          <div className="flex justify-between font-bold">
                            <span className="text-gray-900">Total Payment</span>
                            <span className="text-purple-700">{formatCurrency(monthlyPayment)}/mo</span>
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
                            <span className="font-medium text-gray-900">{formatCurrency(homePrice - downPayment)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Down Payment</span>
                            <span className="font-medium text-gray-900">
                              {formatCurrency(downPayment)} ({downPaymentPercent}%)
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Loan Term</span>
                            <span className="font-medium text-gray-900">{loanTerm} years</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Interest Rate</span>
                            <span className="font-medium text-gray-900">{interestRate}%</span>
                          </div>
                        </div>
                      </div>

                      <Button className="w-full py-6 text-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">
                        Get Pre-Approved <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="affordability" className="mt-0">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center py-16">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Affordability calculator"
                width={300}
                height={300}
                className="mx-auto mb-8"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Affordability Calculator</h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Find out how much house you can afford based on your income, expenses, and financial goals.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">Coming Soon</Button>
            </div>
          </TabsContent>

          <TabsContent value="refinance" className="mt-0">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center py-16">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Refinance calculator"
                width={300}
                height={300}
                className="mx-auto mb-8"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Refinance Calculator</h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                See if refinancing makes sense for you by comparing your current mortgage with potential new options.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">Coming Soon</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Additional Resources */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Helpful Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn more about mortgages and the homebuying process with these guides.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-purple-200 relative">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="First-time homebuyer guide"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>First-Time Homebuyer Guide</CardTitle>
                <CardDescription>Everything you need to know about buying your first home</CardDescription>
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

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-indigo-200 relative">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Understanding mortgage rates"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Understanding Mortgage Rates</CardTitle>
                <CardDescription>How rates are determined and what affects them</CardDescription>
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

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-purple-200 relative">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Closing costs explained"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Closing Costs Explained</CardTitle>
                <CardDescription>A breakdown of all the fees involved in closing</CardDescription>
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
          </div>
        </div>
      </div>
    </div>
  )
}
