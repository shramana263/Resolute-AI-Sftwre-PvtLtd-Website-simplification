import { ArrowRight, Home, Clock, PieChart } from "lucide-react"
import {Link} from "react-router-dom"
import { motion } from "framer-motion"

export default function WhyBetter() {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="container px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-100 dark:bg-purple-900/50 rounded-lg px-3 py-1 text-sm font-medium text-purple-800 dark:text-purple-300 mb-4">
            Why Choose Better
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Got Questions?
            <br />
            We've got <span className="text-purple-600 dark:text-purple-400">answers</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our digital mortgage experience is designed to guide you through the process with ease.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-xl text-gray-900 dark:text-white">Mortgage Calculator</h3>
                <div className="bg-purple-100 dark:bg-purple-900/50 rounded-full p-2">
                  <PieChart className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Estimate your monthly mortgage payments based on home price, down payment, and interest rate.
              </p>
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30">
                <img 
                  src="/placeholder.svg?height=300&width=500" 
                  alt="Mortgage calculator visualization" 
                  width={500} 
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <Link to="/calculator" className="flex items-center text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                Calculate now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-xl text-gray-900 dark:text-white">Buying Your First Home</h3>
                <div className="bg-purple-100 dark:bg-purple-900/50 rounded-full p-2">
                  <Home className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                From pre-approval to closing, we guide you through every step of the homebuying process.
              </p>
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30">
                <img 
                  src="/placeholder.svg?height=300&width=500" 
                  alt="First-time homebuyer guide" 
                  width={500} 
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <Link to="#" className="flex items-center text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-xl text-gray-900 dark:text-white">One Day Mortgage</h3>
                <div className="bg-purple-100 dark:bg-purple-900/50 rounded-full p-2">
                  <Clock className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Get your home loan into underwriting, fast. Going from pre-approval to commitment letter in as little as 24 hours.
              </p>
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30">
                <img 
                  src="/placeholder.svg?height=300&width=500" 
                  alt="One Day Mortgage" 
                  width={500} 
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <Link to="#" className="flex items-center text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3
            }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-xl text-gray-900 dark:text-white">Transparent Process</h3>
                <div className="bg-purple-100 dark:bg-purple-900/50 rounded-full p-2">
                  <ArrowRight className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Track your application status and next steps at every stage, so you’re never left in the dark.
              </p>
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30">
                <img 
                  src="/placeholder.svg?height=300&width=500" 
                  alt="Transparent process" 
                  width={500} 
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <Link to="#" className="flex items-center text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}