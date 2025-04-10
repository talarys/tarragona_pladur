"use client"

import { useState, useRef } from "react"
import { useInView } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

const categories = ["Todos", "Residencial", "Comercial", "Trabajo Personalizado", "Reparaciones"]

const projects = [
  {
    title: "Renovación de Casa Moderna",
    category: "Residencial",
    image: "/placeholder.svg?height=600&width=800",
    description: "Instalación completa de pladur para un proyecto de renovación de casa moderna.",
  },
  {
    title: "Complejo de Oficinas",
    category: "Comercial",
    image: "/placeholder.svg?height=600&width=800",
    description: "Instalación y acabado de pladur para un nuevo complejo de oficinas.",
  },
  {
    title: "Diseño de Pared Curva",
    category: "Trabajo Personalizado",
    image: "/placeholder.svg?height=600&width=800",
    description: "Instalación personalizada de pladur curvo para un diseño arquitectónico único.",
  },
  {
    title: "Restauración por Daños de Agua",
    category: "Reparaciones",
    image: "/placeholder.svg?height=600&width=800",
    description: "Reparación y restauración de pladur después de daños significativos por agua.",
  },
  {
    title: "Complejo de Apartamentos de Lujo",
    category: "Comercial",
    image: "/placeholder.svg?height=600&width=800",
    description: "Soluciones completas de pladur para un complejo de apartamentos de lujo.",
  },
  {
    title: "Techo Texturizado",
    category: "Trabajo Personalizado",
    image: "/placeholder.svg?height=600&width=800",
    description: "Aplicación de textura personalizada en techo para un proyecto residencial.",
  },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const filteredProjects =
    activeCategory === "Todos" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="proyectos" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros <span className="text-green-600">Proyectos</span> Recientes
          </h2>
          <p className="text-gray-600">
            Explore nuestro portafolio de proyectos de pladur completados que muestran nuestra calidad de trabajo y
            atención al detalle.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeCategory === category ? "bg-green-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={cn(
                "group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-2 py-1 bg-green-600 text-xs rounded mb-2">{project.category}</span>
                  <p className="text-sm">{project.description}</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
