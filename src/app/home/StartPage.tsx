import { useState} from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import {
  ArrowRight,
  Check,
  Home,
  Building,
  User,
  Mail,
  Phone,
  MapPin,
  FileText,
  Shield,
  Clock,
  DollarSign,
} from "lucide-react"

export default function StartPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    purpose: "",
    propertyType: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    agreeToTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit the data to a server
    alert("Application started! We'll be in touch soon.")
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 to-indigo-800 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Start Your Mortgage Journey</h1>
            <p className="text-xl text-purple-100 mb-8">
              Complete a few simple steps to begin your mortgage application process. Our digital-first approach makes
              getting a mortgage faster and easier than ever.
            </p>
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-between">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                        step >= i
                          ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {step > i ? (
                        <Check className="h-6 w-6" />
                      ) : i === 1 ? (
                        <Home className="h-6 w-6" />
                      ) : i === 2 ? (
                        <User className="h-6 w-6" />
                      ) : (
                        <MapPin className="h-6 w-6" />
                      )}
                    </div>
                    <span className={`text-sm font-medium ${step >= i ? "text-purple-600" : "text-gray-500"}`}>
                      {i === 1 ? "Loan Purpose" : i === 2 ? "Personal Info" : "Property Details"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Card className="border-0 shadow-2xl overflow-hidden bg-white">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
              <CardTitle className="text-2xl">
                {step === 1
                  ? "Tell us about your mortgage needs"
                  : step === 2
                    ? "Your Personal Information"
                    : "Property Details"}
              </CardTitle>
              <CardDescription className="text-purple-100">
                {step === 1
                  ? "Let's start by understanding what you're looking for"
                  : step === 2
                    ? "We'll use this information to personalize your experience"
                    : "Tell us about the property you're interested in"}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-medium mb-4 flex items-center text-gray-900">
                        <FileText className="h-5 w-5 mr-2 text-purple-600" />
                        What's your purpose for this mortgage?
                      </h3>
                      <RadioGroup
                        value={formData.purpose}
                        onValueChange={(value) => handleRadioChange("purpose", value)}
                        className="space-y-4"
                      >
                        <div className="flex items-center space-x-3 border p-4 rounded-lg hover:border-purple-200 hover:bg-purple-50 transition-colors cursor-pointer">
                          <RadioGroupItem value="purchase" id="purchase" className="text-purple-600" />
                          <Label htmlFor="purchase" className="flex-1 cursor-pointer">
                            <div className="font-medium text-gray-900">Purchase a new home</div>
                            <div className="text-sm text-gray-500">I'm looking to buy a new property</div>
                          </Label>
                          <div className="bg-purple-100 rounded-full p-2">
                            <Home className="h-5 w-5 text-purple-600" />
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 border p-4 rounded-lg hover:border-purple-200 hover:bg-purple-50 transition-colors cursor-pointer">
                          <RadioGroupItem value="refinance" id="refinance" className="text-purple-600" />
                          <Label htmlFor="refinance" className="flex-1 cursor-pointer">
                            <div className="font-medium text-gray-900">Refinance an existing mortgage</div>
                            <div className="text-sm text-gray-500">I want to refinance my current home loan</div>
                          </Label>
                          <div className="bg-purple-100 rounded-full p-2">
                            <DollarSign className="h-5 w-5 text-purple-600" />
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 border p-4 rounded-lg hover:border-purple-200 hover:bg-purple-50 transition-colors cursor-pointer">
                          <RadioGroupItem value="heloc" id="heloc" className="text-purple-600" />
                          <Label htmlFor="heloc" className="flex-1 cursor-pointer">
                            <div className="font-medium text-gray-900">Get a home equity line of credit</div>
                            <div className="text-sm text-gray-500">I want to access the equity in my home</div>
                          </Label>
                          <div className="bg-purple-100 rounded-full p-2">
                            <Clock className="h-5 w-5 text-purple-600" />
                          </div>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-4 flex items-center text-gray-900">
                        <Building className="h-5 w-5 mr-2 text-purple-600" />
                        What type of property is this for?
                      </h3>
                      <RadioGroup
                        value={formData.propertyType}
                        onValueChange={(value) => handleRadioChange("propertyType", value)}
                        className="space-y-4"
                      >
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="flex items-center space-x-3 border p-4 rounded-lg hover:border-purple-200 hover:bg-purple-50 transition-colors cursor-pointer">
                            <RadioGroupItem value="singleFamily" id="singleFamily" className="text-purple-600" />
                            <Label htmlFor="singleFamily" className="flex-1 cursor-pointer">
                              <div className="font-medium text-gray-900">Single-family home</div>
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3 border p-4 rounded-lg hover:border-purple-200 hover:bg-purple-50 transition-colors cursor-pointer">
                            <RadioGroupItem value="condo" id="condo" className="text-purple-600" />
                            <Label htmlFor="condo" className="flex-1 cursor-pointer">
                              <div className="font-medium text-gray-900">Condominium</div>
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3 border p-4 rounded-lg hover:border-purple-200 hover:bg-purple-50 transition-colors cursor-pointer">
                            <RadioGroupItem value="townhouse" id="townhouse" className="text-purple-600" />
                            <Label htmlFor="townhouse" className="flex-1 cursor-pointer">
                              <div className="font-medium text-gray-900">Townhouse</div>
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3 border p-4 rounded-lg hover:border-purple-200 hover:bg-purple-50 transition-colors cursor-pointer">
                            <RadioGroupItem value="multiFamily" id="multiFamily" className="text-purple-600" />
                            <Label htmlFor="multiFamily" className="flex-1 cursor-pointer">
                              <div className="font-medium text-gray-900">Multi-family home</div>
                            </Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-8">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="flex items-center text-gray-700">
                          <User className="h-4 w-4 mr-2 text-purple-600" />
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="flex items-center text-gray-700">
                          <User className="h-4 w-4 mr-2 text-purple-600" />
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center text-gray-700">
                        <Mail className="h-4 w-4 mr-2 text-purple-600" />
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center text-gray-700">
                        <Phone className="h-4 w-4 mr-2 text-purple-600" />
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                        required
                      />
                      <p className="text-sm text-gray-500 mt-1">We'll send you a verification code to this number</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                      <div className="flex items-start">
                        <Shield className="h-5 w-5 text-purple-600 mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900">Your information is secure</h4>
                          <p className="text-sm text-gray-600">
                            We use bank-level encryption to protect your personal information. We will never share your
                            data without your permission.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <Label htmlFor="address" className="flex items-center text-gray-700">
                        <MapPin className="h-4 w-4 mr-2 text-purple-600" />
                        Street Address
                      </Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="city" className="flex items-center text-gray-700">
                          <Building className="h-4 w-4 mr-2 text-purple-600" />
                          City
                        </Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state" className="flex items-center text-gray-700">
                          <MapPin className="h-4 w-4 mr-2 text-purple-600" />
                          State
                        </Label>
                        <Input
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zipCode" className="flex items-center text-gray-700">
                        <MapPin className="h-4 w-4 mr-2 text-purple-600" />
                        Zip Code
                      </Label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                        required
                      />
                    </div>
                    <div className="flex items-start space-x-3 pt-4">
                      <Checkbox
                        id="agreeToTerms"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: Boolean(checked) })}
                        className="text-purple-600 mt-1"
                        required
                      />
                      <div>
                        <label htmlFor="agreeToTerms" className="text-sm font-medium text-gray-900 cursor-pointer">
                          I agree to the terms and conditions
                        </label>
                        <p className="text-xs text-gray-500 mt-1">
                          By checking this box, you agree to our Terms of Service, Privacy Policy, and consent to our
                          electronic Communications Policy.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </CardContent>
            <CardFooter className="flex justify-between p-6 bg-gray-50 border-t">
              {step > 1 ? (
                <Button variant="outline" onClick={prevStep} className="border-gray-300 text-gray-700">
                  Back
                </Button>
              ) : (
                <div></div>
              )}
              {step < 3 ? (
                <Button
                  onClick={nextStep}
                  disabled={
                    (step === 1 && (!formData.purpose || !formData.propertyType)) ||
                    (step === 2 && (!formData.firstName || !formData.lastName || !formData.email || !formData.phone))
                  }
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
                >
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={
                    !formData.address ||
                    !formData.city ||
                    !formData.state ||
                    !formData.zipCode ||
                    !formData.agreeToTerms
                  }
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
                >
                  Submit Application
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Process Overview */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Simple Application Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've streamlined the mortgage application process to make it faster and easier than ever.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 relative transform transition-all duration-300 hover:scale-105">
              <div className="absolute -top-5 -right-5 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FileText className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Apply Online</h3>
              <p className="text-gray-600">
                Complete our simple online application in as little as 3 minutes to get started.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 relative transform transition-all duration-300 hover:scale-105">
              <div className="absolute -top-5 -right-5 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <DollarSign className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get Pre-Approved</h3>
              <p className="text-gray-600">
                Receive your pre-approval letter in minutes, not days, so you can start shopping for homes.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 relative transform transition-all duration-300 hover:scale-105">
              <div className="absolute -top-5 -right-5 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Home className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Find Your Home</h3>
              <p className="text-gray-600">Shop with confidence knowing exactly how much you can afford.</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 relative transform transition-all duration-300 hover:scale-105">
              <div className="absolute -top-5 -right-5 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Check className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Close Your Loan</h3>
              <p className="text-gray-600">
                Our digital process makes closing faster and more convenient than traditional lenders.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real customers have to say about their experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The entire process was so smooth. I was able to get pre-approved in minutes and closed on my new home
                in just 14 days. I couldn't believe how easy it was!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full mr-4 flex items-center justify-center">
                  <User className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Sarah T.</div>
                  <div className="text-sm text-gray-500">First-time homebuyer</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "I saved thousands in fees compared to my previous lender. The online dashboard made it easy to track my
                application and upload documents."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full mr-4 flex items-center justify-center">
                  <User className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Michael R.</div>
                  <div className="text-sm text-gray-500">Refinance customer</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The customer service was exceptional. Whenever I had a question, someone was available to help me right
                away. The whole process was transparent and stress-free."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full mr-4 flex items-center justify-center">
                  <User className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Jennifer L.</div>
                  <div className="text-sm text-gray-500">Home purchase</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
