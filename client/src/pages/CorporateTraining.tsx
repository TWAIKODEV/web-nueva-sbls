import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Target, TrendingUp, Building2, CheckCircle, Award, Clock, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CorporateTraining() {
  const { t } = useLanguage();

  const areas = [
    {
      title: "Recursos Humanos",
      description: "El departamento de RRHH que hasta ahora se enfocaba en las estructuras organizativas, la dificultad para atraer y seleccionar profesionales cualificados, la dificultad de diseñar e implantar un plan de conciliación flexible y adaptado a la nueva realidad.",
      icon: Users,
      color: "bg-blue-500"
    },
    {
      title: "Management",
      description: "La situación actual está poniendo en jaque todo nuestro modelo de desarrollo profesional desde una triple perspectiva: nuestra actitud, autoliderazgo y gestión emocional ante el impacto de la incertidumbre.",
      icon: Target,
      color: "bg-green-500"
    },
    {
      title: "Transformación Digital",
      description: "La aceleración de transformación digital en muchos casos, y el trabajo en remoto han desembocado en un nuevo modelo organizativo, nuevas formas de relación entre las personas y un impacto en la cultura y valores.",
      icon: TrendingUp,
      color: "bg-purple-500"
    }
  ];

  const benefits = [
    "Nuestra actitud, autoliderazgo y gestión emocional ante el impacto de la incertidumbre",
    "La forma en que gestionamos, dirigimos y lideramos",
    "La forma en que nos relacionamos con los clientes y afrontamos la incertidumbre del mercado"
  ];

  const stats = [
    { value: "500+", label: "Empresas Formadas", icon: Building2 },
    { value: "20+", label: "Años de Experiencia", icon: Award },
    { value: "95%", label: "Satisfacción Cliente", icon: CheckCircle },
    { value: "50+", label: "Consultores Expertos", icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <nav className="text-sm text-sagardoy-gray mb-4">
              <Link href="/" className="hover:text-sagardoy-blue">Inicio</Link>
              <span className="mx-2">/</span>
              <span>Formación in Company</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-sagardoy-navy mb-6">
              Formación in Company
            </h1>
            <p className="text-xl text-sagardoy-gray max-w-3xl mx-auto">
              Programas de formación corporativa diseñados específicamente para las necesidades de tu empresa
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="mb-6">
                <Badge className="bg-sagardoy-gold text-white mb-4">MEJORANDO LA PRODUCTIVIDAD</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-sagardoy-navy mb-6">
                  El futuro de tu empresa
                </h2>
              </div>
              
              <div className="space-y-6 text-sagardoy-gray">
                <p>
                  En Sagardoy Business & Law School somos conscientes de que pocas veces las necesidades de formación y desarrollo 
                  corporativo coinciden con la oferta de formación existente en el mercado. Especialmente cuando afectan a un amplio 
                  colectivo de la compañía.
                </p>
                
                <p>
                  Para ofrecer una solución en estos casos, nuestro departamento de Formación in company dispone de un equipo de 
                  consultores con más de 20 años de experiencia en el diseño e implantación de proyectos de formación corporativa.
                </p>
                
                <p>
                  Desde una perspectiva metodológica, nuestro equipo cuenta con un avanzado conocimiento en los sistemas pedagógicos 
                  más innovadores: plataformas de formación digital (LMS), mobile learning, metodologías síncronas, learning apps, 
                  gaming, formación experiencial, outdoor training entre otros.
                </p>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Corporate training session" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
              
              {/* Stats Overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  {stats.slice(0, 2).map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                      <div key={index} className="text-center">
                        <IconComponent className="w-6 h-6 text-sagardoy-gold mx-auto mb-2" />
                        <div className="text-xl font-bold text-sagardoy-navy">{stat.value}</div>
                        <div className="text-xs text-sagardoy-gray">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Areas de Especialización */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sagardoy-navy mb-4">
                Áreas de Especialización
              </h2>
              <p className="text-xl text-sagardoy-gray max-w-3xl mx-auto">
                Nuestros programas especializados cubren las principales necesidades de desarrollo corporativo
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {areas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <Card key={index} className="h-full hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8">
                      <div className={`${area.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-sagardoy-navy mb-4">{area.title}</h3>
                      <p className="text-sagardoy-gray leading-relaxed">{area.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Metodología */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Training methodology" 
                  className="rounded-2xl shadow-xl w-full h-auto"
                />
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-sagardoy-navy mb-6">
                  Nuestra Metodología
                </h2>
                
                <p className="text-sagardoy-gray mb-6 leading-relaxed">
                  El profundo conocimiento de los recursos pedagógicos, junto con el conocimiento del negocio de las diferentes empresas e 
                  industrias, nos permite diseñar proyectos alineados al negocio, con la estrategia metodológica más eficiente en las siguientes áreas:
                </p>

                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-sagardoy-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sagardoy-gray">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link href="/contacto">
                    <Button className="bg-sagardoy-gold text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300">
                      Solicitar Información
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-sagardoy-navy rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-12">Nuestros Resultados</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <IconComponent className="w-12 h-12 text-sagardoy-gold mx-auto mb-4" />
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-slate-300">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-sagardoy-navy mb-6">
              ¿Listo para transformar tu empresa?
            </h2>
            <p className="text-xl text-sagardoy-gray mb-8 max-w-3xl mx-auto">
              Desde Sagardoy Business & Law School, con nuestro claustro de reconocidos expertos, hemos desarrollado una amplia 
              experiencia en la formación in company y el desarrollo de competencias profesionales.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button className="bg-sagardoy-gold text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300">
                  Contactar Ahora
                </Button>
              </Link>
              <Link href="/programas">
                <Button variant="outline" className="border-2 border-sagardoy-navy text-sagardoy-navy px-8 py-3 rounded-lg font-semibold hover:bg-sagardoy-navy hover:text-white transition-all duration-300">
                  Ver Programas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}