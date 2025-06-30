import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";

export default function Events() {
  // Obtener eventos de la base de datos
  const apiEvents = useQuery(api.events.getEvents);

  // Función para extraer fecha de la cadena de texto de eventos
  const extractDateFromString = (dateString: string) => {
    // La fecha viene como "Miércoles, 28 de mayo"
    const parts = dateString.split(', ');
    if (parts.length >= 2) {
      const dayPart = parts[1]; // "28 de mayo"
      const dayMatch = dayPart.match(/(\d+)/);
      const monthMatch = dayPart.match(/de\s+(\w+)/);
      
      if (dayMatch && monthMatch) {
        const day = parseInt(dayMatch[1]);
        const monthName = monthMatch[1];
        
        // Mapear nombres de meses a números
        const monthMap: { [key: string]: number } = {
          'enero': 0, 'febrero': 1, 'marzo': 2, 'abril': 3, 'mayo': 4, 'junio': 5,
          'julio': 6, 'agosto': 7, 'septiembre': 8, 'octubre': 9, 'noviembre': 10, 'diciembre': 11
        };
        
        const month = monthMap[monthName.toLowerCase()];
        const currentYear = new Date().getFullYear();
        
        return new Date(currentYear, month, day);
      }
    }
    return null;
  };

  // Separar eventos en próximos y pasados
  const now = new Date();
  const upcomingEvents: any[] = [];
  const pastEvents: any[] = [];

  apiEvents?.forEach((event: any) => {
    const eventDate = extractDateFromString(event.date);
    if (eventDate) {
      if (eventDate >= now) {
        upcomingEvents.push(event);
      } else {
        pastEvents.push(event);
      }
    }
  });

  // Ordenar eventos próximos por fecha
  upcomingEvents.sort((a, b) => {
    const dateA = extractDateFromString(a.date);
    const dateB = extractDateFromString(b.date);
    return dateA && dateB ? dateA.getTime() - dateB.getTime() : 0;
  });

  // Ordenar eventos pasados por fecha (más recientes primero) y tomar máximo 8
  pastEvents.sort((a, b) => {
    const dateA = extractDateFromString(a.date);
    const dateB = extractDateFromString(b.date);
    return dateA && dateB ? dateB.getTime() - dateA.getTime() : 0;
  }).slice(0, 8);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-sagardoy-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Eventos Sagardoy
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto">
              Encuentros profesionales, mesas redondas y eventos sectoriales que conectan a los mejores 
              profesionales del derecho, recursos humanos y gestión empresarial
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sagardoy-navy mb-4">
              Próximos Eventos
            </h2>
            <p className="text-xl text-sagardoy-blue max-w-3xl mx-auto">
              Regístrate en nuestros próximos eventos y forma parte de la comunidad profesional de Sagardoy
            </p>
          </div>

          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingEvents.map((event) => (
                <Card key={event._id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img 
                      src={event.cover}
                      alt={event.title}
                      className="w-full h-48 md:h-80 object-cover"
                    />
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-sagardoy-navy mb-3">{event.title}</h3>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-sagardoy-blue">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-sm text-sagardoy-blue">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-sm text-sagardoy-blue">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Link href={`/evento/${event.path}`}>
                        <Button className="bg-sagardoy-gold text-white hover:bg-yellow-600">
                          Registrarse
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <Calendar className="w-16 h-16 text-sagardoy-blue mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-sagardoy-navy mb-4">
                  No hay eventos próximos
                </h3>
                <p className="text-sagardoy-blue mb-8">
                  Actualmente no tenemos eventos programados. Te invitamos a explorar nuestros programas de formación 
                  o contactar con nosotros para más información.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/programas">
                    <Button className="bg-sagardoy-blue text-white hover:bg-blue-700">
                      Ver Programas
                    </Button>
                  </Link>
                  <Link href="/contacto">
                    <Button variant="outline" className="border-sagardoy-navy text-sagardoy-navy hover:bg-sagardoy-navy hover:text-white">
                      Contactar
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Past Events Section */}
      {pastEvents.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sagardoy-navy mb-4">
                Eventos Realizados
              </h2>
              <p className="text-xl text-sagardoy-blue max-w-3xl mx-auto">
                Conoce algunos de los eventos más destacados que hemos organizado
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pastEvents.map((event) => (
                <Card key={event._id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img 
                      src={event.cover}
                      alt={event.title}
                      className="w-full h-38 object-cover"
                    />
                  </div>
                  
                  <CardContent className="p-4">
                    <h4 className="font-bold text-sagardoy-navy mb-2 text-sm leading-tight">{event.title}</h4>
                    
                    <div className="space-y-1 mb-3">
                      <div className="flex items-center text-xs text-sagardoy-blue">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-xs text-sagardoy-blue">
                        <MapPin className="w-3 h-3 mr-1" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-sagardoy-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Quieres organizar un evento corporativo?
          </h2>
          <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
            En Sagardoy organizamos eventos a medida para empresas. Desde conferencias especializadas hasta 
            mesas redondas sectoriales, creamos experiencias únicas para tu organización.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button className="bg-sagardoy-gold text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Contactar para Eventos
              </Button>
            </Link>
            <Link href="/corporate-training">
              <Button variant="outline" className="border-2 border-white text-sagardoy-blue px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-sagardoy-navy transition-all duration-300">
                Formación Corporativa
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}