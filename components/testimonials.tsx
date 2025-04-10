"use client"

import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "Sara Martínez",
    role: "Propietaria",
    content:
      "TarragonaPladur hizo un trabajo increíble en la renovación de nuestra casa. El equipo fue profesional, limpio y completó el trabajo antes de lo programado. ¡Las paredes se ven impecables!",
    rating: 5,
  },
  {
    name: "Miguel Chen",
    role: "Administrador de Propiedades",
    content:
      "Hemos utilizado TarragonaPladur para múltiples propiedades en nuestra cartera. Su trabajo es consistentemente excelente, y siempre son confiables y profesionales.",
    rating: 5,
  },
  {
    name: "Juana Rodríguez",
    role: "Diseñadora de Interiores",
    content:
      "Como diseñadora de interiores, necesito contratistas que entreguen trabajo de calidad. TarragonaPladur supera las expectativas cada vez con su atención al detalle y artesanía.",
    rating: 5,
  },
  {
    name: "Roberto García",
    role: "Contratista General",
    content:
      "He trabajado con muchas empresas de pladur a lo largo de los años, y TarragonaPladur destaca por su calidad, confiabilidad y precios justos. Son mis especialistas de pladur de confianza.",
    rating: 4,
  },
  {
    name: "Elena Torres",
    role: "Propietaria",
    content:
      "Después de daños por agua en nuestra casa, TarragonaPladur restauró nuestras paredes perfectamente. Ni siquiera se nota que hubo daños. Su equipo fue cortés y profesional en todo momento.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section id="testimonios" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lo Que Dicen <span className="text-green-600">Nuestros Clientes</span>
          </h2>
          <p className="text-gray-600">
            No solo tome nuestra palabra. Esto es lo que nuestros clientes satisfechos dicen sobre nuestros servicios de
            pladur.
          </p>
        </div>

        <div
          ref={ref}
          className={cn("max-w-4xl mx-auto transition-all duration-700", isInView ? "opacity-100" : "opacity-0")}
        >
          <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-12">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-green-100" />

            <div className="relative z-10">
              <div className="flex mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
                {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i + testimonials[currentIndex].rating} className="h-5 w-5 text-gray-200" />
                ))}
              </div>

              <p className="text-gray-700 text-lg italic mb-6">"{testimonials[currentIndex].content}"</p>

              <div>
                <p className="font-semibold text-gray-900">{testimonials[currentIndex].name}</p>
                <p className="text-gray-600 text-sm">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  currentIndex === index ? "bg-green-600 w-6" : "bg-gray-300 hover:bg-gray-400",
                )}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
