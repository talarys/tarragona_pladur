"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Hammer, Paintbrush, Wrench, Ruler, Shield, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Hammer,
    title: "Instalación de Pladur",
    description:
      "Instalación completa de pladur para proyectos de construcción nueva y renovación con precisión y calidad.",
  },
  {
    icon: Paintbrush,
    title: "Acabado de Pladur",
    description:
      "Servicios expertos de encintado, masillado y acabado para lograr paredes lisas y perfectas listas para pintar.",
  },
  {
    icon: Wrench,
    title: "Reparación de Pladur",
    description:
      "Reparación profesional de agujeros, grietas, daños por agua y otros problemas de pladur para restaurar sus paredes.",
  },
  {
    icon: Ruler,
    title: "Soluciones Personalizadas",
    description:
      "Soluciones especializadas de paneles de yeso que incluyen paredes curvas, acabados decorativos y tratamientos acústicos.",
  },
  {
    icon: Shield,
    title: "Aplicación de Texturas",
    description:
      "Diversas aplicaciones de texturas, desde knockdown hasta piel de naranja, para igualar sus paredes existentes o crear nuevos estilos.",
  },
  {
    icon: Clock,
    title: "Eliminación de Textura Popcorn",
    description: "Eliminación segura y eficiente de techos popcorn anticuados para un aspecto moderno y limpio.",
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="servicios" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros <span className="text-green-600">Servicios</span> Profesionales
          </h2>
          <p className="text-gray-600">
            Ofrecemos soluciones completas de pladur para propiedades residenciales y comerciales, entregando artesanía
            de calidad y resultados excepcionales.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 transform",
                isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
              )}
              style={{
                transitionDelay: `${index * 100}ms`,
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
