import { Calendar, User, Tag, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";

export default function News() {
  const { t } = useLanguage();

  // Obtener datos de la base de datos
  const apiNews = useQuery(api.news.getNews);
  const apiEvents = useQuery(api.events.getEvents);

  // Función para formatear la fecha desde _creationTime
  const formatDate = (creationTime: number) => {
    const date = new Date(creationTime);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Función para extraer día y mes de la fecha de eventos
  const extractDateParts = (dateString: string) => {
    // La fecha viene como "Miércoles, 28 de mayo"
    const parts = dateString.split(', ');
    if (parts.length >= 2) {
      const dayPart = parts[1]; // "28 de mayo"
      const dayMatch = dayPart.match(/(\d+)/);
      const monthMatch = dayPart.match(/de\s+(\w+)/);
      
      if (dayMatch && monthMatch) {
        const day = dayMatch[1];
        const month = monthMatch[1].substring(0, 3).toUpperCase();
        return { day, month };
      }
    }
    return { day: "01", month: "ENE" };
  };

  // Obtener la primera noticia como destacada
  const featuredNews = apiNews?.[0];
  
  // Obtener las noticias restantes (excluyendo la primera)
  const news = apiNews?.slice(1) || [];
  
  // Obtener los primeros 4 eventos
  const upcomingEvents = apiEvents?.slice(0, 4) || [];

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
              {t("news.title")} <span className="text-sagardoy-gold">{t("news.titleHighlight")}</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              {t("news.subtitle")}
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
              <h2 className="text-3xl font-bold text-sagardoy-navy mb-8">{t("news.latestNews")}</h2>
              
              {/* Featured News Article */}
              {featuredNews && (
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-8">
                  <img 
                    src={featuredNews.cover} 
                    alt={featuredNews.title}
                    className="w-full h-90 object-cover"
                  />
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 text-sm text-sagardoy-blue mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{formatDate(featuredNews._creationTime)}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-sagardoy-navy mb-4">{featuredNews.title}</h3>
                    <Link href={`/noticia/${featuredNews.path}`}>
                      <Button className="bg-sagardoy-blue text-white hover:bg-blue-700">
                        Leer artículo completo <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )}

              {/* Secondary News Articles */}
              <div className="space-y-6">
                {news.map((article: any) => (
                  <Card key={article._id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img 
                          src={article.cover} 
                          alt={article.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <CardContent className="md:w-2/3 p-6">
                        <div className="flex items-center gap-3 text-sm text-sagardoy-blue mb-3">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{formatDate(article._creationTime)}</span>
                          </div>
                        </div>
                        <h4 className="text-xl font-bold text-sagardoy-navy mb-3">{article.title}</h4>
                        <Link href={`/noticia/${article.path}`}>
                          <Button variant="ghost" className="text-sagardoy-blue hover:text-sagardoy-navy font-semibold p-0">
                            Leer más <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>
                        </Link>
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
                {upcomingEvents.map((event: any, index: number) => {
                  const { day, month } = extractDateParts(event.date);
                  return (
                    <Card key={event._id} className="p-6 hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-0">
                        <div className="flex items-start space-x-4">
                          <div className="bg-sagardoy-blue text-white rounded-lg p-3 text-center min-w-[60px]">
                            <div className="text-lg font-bold">{day}</div>
                            <div className="text-xs">{month}</div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-sagardoy-navy mb-2">{event.title}</h4>
                            <div className="flex items-center text-xs text-sagardoy-blue mb-3">
                              <Calendar className="w-3 h-3 mr-1" />
                              <span>{event.time}</span>
                            </div>
                            <Link href={`/evento/${event.path}`}>
                              <Button size="sm" className="bg-sagardoy-gold text-white hover:bg-yellow-600">
                                Registrarse
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="mt-6">
                <Link href="/eventos">
                  <Button className="w-full bg-sagardoy-navy text-white py-3 hover:bg-blue-800">
                    Ver Todos los Eventos
                  </Button>
                </Link>
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
