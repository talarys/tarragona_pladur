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
    <section id="nosotros" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={cn(
              "relative h-[400px] md:h-[500px] transition-all duration-700",
              isInView ? "opacity-100" : "opacity-0",
            )}
            ref={ref}
          >
            <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-green-600/10 rounded-tl-3xl rounded-br-3xl"></div>
            <div className="absolute bottom-0 right-0 w-3/4 h-3/4 overflow-hidden rounded-tl-3xl rounded-br-3xl border-8 border-white shadow-xl">
              <Image
                src="/heroBackground2.webp?height=600&width=800"
                alt="Equipo profesional de paneles de yeso"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div
            className={cn(
              "space-y-6 transition-all duration-700 delay-300",
              isInView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0",
            )}
          >
            <div>
              <span className="text-green-600 font-semibold">Sobre Nuestra Empresa</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Entregando Servicios de Calidad en Pladur Desde 2008
              </h2>
            </div>

            <p className="text-gray-600">
              Con más de 15 años de experiencia, TarragonaPladur se ha establecido como líder en la industria del pladur. Nos
              enorgullecemos de nuestra artesanía, atención al detalle y compromiso con la satisfacción del cliente.
            </p>

            <p className="text-gray-600">
              Nuestro equipo de profesionales calificados está dedicado a entregar resultados excepcionales en cada
              proyecto, ya sea un pequeño trabajo de reparación o una gran instalación comercial.
            </p>

            <div className="grid grid-cols-3 gap-4 py-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center">
                    <stat.icon className="h-6 w-6 text-green-600 mb-2" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-2">
              {[
                "Profesionales con licencia y seguro",
                "Materiales y técnicas premium",
                "Garantía de finalización a tiempo",
                "Ambiente de trabajo limpio y respetuoso",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-600 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
