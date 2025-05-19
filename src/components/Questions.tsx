import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {Link} from "react-router-dom"
import { ArrowRight, Calculator, Home, FileText, DollarSign, PieChart, Clock } from "lucide-react"
import { motion } from "framer-motion"

export default function Questions() {
  return (
    <div className="container px-4 py-20 lg:px-40">
      <div className="text-center mb-16">
        <div className="inline-block bg-purple-100 dark:bg-purple-900/50 rounded-lg px-3 py-1 text-sm font-medium text-purple-800 dark:text-purple-300 mb-4">
          Resources & Tools
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          We've got <span className="text-purple-600 dark:text-purple-400">answers</span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Explore our comprehensive resources to help you navigate the mortgage process with confidence.
        </p>
      </div>

      <Tabs defaultValue="calculators" className="w-full">
        <TabsList className="grid w-full max-w-2xl mx-auto md:grid-cols-3 mb-12 bg-purple-50 dark:bg-gray-800">
          <TabsTrigger value="calculators" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
            <Calculator className="h-4 w-4 mr-2" />
            Calculators
          </TabsTrigger>
          <TabsTrigger value="products" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
            <Home className="h-4 w-4 mr-2" />
            Our Products
          </TabsTrigger>
          <TabsTrigger value="guides" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
            <FileText className="h-4 w-4 mr-2" />
            Guides & FAQs
          </TabsTrigger>
        </TabsList>

        <TabsContent value="calculators" className="mt-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Mortgage Calculator",
                description: "Estimate your monthly payments",
                icon: PieChart,
                link: "/calculator",
                image: "./public/mortgage_calculator.png",
              },
              {
                title: "Affordability Calculator",
                description: "See how much house you can afford",
                icon: DollarSign,
                link: "#",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdn342r-IU6nEOM5YoohrjVcoul0zBe3Jo5g&s",
              },
              {
                title: "Refinance Calculator",
                description: "See if refinancing makes sense",
                icon: Calculator,
                link: "#",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw9s_9IrkI_eqxoH6cZcihDvhmJ3k4lNUm2w&s",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all">
                  <div className="h-48 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 relative">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md">
                      <item.icon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      to={item.link}
                      className="flex items-center text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                    >
                      Calculate now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="products" className="mt-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Mortgage",
                description: "Purchase or refinance your home",
                icon: Home,
                link: "/start",
                image: "public/mortgage_calculator.png",
              },
              {
                title: "HELOC",
                description: "Access your home equity",
                icon: DollarSign,
                link: "/start",
                image: "https://b3353362.smushcdn.com/3353362/wp-content/uploads/2025/04/top_home_equity_loans_bad_credit_2025-300x180.png?lossy=2&strip=1&webp=1",
              },
              {
                title: "One Day Mortgage",
                description: "Close your loan faster than ever",
                icon: Clock,
                link: "/start",
                image: "https://assets2.cbsnewsstatic.com/hub/i/r/2023/03/27/381b97cf-05fb-483b-902a-2797e0361d63/thumbnail/640x427/8ae07257890a56a46ba3a7d460c1b3f1/how-much-equity-can-i-borrow-from-my-home.jpg?v=8e9dede207b29c97b32974c53e32aabc",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all">
                  <div className="h-48 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 relative">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover absolute"
                    />
                    <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md">
                      <item.icon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      to={item.link}
                      className="flex items-center text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                    >
                      Get started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="guides" className="mt-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "First-Time Homebuyer Guide",
                description: "Everything you need to know",
                icon: FileText,
                link: "#",
                image: "https://homesfy.in/blog/wp-content/uploads/2024/02/First-time-home-buyer-2024.jpg",
              },
              {
                title: "Mortgage FAQs",
                description: "Common questions answered",
                icon: FileText,
                link: "#",
                image: "https://i.ytimg.com/vi/3ok_k-sU3lY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCAV4WFA4cDu46aKHCL8wKyyGAOBw",
              },
              {
                title: "Refinancing Guide",
                description: "When and how to refinance",
                icon: FileText,
                link: "#",
                image: "https://blog.tatanexarc.com/wp-content/uploads/2023/03/Refinancing-your-business-loan-The-ultimate-guide-to-saving-big-1.jpg",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all">
                  <div className="h-48 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 relative">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md">
                      <item.icon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      to={item.link}
                      className="flex items-center text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                    >
                      Read guide <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
