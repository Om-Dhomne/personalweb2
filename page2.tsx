"use client"

import { useState, useEffect } from "react"
import { Linkedin, Mail, Calendar, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const YinYang = () => (
  <div className="group relative w-10 h-10 cursor-pointer">
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-gray-700 dark:text-gray-300 transition-all duration-300 group-hover:text-gray-900 dark:group-hover:text-white group-hover:rotate-180"
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22C14.7614 22 17 17.5228 17 12C17 6.47715 14.7614 2 12 2C9.23858 2 7 6.47715 7 12C7 17.5228 9.23858 22 12 22Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        fill="currentColor"
      />
      <path
        d="M12 7C12.5523 7 13 6.55228 13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6C11 6.55228 11.4477 7 12 7Z"
        fill="currentColor"
      />
      <path
        d="M12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <div className="absolute inset-0 bg-gray-900 dark:bg-white rounded-full opacity-0 group-hover:opacity-25 group-hover:animate-ping transition-opacity duration-300"></div>
  </div>
)

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState("dark")
  const [showEmailPopup, setShowEmailPopup] = useState(false)

  useEffect(() => {
    setMounted(true)
    document.documentElement.classList.add("dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark")
  }

  const handleEmailClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setShowEmailPopup(true)
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 transition-colors duration-200 bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>

      <main className="flex flex-col items-center justify-center space-y-6 text-center">
        <h1 className="text-6xl font-bold tracking-tight text-gray-900 dark:text-white">Om Dhomne</h1>
        <p className="text-gray-600 dark:text-gray-400">Coming Soon</p>

        <div className="mt-4 mb-8">
          <YinYang />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
            asChild
          >
            <a href="https://www.linkedin.com/in/omdhomne/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
            asChild
          >
            <a href="https://github.com/omd-git-good" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
            onClick={handleEmailClick}
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
            asChild
          >
            <a href="https://calendly.com/omdhomne7" target="_blank" rel="noopener noreferrer">
              <Calendar className="w-4 h-4" />
              <span>Schedule a Meeting</span>
            </a>
          </Button>
        </div>
      </main>
      {showEmailPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div
            className={`p-6 rounded-lg max-w-md w-full ${theme === "dark" ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"}`}
          >
            <h2 className={`text-xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              Contact Information
            </h2>
            <p className="mb-4">
              Please mail me at:
              <br />
              <a
                href="mailto:omdhomne7@gmail.com"
                className={`hover:underline ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}
              >
                omdhomne7@gmail.com
              </a>
              <br />
              or
              <br />
              <a
                href="mailto:ch24b017@smail.iitm.ac.in"
                className={`hover:underline ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}
              >
                ch24b017@smail.iitm.ac.in
              </a>
            </p>
            <Button
              onClick={() => setShowEmailPopup(false)}
              className={`w-full ${theme === "dark" ? "bg-gray-700 hover:bg-gray-600 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-900"}`}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

