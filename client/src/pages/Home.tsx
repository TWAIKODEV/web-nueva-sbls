import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, Users, Building, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";
import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";

export default function Home() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: t("home.title"),
      titleHighlight: t("home.titleHighlight"),
      titleEnd: t("home.titleEnd"),
      subtitle: t("home.subtitle"),
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      imageAlt: "Business school students in modern classroom",
      primaryButton: t("home.explorePrograms"),
      primaryLink: "/programas",
      secondaryButton: t("home.moreInfo"),
      secondaryLink: "/contacto",
      stats: [
        { value: "5,200+", label: "Estudiantes" },
        { value: "25+", label: "Programas" }
      ]
    },
    {
      title: "Excelencia",
      titleHighlight: "Académica",
      titleEnd: "Reconocida",
      subtitle: "Más de 50 años formando a los mejores profesionales del derecho y los recursos humanos con metodología práctica.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      imageAlt: "Modern business school building",
      primaryButton: "Nuestros Programas",
      primaryLink: "/programas",
      secondaryButton: "La Escuela",
      secondaryLink: "/la-escuela",
      stats: [
        { value: "95%", label: "Empleabilidad" },
        { value: "200+", label: "Profesores" }
      ]
    },
    {
      title: "Innovación y",
      titleHighlight: "Tecnología",
      titleEnd: "Jurídica",
      subtitle: "Formación especializada en las últimas tendencias del derecho corporativo, laboral y nuevas tecnologías aplicadas.",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      imageAlt: "Technology in legal education",
      primaryButton: "Ver Noticias",
      primaryLink: "/noticias",
      secondaryButton: "Contactar",
      secondaryLink: "/contacto",
      stats: [
        { value: "50+", label: "Años Experiencia" },
        { value: "100+", label: "Empresas Colaboradoras" }
      ]
    }
  ];

  const apiPrograms = useQuery(api.programs.getPrograms);
  
  // Transform apiPrograms to match the expected format
  const programs = apiPrograms?.map(program => ({
    id: program.path,
    title: program.title,
    duration: program.duration,
    hours: program.hours,
    category: program.type === "master" ? "Máster" : 
              program.type === "incompany" ? "In Company" : "Especialización",
    image: program.cover
  })) || [];

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const stats = [
    { icon: TrendingUp, value: "50+", label: t("home.stats.experience") },
    { icon: Users, value: "10,000+", label: t("home.stats.professionals") },
    { icon: Building, value: "200+", label: t("home.stats.professors") },
    { icon: Award, value: "95%", label: t("home.stats.employability") }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Slider Section */}
      <section className="relative bg-gradient-to-br from-sagardoy-dark-blue via-sagardoy-blue to-sagardoy-light-blue py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        
        {/* Slider Container */}
        <div className="relative w-full">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {heroSlides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-sagardoy-blue">
                      <h1 className="text-4xl md:text-6xl leading-tight mb-6 title">
                        {slide.title}
                        <span className="text-sagardoy-gold"> {slide.titleHighlight}</span>
                        {slide.titleEnd && <><br />{slide.titleEnd}</>}
                      </h1>
                      <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
                        {slide.subtitle}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link href={slide.primaryLink}>
                          <Button className="bg-sagardoy-gold text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                            {slide.primaryButton}
                          </Button>
                        </Link>
                        <Link href={slide.secondaryLink}>
                          <Button variant="outline" className="border-2 border-white text-sagardoy-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                            {slide.secondaryButton}
                          </Button>
                        </Link>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <img 
                        src={slide.image} 
                        alt={slide.imageAlt} 
                        className="rounded-2xl shadow-2xl w-full h-auto"
                      />
                      
                      {/* Stats overlay */}
                      <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-lg">
                        <div className="flex items-center space-x-4">
                          {slide.stats.map((stat, statIndex) => (
                            <>
                              <div key={statIndex} className="text-center">
                                <div className="text-2xl font-bold text-sagardoy-dark-blue">{stat.value}</div>
                                <div className="text-sm text-sagardoy-blue">{stat.label}</div>
                              </div>
                              {statIndex < slide.stats.length - 1 && (
                                <div className="w-px h-12 bg-gray-200"></div>
                              )}
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-sagardoy-blue p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-sagardoy-blue p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-sagardoy-gold' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-70'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Programs Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-subtitle text-sagardoy-dark-blue mb-4 title">{t("home.ourPrograms")}</h2>
            <p className="text-xl text-sagardoy-blue max-w-3xl mx-auto">
              {t("home.programsSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => {
              const badgeColor = program.category === "MBA" ? "bg-sagardoy-gold" : 
                               program.category === "Máster" ? "bg-sagardoy-blue" : 
                               program.category === "In Company" ? "bg-purple-500" : "bg-green-500";
              
              return (
                <Card key={program.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-96 object-cover object-center"
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={`${badgeColor} text-white`}>{program.category}</Badge>
                      <span className="text-sagardoy-blue text-sm">{program.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-sagardoy-dark-blue mb-3">{program.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-sagardoy-dark-blue">{program.hours}</span>
                      <Link href={`/programa/${program.id}`}>
                        <Button variant="ghost" className="text-sagardoy-blue hover:text-sagardoy-navy font-semibold">
                          {t("home.viewMore")} <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/programas">
              <Button className="bg-sagardoy-dark-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-sagardoy-blue transition-colors duration-200">
                {t("programs.title")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About School Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-subtitle text-sagardoy-dark-blue mb-6 title">La Escuela</h2>
              <p className="text-xl text-sagardoy-blue mb-8 leading-relaxed">
                Con más de 25 años de experiencia en formación ejecutiva, Sagardoy Business School se ha consolidado 
                como referente en educación empresarial de excelencia.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center p-6 bg-sagardoy-gray rounded-xl">
                      <IconComponent className="w-8 h-8 text-sagardoy-gold mx-auto mb-2" />
                      <div className="text-3xl font-bold text-sagardoy-dark-blue mb-2">{stat.value}</div>
                      <div className="text-sagardoy-blue">{stat.label}</div>
                    </div>
                  );
                })}
              </div>

              <Link href="/la-escuela">
                <Button className="bg-sagardoy-dark-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-sagardoy-blue transition-colors duration-200">
                  Conoce Más <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Modern business school building" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
              
              {/* Accreditation badges */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <Award className="w-8 h-8 text-sagardoy-gold mx-auto mb-2" />
                    <div className="text-xs text-sagardoy-blue">AACSB</div>
                  </div>
                  <div className="text-center">
                    <Award className="w-8 h-8 text-sagardoy-gold mx-auto mb-2" />
                    <div className="text-xs text-sagardoy-blue">EQUIS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sagardoy-dark-blue to-sagardoy-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para Transformar tu Carrera?
          </h2>
          <p className="text-xl text-sagardoy-blue mb-8 leading-relaxed">
            Únete a miles de profesionales que han impulsado su éxito con nuestros programas ejecutivos
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/solicitud-admision">
              <Button className="bg-sagardoy-gold text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-all duration-300">
                Solicitar Admisión
              </Button>
            </Link>
            <Link href="/programas">
              <Button variant="outline" className="border-2 border-white text-sagardoy-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-sagardoy-navy transition-all duration-300">
                Ver Programas
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-80">
            <div className="text-center">
              <div className="text-2xl font-bold text-sagardoy-blue mb-1">98%</div>
              <div className="text-sm text-sagardoy-blue">Satisfacción</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-sagardoy-blue mb-1">94%</div>
              <div className="text-sm text-sagardoy-blue">Empleabilidad</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-sagardoy-blue mb-1">47%</div>
              <div className="text-sm text-sagardoy-blue">Incremento Salarial</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-sagardoy-blue mb-1">5,200+</div>
              <div className="text-sm text-sagardoy-blue">Red de Contactos</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
