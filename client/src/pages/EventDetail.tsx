import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, User, ArrowLeft, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function EventDetail() {
  const { t } = useLanguage();
  const { id } = useParams<{ id: string }>();

  // Datos completos de eventos
  const eventsData: Record<string, any> = {
    "1": {
      id: 1,
      title: "Webinar: Nuevas Reformas Laborales 2024",
      subtitle: "Análisis de los cambios normativos y su impacto empresarial",
      description: "Un análisis exhaustivo de las últimas reformas en materia laboral y su impacto directo en la gestión empresarial y recursos humanos.",
      fullDescription: `
        <p>Desde Sagardoy Business School te invitamos a este webinar especializado donde analizaremos en profundidad las nuevas reformas laborales de 2024 y su impacto en el mundo empresarial.</p>
        
        <h3>Temática del evento</h3>
        <p>En este evento abordaremos los cambios más significativos en la normativa laboral española, incluyendo las modificaciones en contratación, teletrabajo, conciliación familiar y nuevas obligaciones empresariales.</p>
        
        <h3>¿Qué aprenderás?</h3>
        <ul>
          <li>Principales cambios normativos en derecho del trabajo</li>
          <li>Impacto en contratos laborales y convenios colectivos</li>
          <li>Nuevas obligaciones para empresas y departamentos de RRHH</li>
          <li>Estrategias de adaptación y cumplimiento normativo</li>
          <li>Casos prácticos y resolución de dudas</li>
        </ul>
        
        <h3>A quien está dirigido</h3>
        <p>Este webinar está especialmente diseñado para abogados laboralistas, directores y técnicos de recursos humanos, responsables legales corporativos y profesionales del ámbito jurídico-empresarial.</p>
      `,
      date: "25 ENE",
      fullDate: "Miércoles, 25 de Enero 2024",
      time: "18:00 - 19:30",
      format: "Online",
      location: "Plataforma virtual Sagardoy School",
      category: "Webinar",
      level: "Intermedio",
      duration: "90 minutos",
      price: "Gratuito",
      maxParticipants: "500 participantes",
      language: "Español",
      color: "bg-orange-500",
      image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
      speakers: [
        {
          name: "Dr. Carlos Martínez",
          title: "Socio Director de Sagardoy Abogados",
          expertise: "Derecho del Trabajo y Seguridad Social",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
          bio: "Experto en derecho laboral con más de 20 años de experiencia. Autor de múltiples publicaciones sobre reforma laboral."
        },
        {
          name: "Dra. Ana López",
          title: "Directora de RRHH en Sagardoy School",
          expertise: "Gestión del Talento y Compliance Laboral",
          image: "https://images.unsplash.com/photo-1494790108755-2616c6a0d2d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
          bio: "Especialista en gestión estratégica de recursos humanos y compliance laboral en entornos corporativos."
        }
      ],
      agenda: [
        { time: "18:00 - 18:10", topic: "Bienvenida e introducción", speaker: "Dr. Carlos Martínez" },
        { time: "18:10 - 18:40", topic: "Análisis de las nuevas reformas laborales", speaker: "Dr. Carlos Martínez" },
        { time: "18:40 - 19:10", topic: "Impacto en la gestión de RRHH", speaker: "Dra. Ana López" },
        { time: "19:10 - 19:30", topic: "Casos prácticos y Q&A", speaker: "Ambos ponentes" }
      ],
      requirements: [
        "Conexión estable a internet",
        "Dispositivo con audio y video",
        "Registro previo obligatorio"
      ],
      includes: [
        "Acceso a la grabación durante 30 días",
        "Material complementario en PDF",
        "Certificado de participación",
        "Sesión de Q&A en vivo"
      ]
    },
    "2": {
      id: 2,
      title: "Jornada de Puertas Abiertas - Máster Acceso Abogacía",
      subtitle: "Conoce nuestro programa oficial y metodología práctica",
      description: "Descubre de primera mano nuestro Máster de Acceso a la Abogacía, metodología, profesorado y oportunidades profesionales.",
      fullDescription: `
        <p>Te invitamos a conocer en profundidad nuestro Máster de Acceso a la Abogacía, el programa oficial que te habilita para ejercer la profesión de abogado en España con especialización en derecho laboral.</p>
        
        <h3>¿Qué descubrirás en esta jornada?</h3>
        <p>Durante esta sesión presencial podrás conocer de cerca nuestra metodología formativa, las instalaciones de la escuela, y resolver todas tus dudas sobre el programa académico y las oportunidades profesionales.</p>
        
        <h3>Programa de la jornada</h3>
        <ul>
          <li>Presentación del programa académico y especialización</li>
          <li>Metodología práctica y casos reales</li>
          <li>Oportunidades de prácticas en despachos de prestigio</li>
          <li>Perspectivas profesionales y empleabilidad</li>
          <li>Visita a las instalaciones y aulas especializadas</li>
          <li>Sesión de networking con profesores y antiguos alumnos</li>
        </ul>
        
        <h3>¿Por qué elegir nuestro máster?</h3>
        <p>Con más de 95% de empleabilidad y convenios con los principales despachos especializados en derecho laboral, nuestro máster te prepara para una carrera exitosa en la abogacía.</p>
      `,
      date: "02 FEB",
      fullDate: "Viernes, 02 de Febrero 2024",
      time: "10:00 - 14:00",
      format: "Presencial",
      location: "Sagardoy Business School - Calle Serrano 93, Madrid",
      category: "Jornada",
      level: "Informativo",
      duration: "4 horas",
      price: "Gratuito",
      maxParticipants: "50 participantes",
      language: "Español",
      color: "bg-sagardoy-blue",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
      speakers: [
        {
          name: "Dr. Iñigo Sagardoy",
          title: "Director del Programa",
          expertise: "Derecho del Trabajo",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
          bio: "Director académico y fundador de Sagardoy Business School. Referente en derecho laboral en España."
        }
      ],
      agenda: [
        { time: "10:00 - 10:30", topic: "Recepción y bienvenida", speaker: "Equipo de Admisiones" },
        { time: "10:30 - 11:30", topic: "Presentación del programa académico", speaker: "Dr. Iñigo Sagardoy" },
        { time: "11:30 - 12:00", topic: "Coffee break y networking", speaker: "" },
        { time: "12:00 - 13:00", topic: "Visita a instalaciones", speaker: "Equipo Académico" },
        { time: "13:00 - 14:00", topic: "Sesión de Q&A y proceso de admisión", speaker: "Todos" }
      ],
      requirements: [
        "Registro previo obligatorio",
        "Confirmación de asistencia 48h antes",
        "Documento de identidad"
      ],
      includes: [
        "Material informativo del programa",
        "Coffee break incluido",
        "Sesión individual con asesor académico",
        "Descuento especial en matrícula"
      ]
    },
    "3": {
      id: 3,
      title: "Networking Jurídico-Empresarial",
      subtitle: "Encuentro de abogados laboralistas y directivos de RRHH",
      description: "Evento de networking para profesionales del derecho laboral y recursos humanos. Amplía tu red de contactos profesionales.",
      fullDescription: `
        <p>Un encuentro único diseñado para facilitar el networking entre abogados especializados en derecho laboral y directivos de recursos humanos de las principales empresas del país.</p>
        
        <h3>Objetivos del evento</h3>
        <p>Este evento tiene como objetivo crear sinergias entre profesionales del ámbito jurídico-laboral y empresarial, fomentando colaboraciones, intercambio de experiencias y desarrollo de nuevas oportunidades de negocio.</p>
        
        <h3>¿Quién participará?</h3>
        <ul>
          <li>Socios y asociados de despachos especializados en derecho laboral</li>
          <li>Directores y técnicos de recursos humanos</li>
          <li>Asesores laborales y consultores</li>
          <li>Graduados y estudiantes de programas de Sagardoy School</li>
          <li>Representantes de colegios profesionales</li>
        </ul>
        
        <h3>Actividades del evento</h3>
        <p>Además del networking libre, el evento incluirá presentaciones cortas sobre tendencias en derecho laboral, casos de éxito en colaboraciones jurídico-empresariales y una mesa redonda sobre el futuro del sector.</p>
      `,
      date: "15 FEB",
      fullDate: "Jueves, 15 de Febrero 2024",
      time: "19:00 - 22:00",
      format: "Presencial",
      location: "Hotel Villa Magna - Madrid",
      category: "Networking",
      level: "Profesional",
      duration: "3 horas",
      price: "€50 (incluye cocktail)",
      maxParticipants: "200 participantes",
      language: "Español",
      color: "bg-green-500",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
      speakers: [
        {
          name: "Mesa de Expertos",
          title: "Profesionales del sector",
          expertise: "Derecho Laboral y RRHH",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
          bio: "Reconocidos profesionales del derecho laboral y recursos humanos compartirán sus experiencias."
        }
      ],
      agenda: [
        { time: "19:00 - 19:30", topic: "Recepción y registro", speaker: "" },
        { time: "19:30 - 20:00", topic: "Bienvenida y presentación", speaker: "Sagardoy School" },
        { time: "20:00 - 21:00", topic: "Networking libre y cocktail", speaker: "" },
        { time: "21:00 - 21:30", topic: "Mesa redonda: Futuro del sector", speaker: "Mesa de Expertos" },
        { time: "21:30 - 22:00", topic: "Networking y cierre", speaker: "" }
      ],
      requirements: [
        "Registro previo obligatorio",
        "Perfil profesional en derecho laboral o RRHH",
        "Confirmación de asistencia"
      ],
      includes: [
        "Cocktail y catering",
        "Intercambio de tarjetas digitales",
        "Acceso a directorio de participantes",
        "Certificado de asistencia"
      ]
    },
    "4": {
      id: 4,
      title: "Seminario: Innovación y Tecnología",
      subtitle: "Tendencias tecnológicas en el mundo empresarial",
      description: "Descubre las últimas tendencias en tecnología aplicada al derecho y recursos humanos. Inteligencia artificial, blockchain y más.",
      fullDescription: `
        <p>Un seminario especializado en las últimas innovaciones tecnológicas que están transformando el ejercicio del derecho y la gestión de recursos humanos en las empresas modernas.</p>
        
        <h3>Temáticas que abordaremos</h3>
        <p>Exploraremos las tecnologías emergentes que están revolucionando el sector jurídico-empresarial, desde la inteligencia artificial aplicada al derecho hasta las nuevas herramientas de gestión de talento.</p>
        
        <h3>Contenido del seminario</h3>
        <ul>
          <li>Inteligencia artificial en la práctica jurídica</li>
          <li>Blockchain y contratos inteligentes</li>
          <li>Herramientas digitales para RRHH</li>
          <li>Automatización de procesos legales</li>
          <li>Ciberseguridad en el entorno empresarial</li>
          <li>El futuro del trabajo remoto e híbrido</li>
        </ul>
        
        <h3>Metodología</h3>
        <p>Formato híbrido que combina ponencias magistrales con demostraciones prácticas de herramientas tecnológicas y casos de uso reales en empresas líderes del sector.</p>
      `,
      date: "28 FEB",
      fullDate: "Miércoles, 28 de Febrero 2024",
      time: "16:00 - 18:00",
      format: "Híbrido",
      location: "Sagardoy Business School + Online",
      category: "Seminario",
      level: "Avanzado",
      duration: "2 horas",
      price: "€75 presencial / €45 online",
      maxParticipants: "100 presencial + 300 online",
      language: "Español",
      color: "bg-purple-500",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
      speakers: [
        {
          name: "Dr. Miguel Tech",
          title: "Experto en LegalTech",
          expertise: "Tecnología y Derecho",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
          bio: "Pionero en la aplicación de tecnología al sector legal. Consultor en transformación digital para firmas de abogados."
        }
      ],
      agenda: [
        { time: "16:00 - 16:15", topic: "Bienvenida e introducción", speaker: "Sagardoy School" },
        { time: "16:15 - 17:00", topic: "IA y Blockchain en el derecho", speaker: "Dr. Miguel Tech" },
        { time: "17:00 - 17:45", topic: "Herramientas digitales para RRHH", speaker: "Dr. Miguel Tech" },
        { time: "17:45 - 18:00", topic: "Q&A y cierre", speaker: "Todos" }
      ],
      requirements: [
        "Conocimientos básicos de tecnología",
        "Registro previo",
        "Dispositivo con conexión estable (online)"
      ],
      includes: [
        "Material digital especializado",
        "Acceso a herramientas de demostración",
        "Grabación disponible 15 días",
        "Certificado de participación"
      ]
    }
  };

  const event = eventsData[id || ""];

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
      <section className="bg-white border-b">
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
                <Badge className={`${event.color} text-white mb-4`}>
                  {event.category}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-sagardoy-navy mb-4 leading-tight">
                  {event.title}
                </h1>
                <p className="text-xl text-sagardoy-blue leading-relaxed mb-6">
                  {event.subtitle}
                </p>
              </div>

              {/* Event Meta */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 p-6 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-sagardoy-blue mr-3" />
                  <div>
                    <p className="font-medium text-sagardoy-navy">Fecha</p>
                    <p className="text-sagardoy-blue text-sm">{event.fullDate}</p>
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
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-sagardoy-blue mr-3" />
                  <div>
                    <p className="font-medium text-sagardoy-navy">Participantes</p>
                    <p className="text-sagardoy-blue text-sm">{event.maxParticipants}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Card */}
            <div>
              <Card className="sticky top-8">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className={`${event.color} text-white rounded-lg p-4 mb-4 inline-block`}>
                      <div className="text-2xl font-bold">{event.date.split(' ')[0]}</div>
                      <div className="text-sm">{event.date.split(' ')[1]}</div>
                    </div>
                    <h3 className="text-xl font-bold text-sagardoy-navy mb-2">{event.title}</h3>
                    <p className="text-sagardoy-blue text-sm mb-4">{event.time} • {event.format}</p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-sagardoy-blue">Precio:</span>
                      <span className="font-semibold text-sagardoy-navy">{event.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sagardoy-blue">Duración:</span>
                      <span className="font-semibold text-sagardoy-navy">{event.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sagardoy-blue">Nivel:</span>
                      <span className="font-semibold text-sagardoy-navy">{event.level}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-sagardoy-gold text-white mb-4">
                    Registrarse Ahora
                  </Button>
                  
                  <Link href="/contacto">
                    <Button variant="outline" className="w-full border-sagardoy-navy text-sagardoy-navy hover:bg-sagardoy-navy hover:text-white">
                      Más Información
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Event Image */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />
        </div>
      </section>

      {/* Event Content */}
      <section className="bg-white pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div>
                <h2 className="text-3xl font-bold text-sagardoy-navy mb-6">Acerca del Evento</h2>
                <div 
                  className="prose prose-lg max-w-none text-sagardoy-blue"
                  dangerouslySetInnerHTML={{ __html: event.fullDescription }}
                />
              </div>

              {/* Speakers */}
              <div>
                <h2 className="text-3xl font-bold text-sagardoy-navy mb-6">Ponentes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {event.speakers.map((speaker: any, index: number) => (
                    <Card key={index}>
                      <CardContent className="p-6 text-center">
                        <img 
                          src={speaker.image} 
                          alt={speaker.name}
                          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                        />
                        <h3 className="text-lg font-bold text-sagardoy-navy mb-1">{speaker.name}</h3>
                        <p className="text-sagardoy-blue font-medium mb-2">{speaker.title}</p>
                        <p className="text-sagardoy-blue text-sm mb-3">{speaker.expertise}</p>
                        <p className="text-sagardoy-blue text-xs">{speaker.bio}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Agenda */}
              <div>
                <h2 className="text-3xl font-bold text-sagardoy-navy mb-6">Agenda</h2>
                <div className="space-y-4">
                  {event.agenda.map((item: any, index: number) => (
                    <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <div className="text-sagardoy-blue font-semibold mr-4 min-w-0 flex-shrink-0">
                        {item.time}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sagardoy-navy">{item.topic}</h4>
                        {item.speaker && (
                          <p className="text-sagardoy-blue text-sm">{item.speaker}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Requirements */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-sagardoy-navy mb-4">Requisitos</h3>
                  <ul className="space-y-2">
                    {event.requirements.map((req: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-sagardoy-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sagardoy-blue text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Includes */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-sagardoy-navy mb-4">Incluye</h3>
                  <ul className="space-y-2">
                    {event.includes.map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-sagardoy-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sagardoy-blue text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Share */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-sagardoy-navy mb-4">Compartir Evento</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Compartir
                    </Button>
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