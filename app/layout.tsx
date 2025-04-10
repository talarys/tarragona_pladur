import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TarragonaPladur',
  description: 'Ofrecemos servicios excepcionales de instalación, reparación y acabado de pladur con precisión y cuidado para proyectos residenciales y comerciales.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
