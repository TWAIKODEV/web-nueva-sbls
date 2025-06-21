import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Users, Award, BookOpen, Calendar, Euro, ArrowRight, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProgramDetail() {
  const { t } = useLanguage();
  const { id } = useParams<{ id: string }>();

  // Mock program data - in a real app, this would come from an API
  const programsData: Record<string, any> = {
    "mba": {
      title: "MBA Ejecutivo",
      description: "Programa integral para directivos que buscan acelerar su carrera profesional y liderar la transformación empresarial.",
      longDescription: "El MBA Ejecutivo de Sagardoy Business School está diseñado para profesionales con experiencia que desean dar el salto definitivo en su carrera directiva. Nuestro programa combina rigor académico con aplicación práctica, permitiendo a los estudiantes continuar con sus responsabilidades profesionales mientras obtienen una formación de élite.",
      duration: "18 meses",
      price: "€24,500",
      category: "MBA",
      categoryColor: "bg-sagardoy-gold",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      schedule: "Viernes 16:00-21:00 y Sábados 9:00-18:00",
      startDate: "Septiembre 2024",
      language: "Español con módulos en inglés",
      format: "Presencial + Online",
      classSize: "25-30 estudiantes",
      highlights: [
        "Acreditación internacional AACSB",
        "Claustro de profesores internacionales",
        "Programa de mentoring personalizado",
        "Red global de 5,000+ alumni",
        "Doble titulación disponible"
      ],
      curriculum: [
        {
          module: "Fundamentos Directivos",
          topics: ["Liderazgo Estratégico", "Finanzas para Directivos", "Marketing Estratégico", "Operaciones y Cadena de Valor"]
        },
        {
          module: "Transformación Digital",
          topics: ["Innovación y Tecnología", "Analytics y Big Data", "Transformación Organizacional", "Ecosistemas Digitales"]
        },
        {
          module: "Liderazgo Global",
          topics: ["Negociación Internacional", "Gestión de Equipos Globales", "Responsabilidad Corporativa", "Sostenibilidad Empresarial"]
        },
        {
          module: "Proyecto Final",
          topics: ["Consultoría Empresarial", "Business Plan", "Presentación a Inversores", "Implementación Estratégica"]
        }
      ],
      faculty: [
        {
          name: "Dr. Miguel Sagardoy",
          title: "Director Académico",
          expertise: "Estrategia Empresarial",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
        },
        {
          name: "Dra. Carmen López",
          title: "Profesora de Finanzas",
          expertise: "Finanzas Corporativas",
          image: "https://images.unsplash.com/photo-1494790108755-2616c6a0d2d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
        },
        {
          name: "Prof. James Anderson",
          title: "Marketing Internacional",
          expertise: "Marketing Global",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
        }
      ],
      requirements: [
        "Título universitario oficial",
        "Mínimo 5 años de experiencia profesional",
        "2 años de experiencia en puestos de responsabilidad",
        "Nivel de inglés B2 (certificado)",
        "Entrevista personal",
        "Carta de motivación"
      ],
      benefits: [
        "Incremento salarial promedio del 47%",
        "94% de empleabilidad al finalizar",
        "Acceso a red global de contactos",
        "Servicios de carrera profesional",
        "Programa de mentoring vitalicio",
        "Participación en eventos exclusivos"
      ]
    },
    "master-estrategia": {
      title: "Máster en Dirección Estratégica",
      description: "Desarrolla competencias estratégicas para liderar organizaciones en entornos complejos y dinámicos.",
      longDescription: "Este programa está diseñado para profesionales que aspiran a ocupar posiciones estratégicas en sus organizaciones. Combina teoría de management con herramientas prácticas para la toma de decisiones estratégicas.",
      duration: "12 meses",
      price: "€18,900",
      category: "Máster",
      categoryColor: "bg-sagardoy-blue",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      schedule: "Jueves 18:00-22:00 y algunos Sábados",
      startDate: "Octubre 2024",
      language: "Español",
      format: "Presencial + Online",
      classSize: "20-25 estudiantes",
      highlights: [
        "Enfoque 100% estratégico",
        "Casos reales de empresas",
        "Metodología práctica",
        "Networking ejecutivo",
        "Certificación internacional"
      ]
    },
    "liderazgo-digital": {
      title: "Liderazgo Digital",
      description: "Programa intensivo para líderes que buscan dominar la transformación digital empresarial.",
      longDescription: "Un programa intensivo que prepara a los líderes para navegar y dirigir la transformación digital en sus organizaciones, combinando tecnología, estrategia y liderazgo.",
      duration: "6 meses",
      price: "€12,500",
      category: "Ejecutivo",
      categoryColor: "bg-green-500",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      schedule: "Modalidad flexible - Online y presencial",
      startDate: "Cada trimestre",
      language: "Español e inglés",
      format: "Híbrido",
      classSize: "15-20 estudiantes",
      highlights: [
        "Transformación digital práctica",
        "Tecnologías emergentes",
        "Liderazgo del cambio",
        "Casos de éxito reales",
        "Certificación digital"
      ]
    }
  };

  const program = programsData[id || ""];

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-sagardoy-navy mb-4">Programa no encontrado</h1>
          <Link href="/programas">
            <Button>Volver a Programas</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-sagardoy-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className={`${program.categoryColor} text-white mb-4`}>
                {program.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{program.title}</h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                {program.longDescription}
              </p>
              
              {/* Key Info */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-sagardoy-gold" />
                  <span>{program.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Euro className="w-5 h-5 text-sagardoy-gold" />
                  <span>{program.price}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-sagardoy-gold" />
                  <span>{program.startDate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-sagardoy-gold" />
                  <span>{program.classSize}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/solicitud-admision" className="flex-1">
                  <Button className="w-full bg-sagardoy-gold text-white px-8 py-4 text-lg font-semibold hover:bg-yellow-600">
                    Solicitar Admisión
                  </Button>
                </Link>
                <Link href="/contacto" className="flex-1">
                  <Button variant="outline" className="w-full border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-sagardoy-navy">
                    Más Información
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <img 
                src={program.image} 
                alt={program.title}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 h-auto p-1">
              <TabsTrigger value="overview" className="py-3">Resumen</TabsTrigger>
              <TabsTrigger value="curriculum" className="py-3">Plan de Estudios</TabsTrigger>
              <TabsTrigger value="faculty" className="py-3">Profesores</TabsTrigger>
              <TabsTrigger value="requirements" className="py-3">Requisitos</TabsTrigger>
              <TabsTrigger value="benefits" className="py-3">Beneficios</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Program Highlights */}
                <div className="lg:col-span-2">
                  <Card>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-sagardoy-navy mb-6">Puntos Destacados</h3>
                      <div className="space-y-4">
                        {program.highlights.map((highlight: string, index: number) => (
                          <div key={index} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-sagardoy-gray">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Program Info */}
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-bold text-sagardoy-navy mb-4">Información del Programa</h4>
                      <div className="space-y-3 text-sm">
                        <div>
                          <span className="font-medium">Duración:</span>
                          <span className="ml-2 text-sagardoy-gray">{program.duration}</span>
                        </div>
                        <div>
                          <span className="font-medium">Horario:</span>
                          <span className="ml-2 text-sagardoy-gray">{program.schedule}</span>
                        </div>
                        <div>
                          <span className="font-medium">Modalidad:</span>
                          <span className="ml-2 text-sagardoy-gray">{program.format}</span>
                        </div>
                        <div>
                          <span className="font-medium">Idioma:</span>
                          <span className="ml-2 text-sagardoy-gray">{program.language}</span>
                        </div>
                        <div>
                          <span className="font-medium">Inicio:</span>
                          <span className="ml-2 text-sagardoy-gray">{program.startDate}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-sagardoy-navy text-white">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-2">Precio del Programa</h4>
                      <div className="text-3xl font-bold text-sagardoy-gold mb-2">{program.price}</div>
                      <p className="text-sm text-blue-100 mb-4">Financiación disponible</p>
                      <Button className="w-full bg-sagardoy-gold text-white hover:bg-yellow-600">
                        Consultar Financiación
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="curriculum" className="space-y-6">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-sagardoy-navy mb-6">Plan de Estudios</h3>
                  {program.curriculum ? (
                    <div className="space-y-6">
                      {program.curriculum.map((module: any, index: number) => (
                        <div key={index} className="border-l-4 border-sagardoy-gold pl-6">
                          <h4 className="text-xl font-bold text-sagardoy-navy mb-3">{module.module}</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {module.topics.map((topic: string, topicIndex: number) => (
                              <div key={topicIndex} className="flex items-center space-x-2">
                                <BookOpen className="w-4 h-4 text-sagardoy-blue" />
                                <span className="text-sagardoy-gray">{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sagardoy-gray">Plan de estudios detallado disponible tras contactar con admisiones.</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="faculty" className="space-y-6">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-sagardoy-navy mb-6">Claustro de Profesores</h3>
                  {program.faculty ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {program.faculty.map((professor: any, index: number) => (
                        <div key={index} className="text-center">
                          <img 
                            src={professor.image} 
                            alt={professor.name}
                            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                          />
                          <h4 className="font-bold text-sagardoy-navy">{professor.name}</h4>
                          <p className="text-sm text-sagardoy-blue mb-1">{professor.title}</p>
                          <p className="text-xs text-sagardoy-gray">{professor.expertise}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sagardoy-gray">Información detallada del profesorado disponible tras contactar con admisiones.</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="requirements" className="space-y-6">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-sagardoy-navy mb-6">Requisitos de Admisión</h3>
                  {program.requirements ? (
                    <div className="space-y-4">
                      {program.requirements.map((requirement: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-sagardoy-blue flex-shrink-0 mt-0.5" />
                          <span className="text-sagardoy-gray">{requirement}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sagardoy-gray">Requisitos específicos disponibles tras contactar con admisiones.</p>
                  )}
                  
                  <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                    <h4 className="font-bold text-sagardoy-navy mb-2">Proceso de Admisión</h4>
                    <p className="text-sagardoy-gray text-sm">
                      Nuestro proceso de admisión está diseñado para evaluar tu potencial y asegurar que el programa 
                      se alinee con tus objetivos profesionales. Incluye revisión de documentos, entrevista personal 
                      y evaluación de idoneidad.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="benefits" className="space-y-6">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-sagardoy-navy mb-6">Beneficios del Programa</h3>
                  {program.benefits ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {program.benefits.map((benefit: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3">
                          <Award className="w-5 h-5 text-sagardoy-gold flex-shrink-0 mt-0.5" />
                          <span className="text-sagardoy-gray">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sagardoy-gray">Información detallada de beneficios disponible tras contactar con admisiones.</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sagardoy-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para comenzar tu transformación?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Únete a cientos de profesionales que han impulsado su carrera con este programa
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/solicitud-admision">
              <Button className="bg-sagardoy-gold text-white px-8 py-4 text-lg font-semibold hover:bg-yellow-600">
                Solicitar Admisión <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contacto">
              <Button variant="outline" className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-sagardoy-navy">
                Contactar Asesor
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
