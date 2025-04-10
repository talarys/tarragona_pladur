"use client"

import type React from "react"

import { Mail, Phone, MessageCircle, X } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface ContactModalProps {
  trigger?: React.ReactNode
  className?: string
}

export default function ContactModal({ trigger, className }: ContactModalProps) {
  const [open, setOpen] = useState(false)

  const phoneNumber = "+34555123456"
  const email = "info@TarragonaPladur.com"
  const whatsappMessage = "Hola, me gustaría obtener información sobre sus servicios de pladur."

  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\+/g, "")}?text=${encodeURIComponent(whatsappMessage)}`
  const emailLink = `mailto:${email}`
  const phoneLink = `tel:${phoneNumber}`

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" className={className}>
            Contacto
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">Contacto</DialogTitle>
          <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Cerrar</span>
          </button>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <p className="text-center text-muted-foreground">Elija su método de contacto preferido</p>

          <div className="grid gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
            >
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-medium">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">Mensaje instantáneo</p>
              </div>
            </a>

            <a
              href={phoneLink}
              className="flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
            >
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-medium">Teléfono</h3>
                <p className="text-sm text-muted-foreground">{phoneNumber}</p>
              </div>
            </a>

            <a
              href={emailLink}
              className="flex items-center gap-3 p-4 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors"
            >
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-medium">Correo Electrónico</h3>
                <p className="text-sm text-muted-foreground">{email}</p>
              </div>
            </a>
          </div>

          <p className="text-xs text-center text-muted-foreground mt-2">
            También puede contactarnos a través del formulario en la sección de contacto
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
