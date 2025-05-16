import {Link} from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 border-t dark:border-gray-800">
      <div className="container py-12 px-4">
        {/* Newsletter Section */}
        <div className="max-w-4xl mx-auto mb-16 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
              <h3 className="text-2xl font-bold mb-4">Stay updated with Better</h3>
              <p className="text-purple-100 mb-6">
                Get the latest news, mortgage rates, and homebuying tips delivered to your inbox.
              </p>
              <div className="flex items-start">
                <div className="bg-purple-500/30 rounded-full p-1 mr-3">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-purple-100">Market updates and rate alerts</p>
              </div>
              <div className="flex items-start mt-2">
                <div className="bg-purple-500/30 rounded-full p-1 mr-3">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-purple-100">Homebuying guides and tips</p>
              </div>
              <div className="flex items-start mt-2">
                <div className="bg-purple-500/30 rounded-full p-1 mr-3">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-purple-100">Special offers and promotions</p>
              </div>
            </div>
            <div className="p-8 md:p-12">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Subscribe to our newsletter</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Join thousands of satisfied homeowners who stay informed with Better.
              </p>
              <div className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border-gray-300 dark:border-gray-700 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">
                  Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from Better.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <Link
              to="/"
              className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text"
            >
              Better
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xs">
              Better is a digital-first homeownership company whose services include mortgage, real estate, title, and
              homeowners insurance.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Phone className="h-4 w-4 text-purple-600 mr-3" />
                <span>1-800-555-1234</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Mail className="h-4 w-4 text-purple-600 mr-3" />
                <span>hello@better.com</span>
              </div>
              <div className="flex items-start text-gray-600 dark:text-gray-300">
                <MapPin className="h-4 w-4 text-purple-600 mr-3 mt-1" />
                <span>3 World Trade Center, New York, NY 10007</span>
              </div>
            </div>
            <div className="mt-6 flex space-x-4">
              <Link
                to="#"
                className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                to="#"
                className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                to="#"
                className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                to="#"
                className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/calculator"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Mortgage Calculator
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Home Affordability Calculator
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Refinance Calculator
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Mortgage Guides
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  First-Time Homebuyer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Licenses
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Disclosures
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Better. All rights reserved. NMLS #330511
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Equal Housing Opportunity | Not available in all states | Terms and conditions apply
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
