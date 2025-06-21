import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-sagardoy-dark-blue text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-4">
              <span className="text-sagardoy-gold">S</span>agardoy
              <div className="text-sm font-medium text-slate-300">Business School</div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Formando líderes empresariales del futuro con programas de excelencia y metodologías innovadoras.
            </p>
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="bg-sagardoy-blue hover:bg-sagardoy-gold p-3 rounded-lg transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="bg-sagardoy-blue hover:bg-sagardoy-gold p-3 rounded-lg transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="bg-sagardoy-blue hover:bg-sagardoy-gold p-3 rounded-lg transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="bg-sagardoy-blue hover:bg-sagardoy-gold p-3 rounded-lg transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 23.998 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-lg mb-4">Programas</h4>
            <ul className="space-y-2 text-blue-200">
              <li><Link href="/programa/mba" className="hover:text-white transition-colors duration-200">MBA Ejecutivo</Link></li>
              <li><Link href="/programa/master-estrategia" className="hover:text-white transition-colors duration-200">Máster en Dirección Estratégica</Link></li>
              <li><Link href="/programa/liderazgo-digital" className="hover:text-white transition-colors duration-200">Liderazgo Digital</Link></li>
              <li><Link href="/programa/finanzas" className="hover:text-white transition-colors duration-200">Finanzas Corporativas</Link></li>
              <li><Link href="/programa/marketing" className="hover:text-white transition-colors duration-200">Marketing Digital</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Servicios</h4>
            <ul className="space-y-2 text-blue-200">
              <li><Link href="/solicitud-admision" className="hover:text-white transition-colors duration-200">Admisiones</Link></li>
              <li><Link href="/constructor-cursos" className="hover:text-white transition-colors duration-200">Constructor de Cursos</Link></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Becas y Financiación</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Servicios de Carrera</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Red de Alumni</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Programas para Empresas</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <div className="space-y-3 text-blue-200">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-sagardoy-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span className="text-sm">Calle Serrano 93, Madrid</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-sagardoy-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span className="text-sm">+34 91 700 40 70</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-sagardoy-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span className="text-sm">info@sagardoy.edu</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-blue-200 text-sm mb-4 md:mb-0">
            © 2024 Sagardoy Business School. Todos los derechos reservados.
          </div>
          <div className="flex space-x-6 text-sm text-blue-200">
            <a href="#" className="hover:text-white transition-colors duration-200">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Cookies</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Aviso Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
