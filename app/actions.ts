"use server"

import { z } from "zod"
import { sendEmail } from "@/lib/email"

// Esquema de validación para el formulario
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().min(6, { message: "Número de teléfono inválido" }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
})

export type ContactFormData = z.infer<typeof ContactFormSchema>

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Validar los datos del formulario
    const validatedData = ContactFormSchema.parse(formData)

    // Enviar el email
    const result = await sendEmail(validatedData)

    if (!result.success) {
      return { success: false, error: "Error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde." }
    }

    return { success: true }
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Error de validación
      const fieldErrors = error.errors.reduce(
        (acc, curr) => {
          const field = curr.path[0] as string
          acc[field] = curr.message
          return acc
        },
        {} as Record<string, string>,
      )

      return { success: false, fieldErrors }
    }

    // Error general
    console.error("Error en submitContactForm:", error)
    return { success: false, error: "Ha ocurrido un error inesperado. Por favor, inténtelo de nuevo más tarde." }
  }
}
