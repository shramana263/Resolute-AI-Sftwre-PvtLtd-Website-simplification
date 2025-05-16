import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import {Link} from "react-router-dom"
import { motion } from "framer-motion"

export default function CallToAction() {
  return (
    <div className="relative bg-gradient-to-r from-purple-900 to-indigo-800 text-white py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-repeat"></div>
      </div>

      {/* Animated Circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your mortgage journey?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Get pre-approved in minutes and take the first step toward homeownership with Better.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/start">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white hover:bg-gray-100 text-purple-800 shadow-lg hover:shadow-xl transition-all"
              >
                Get Started
              </Button>
            </Link>
            <Link to="/calculator">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white text-white hover:bg-white/10"
              >
                Try Our Calculator <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="bg-purple-500/30 rounded-full p-1 mr-3">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <h3 className="font-medium">Fast Pre-Approval</h3>
              </div>
              <p className="text-purple-100 text-sm">
                Get pre-approved in as little as 3 minutes with no impact to your credit score.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="bg-purple-500/30 rounded-full p-1 mr-3">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <h3 className="font-medium">$0 Lender Fees</h3>
              </div>
              <p className="text-purple-100 text-sm">
                Save thousands with no origination fees, application fees, or lender fees.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="bg-purple-500/30 rounded-full p-1 mr-3">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <h3 className="font-medium">Close in 14 Days</h3>
              </div>
              <p className="text-purple-100 text-sm">
                Our streamlined process helps you close on your new home faster than traditional lenders.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
