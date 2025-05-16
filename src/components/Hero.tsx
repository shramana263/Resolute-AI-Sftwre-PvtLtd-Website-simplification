import {Link} from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Star, ArrowRight, Check } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-purple-900 to-indigo-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-repeat"></div>
      </div>

      {/* Animated Circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container px-4 py-20 md:py-32 lg:py-40 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left space-y-6"
          >
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 text-sm font-medium text-white mb-2">
              Simplifying Homeownership
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Mortgages
              <br />
              <span className="bg-gradient-to-r from-purple-300 to-indigo-300 text-transparent bg-clip-text">
                made simple
              </span>
            </h1>
            <p className="text-lg md:text-xl text-purple-100 max-w-md mx-auto md:mx-0">
              Get pre-approved in minutes, not days. Close your mortgage faster than ever with our digital-first
              approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/start">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Start my approval
                </Button>
              </Link>
              <div className="flex items-center justify-center md:justify-start text-sm bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 mr-2 text-purple-300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6v6l4 2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                </svg>
                3 min to credit impact
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-1">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm">4.8 stars, 12,577 reviews</span>
            </div>
            <div className="pt-4 space-y-3">
              <div className="flex items-center text-sm">
                <div className="bg-purple-500/30 rounded-full p-1 mr-3">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-purple-100">No origination fees or lender fees</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="bg-purple-500/30 rounded-full p-1 mr-3">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-purple-100">Close in as little as 14 days</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="bg-purple-500/30 rounded-full p-1 mr-3">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-purple-100">100% online application process</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[280px] h-[500px] md:w-[320px] md:h-[580px]">
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[40px] shadow-2xl"></div>
                <div className="absolute inset-[3px] bg-black rounded-[38px] overflow-hidden border-[8px] border-black">
                  {/* Phone Screen Content */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-700 flex flex-col items-center p-6 text-white">
                    {/* Status Bar */}
                    <div className="w-full flex justify-between items-center mb-6 text-xs">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                        </svg>
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                        </svg>
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                        </svg>
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="text-center mb-4">
                      <div className="text-xs uppercase tracking-wider mb-1 opacity-80">Congratulations!</div>
                      <div className="text-2xl font-bold mb-1">You're Approved</div>
                      <div className="text-4xl font-bold mb-2">$550,000</div>
                      <div className="text-xs opacity-80">Pre-approval valid for 90 days</div>
                    </div>

                    {/* App Visualization */}
                    <div className="w-full h-40 bg-white/10 backdrop-blur-sm rounded-xl mb-6 p-4 flex flex-col justify-between">
                      <div className="flex justify-between items-center">
                        <div className="text-xs opacity-80">Loan Details</div>
                        <div className="bg-white/20 rounded-full h-6 w-6 flex items-center justify-center">
                          <ArrowRight className="h-3 w-3" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span>Loan Amount</span>
                          <span className="font-medium">$495,000</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>Down Payment</span>
                          <span className="font-medium">$55,000 (10%)</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>Interest Rate</span>
                          <span className="font-medium">4.25%</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>Monthly Payment</span>
                          <span className="font-medium">$2,432/mo</span>
                        </div>
                      </div>
                    </div>

                    {/* App Buttons */}
                    <button className="w-full py-3 bg-white text-purple-700 rounded-xl font-medium mb-3">
                      Continue Application
                    </button>
                    <button className="w-full py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl">
                      Save for Later
                    </button>
                  </div>
                </div>

                {/* Phone Details */}
                <div className="absolute top-[22%] left-0 w-6 h-24 bg-gray-800 rounded-r-lg"></div>
                <div className="absolute top-[18%] right-0 w-6 h-12 bg-gray-800 rounded-l-lg"></div>
                <div className="absolute top-[30%] right-0 w-6 h-12 bg-gray-800 rounded-l-lg"></div>
                <div className="absolute top-[10%] inset-x-0 mx-auto w-24 h-6 bg-black rounded-b-xl"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
