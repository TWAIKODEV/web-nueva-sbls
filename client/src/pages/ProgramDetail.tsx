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

  const programsData: Record<string, any> = {
    "master-acceso-abogacia": {
      title: "Máster de Acceso a la Abogacía",
      description: "Programa oficial que habilita para el ejercicio de la profesión de abogado con especialización en derecho laboral.",
      longDescription: "El Máster de Acceso a la Abogacía de Sagardoy Business School es el programa oficial que te habilita para ejercer la profesión de abogado en España. Con un enfoque especializado en derecho del trabajo y seguridad social, este máster combina formación teórica de excelencia con prácticas profesionales en despachos de prestigio.",
      duration: "12 meses",
      price: "Consultar",
      category: "Máster",
      categoryColor: "bg-sagardoy-blue",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      schedule: "Lunes a Viernes 18:00-21:00",
      startDate: "Octubre 2024",
      language: "Español",
      format: "Presencial + Prácticas",
      classSize: "30-35 estudiantes",
      highlights: [
        "Habilitación oficial para ejercer la abogacía",
        "Especialización en derecho laboral",
        "Prácticas en despachos de prestigio",
        "Preparación para oposiciones",
        "Acceso al Colegio de Abogados"
      ],
      curriculum: [
        {
          module: "Derecho del Trabajo",
          topics: ["Contratos Laborales", "Despidos y Extinciones", "Negociación Colectiva", "Seguridad Social"]
        },
        {
          module: "Derecho Procesal Laboral",
          topics: ["Procedimiento Ordinario", "Procedimientos Especiales", "Recursos y Casación", "Ejecución de Sentencias"]
        }
      ],
      faculty: [
        {
          name: "Dr. Iñigo Sagardoy",
          title: "Director del Programa",
          expertise: "Derecho del Trabajo",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
        }
      ],
      requirements: [
        "Licenciatura o Grado en Derecho",
        "Expediente académico",
        "Entrevista personal",
        "Carta de motivación"
      ],
      benefits: [
        "Habilitación oficial para ejercer la abogacía",
        "95% de aprobados en el examen de Estado",
        "Prácticas remuneradas en despachos",
        "Especialización en derecho laboral"
      ]
    },
    "master-derecho-trabajo": {
      title: "Máster en Derecho del Trabajo y RRHH",
      description: "Especialización integral en derecho laboral y gestión de recursos humanos con enfoque práctico.",
      longDescription: "Este máster combina la formación jurídica en derecho del trabajo con la gestión estratégica de recursos humanos, preparando profesionales para liderar departamentos legales y de RRHH en empresas e instituciones.",
      duration: "12 meses",
      price: "Consultar",
      category: "Máster",
      categoryColor: "bg-sagardoy-blue",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      schedule: "Martes y Jueves 18:00-21:00",
      startDate: "Septiembre 2024",
      language: "Español",
      format: "Presencial + Online",
      classSize: "25-30 estudiantes",
      highlights: [
        "Doble especialización jurídica y de RRHH",
        "Casos prácticos reales",
        "Profesorado en activo",
        "Prácticas en empresas"
      ],
      curriculum: [
        {
          module: "Derecho Individual del Trabajo",
          topics: ["Contrato de Trabajo", "Tiempo de Trabajo", "Salarios", "Modificaciones Contractuales"]
        }
      ],
      faculty: [
        {
          name: "Dr. Iñigo Sagardoy",
          title: "Director del Programa",
          expertise: "Derecho del Trabajo",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
        }
      ],
      requirements: [
        "Licenciatura o Grado universitario",
        "Experiencia profesional valorable",
        "Entrevista personal"
      ],
      benefits: [
        "Doble competencia jurídica-empresarial",
        "98% de empleabilidad",
        "Acceso a puestos directivos"
      ]
    },
    "executive-rrhh": {
      title: "Executive en Recursos Humanos",
      description: "Programa ejecutivo para directivos de RRHH enfocado en transformación digital y liderazgo.",
      longDescription: "Dirigido a directivos y profesionales senior de recursos humanos que buscan actualizar sus competencias en un entorno de transformación digital y cambio organizacional constante.",
      duration: "6 meses",
      price: "Consultar",
      category: "Executive",
      categoryColor: "bg-green-500",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      schedule: "Viernes 16:00-20:00 y Sábados 9:00-14:00",
      startDate: "Febrero 2024",
      language: "Español",
      format: "Presencial + Workshops",
      classSize: "15-20 ejecutivos",
      highlights: [
        "Enfoque 100% ejecutivo",
        "Transformación digital HR",
        "Liderazgo avanzado",
        "People Analytics"
      ],
      curriculum: [
        {
          module: "Liderazgo y Transformación",
          topics: ["Liderazgo Disruptivo", "Change Management", "Cultura Organizacional", "Employee Experience"]
        }
      ],
      faculty: [
        {
          name: "Dr. Miguel Sagardoy",
          title: "Executive Director",
          expertise: "Transformación Organizacional",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
        }
      ],
      requirements: [
        "Mínimo 8 años experiencia en RRHH",
        "Posición directiva actual",
        "Entrevista ejecutiva"
      ],
      benefits: [
        "Actualización competencial",
        "Red ejecutiva exclusiva",
        "Certificación internacional"
      ]
    }
  };

  const program = programsData[id || ""];

  if (!program) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-sagardoy-navy mb-4">Programa no encontrado</h1>
          <p className="text-sagardoy-gray mb-8">El programa que buscas no existe o ha sido movido.</p>
          <Link href="/programas">
            <Button className="bg-sagardoy-navy text-white">
              Volver a Programas
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-sagardoy-navy text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img 
          src={program.image} 
          alt={program.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className={`${program.categoryColor} text-white mb-4`}>
              {program.category}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {program.title}
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {program.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/solicitud-admision">
                <Button className="bg-sagardoy-gold text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-200">
                  Solicitar Admisión
                </Button>
              </Link>
              <Link href="/contacto">
                <Button variant="outline" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-sagardoy-navy transition-colors duration-200">
                  Más Información
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About the Program */}
              <div>
                <h2 className="text-3xl font-bold text-sagardoy-navy mb-6">Acerca del Programa</h2>
                <p className="text-lg text-sagardoy-gray leading-relaxed mb-6">
                  {program.longDescription}
                </p>
                
                {/* Program Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {program.highlights.map((highlight: string, index: number) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sagardoy-gray">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curriculum */}
              <div>
                <h2 className="text-3xl font-bold text-sagardoy-navy mb-6">Plan de Estudios</h2>
                <Tabs defaultValue="curriculum" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                    <TabsTrigger value="faculty">Profesorado</TabsTrigger>
                    <TabsTrigger value="requirements">Requisitos</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="curriculum" className="space-y-6">
                    {program.curriculum.map((module: any, index: number) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-sagardoy-navy mb-3">{module.module}</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {module.topics.map((topic: string, topicIndex: number) => (
                              <div key={topicIndex} className="flex items-center">
                                <BookOpen className="w-4 h-4 text-sagardoy-blue mr-2 flex-shrink-0" />
                                <span className="text-sagardoy-gray text-sm">{topic}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="faculty" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {program.faculty.map((professor: any, index: number) => (
                        <Card key={index}>
                          <CardContent className="p-6 text-center">
                            <img 
                              src={professor.image} 
                              alt={professor.name}
                              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                            />
                            <h3 className="text-lg font-bold text-sagardoy-navy mb-1">{professor.name}</h3>
                            <p className="text-sagardoy-blue font-medium mb-2">{professor.title}</p>
                            <p className="text-sagardoy-gray text-sm">{professor.expertise}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="requirements" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold text-sagardoy-navy mb-4">Requisitos de Admisión</h3>
                        <ul className="space-y-3">
                          {program.requirements.map((requirement: string, index: number) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-sagardoy-gray">{requirement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-sagardoy-navy mb-4">Beneficios del Programa</h3>
                        <ul className="space-y-3">
                          {program.benefits.map((benefit: string, index: number) => (
                            <li key={index} className="flex items-start">
                              <Award className="w-5 h-5 text-sagardoy-gold mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-sagardoy-gray">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Program Info Card */}
              <Card className="sticky top-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-sagardoy-navy mb-6">Información del Programa</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-sagardoy-blue mr-3" />
                      <div>
                        <p className="font-medium text-sagardoy-navy">Duración</p>
                        <p className="text-sagardoy-gray text-sm">{program.duration}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Euro className="w-5 h-5 text-sagardoy-blue mr-3" />
                      <div>
                        <p className="font-medium text-sagardoy-navy">Precio</p>
                        <p className="text-sagardoy-gray text-sm">{program.price}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-sagardoy-blue mr-3" />
                      <div>
                        <p className="font-medium text-sagardoy-navy">Inicio</p>
                        <p className="text-sagardoy-gray text-sm">{program.startDate}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-sagardoy-blue mr-3" />
                      <div>
                        <p className="font-medium text-sagardoy-navy">Grupo</p>
                        <p className="text-sagardoy-gray text-sm">{program.classSize}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 space-y-3">
                    <Link href="/solicitud-admision">
                      <Button className="w-full bg-sagardoy-gold text-white hover:bg-yellow-600">
                        Solicitar Admisión <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/contacto">
                      <Button variant="outline" className="w-full border-sagardoy-navy text-sagardoy-navy hover:bg-sagardoy-navy hover:text-white">
                        Contactar Asesor
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}