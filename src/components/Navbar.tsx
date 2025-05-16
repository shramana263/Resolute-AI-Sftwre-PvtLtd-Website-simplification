import {Link} from "react-router-dom"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ps-20 pe-20 ${
        isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md" : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text"
          >
            Better
          </Link>

          <nav className="hidden md:flex items-center gap-8 ml-10">
            <Link
              to="/about"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/calculator"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Mortgage Calculator
            </Link>
            <Link
              to="/start"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Start Page
            </Link>
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <Phone className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium">1-800-555-1234</span>
          </div>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-gray-700" />
            )}
          </button>

          <Link to="/start">
            <Button
              variant="outline"
              className="mr-2 border-purple-200 text-purple-600 hover:bg-purple-50 hover:text-purple-700 dark:border-purple-800 dark:text-purple-400 dark:hover:bg-purple-900/50"
            >
              Sign In
            </Button>
          </Link>
          <Link to="/start">
            <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg transition-all">
              Get Started
            </Button>
          </Link>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors mr-1"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-gray-700" />
            )}
          </button>

          <button
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t dark:border-gray-800"
          >
            <div className="p-4 space-y-4 bg-white dark:bg-gray-900">
              <nav className="flex flex-col space-y-4">
                <Link
                  to="/about"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/calculator"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Mortgage Calculator
                </Link>
                <Link
                  to="/start"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Start Page
                </Link>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 py-2">
                  <Phone className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-medium">1-800-555-1234</span>
                </div>
                <div className="pt-2 flex flex-col gap-2">
                  <Link to="/start" onClick={() => setIsMenuOpen(false)}>
                    <Button
                      variant="outline"
                      className="w-full border-purple-200 text-purple-600 hover:bg-purple-50 hover:text-purple-700 dark:border-purple-800 dark:text-purple-400 dark:hover:bg-purple-900/50"
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/start" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
