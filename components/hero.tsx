"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import ContactModal from "./contact-modal"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="inicio" className="relative pt-24 pb-16 md:pt-32 md:pb-24 h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/heroBackground.webp?height=1080&width=1920"
          alt="Instalación profesional de pladur"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div
            className={cn(
              "space-y-6 transform transition-all duration-700",
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0",
            )}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Soluciones Profesionales de Pladur para Tu <span className="text-green-400">Espacio Perfecto</span>
            </h1>
            <p className="text-lg text-gray-200 max-w-lg">
              Ofrecemos servicios excepcionales de instalación, reparación y acabado de pladur con precisión y cuidado
              para proyectos residenciales y comerciales.
            </p>
            <div className="space-y-3">
              {[
                "Materiales de primera calidad",
                "Equipo de instalación experto",
                "Finalización puntual del proyecto",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="text-green-400 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="#contacto"
                className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors text-center flex items-center justify-center gap-2 group"
              >
                Obtener Presupuesto Gratis
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <ContactModal
                trigger={
                  <button className="border border-white text-white px-6 py-3 rounded-md hover:bg-white/10 transition-colors text-center">
                    Contacto
                  </button>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
