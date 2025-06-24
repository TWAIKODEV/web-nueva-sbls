import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock, ArrowLeft, Share2, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NewsDetail() {
  const { t } = useLanguage();
  const { id } = useParams<{ id: string }>();

  // Datos completos de noticias
  const newsData: Record<string, any> = {
    "1": {
      id: 1,
      title: "Nuevo Máster de Acceso a la Abogacía 2024-2025",
      excerpt: "Sagardoy Business School presenta su programa oficial para el acceso a la profesión de abogado, con enfoque especializado en derecho laboral y empresarial.",
      content: `
        <p>Sagardoy Business School se complace en presentar la nueva edición del Máster de Acceso a la Abogacía para el curso 2024-2025, un programa que representa la excelencia en la formación jurídica especializada en derecho del trabajo y empresarial.</p>
        
        <h3>Características destacadas del programa</h3>
        <p>Este máster oficial, habilitante para el ejercicio de la abogacía en España, combina una sólida formación teórica con una intensa preparación práctica. Los estudiantes tendrán la oportunidad de realizar prácticas profesionales en algunos de los despachos más prestigiosos del país, especializados en derecho laboral y empresarial.</p>
        
        <h3>Metodología innovadora</h3>
        <p>El programa utiliza una metodología basada en casos reales, permitiendo a los estudiantes enfrentarse a situaciones jurídicas complejas desde el primer día. Nuestro claustro de profesores, compuesto por profesionales en activo de reconocido prestigio, aporta una perspectiva práctica y actualizada del ejercicio profesional.</p>
        
        <h3>Especialización en áreas de alta demanda</h3>
        <p>El máster pone especial énfasis en las áreas del derecho laboral, seguridad social, derecho empresarial y nuevas tecnologías aplicadas al derecho. Estas especializaciones responden a la creciente demanda del mercado jurídico actual y ofrecen a nuestros graduados una ventaja competitiva significativa.</p>
        
        <h3>Convenios y oportunidades profesionales</h3>
        <p>Gracias a nuestros convenios con los principales colegios de abogados y despachos especializados, los estudiantes tienen acceso a una amplia red de oportunidades profesionales. El 95% de nuestros graduados encuentra empleo en los primeros seis meses tras finalizar el programa.</p>
        
        <p>Las inscripciones para la nueva edición ya están abiertas. Para más información sobre el proceso de admisión y becas disponibles, contacta con nuestro equipo de admisiones.</p>
      `,
      date: "15 Enero 2024",
      category: "Máster",
      author: "Redacción SBS",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
      readTime: "5 min",
      tags: ["Máster", "Abogacía", "Derecho Laboral", "Formación"]
    },
    "2": {
      id: 2,
      title: "Nueva normativa laboral 2024: Impacto en las empresas",
      excerpt: "Análisis de los cambios normativos en derecho del trabajo y su impacto en la gestión empresarial y recursos humanos.",
      content: `
        <p>El año 2024 trae consigo importantes cambios en la normativa laboral española que afectarán significativamente a empresas de todos los tamaños. En Sagardoy Business School, nuestros expertos han analizado estas modificaciones para ayudar a profesionales y empresas a adaptarse eficazmente.</p>
        
        <h3>Principales cambios normativos</h3>
        <p>Entre las modificaciones más relevantes se encuentran las nuevas regulaciones sobre teletrabajo, la ampliación de los permisos parentales, y las modificaciones en materia de igualdad salarial. Estos cambios requieren una actualización inmediata de los protocolos empresariales y las políticas de recursos humanos.</p>
        
        <h3>Impacto en la gestión de RRHH</h3>
        <p>Las empresas deberán revisar sus convenios colectivos, actualizar sus sistemas de registro horario y implementar nuevas medidas de conciliación. La digitalización de los procesos de RRHH se convierte en una necesidad imperativa para cumplir con las nuevas obligaciones legales.</p>
        
        <h3>Oportunidades de formación</h3>
        <p>Ante estos cambios, la formación continua en derecho laboral se vuelve esencial. Nuestros programas executive ofrecen actualización normativa en tiempo real, preparando a los profesionales para navegar este nuevo marco legal con confianza.</p>
        
        <p>Sagardoy Business School organizará próximamente seminarios especializados para analizar en profundidad estas modificaciones normativas y sus implicaciones prácticas.</p>
      `,
      date: "12 Enero 2024",
      category: "Derecho Laboral",
      author: "María González",
      image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
      readTime: "3 min",
      tags: ["Normativa", "Derecho Laboral", "RRHH", "Empresa"]
    },
    "3": {
      id: 3,
      title: "Colaboración con Colegios de Abogados",
      excerpt: "Sagardoy Business School firma convenios con principales colegios profesionales para fortalecer la formación práctica.",
      content: `
        <p>Sagardoy Business School ha firmado importantes convenios de colaboración con los principales colegios de abogados del país, fortaleciendo así su compromiso con la excelencia en la formación jurídica y la inserción profesional de sus estudiantes.</p>
        
        <h3>Alcance de los convenios</h3>
        <p>Estos acuerdos abarcan desde la realización de prácticas profesionales hasta el desarrollo conjunto de programas formativos especializados. Los colegios participantes incluyen Madrid, Barcelona, Valencia, Sevilla y Bilbao, cubriendo así las principales jurisdicciones del territorio nacional.</p>
        
        <h3>Beneficios para los estudiantes</h3>
        <p>Los estudiantes del Máster de Acceso a la Abogacía tendrán acceso preferente a prácticas en despachos colegiados, participación en actividades formativas complementarias y apoyo en el proceso de colegiación. Además, podrán beneficiarse de descuentos especiales en las cuotas colegiales durante su primer año de ejercicio.</p>
        
        <h3>Formación continua</h3>
        <p>Los convenios también contemplan la organización conjunta de seminarios, conferencias y jornadas de actualización profesional, manteniendo a nuestros graduados a la vanguardia de las novedades jurisprudenciales y normativas.</p>
        
        <h3>Reconocimiento profesional</h3>
        <p>Esta colaboración refuerza el reconocimiento de la calidad formativa de Sagardoy Business School en el ámbito jurídico profesional, consolidando nuestra posición como institución de referencia en la formación de abogados especializados en derecho laboral y empresarial.</p>
        
        <p>La firma de estos convenios se enmarca en la estrategia de la escuela de mantener vínculos estrechos con la profesión legal, asegurando que la formación impartida responda a las necesidades reales del mercado jurídico.</p>
      `,
      date: "10 Enero 2024",
      category: "Convenios",
      author: "Carlos Rodríguez",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
      readTime: "4 min",
      tags: ["Convenios", "Colegios", "Colaboración", "Prácticas"]
    },
    "4": {
      id: 4,
      title: "Innovación en metodologías de enseñanza jurídica",
      excerpt: "Sagardoy Business School implementa nuevas tecnologías educativas para mejorar la experiencia de aprendizaje en derecho.",
      content: `
        <p>La educación jurídica está experimentando una transformación sin precedentes gracias a la integración de nuevas tecnologías y metodologías innovadoras. Sagardoy Business School lidera esta evolución implementando herramientas de vanguardia que mejoran significativamente la experiencia de aprendizaje.</p>
        
        <h3>Simuladores jurídicos avanzados</h3>
        <p>Hemos desarrollado simuladores de tribunales virtuales que permiten a los estudiantes practicar procedimientos judiciales en un entorno controlado y realista. Estas herramientas incluyen casos basados en jurisprudencia real y proporcionan feedback inmediato sobre el desempeño de los estudiantes.</p>
        
        <h3>Inteligencia artificial en el aula</h3>
        <p>La incorporación de sistemas de IA permite personalizar el aprendizaje según las necesidades individuales de cada estudiante. Estos sistemas analizan el progreso académico y sugieren recursos adicionales o áreas de mejora específicas.</p>
        
        <h3>Colaboración internacional virtual</h3>
        <p>Mediante plataformas de colaboración avanzadas, nuestros estudiantes pueden participar en sesiones conjuntas con universidades internacionales de prestigio, ampliando su perspectiva del derecho comparado y las prácticas jurídicas globales.</p>
        
        <h3>Biblioteca jurídica digital</h3>
        <p>El acceso a una biblioteca digital con más de 50,000 documentos jurídicos, actualizados en tiempo real, permite a los estudiantes mantenerse al día con las últimas novedades legislativas y jurisprudenciales.</p>
        
        <p>Esta apuesta por la innovación educativa posiciona a Sagardoy Business School como pionera en la transformación digital de la educación jurídica en España.</p>
      `,
      date: "8 Enero 2024",
      category: "Innovación",
      author: "Dr. Ana Martín",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
      readTime: "6 min",
      tags: ["Innovación", "Tecnología", "Educación", "Digital"]
    },
    "5": {
      id: 5,
      title: "Éxito de graduados en grandes despachos",
      excerpt: "Los graduados de Sagardoy Business School destacan en las principales firmas legales especializadas en derecho laboral.",
      content: `
        <p>Los resultados hablan por sí solos: el 98% de los graduados de Sagardoy Business School en los últimos cinco años han conseguido posiciones en los despachos más prestigiosos especializados en derecho laboral y empresarial del país.</p>
        
        <h3>Inserción profesional excepcional</h3>
        <p>Nuestros graduados ocupan posiciones de responsabilidad en firmas como Cuatrecasas, Garrigues, Baker McKenzie, y por supuesto, Sagardoy Abogados. Esta inserción exitosa es resultado de una formación integral que combina excelencia académica con experiencia práctica real.</p>
        
        <h3>Testimonios de éxito</h3>
        <p>Laura Fernández, graduada en 2022, actualmente es asociada senior en una firma internacional: "La formación recibida en Sagardoy Business School me preparó no solo técnicamente, sino también para enfrentar los desafíos reales del ejercicio profesional. La especialización en derecho laboral me ha abierto puertas que jamás imaginé".</p>
        
        <h3>Red de contactos profesionales</h3>
        <p>La extensa red de alumni de la escuela facilita oportunidades de networking y desarrollo profesional continuo. Organizamos eventos trimestrales donde graduados de diferentes promociones comparten experiencias y oportunidades laborales.</p>
        
        <h3>Reconocimiento internacional</h3>
        <p>Varios de nuestros graduados han sido reconocidos en rankings internacionales como "Rising Stars" en sus respectivas especialidades, consolidando la reputación de excelencia de nuestra institución a nivel global.</p>
        
        <p>Este éxito refuerza nuestro compromiso de seguir ofreciendo una formación de primer nivel que prepare a los futuros líderes del derecho laboral y empresarial.</p>
      `,
      date: "5 Enero 2024",
      category: "Graduados",
      author: "Departamento de Carreras",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
      readTime: "4 min",
      tags: ["Graduados", "Empleo", "Despachos", "Éxito"]
    }
  };

  const article = newsData[id || ""];

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

  const getBadgeColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "máster": return "bg-sagardoy-blue";
      case "derecho laboral": return "bg-sagardoy-gold";
      case "convenios": return "bg-green-500";
      case "innovación": return "bg-purple-500";
      case "graduados": return "bg-red-500";
      default: return "bg-gray-500";
    }
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
            <Badge className={`${getBadgeColor(article.category)} text-white mb-4`}>
              {article.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-sagardoy-navy mb-6 leading-tight">
              {article.title}
            </h1>
            <p className="text-xl text-sagardoy-blue leading-relaxed mb-8">
              {article.excerpt}
            </p>
          </div>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-sagardoy-blue mb-8 pb-8 border-b">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{article.readTime} de lectura</span>
            </div>
            <div className="flex items-center ml-auto">
              <Button variant="ghost" size="sm" className="text-sagardoy-blue hover:text-sagardoy-navy">
                <Share2 className="w-4 h-4 mr-2" />
                Compartir
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-white pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-sagardoy-blue leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-lg font-semibold text-sagardoy-navy mb-4">Etiquetas</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag: string, index: number) => (
                <Badge key={index} variant="outline" className="text-sagardoy-blue border-sagardoy-blue">
                  {tag}
                </Badge>
              ))}
            </div>
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