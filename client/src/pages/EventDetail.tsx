import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, ArrowLeft, Monitor } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";

export default function EventDetail() {
  const { t } = useLanguage();
  const { id } = useParams<{ id: string }>();

  // Obtener eventos de la base de datos
  const apiEvents = useQuery(api.events.getEvents);
  
  // Encontrar el evento específico por path
  const event = apiEvents?.find((e: any) => e.path === id);

  // Función para formatear fecha desde timestamp
  const formatEventDate = (timestamp: number) => {
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  };

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-sagardoy-navy mb-4">Evento no encontrado</h1>
          <p className="text-sagardoy-blue mb-8">El evento que buscas no existe o ha sido movido.</p>
          <Link href="/noticias">
            <Button className="bg-sagardoy-navy text-white">
              Volver a Eventos
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/noticias">
            <Button variant="ghost" className="mb-6 text-sagardoy-blue hover:text-sagardoy-navy">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Eventos
            </Button>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Event Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h1 className="text-4xl md:text-5xl text-sagardoy-navy mb-4 leading-tight title">
                  {event.title}
                </h1>
              </div>

              {/* Event Meta */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 p-6 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-sagardoy-blue mr-3" />
                  <div>
                    <p className="font-medium text-sagardoy-navy">Fecha</p>
                    <p className="text-sagardoy-blue text-sm">{formatEventDate(event.date)}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-sagardoy-blue mr-3" />
                  <div>
                    <p className="font-medium text-sagardoy-navy">Horario</p>
                    <p className="text-sagardoy-blue text-sm">{event.time}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-sagardoy-blue mr-3" />
                  <div>
                    <p className="font-medium text-sagardoy-navy">Ubicación</p>
                    <p className="text-sagardoy-blue text-sm">{event.location}</p>
                  </div>
                </div>
                {event.format && (
                  <div className="flex items-center">
                    <Monitor className="w-5 h-5 text-sagardoy-blue mr-3" />
                    <div>
                      <p className="font-medium text-sagardoy-navy">Formato</p>
                      <p className="text-sagardoy-blue text-sm">{event.format}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Registration Card */}
            <div>
              <Card>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-sagardoy-navy mb-2">{event.title}</h3>
                    <p className="text-sagardoy-blue text-sm mb-4">{event.time}</p>
                  </div>
                  
                  <Button 
                    className="w-full bg-sagardoy-gold text-white mb-4"
                    onClick={() => window.open(event.registration, '_blank')}
                  >
                    Registrarse Ahora
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Event Image */}
      <section className="mt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <img 
              src={event.cover} 
              alt={event.title}
              className="object-cover rounded-lg mb-8"
            />
          </div>
        </div>
      </section>

      {/* Event Content */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-8">
            <div 
              className="text-sagardoy-blue leading-relaxed"
              dangerouslySetInnerHTML={{ __html: event.introduction }}
            />
          </div>

          {/* Body */}
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-sagardoy-blue leading-relaxed"
              dangerouslySetInnerHTML={{ __html: event.body }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}