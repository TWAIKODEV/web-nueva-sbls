import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, ArrowRight, Filter } from "lucide-react";
import { useState } from "react";

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const eventCategories = [
    { id: "todos", name: "Todos los Eventos" },
    { id: "corporativos", name: "Eventos Corporativos" },
    { id: "sectoriales", name: "Eventos Sectoriales" },
    { id: "mesas-redondas", name: "Mesas Redondas" }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Encuentro Anual de Directivos de RRHH",
      description: "Jornada dedicada a las últimas tendencias en gestión de talento y transformación digital en recursos humanos.",
      date: "15 de Febrero, 2025",
      time: "09:00 - 18:00",
      location: "Sede Sagardoy - Madrid",
      category: "corporativos",
      type: "Presencial",
      attendees: "200+ directivos",
      price: "Gratuito para clientes",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      speakers: ["Ana García - Directora de RRHH, BBVA", "Carlos Ruiz - Consultor Senior", "María López - Experta en Transformación Digital"],
      agenda: ["09:00 - Recepción y networking", "10:00 - Conferencia magistral", "12:00 - Mesa redonda", "14:00 - Almuerzo", "16:00 - Talleres prácticos"]
    },
    {
      id: 2,
      title: "Mesa Redonda: El Futuro del Derecho Laboral",
      description: "Debate sobre las nuevas regulaciones laborales y su impacto en las empresas post-COVID.",
      date: "22 de Febrero, 2025",
      time: "18:00 - 20:00",
      location: "Formato Híbrido",
      category: "mesas-redondas",
      type: "Híbrido",
      attendees: "150+ profesionales",
      price: "Entrada libre",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      speakers: ["Dr. Juan Sagardoy - Fundador", "Elena Martín - Abogada Laboralista", "Roberto Fernández - Especialista en Relaciones Laborales"],
      agenda: ["18:00 - Bienvenida", "18:15 - Presentación del marco normativo", "19:00 - Debate abierto", "19:45 - Preguntas del público"]
    },
    {
      id: 3,
      title: "Jornada Sectorial: Innovación en Banca y Fintech",
      description: "Análisis de las tendencias disruptivas en el sector financiero y su regulación.",
      date: "05 de Marzo, 2025",
      time: "10:00 - 17:00",
      location: "Centro de Convenciones - Madrid",
      category: "sectoriales",
      type: "Presencial",
      attendees: "300+ expertos",
      price: "295€",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      speakers: ["Patricia Silva - Directora de Innovación, Bankinter", "Miguel Torres - Consultor Fintech", "Laura Vega - Especialista en Regulación Financiera"],
      agenda: ["10:00 - Registro", "10:30 - Keynote: El futuro de la banca", "12:00 - Panel de innovación", "14:00 - Networking lunch", "15:30 - Casos prácticos"]
    },
    {
      id: 4,
      title: "Webinar: Ciberseguridad Corporativa",
      description: "Estrategias avanzadas para proteger los activos digitales empresariales.",
      date: "12 de Marzo, 2025",
      time: "16:00 - 17:30",
      location: "Online",
      category: "corporativos",
      type: "Virtual",
      attendees: "500+ participantes",
      price: "Gratuito",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      speakers: ["David Sánchez - Experto en Ciberseguridad", "Carmen Ruiz - Consultora en Seguridad Digital"],
      agenda: ["16:00 - Introducción", "16:15 - Amenazas actuales", "16:45 - Herramientas de protección", "17:15 - Q&A"]
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: "Congreso Internacional de Derecho Corporativo",
      description: "Evento anual que reunió a más de 500 expertos internacionales en derecho empresarial.",
      date: "Noviembre 2024",
      location: "Madrid Convention Center",
      category: "corporativos",
      attendees: "500+ asistentes",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      highlights: ["Ponencias magistrales de 15 países", "Networking internacional", "Certificación profesional"]
    },
    {
      id: 6,
      title: "Mesa Redonda: Transformación Digital Post-COVID",
      description: "Análisis del impacto de la pandemia en la digitalización empresarial.",
      date: "Octubre 2024",
      location: "Sede Sagardoy",
      category: "mesas-redondas",
      attendees: "150+ directivos",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      highlights: ["Casos reales de transformación", "Metodologías innovadoras", "Estrategias de implementación"]
    },
    {
      id: 7,
      title: "Jornada Sectorial: Retail y Nueva Normalidad",
      description: "Estrategias de adaptación del sector retail a los nuevos hábitos de consumo.",
      date: "Septiembre 2024",
      location: "Híbrido",
      category: "sectoriales",
      attendees: "250+ profesionales",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      highlights: ["Tendencias de consumo", "Omnicanalidad", "Experiencia del cliente"]
    },
    {
      id: 8,
      title: "Encuentro de Alumni - Promoción 2020",
      description: "Reunión anual de graduados para compartir experiencias y crear sinergias profesionales.",
      date: "Junio 2024",
      location: "Sede Sagardoy",
      category: "corporativos",
      attendees: "100+ alumni",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      highlights: ["Casos de éxito profesional", "Networking de alto nivel", "Nuevas oportunidades de negocio"]
    }
  ];

  const filteredUpcomingEvents = selectedCategory === "todos" 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === selectedCategory);

  const filteredPastEvents = selectedCategory === "todos"
    ? pastEvents
    : pastEvents.filter(event => event.category === selectedCategory);

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

      {/* About Events Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-sagardoy-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-sagardoy-navy mb-4">Eventos Corporativos</h3>
              <p className="text-sagardoy-gray">
                Organizamos encuentros especializados para directivos, profesionales y expertos de diferentes sectores, 
                fomentando el networking y el intercambio de conocimientos.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-sagardoy-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Filter className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-sagardoy-navy mb-4">Eventos Sectoriales</h3>
              <p className="text-sagardoy-gray">
                Jornadas especializadas por industria que abordan las tendencias, regulaciones y desafíos específicos 
                de cada sector económico.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-sagardoy-light-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-sagardoy-navy mb-4">Mesas Redondas</h3>
              <p className="text-sagardoy-gray">
                Debates de alto nivel con expertos reconocidos que analizan las cuestiones más relevantes 
                del panorama jurídico y empresarial actual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {eventCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-sagardoy-navy text-white shadow-lg'
                    : 'bg-white text-sagardoy-gray hover:bg-gray-50'
                }`}
              >
                {category.name}
              </button>
            ))}
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
            <p className="text-xl text-sagardoy-gray max-w-3xl mx-auto">
              Regístrate en nuestros próximos eventos y forma parte de la comunidad profesional de Sagardoy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredUpcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-sagardoy-gold text-white">
                      {eventCategories.find(cat => cat.id === event.category)?.name.replace("Eventos ", "")}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white text-sagardoy-navy">
                      {event.type}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-sagardoy-navy mb-3">{event.title}</h3>
                  <p className="text-sagardoy-gray mb-4 leading-relaxed">{event.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-sagardoy-gray">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-sagardoy-gray">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-sagardoy-gray">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-sagardoy-gray">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-sagardoy-navy">
                      {event.price}
                    </div>
                    <Link href={`/evento/${event.id}`}>
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
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sagardoy-navy mb-4">
              Eventos Realizados
            </h2>
            <p className="text-xl text-sagardoy-gray max-w-3xl mx-auto">
              Conoce algunos de los eventos más destacados que hemos organizado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPastEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={event.image}
                    alt={event.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-sagardoy-navy text-white text-xs">
                      {eventCategories.find(cat => cat.id === event.category)?.name.replace("Eventos ", "")}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <h4 className="font-bold text-sagardoy-navy mb-2 text-sm leading-tight">{event.title}</h4>
                  <p className="text-xs text-sagardoy-gray mb-2">{event.description}</p>
                  
                  <div className="space-y-1 mb-3">
                    <div className="flex items-center text-xs text-sagardoy-gray">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-xs text-sagardoy-gray">
                      <Users className="w-3 h-3 mr-1" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    {event.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center text-xs text-sagardoy-gray">
                        <div className="w-1 h-1 bg-sagardoy-gold rounded-full mr-2"></div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
              <Button className="bg-sagardoy-gold text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300">
                Contactar para Eventos
              </Button>
            </Link>
            <Link href="/corporate-training">
              <Button variant="outline" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-sagardoy-navy transition-all duration-300">
                Formación Corporativa
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}