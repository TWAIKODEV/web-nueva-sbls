import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowLeft, BookOpen, User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";

export default function NewsDetail() {
  const { t } = useLanguage();
  const { id } = useParams<{ id: string }>();

  // Obtener noticias de la base de datos
  const apiNews = useQuery(api.news.getNews);
  
  // Encontrar la noticia específica por path
  const article = apiNews?.find((n: any) => n.path === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-sagardoy-navy mb-4">Artículo no encontrado</h1>
          <p className="text-sagardoy-gray mb-8">El artículo que buscas no existe o ha sido movido.</p>
          <Link href="/noticias">
            <Button className="bg-sagardoy-navy text-white">
              Volver a Noticias
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Función para formatear la fecha desde _creationTime
  const formatDate = (creationTime: number) => {
    const date = new Date(creationTime);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/noticias">
            <Button variant="ghost" className="mb-6 text-sagardoy-blue hover:text-sagardoy-navy">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Noticias
            </Button>
          </Link>
          
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-sagardoy-navy mb-6 leading-tight">
              {article.title}
            </h1>
          </div>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-sagardoy-blue mb-8 pb-8 border-b">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{formatDate(article._creationTime)}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <img 
            src={article.cover} 
            alt={article.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-white pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-8">
            <div 
              className="text-sagardoy-blue leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.introduction }}
            />
          </div>

          {/* Body */}
          <div className="prose prose-lg max-w-none mb-12">
            <div 
              className="text-sagardoy-blue leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.body }}
            />
          </div>

          {/* Related Actions */}
          <div className="mt-12 pt-8 border-t">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <BookOpen className="w-6 h-6 text-sagardoy-blue mr-3" />
                    <h3 className="text-lg font-semibold text-sagardoy-navy">Programas Relacionados</h3>
                  </div>
                  <p className="text-sagardoy-blue mb-4">
                    Descubre nuestros programas de formación especializada en las áreas tratadas en este artículo.
                  </p>
                  <Link href="/programas">
                    <Button className="bg-sagardoy-blue text-white hover:bg-sagardoy-navy">
                      Ver Programas
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <User className="w-6 h-6 text-sagardoy-gold mr-3" />
                    <h3 className="text-lg font-semibold text-sagardoy-navy">Contacta con Expertos</h3>
                  </div>
                  <p className="text-sagardoy-blue mb-4">
                    ¿Tienes dudas sobre este tema? Contacta con nuestro equipo de expertos.
                  </p>
                  <Link href="/contacto">
                    <Button variant="outline" className="border-sagardoy-gold text-sagardoy-gold hover:bg-sagardoy-gold hover:text-white">
                      Contactar
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}