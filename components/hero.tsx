"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="inicio" className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className={cn(
              "space-y-6 transform transition-all duration-700",
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0",
            )}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Soluciones Profesionales de Pladur para Tu <span className="text-green-600">Espacio Perfecto</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
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
                  <CheckCircle className="text-green-600 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
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
              <Link
                href="#servicios"
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors text-center"
              >
                Nuestros Servicios
              </Link>
            </div>
          </div>
          <div
            className={cn(
              "relative h-[400px] md:h-[500px] transform transition-all duration-700",
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0",
            )}
          >
            <div className="absolute inset-0 bg-green-100 rounded-tl-3xl rounded-br-3xl -rotate-3 transform-gpu"></div>
            <div className="absolute inset-0 overflow-hidden rounded-tl-3xl rounded-br-3xl rotate-3 transform-gpu">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Instalación profesional de paneles de yeso"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
