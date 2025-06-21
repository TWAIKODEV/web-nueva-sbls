import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, Users, Building, TrendingUp } from "lucide-react";
import sagardoyLogo from "@assets/sagardoy-logo-1_1750499204211.png";

export default function Home() {
  const programs = [
    {
      id: "mba",
      title: "MBA Ejecutivo",
      description: "Programa integral para directivos que buscan acelerar su carrera profesional y liderar la transformación empresarial.",
      duration: "18 meses",
      price: "€24,500",
      category: "MBA",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      id: "master-estrategia", 
      title: "Máster en Dirección Estratégica",
      description: "Desarrolla competencias estratégicas para liderar organizaciones en entornos complejos y dinámicos.",
      duration: "12 meses",
      price: "€18,900",
      category: "Máster",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      id: "liderazgo-digital",
      title: "Liderazgo Digital", 
      description: "Programa intensivo para líderes que buscan dominar la transformación digital empresarial.",
      duration: "6 meses",
      price: "€12,500",
      category: "Ejecutivo",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    }
  ];

  const stats = [
    { icon: TrendingUp, value: "25+", label: "Años de Experiencia" },
    { icon: Users, value: "12,000+", label: "Graduados" },
    { icon: Building, value: "150+", label: "Profesores" },
    { icon: Award, value: "500+", label: "Empresas Partner" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sagardoy-dark-blue via-sagardoy-blue to-sagardoy-light-blue min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="mb-8">
                <img 
                  src={sagardoyLogo} 
                  alt="Sagardoy Business School" 
                  className="h-16 md:h-20 w-auto mb-4"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Lidera el 
                <span className="text-sagardoy-gold"> Futuro</span>
                <br />de los Negocios
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
                Programas ejecutivos de excelencia que transforman profesionales en líderes visionarios
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/programas">
                  <Button className="bg-sagardoy-gold text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-all duration-300">
                    Explorar Programas
                  </Button>
                </Link>
                <Link href="/contacto">
                  <Button variant="outline" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-sagardoy-navy transition-all duration-300">
                    Más Información
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Business school students in modern classroom" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-sagardoy-dark-blue">5,200+</div>
                    <div className="text-sm text-sagardoy-gray">Estudiantes</div>
                  </div>
                  <div className="w-px h-12 bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-sagardoy-dark-blue">25+</div>
                    <div className="text-sm text-sagardoy-gray">Programas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sagardoy-dark-blue mb-4">Nuestros Programas</h2>
            <p className="text-xl text-sagardoy-gray max-w-3xl mx-auto">
              Programas ejecutivos diseñados para impulsar tu carrera profesional y transformar tu visión empresarial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => {
              const badgeColor = program.category === "MBA" ? "bg-sagardoy-gold" : 
                               program.category === "Máster" ? "bg-sagardoy-blue" : "bg-green-500";
              
              return (
                <Card key={program.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={`${badgeColor} text-white`}>{program.category}</Badge>
                      <span className="text-sagardoy-gray text-sm">{program.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-sagardoy-dark-blue mb-3">{program.title}</h3>
                    <p className="text-sagardoy-gray mb-4">{program.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-sagardoy-dark-blue">{program.price}</span>
                      <Link href={`/programa/${program.id}`}>
                        <Button variant="ghost" className="text-sagardoy-blue hover:text-sagardoy-navy font-semibold">
                          Ver más <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/programas">
              <Button className="bg-sagardoy-dark-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-sagardoy-blue transition-colors duration-200">
                Ver Todos los Programas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About School Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-sagardoy-dark-blue mb-6">La Escuela</h2>
              <p className="text-xl text-sagardoy-gray mb-8 leading-relaxed">
                Con más de 25 años de experiencia en formación ejecutiva, Sagardoy Business School se ha consolidado 
                como referente en educación empresarial de excelencia.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                      <IconComponent className="w-8 h-8 text-sagardoy-gold mx-auto mb-2" />
                      <div className="text-3xl font-bold text-sagardoy-dark-blue mb-2">{stat.value}</div>
                      <div className="text-sagardoy-gray">{stat.label}</div>
                    </div>
                  );
                })}
              </div>

              <Link href="/la-escuela">
                <Button className="bg-sagardoy-dark-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-sagardoy-blue transition-colors duration-200">
                  Conoce Más <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Modern business school building" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
              
              {/* Accreditation badges */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <Award className="w-8 h-8 text-sagardoy-gold mx-auto mb-2" />
                    <div className="text-xs text-sagardoy-gray">AACSB</div>
                  </div>
                  <div className="text-center">
                    <Award className="w-8 h-8 text-sagardoy-gold mx-auto mb-2" />
                    <div className="text-xs text-sagardoy-gray">EQUIS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sagardoy-dark-blue to-sagardoy-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para Transformar tu Carrera?
          </h2>
          <p className="text-xl text-slate-200 mb-8 leading-relaxed">
            Únete a miles de profesionales que han impulsado su éxito con nuestros programas ejecutivos
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/solicitud-admision">
              <Button className="bg-sagardoy-gold text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-all duration-300">
                Solicitar Admisión
              </Button>
            </Link>
            <Link href="/programas">
              <Button variant="outline" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-sagardoy-navy transition-all duration-300">
                Ver Programas
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-80">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">98%</div>
              <div className="text-sm text-blue-200">Satisfacción</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">94%</div>
              <div className="text-sm text-blue-200">Empleabilidad</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">47%</div>
              <div className="text-sm text-blue-200">Incremento Salarial</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">5,200+</div>
              <div className="text-sm text-blue-200">Red de Contactos</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
