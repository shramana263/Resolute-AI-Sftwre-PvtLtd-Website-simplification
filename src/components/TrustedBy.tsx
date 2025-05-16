import { motion } from "framer-motion"

export default function TrustedBy() {
  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-800/50">
      <div className="container px-4">
        <div className="text-center mb-8">
          <p className="text-gray-600 dark:text-gray-400 text-sm font-medium uppercase tracking-wider">
            Trusted by thousands of homebuyers
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
        >
          {/* These would be actual logos in a real implementation */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <div className="h-8 bg-gray-400 dark:bg-gray-600 rounded w-24 md:w-32"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
