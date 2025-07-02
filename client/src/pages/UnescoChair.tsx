import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, BookOpen, Users, Globe } from 'lucide-react';
import { Link } from 'wouter';
import logoUnesco from '@/resources/images/logo-unesco.jpg';

export default function UnescoChair() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-sagardoy-navy text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cátedra UNESCO
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              La Cátedra UNESCO-AECI tiene el objetivo de fomentar un sistema integrado de actividades de investigación y formación en el área jurídico laboral.
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
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  {/* Imagen - Primera en móvil, última en desktop */}
                  <div className="flex justify-center lg:order-last lg:justify-end">
                    <img 
                      src={logoUnesco} 
                      alt="Logo UNESCO" 
                      className="w-48 md:w-56 lg:w-72 h-auto object-contain"
                    />
                  </div>
                  
                  {/* Contenido principal */}
                  <div className="lg:col-span-2 lg:order-first">
                    <div className="flex items-center mb-6">
                      <Award className="w-8 h-8 text-sagardoy-gold mr-3" />
                      <h2 className="text-2xl font-bold text-sagardoy-navy">
                        Cátedra UNESCO de Promoción Socio-Laboral UNESCO-AECI
                      </h2>
                    </div>
                    <p className="text-sagardoy-blue leading-relaxed text-lg mb-6">
                      En octubre de 2003 se concede a la Fundación Sagardoy la Cátedra UNESCO-AECI de Promoción Socio-Laboral, cuyo objetivo es fomentar un sistema integrado de actividades de investigación, formación, información, documentación e interrelación entre profesores e investigadores pertenecientes al área jurídico laboral de ámbito internacional.
                    </p>
                    <p className="text-sagardoy-blue leading-relaxed text-lg mb-6">
                      En el momento presente la Cátedra radica en la Sagardoy Business & Law School, creada a partir del Centro de Estudios Sagardoy. El presidente, desde su concesión, es Juan Antonio Sagardoy Bengoechea. Desde 2011, su directora es la profesora de la Universidad Loyola Andalucía, Pilar Núñez-Cortés Contreras.
                    </p>
                    <p className="text-sagardoy-blue leading-relaxed text-lg mb-8">
                      Una iniciativa a destacar dentro de su actividad es la puesta en marcha en 2013 de la revista digital <strong>Derecho Social y Empresa</strong>, que surge con vocación internacional y de derecho comparado.
                    </p>
                    <a 
                      href="https://www.revistaderechosocialyempresa.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-sagardoy-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300"
                    >
                      Visita la revista de derecho social y empresa
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
