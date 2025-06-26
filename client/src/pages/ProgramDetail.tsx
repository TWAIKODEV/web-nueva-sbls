import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Users, Award, BookOpen, Calendar, Euro, ArrowRight, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";

export default function ProgramDetail() {
  const { t } = useLanguage();
  const { id } = useParams<{ id: string }>();

  const apiPrograms = useQuery(api.programs.getPrograms);
  
  // Find the specific program by path
  const program = apiPrograms?.find(p => p.path === id);

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

  // Helper function to render HTML content safely
  const renderHTML = (htmlString: string) => {
    return (
      <div 
        dangerouslySetInnerHTML={{ __html: htmlString }} 
        className="[&>ul]:list-disc [&>ul]:pl-6 [&>ol]:list-decimal [&>ol]:pl-6 [&>li]:mb-1"
      />
    );
  };

  // Get category color based on type
  const getCategoryColor = (type: string) => {
    return type === "master" ? "bg-sagardoy-blue" : "bg-green-500";
  };

  // Get category label
  const getCategoryLabel = (type: string) => {
    return type === "master" ? "Máster" : "Especialización";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-sagardoy-navy text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
          alt={program.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className={`${getCategoryColor(program.type)} text-white mb-4`}>
              {getCategoryLabel(program.type)}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {program.title}
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/solicitud-admision">
                <Button className="bg-sagardoy-gold text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                  Solicitar Admisión
                </Button>
              </Link>
              <Link href="/contacto">
                <Button variant="outline" className="border-2 border-white text-sagardoy-blue px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
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
                <div className="text-lg text-sagardoy-blue leading-relaxed mb-6">
                  {renderHTML(program.introduction)}
                </div>
              </div>

              {/* Curriculum */}
              <div>
                <h2 className="text-3xl font-bold text-sagardoy-navy mb-6">Plan de Estudios</h2>
                <Tabs defaultValue="curriculum" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="curriculum">Objetivos</TabsTrigger>
                    <TabsTrigger value="faculty">Profesorado</TabsTrigger>
                    <TabsTrigger value="requirements">Dirigido a</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="curriculum" className="space-y-6">
                    <Card>
                      <CardContent className="p-6">
                        <div className="text-sagardoy-blue">
                          {renderHTML(program.targets)}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="faculty" className="space-y-6">
                    {program.teachers && program.teachers.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {program.teachers.map((teacher: any, index: number) => (
                          <Card key={index}>
                            <CardContent className="p-6 text-center">
                              <img 
                                src={teacher.img} 
                                alt={teacher.name}
                                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                              />
                              <h3 className="text-lg font-bold text-sagardoy-navy mb-1">{teacher.name}</h3>
                              {teacher.charge && (
                                <p className="text-sagardoy-blue font-medium mb-2">{teacher.charge}</p>
                              )}
                              <div className="text-sagardoy-blue text-sm">
                                {renderHTML(teacher.description)}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-sagardoy-blue">Información del profesorado disponible próximamente</p>
                      </div>
                    )}
                  </TabsContent>
                  
                  <TabsContent value="requirements" className="space-y-6">
                    <Card>
                      <CardContent className="p-6">
                        <div className="text-sagardoy-blue">
                          {renderHTML(program.aimedAt)}
                        </div>
                      </CardContent>
                    </Card>
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
                        <p className="text-sagardoy-blue text-sm">{program.duration}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Euro className="w-5 h-5 text-sagardoy-blue mr-3" />
                      <div>
                        <p className="font-medium text-sagardoy-navy">Precio</p>
                        <p className="text-sagardoy-blue text-sm">{program.fees}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-sagardoy-blue mr-3" />
                      <div>
                        <p className="font-medium text-sagardoy-navy">Horas</p>
                        <p className="text-sagardoy-blue text-sm">{program.hours}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <BookOpen className="w-5 h-5 text-sagardoy-blue mr-3" />
                      <div>
                        <p className="font-medium text-sagardoy-navy">Horario</p>
                        <div className="text-sagardoy-blue text-sm">
                          {renderHTML(program.schedule)}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-sagardoy-blue mr-3" />
                      <div>
                        <p className="font-medium text-sagardoy-navy">Formato</p>
                        <p className="text-sagardoy-blue text-sm">{program.format}</p>
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