import { Button } from "@/components/ui/button"
import { Award, Users, Home, Clock, Shield, Zap, CheckCircle2 } from "lucide-react"

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 to-indigo-800 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Reimagining The Mortgage Experience</h1>
            <p className="text-xl text-purple-100 mb-8">
              We're on a mission to make homeownership simpler, faster, and more accessible for everyone.
            </p>
            <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white">
              Join Our Journey
            </Button>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-purple-100 rounded-lg px-3 py-1 text-sm font-medium text-purple-800 mb-4">
              Our Story
            </div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Transforming an outdated industry</h2>
            <p className="text-lg text-gray-700 mb-6">
              Better was founded in 2016 with a simple vision: make homeownership better for all Americans. Traditional
              mortgage processes are broken—they're slow, filled with jargon, and designed to be confusing.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              After experiencing the frustrating, opaque process of getting a mortgage firsthand, our founder decided to
              build a company that would bring transparency, efficiency, and fairness to the mortgage industry.
            </p>
            <p className="text-lg text-gray-700">
              We've built a streamlined, digital-first platform that eliminates commissions, fees, unnecessary steps,
              and time-wasting appointments. The result? A faster, more transparent, and more affordable way to buy or
              refinance a home.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-200 rounded-full opacity-70"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-200 rounded-full opacity-70"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Our office"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 rounded-lg px-3 py-1 text-sm font-medium text-purple-800 mb-4">
              Our Impact
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Making a difference in homeownership</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">50K+</div>
                <div className="text-gray-600">Happy Homeowners</div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">$13B+</div>
                <div className="text-gray-600">Loans Funded</div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">21</div>
                <div className="text-gray-600">Days to Close</div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">4.8/5</div>
                <div className="text-gray-600">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-100 rounded-lg px-3 py-1 text-sm font-medium text-purple-800 mb-4">
            Our Values
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The principles that guide us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These core values shape our culture and drive our mission to transform the mortgage industry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Speed</h3>
            <p className="text-gray-600">
              We move quickly because buying a home shouldn't take months. Our technology enables faster decisions and
              closings.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Transparency</h3>
            <p className="text-gray-600">
              No hidden fees, no surprises, just clear information. We believe in being upfront about every aspect of
              the mortgage process.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Accessibility</h3>
            <p className="text-gray-600">
              Making homeownership possible for more people by removing barriers and creating an inclusive experience.
            </p>
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 rounded-lg px-3 py-1 text-sm font-medium text-purple-800 mb-4">
              Our Team
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet our leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a team of technologists, mortgage experts, and customer experience specialists working to transform
              the mortgage industry.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="h-64 bg-gradient-to-br from-purple-400 to-indigo-600"></div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900">Leadership Member {i}</h3>
                  <p className="text-purple-600 font-medium">Chief Officer</p>
                  <p className="text-gray-600 mt-2 text-sm">
                    Passionate about making homeownership accessible to everyone through technology and innovation.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join Us */}
      <div className="relative bg-gradient-to-r from-purple-900 to-indigo-800 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Join our mission to transform homeownership</h2>
              <p className="text-xl text-purple-100 mb-8">
                We're always looking for talented individuals who are passionate about making a difference in the lives
                of homebuyers.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-purple-300 mr-3 mt-0.5" />
                  <p className="text-white">Work with a team of innovators and industry experts</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-purple-300 mr-3 mt-0.5" />
                  <p className="text-white">Develop cutting-edge technology that impacts millions</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-purple-300 mr-3 mt-0.5" />
                  <p className="text-white">Enjoy competitive benefits and a flexible work environment</p>
                </div>
              </div>
              <Button size="lg" className="mt-8 bg-white text-purple-800 hover:bg-purple-100">
                View Open Positions
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-500 rounded-full opacity-30"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-500 rounded-full opacity-30"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Our team"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
