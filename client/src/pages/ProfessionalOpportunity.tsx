import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Users, Briefcase, Target } from 'lucide-react';
import { Link } from 'wouter';

export default function ProfessionalOpportunity() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-sagardoy-navy text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl mb-6 title">
              Salidas Profesionales
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              La escuela cuenta con un departamento de asesoramiento y ofertas de empleo adecuadas a tu perfil y expectativas.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Introducción */}
            <Card>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Building2 className="w-16 h-16 text-sagardoy-gold mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-sagardoy-navy mb-4">
                    Bolsa de Trabajo Activa
                  </h2>
                </div>
                <p className="text-sagardoy-blue leading-relaxed text-lg mb-6">
                  Sagardoy Business & Law School cuenta con una activa bolsa de trabajo, cuyos profesionales asesorarán a aquellos participantes que así lo deseen a impulsar su carrera profesional facilitándoles asesoramiento y ofertas de empleo adecuadas a su perfil y expectativas.
                </p>
                <p className="text-sagardoy-blue leading-relaxed text-lg">
                  Tenemos firmados acuerdos de colaboración con las principales empresas del IBEX 35, consultoras de recursos humanos y despachos de abogados para impulsar la carrera profesional de nuestros participantes de programas Executive o para conseguir la incorporación de nuestros alumnos más jóvenes al mercado laboral.
                </p>
              </CardContent>
            </Card>

            {/* Servicios */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-sagardoy-gold mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-sagardoy-navy mb-3">
                    Asesoramiento Personalizado
                  </h3>
                  <p className="text-sagardoy-blue leading-relaxed">
                    Nuestros profesionales te ayudarán a identificar las mejores oportunidades laborales según tu perfil y experiencia.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Briefcase className="w-12 h-12 text-sagardoy-gold mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-sagardoy-navy mb-3">
                    Ofertas de Empleo
                  </h3>
                  <p className="text-sagardoy-blue leading-relaxed">
                    Acceso a ofertas exclusivas de las principales empresas del IBEX 35 y despachos de abogados.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Target className="w-12 h-12 text-sagardoy-gold mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-sagardoy-navy mb-3">
                    Desarrollo de Carrera
                  </h3>
                  <p className="text-sagardoy-blue leading-relaxed">
                    Programas específicos para impulsar tu carrera profesional y facilitar tu incorporación al mercado laboral.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl text-sagardoy-navy mb-6 title">
              ¿Eres una empresa y quieres contar con el mejor talento?
            </h2>
            <p className="text-xl text-sagardoy-blue mb-8 max-w-3xl mx-auto">
              Ponte en contacto con nosotros
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button className="bg-sagardoy-gold text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300">
                  Contactar
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="border-2 border-sagardoy-navy text-sagardoy-navy px-8 py-3 rounded-lg font-semibold hover:bg-sagardoy-navy hover:text-white transition-all duration-300">
                  Volver al Inicio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
