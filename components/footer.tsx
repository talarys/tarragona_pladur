import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold">
                Tarragona<span className="text-green-500">Pladur</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-4">
              Servicios profesionales de instalación, reparación y acabado de pladur para propiedades residenciales y
              comerciales.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#servicios" className="text-gray-400 hover:text-green-500 transition-colors">
                  Instalación de Pladur
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-gray-400 hover:text-green-500 transition-colors">
                  Reparación de Pladur
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-gray-400 hover:text-green-500 transition-colors">
                  Acabado de Pladur
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-gray-400 hover:text-green-500 transition-colors">
                  Aplicación de Texturas
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-gray-400 hover:text-green-500 transition-colors">
                  Eliminación de Textura Popcorn
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#inicio" className="text-gray-400 hover:text-green-500 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#nosotros" className="text-gray-400 hover:text-green-500 transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#proyectos" className="text-gray-400 hover:text-green-500 transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="#testimonios" className="text-gray-400 hover:text-green-500 transition-colors">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-gray-400 hover:text-green-500 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contáctenos</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>123 Avenida Construcción, Suite 101</p>
              <p>Ciudad Ejemplo, España 12345</p>
              <p>Teléfono: (555) 123-4567</p>
              <p>Correo: info@TarragonaPladur.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} TarragonaPladur. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-green-500 text-sm transition-colors">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-gray-400 hover:text-green-500 text-sm transition-colors">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>

      <Link
        href="#inicio"
        className="fixed bottom-6 right-6 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors"
        aria-label="Volver arriba"
      >
        <ArrowUp className="h-5 w-5" />
      </Link>
    </footer>
  )
}
