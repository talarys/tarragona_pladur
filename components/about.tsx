"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import Image from "next/image"
import { Award, Users, Calendar, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

const stats = [
  { icon: Calendar, value: "15+", label: "Años de Experiencia" },
  { icon: Users, value: "500+", label: "Clientes Satisfechos" },
  { icon: Award, value: "100%", label: "Satisfacción" },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="nosotros" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-green-600 font-semibold">Sobre Nuestra Empresa</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Entregando Servicios de Calidad en Pladur Desde 2008
          </h2>
        </div>

        {/* Stats Cards - Horizontal scrolling on mobile */}
        <div
          className="flex overflow-x-auto pb-6 mb-8 gap-4 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible"
          ref={ref}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                "flex-shrink-0 w-[280px] md:w-auto bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 transform",
                isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <stat.icon className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image - Stacked on mobile, side by side on desktop */}
          <div
            className={cn(
              "relative h-[300px] md:h-[400px] rounded-lg overflow-hidden transition-all duration-700 order-2 lg:order-1",
              isInView ? "opacity-100" : "opacity-0",
            )}
          >
            <Image
              src="/heroBackground2.webp?height=600&width=800"
              alt="Equipo profesional de pladur"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-4">
              <div className="bg-green-600 text-white text-sm py-1 px-3 rounded-full inline-block">Desde 2008</div>
            </div>
          </div>

          {/* Text Content */}
          <div
            className={cn(
              "space-y-6 transition-all duration-700 order-1 lg:order-2",
              isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
            )}
          >
            <p className="text-gray-600">
              Con más de 15 años de experiencia, TarragonaPladur se ha establecido como líder en la industria del
              pladur. Nos enorgullecemos de nuestra artesanía, atención al detalle y compromiso con la satisfacción del
              cliente.
            </p>

            <p className="text-gray-600">
              Nuestro equipo de profesionales calificados está dedicado a entregar resultados excepcionales en cada
              proyecto, ya sea un pequeño trabajo de reparación o una gran instalación comercial.
            </p>

            <div className="space-y-4 pt-2">
              <h3 className="text-xl font-semibold text-gray-900">Por qué elegirnos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Profesionales con licencia y seguro",
                  "Materiales y técnicas premium",
                  "Garantía de finalización a tiempo",
                  "Ambiente de trabajo limpio y respetuoso",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm">
                    <CheckCircle2 className="text-green-600 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
