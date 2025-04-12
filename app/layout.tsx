import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "TarragonaPladur - Servicios Profesionales de Pladur",
  description:
    "Servicios profesionales de instalación, reparación y acabado de pladur para propiedades residenciales y comerciales en Tarragona.",
    generator: 'v0.dev'
}

export const runtime = "nodejs"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} storageKey="tarragonapladur-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'