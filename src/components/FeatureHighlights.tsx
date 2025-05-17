
import { motion } from "framer-motion"
import { Shield, Zap, DollarSign, Clock, CheckCircle } from "lucide-react"


export default function FeatureHighlights() {
  return (
    <div className="py-20 md:px-40 bg-white dark:bg-gray-900">
      <div className="container px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-100 dark:bg-purple-900/50 rounded-lg px-3 py-1 text-sm font-medium text-purple-800 dark:text-purple-300 mb-4">
            Our Advantages
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            A <span className="text-purple-600 dark:text-purple-400">better</span> way to get a mortgage
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We've reimagined the mortgage process from the ground up to make it faster, simpler, and more affordable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-100 dark:bg-purple-900/30 rounded-full opacity-70"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-100 dark:bg-indigo-900/30 rounded-full opacity-70"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://www.infosysbpm.com/content/dam/infosys-bpm/en/blogs/images/improving-customer-experience-through-digital-mortgage-medium.jpg"
                  alt="Digital mortgage experience"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-sm"
          >
            <div className="flex items-start">
              <div className=" rounded-full p-3 mr-5 shadow-md">
                <Zap className="h-6 w-6 " />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Lightning-Fast Process</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Get pre-approved in as little as 3 minutes and close on your mortgage in as few as 14 days, compared
                  to the industry average of 47 days.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className=" rounded-full p-3 mr-5 shadow-md">
                <DollarSign className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">No Lender Fees</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We've eliminated commission structures and unnecessary fees, saving our customers an average of $3,500
                  in closing costs.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="rounded-full p-3 mr-5 shadow-md">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Transparent & Secure</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our digital platform provides complete visibility into your loan status with bank-level security to
                  protect your sensitive information.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="rounded-full p-3 mr-5 shadow-md">
                <Clock className="h-6 w-6 " />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">24/7 Online Access</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Apply, upload documents, and check your loan status anytime, anywhere through our user-friendly online
                  portal and mobile app.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 grid md:grid-cols-4 gap-6">
          {[
            { number: "3", label: "Minute pre-approval", icon: CheckCircle },
            { number: "14", label: "Days to close", icon: Clock },
            { number: "$0", label: "Lender fees", icon: DollarSign },
            { number: "4.8", label: "Star customer rating", icon: Shield },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-white dark:bg-gray-800 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center shadow-md">
                <stat.icon className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
