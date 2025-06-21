import { Calendar, User, Tag, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function News() {
  const featuredNews = {
    id: 1,
    title: "Sagardoy Business School lanza nuevo programa de MBA Digital",
    excerpt: "El programa combina metodologías tradicionales con las últimas tendencias en transformación digital, preparando a los ejecutivos para liderar en la era digital.",
    content: "La nueva propuesta académica incluye módulos especializados en inteligencia artificial, blockchain, y gestión de equipos remotos...",
    date: "15 Enero 2024",
    category: "MBA",
    author: "Redacción SBS",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    readTime: "5 min"
  };

  const news = [
    {
      id: 2,
      title: "Reconocimiento internacional en educación ejecutiva",
      excerpt: "La escuela recibe el premio Excellence in Executive Education por su innovadora metodología pedagógica.",
      date: "12 Enero 2024",
      category: "Premios",
      author: "María González",
      image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      readTime: "3 min"
    },
    {
      id: 3,
      title: "Alianza estratégica con universidades europeas",
      excerpt: "Nueva colaboración para programas de intercambio internacional y doble titulación con instituciones de prestigio.",
      date: "10 Enero 2024",
      category: "Alianzas",
      author: "Carlos Rodríguez",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      readTime: "4 min"
    },
    {
      id: 4,
      title: "Graduación extraordinaria de la promoción 2023",
      excerpt: "Más de 300 nuevos MBA y máster se gradúan con perspectivas laborales excepcionales en el mercado actual.",
      date: "8 Enero 2024",
      category: "Graduación",
      author: "Ana Martín",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      readTime: "6 min"
    },
    {
      id: 5,
      title: "Nuevas becas para profesionales en transición",
      excerpt: "Programa de ayudas económicas dirigido a ejecutivos en procesos de cambio de carrera o sectores emergentes.",
      date: "5 Enero 2024",
      category: "Becas",
      author: "Luis Fernández",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      readTime: "4 min"
    },
    {
      id: 6,
      title: "Conferencia magistral sobre liderazgo sostenible",
      excerpt: "Expertos internacionales debaten sobre el futuro del liderazgo empresarial responsable y sostenible.",
      date: "3 Enero 2024",
      category: "Eventos",
      author: "Patricia Sánchez",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      readTime: "5 min"
    }
  ];

  const upcomingEvents = [
    {
      day: "25",
      month: "ENE",
      title: "Webinar: Liderazgo en Tiempos de Crisis",
      description: "Conferencia magistral con expertos internacionales",
      time: "18:00 - 19:30",
      format: "Online",
      color: "bg-sagardoy-gold"
    },
    {
      day: "02",
      month: "FEB",
      title: "Jornada de Puertas Abiertas MBA",
      description: "Conoce nuestras instalaciones y metodología",
      time: "10:00 - 14:00",
      format: "Presencial",
      color: "bg-sagardoy-blue"
    },
    {
      day: "15",
      month: "FEB",
      title: "Networking Business Leaders",
      description: "Encuentro exclusivo para alumni y profesionales",
      time: "19:00 - 22:00",
      format: "Madrid",
      color: "bg-green-500"
    },
    {
      day: "28",
      month: "FEB",
      title: "Seminario: Innovación y Tecnología",
      description: "Tendencias tecnológicas en el mundo empresarial",
      time: "16:00 - 18:00",
      format: "Híbrido",
      color: "bg-purple-500"
    }
  ];

  const getBadgeColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "mba": return "bg-sagardoy-gold";
      case "premios": return "bg-green-500";
      case "alianzas": return "bg-sagardoy-blue";
      case "graduación": return "bg-purple-500";
      case "becas": return "bg-orange-500";
      case "eventos": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-sagardoy-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Noticias y <span className="text-sagardoy-gold">Eventos</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Mantente al día con las últimas novedades, eventos y logros de nuestra comunidad académica
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Latest News */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-sagardoy-navy mb-8">Últimas Noticias</h2>
              
              {/* Featured News Article */}
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-8">
                <img 
                  src={featuredNews.image} 
                  alt={featuredNews.title}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 text-sm text-sagardoy-gray mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{featuredNews.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{featuredNews.author}</span>
                    </div>
                    <Badge className={`${getBadgeColor(featuredNews.category)} text-white`}>
                      {featuredNews.category}
                    </Badge>
                    <span>{featuredNews.readTime} lectura</span>
                  </div>
                  <h3 className="text-2xl font-bold text-sagardoy-navy mb-4">{featuredNews.title}</h3>
                  <p className="text-sagardoy-gray mb-6 leading-relaxed">{featuredNews.excerpt}</p>
                  <Button className="bg-sagardoy-blue text-white hover:bg-blue-700">
                    Leer artículo completo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Secondary News Articles */}
              <div className="space-y-6">
                {news.map((article) => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <CardContent className="md:w-2/3 p-6">
                        <div className="flex items-center gap-3 text-sm text-sagardoy-gray mb-3">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{article.date}</span>
                          </div>
                          <Badge className={`${getBadgeColor(article.category)} text-white text-xs`}>
                            {article.category}
                          </Badge>
                          <span>{article.readTime}</span>
                        </div>
                        <h4 className="text-xl font-bold text-sagardoy-navy mb-3">{article.title}</h4>
                        <p className="text-sagardoy-gray mb-4">{article.excerpt}</p>
                        <Button variant="ghost" className="text-sagardoy-blue hover:text-sagardoy-navy font-semibold p-0">
                          Leer más <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <Button className="bg-sagardoy-navy text-white px-8 py-3 hover:bg-blue-800">
                  Cargar más noticias
                </Button>
              </div>
            </div>

            {/* Upcoming Events Sidebar */}
            <div>
              <h3 className="text-2xl font-bold text-sagardoy-navy mb-6">Próximos Eventos</h3>
              
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className={`${event.color} text-white rounded-lg p-3 text-center min-w-[60px]`}>
                          <div className="text-lg font-bold">{event.day}</div>
                          <div className="text-xs">{event.month}</div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-sagardoy-navy mb-2">{event.title}</h4>
                          <p className="text-sm text-sagardoy-gray mb-3">{event.description}</p>
                          <div className="flex items-center text-xs text-sagardoy-gray">
                            <Calendar className="w-3 h-3 mr-1" />
                            <span>{event.time}</span>
                            <span className="mx-2">•</span>
                            <span>{event.format}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-6">
                <Button className="w-full bg-sagardoy-navy text-white py-3 hover:bg-blue-800">
                  Ver Todos los Eventos
                </Button>
              </div>

              {/* Newsletter Signup */}
              <Card className="mt-8 p-6 bg-sagardoy-gold text-white">
                <CardContent className="p-0">
                  <h4 className="font-bold text-lg mb-3">Newsletter SBS</h4>
                  <p className="text-sm mb-4">Recibe las últimas noticias y eventos directamente en tu email</p>
                  <div className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="tu@email.com"
                      className="w-full px-3 py-2 rounded text-gray-900 text-sm"
                    />
                    <Button className="w-full bg-white text-sagardoy-gold hover:bg-gray-100">
                      Suscribirse
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
