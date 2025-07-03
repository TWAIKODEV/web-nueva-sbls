import React from 'react';
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";

const SiteMap: React.FC = () => {
  const { t } = useLanguage();
  const apiPrograms = useQuery(api.programs.getPrograms);
  
  // Transform apiPrograms to match the expected format
  const programs = apiPrograms?.map(program => ({
    id: program.path,
    title: program.title,
    type: program.type
  })) || [];

  // Filter programs by type
  const masterExecutivePrograms = programs.filter(program => program.type === "master");
  const expertiseWorkshopsPrograms = programs.filter(program => program.type === "specialization");
  const inCompanyPrograms = programs.filter(program => program.type === "incompany");

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-sagardoy-navy py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl text-white mb-6 title">
              Site Map
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Navega por todas las secciones de Sagardoy Business & Law School
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Main Navigation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-sagardoy-navy mb-4">Navegación Principal</h2>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      href="/programas" 
                      className="text-sagardoy-blue hover:text-sagardoy-navy transition-colors"
                    >
                      Programas
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/la-escuela" 
                      className="text-sagardoy-blue hover:text-sagardoy-navy transition-colors"
                    >
                      La Escuela
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/noticias" 
                      className="text-sagardoy-blue hover:text-sagardoy-navy transition-colors"
                    >
                      Noticias y Eventos
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/contacto" 
                      className="text-sagardoy-blue hover:text-sagardoy-navy transition-colors"
                    >
                      Contacto
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-sagardoy-navy mb-4">Servicios</h2>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      href="/la-escuela/salidas-profesionales" 
                      className="text-sagardoy-blue hover:text-sagardoy-navy transition-colors"
                    >
                      Salidas profesionales
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/catedra-unesco" 
                      className="text-sagardoy-blue hover:text-sagardoy-navy transition-colors"
                    >
                      Cátedra Unesco
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/financiacion" 
                      className="text-sagardoy-blue hover:text-sagardoy-navy transition-colors"
                    >
                      Financiación
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-sagardoy-navy mb-4">Legal</h2>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      href="/condiciones-de-uso" 
                      className="text-sagardoy-blue hover:text-sagardoy-navy transition-colors"
                    >
                      Condiciones de uso
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/politica-de-cookies" 
                      className="text-sagardoy-blue hover:text-sagardoy-navy transition-colors"
                    >
                      Política de Cookies
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/politica-de-privacidad" 
                      className="text-sagardoy-blue hover:text-sagardoy-navy transition-colors"
                    >
                      Política de Privacidad
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Programs Section */}
            <div className="border-t border-gray-200 pt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-sagardoy-navy mb-4">Master Executive</h3>
                  <ul className="space-y-3">
                    {masterExecutivePrograms.length > 0 ? (
                      masterExecutivePrograms.map((program) => (
                        <li key={program.id}>
                          <Link 
                            href={`/programa/${program.id}`}
                            className="text-sagardoy-blue hover:text-sagardoy-navy transition-colors"
                          >
                            {program.title}
                          </Link>
                        </li>
                      ))
                    ) : (
                      <li className="text-gray-500 italic">No hay programas disponibles</li>
                    )}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-sagardoy-navy mb-4">Especialización y Workshops</h3>
                  <ul className="space-y-3">
                    {expertiseWorkshopsPrograms.length > 0 ? (
                      expertiseWorkshopsPrograms.map((program) => (
                        <li key={program.id}>
                          <Link 
                            href={`/programa/${program.id}`}
                            className="text-sagardoy-blue hover:text-sagardoy-navy transition-colors"
                          >
                            {program.title}
                          </Link>
                        </li>
                      ))
                    ) : (
                      <li className="text-gray-500 italic">No hay programas disponibles</li>
                    )}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-sagardoy-navy mb-4">Formación in Company</h3>
                  <ul className="space-y-3">
                    {inCompanyPrograms.length > 0 ? (
                      inCompanyPrograms.map((program) => (
                        <li key={program.id}>
                          <Link 
                            href={`/programa/${program.id}`}
                            className="text-sagardoy-blue hover:text-sagardoy-navy transition-colors"
                          >
                            {program.title}
                          </Link>
                        </li>
                      ))
                    ) : (
                      <li className="text-gray-500 italic">No hay programas disponibles</li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SiteMap;
