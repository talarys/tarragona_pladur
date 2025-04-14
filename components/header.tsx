"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import ContactModal from "./contact-modal"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className={`text-2xl font-bold ${isScrolled ? "text-gray-900" : "text-white"}`}>
            Tarragona<span className="text-green-600">Pladur</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["Inicio", "Servicios", "Nosotros", "Proyectos", "Testimonios"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`font-medium transition-colors ${isScrolled ? "text-gray-700 hover:text-green-600" : "text-white hover:text-green-400"
                }`}
            >
              {item}
            </Link>
          ))}

          <ContactModal
            trigger={
              <button
                aria-label="Contacto"
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Contacto</span>
              </button>
            }
          />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <ContactModal
            trigger={
              <button
                aria-label="Contacto"
                className={`transition-colors ${isScrolled ? "text-gray-700 hover:text-green-600" : "text-white hover:text-green-400"}`}
              >
                <Phone className="h-5 w-5" />
              </button>
            }
          />

          <button
            aria-label="Menú"
            className={`flex items-center ${isScrolled ? "text-gray-700" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 animate-fadeIn">
          <nav className="flex flex-col space-y-4 px-4">
            {["Inicio", "Servicios", "Nosotros", "Proyectos", "Testimonios"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
