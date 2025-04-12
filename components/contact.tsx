"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { submitContactForm, type ContactFormData } from "@/app/actions"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function Contact() {
  const [formState, setFormState] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [formError, setFormError] = useState<string | null>(null)

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))

    // Limpiar error del campo cuando el usuario comienza a escribir
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormError(null)

    try {
      const result = await submitContactForm(formState)

      if (result.success) {
        setIsSubmitted(true)
        setFormState({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
        setFormErrors({})
      } else if (result.fieldErrors) {
        setFormErrors(result.fieldErrors)
      } else if (result.error) {
        setFormError(result.error)
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      setFormError("Ha ocurrido un error inesperado. Por favor, inténtelo de nuevo más tarde.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Obtenga Su <span className="text-green-600">Presupuesto Gratis</span>
          </h2>
          <p className="text-gray-600">
            Contáctenos hoy para discutir su proyecto de pladur y recibir un presupuesto gratuito sin compromiso.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div
            className={cn(
              "bg-white rounded-lg shadow-sm p-8 transition-all duration-700",
              isInView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0",
            )}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Información de Contacto</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Teléfono</h4>
                  <p className="text-gray-600">608 674 889</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Correo Electrónico</h4>
                  <p className="text-gray-600">tarragonapladur@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Dirección</h4>
                  <p className="text-gray-600">
                    Tarragona , España
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Horario Comercial</h4>
                  <p className="text-gray-600">
                    Lunes - Viernes: 8:00 AM - 6:00 PM
                    <br />
                    Sábado: 9:00 AM - 2:00 PM
                    <br />
                    Domingo: Cerrado
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={cn(
              "bg-white rounded-lg shadow-sm p-8 transition-all duration-700",
              isInView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0",
            )}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Solicitar un Presupuesto</h3>

            {isSubmitted ? (
              <Alert className="bg-green-50 border-green-200 text-green-800">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-800 font-medium">¡Mensaje enviado con éxito!</AlertTitle>
                <AlertDescription className="text-green-700">
                  Gracias por contactarnos. Nos pondremos en contacto con usted lo antes posible.
                </AlertDescription>
              </Alert>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {formError && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{formError}</AlertDescription>
                  </Alert>
                )}

                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre Completo
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="Juan Pérez"
                      className={formErrors.name ? "border-red-500" : ""}
                    />
                    {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Correo Electrónico
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="juan@ejemplo.com"
                      className={formErrors.email ? "border-red-500" : ""}
                    />
                    {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Número de Teléfono
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    required
                    placeholder="608 674 889"
                    className={formErrors.phone ? "border-red-500" : ""}
                  />
                  {formErrors.phone && <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Detalles del Proyecto
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    placeholder="Por favor describa su proyecto y cualquier requisito específico..."
                    rows={4}
                    className={formErrors.message ? "border-red-500" : ""}
                  />
                  {formErrors.message && <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>}
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Enviar Mensaje
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
