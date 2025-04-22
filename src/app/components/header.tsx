'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed w-full bg-nutmeg-background shadow-md z-50">
      <nav className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/nutmeg-logo.png"
              alt="Nutmeg Logo"
              width={50}
              height={50}
              className="mr-2"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-nutmeg-coffee hover:text-nutmeg-primary-accent transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('team')} 
              className="text-nutmeg-coffee hover:text-nutmeg-primary-accent transition-colors"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-nutmeg-coffee hover:text-nutmeg-primary-accent transition-colors"
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('download')} 
              className="bg-nutmeg-primary-accent text-white px-4 py-2 rounded-lg hover:bg-nutmeg-highlight transition-colors"
            >
              Download
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-nutmeg-coffee"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-4">
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left px-4 py-2 text-nutmeg-coffee hover:bg-nutmeg-light-sage rounded-lg transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('team')} 
              className="block w-full text-left px-4 py-2 text-nutmeg-coffee hover:bg-nutmeg-light-sage rounded-lg transition-colors"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block w-full text-left px-4 py-2 text-nutmeg-coffee hover:bg-nutmeg-light-sage rounded-lg transition-colors"
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('download')} 
              className="block w-full text-left px-4 py-2 bg-nutmeg-primary-accent text-white hover:bg-nutmeg-highlight rounded-lg transition-colors"
            >
              Download
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}