import { Link } from "wouter";
import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";

export default function Footer() {
  const apiPrograms = useQuery(api.programs.getPrograms);
  
  // Transform apiPrograms to match the expected format
  const programs = apiPrograms?.map(program => ({
    id: program.path,
    title: program.title,
    type: program.type
  })) || [];

  // Filter programs by type for the two columns
  const masterPrograms = programs.filter(program => program.type === "master").slice(0, 5); // Limit to 5 for Programs column
  const otherPrograms = programs.filter(program => program.type !== "master").slice(0, 5); // Limit to 5 for the other column
  return (
    <footer className="bg-sagardoy-dark-blue text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8">
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
              <a href="https://www.linkedin.com/school/sagardoyschool/" target="_blank" rel="noopener noreferrer" className="bg-sagardoy-blue hover:bg-sagardoy-gold p-3 rounded-lg transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://x.com/sagardoyschool" target="_blank" rel="noopener noreferrer" className="bg-sagardoy-blue hover:bg-sagardoy-gold p-3 rounded-lg transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/SagardoySchool/" target="_blank" rel="noopener noreferrer" className="bg-sagardoy-blue hover:bg-sagardoy-gold p-3 rounded-lg transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/UC0AaFYVi7J5CT44Q2gcC4Kg" target="_blank" rel="noopener noreferrer" className="bg-sagardoy-blue hover:bg-sagardoy-gold p-3 rounded-lg transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Programs */}
          <div className="mt-2 md:mt-0">
            <h4 className="font-bold text-lg mb-4">Programas</h4>
            <ul className="space-y-2 text-blue-200">
              {masterPrograms.length > 0 && (
                masterPrograms.map((program) => (
                  <li key={program.id}>
                    <Link 
                      href={`/programa/${program.id}`} 
                      className="hover:text-white transition-colors duration-200"
                    >
                      {program.title}
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>

          {/* Additional Programs */}
          <div className="mt-2 md:mt-0">
            <ul className="space-y-2 text-blue-200">
              {otherPrograms.length > 0 && (
                otherPrograms.map((program) => (
                  <li key={program.id}>
                    <Link 
                      href={`/programa/${program.id}`} 
                      className="hover:text-white transition-colors duration-200"
                    >
                      {program.title}
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>

          {/* Contact */}
          <div className="mt-4 md:mt-0">
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <div className="space-y-3 text-blue-200">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-sagardoy-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span className="text-sm">C/Velázquez 86D. 28006 Madrid</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-sagardoy-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span className="text-sm">+34 91 454 00 71</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-sagardoy-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span className="text-sm">info@sagardoyschool.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-blue-200 text-sm mb-4 md:mb-0">
            © 2025 Sagardoy Business & Law School. Todos los derechos reservados.
          </div>
          <div className="flex space-x-6 text-sm text-blue-200">
            <a href="/politica-de-privacidad" className="hover:text-white transition-colors duration-200">Política de Privacidad</a>
            <a href="/politica-de-cookies" className="hover:text-white transition-colors duration-200">Política de Cookies</a>
            <a href="/condiciones-de-uso" className="hover:text-white transition-colors duration-200">Condiciones de Uso</a>
            <a href="/sitemap" className="hover:text-white transition-colors duration-200">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
