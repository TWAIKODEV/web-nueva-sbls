import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Target, TrendingUp, Building2, CheckCircle, Award, Clock, Globe, Shield, Briefcase, Code, Lightbulb, BookOpen, Settings, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CorporateTraining() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const areas = [
    {
      title: "Recursos Humanos",
      description: "El gran impacto que ha tenido la pandemia tanto en las estructuras organizativas, como en las metodologías y procesos de trabajo, la dificultad para atraer y seleccionar profesionales cualificados, la dificultad de diseñar e implantar un plan de conciliación flexible y adaptado a la nueva realidad, ponen de manifiesto que la función de RR.HH. es sin duda una pieza fundamental en la viabilidad y sostenibilidad del negocio.",
      details: "A través de nuestros programas in-company especializados en RR.HH. hemos ayudado a organizaciones de muy diversos sectores a reflexionar y replantearse sus políticas de RR.HH., su modelo de gestión de talento y estrategia de compensación. Adicionalmente, la aceleración de transformación digital en muchos casos, y el trabajo en remoto han desembocado en un nuevo modelo organizativo, nuevas formas de relación entre las personas, y un importante impacto en la cultura y valores.",
      programs: ["Gestión Avanzada de Talento", "Transformación Cultural y Organizativa", "Nuevos Modelos de Trabajo"],
      clients: ["Múltiples sectores corporativos"],
      icon: Users,
      color: "bg-blue-500",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Management",
      description: "La situación actual está poniendo en jaque todo nuestro modelo de desarrollo profesional desde una triple perspectiva: Nuestra actitud, autoliderazgo y gestión emocional ante el impacto de la incertidumbre. La forma en que gestionamos, dirigimos y lideramos. La forma en que nos relacionamos con los clientes y afrontamos la incertidumbre del mercado.",
      details: "Desde Sagardoy Business & Law School, con nuestro claustro de reconocidos expertos, hemos desarrollado una amplia experiencia en la formación de directivos de muy diversos sectores. Ante esta situación, es clave invertir en la formación del equipo directivo, profesional y la fuerza de ventas para ajustar el desarrollo de sus competencias a la situación presente.",
      programs: ["High Performance Management", "Liderazgo de Nueva Generación", "Gestión del Cambio"],
      clients: ["Directivos de diversos sectores"],
      icon: Target,
      color: "bg-green-500",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Banca y Finanzas",
      description: "La formación financiera y regulatoria en el sector Banca y Seguros es uno de los pilares fundamentales en los que se soporta el amplio expertise de la formación in-company de Sagardoy Business & Law School.",
      details: "Actualmente nuestros programas están contrastados con los requerimientos de la CNMV a los efectos del cumplimiento con MIFID II, y con los estándares de calidad y certificación de EFPA España, disponiendo de programas acreditados por esta institución.",
      programs: ["Cumplimiento MIFID II", "Certificaciones EFPA", "Regulación Financiera"],
      clients: ["Bankinter", "BBVA", "Seguros Santa Lucía"],
      icon: TrendingUp,
      color: "bg-purple-500",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Jurídica/Legal Tech",
      description: "En Sagardoy B&L School, contamos con una dilatada experiencia en la formación y actualización de profesionales del ámbito jurídico, societario, laboral y fiscal.",
      details: "A través de nuestros programas in-company hemos ayudado a organizaciones de muy diversos sectores a formar rápidamente a sus profesionales sobre cambios normativos y nuevas regulaciones, así como las recientes normativas que regulan los negocios con base tecnológica, y la transformación digital.",
      programs: ["Liderando las Relaciones Laborales", "Programa Nuevo Marco de Relaciones Laborales post Covid", "Legal Tech y Transformación Digital"],
      clients: ["Equipos de relaciones laborales", "HR Business Partners"],
      icon: Briefcase,
      color: "bg-indigo-500",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Innovación",
      description: "En Sagardoy B&L School, contamos con una dilatada experiencia en el desarrollo de programas que impulsan estrategias de transformación cultural, digitalización y desarrollo de culturas de innovación, creatividad e intra-emprendimiento.",
      details: "Nuestros programas están diseñados para desarrollar capacidades de innovación e intraemprendimiento en los equipos corporativos, impulsando la creatividad y fomentando una mentalidad disruptiva orientada al crecimiento sostenible.",
      programs: ["Transformación Cultural", "Digitalización Empresarial", "Intraemprendimiento"],
      clients: ["Equipos corporativos", "Departamentos de innovación"],
      icon: Lightbulb,
      color: "bg-orange-500",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Ciberseguridad",
      description: "El 70% de los ciber ataques y brechas de seguridad dependen de los empleados. Sagardoy B&L School y AIWIN desarrollan una herramienta única que aúna formación y gamificación de última generación: Firewall, el sistema de concienciación en ciberseguridad de mayor impacto.",
      details: "Se trata de una aventura formativa inmersiva, que consigue atrapar la atención de los participantes y transformar sus conductas para proteger a la compañía de ciberataques. Este programa cuenta con la participación de una selección de los mejores expertos de Ciberseguridad, que comparten de primera mano experiencias reales que han vivido.",
      programs: ["Firewall - Sistema de Concienciación", "Gamificación en Ciberseguridad", "Prevención de Ciberataques"],
      clients: ["Empresas en transformación digital"],
      icon: Shield,
      color: "bg-red-500",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Desarrollo de Negocio y Redes Comerciales",
      description: "Nuestros docentes expertos en materia de desarrollo comercial, y coaching de ventas, coinciden en que la mayor parte de las redes comerciales adolecen de falta de confianza y seguridad con canales telemáticos, errores en la preparación y ejecución de las reuniones virtuales.",
      details: "En este contexto, Sagardoy B&L School, con su claustro de expertos formadores de desarrollo de negocio, ha colaborado en proyectos de formación comercial para acelerar la adaptación de los procedimientos comerciales a través de la formación en técnicas propias de los medios digitales.",
      programs: ["Técnicas de Venta Digital", "Coaching Comercial", "Desarrollo de Redes Comerciales"],
      clients: ["Cofares", "Ecoembes", "Italfarmaco"],
      icon: Globe,
      color: "bg-teal-500",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    }
  ];

  const methodologyAreas = [
    {
      title: "Formaciones Personalizadas",
      description: "Programas exclusivos adaptados a los retos concretos de cada empresa, diseñados para potenciar competencias críticas, impulsar la innovación y reforzar la cohesión de los equipos.",
      icon: BookOpen,
      color: "text-green-600"
    },
    {
      title: "Programas de Management y Desarrollo Directivo",
      description: "Formación avanzada para líderes que necesitan gestionar el cambio, tomar decisiones con impacto y generar valor desde una perspectiva ética, estratégica y transformadora.",
      icon: Settings,
      color: "text-yellow-600"
    },
    {
      title: "Especialización Funcional Avanzada",
      description: "Módulos centrados en áreas clave del negocio —como recursos humanos, relaciones laborales o transformación organizativa—, con un enfoque práctico y orientado a resultados sostenibles.",
      icon: Zap,
      color: "text-red-600"
    }
  ];

  const stats = [
    { value: "500+", label: "Empresas Formadas", icon: Building2 },
    { value: "20+", label: "Años de Experiencia", icon: Award },
    { value: "95%", label: "Satisfacción Cliente", icon: CheckCircle },
    { value: "50+", label: "Consultores Expertos", icon: Users }
  ];

  const activeArea = areas[activeTab];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-sagardoy-dark-blue py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl text-white mb-6 title">
              Formación in Company
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Programas de formación corporativa diseñados específicamente para las necesidades de tu empresa
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="mb-6">
                <Badge className="bg-sagardoy-gold text-white mb-4">MEJORANDO LA PRODUCTIVIDAD</Badge>
                <h2 className="text-3xl md:text-subtitle text-sagardoy-navy mb-6 title">
                  El futuro de tu empresa
                </h2>
              </div>
              
              <div className="space-y-6 text-sagardoy-blue">
                <p>
                  En Sagardoy Business & Law School somos conscientes de que pocas veces las necesidades de formación y desarrollo 
                  corporativo coinciden con la oferta de formación existente en el mercado. Especialmente cuando afectan a un amplio 
                  colectivo de la compañía.
                </p>
                
                <p>
                  Para ofrecer una solución en estos casos, nuestro departamento de Formación in company dispone de un equipo de 
                  consultores con más de 20 años de experiencia en el diseño e implantación de proyectos de formación corporativa.
                </p>
                
                <p>
                  Desde una perspectiva metodológica, nuestro equipo cuenta con un avanzado conocimiento en los sistemas pedagógicos 
                  más innovadores: plataformas de formación digital (LMS), mobile learning, metodologías síncronas, learning apps, 
                  gaming, formación experiencial, outdoor training entre otros.
                </p>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Corporate training session" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
              
              {/* Stats Overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  {stats.slice(0, 2).map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                      <div key={index} className="text-center">
                        <IconComponent className="w-6 h-6 text-sagardoy-gold mx-auto mb-2" />
                        <div className="text-xl font-bold text-sagardoy-navy">{stat.value}</div>
                        <div className="text-xs text-sagardoy-blue">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Areas de Especialización con Pestañas */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-subtitle text-sagardoy-navy mb-4 title">
                Áreas de Especialización
              </h2>
              <p className="text-xl text-sagardoy-blue max-w-3xl mx-auto">
                Nuestros programas especializados cubren las principales necesidades de desarrollo corporativo
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {areas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeTab === index
                        ? 'bg-sagardoy-navy text-white shadow-lg'
                        : 'bg-white text-sagardoy-blue hover:bg-gray-100'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="hidden sm:inline">{area.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`${activeArea.color} w-16 h-16 rounded-lg flex items-center justify-center`}>
                        <activeArea.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-sagardoy-navy">{activeArea.title}</h3>
                    </div>
                    
                    <p className="text-sagardoy-blue leading-relaxed mb-6">
                      {activeArea.description}
                    </p>
                    
                    <p className="text-sagardoy-blue leading-relaxed mb-6">
                      {activeArea.details}
                    </p>

                    {/* Programs */}
                    <div className="mb-6">
                      <h4 className="font-bold text-sagardoy-navy mb-3">Programas Destacados:</h4>
                      <div className="space-y-2">
                        {activeArea.programs.map((program, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-sagardoy-gold flex-shrink-0" />
                            <span className="text-sagardoy-blue text-sm">{program}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Clients */}
                    <div className="mb-6">
                      <h4 className="font-bold text-sagardoy-navy mb-3">Clientes:</h4>
                      <div className="flex flex-wrap gap-2">
                        {activeArea.clients.map((client, index) => (
                          <Badge key={index} variant="outline" className="text-sagardoy-blue">
                            {client}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Link href="/contacto">
                      <Button className="bg-sagardoy-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300">
                        Solicitar Información
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>

                  {/* Image */}
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={activeArea.image}
                      alt={`${activeArea.title} training`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Metodología */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-subtitle text-sagardoy-navy mb-4 title">
                Nuestra Metodología
              </h2>
              <p className="text-xl text-sagardoy-blue max-w-4xl mx-auto">
                El profundo conocimiento de los recursos pedagógicos, junto con el conocimiento del negocio de las diferentes empresas e 
                industrias, nos permite diseñar proyectos alineados al negocio con la estrategia metodológica más eficiente.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {methodologyAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="mb-6">
                      <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <IconComponent className={`w-10 h-10 ${area.color}`} />
                      </div>
                      <h3 className="text-xl font-bold text-sagardoy-navy mb-3">{area.title}</h3>
                      <p className="text-sagardoy-blue leading-relaxed">{area.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Link href="/contacto">
                <Button className="bg-sagardoy-gold text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300">
                  Solicitar Información
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-sagardoy-navy rounded-2xl p-12 text-center">
            <h2 className="text-subtitle text-white mb-12 title">Nuestros Resultados</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <IconComponent className="w-12 h-12 text-sagardoy-gold mx-auto mb-4" />
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-slate-300">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h2 className="text-subtitle text-sagardoy-navy mb-6 title">
              ¿Listo para transformar tu empresa?
            </h2>
            <p className="text-xl text-sagardoy-blue mb-8 max-w-3xl mx-auto">
              Desde Sagardoy Business & Law School, con nuestro claustro de reconocidos expertos, hemos desarrollado una amplia 
              experiencia en la formación in company y el desarrollo de competencias profesionales.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button className="bg-sagardoy-gold text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300">
                  Contactar Ahora
                </Button>
              </Link>
              <Link href="/programas">
                <Button variant="outline" className="border-2 border-sagardoy-navy text-sagardoy-navy px-8 py-3 rounded-lg font-semibold hover:bg-sagardoy-navy hover:text-white transition-all duration-300">
                  Ver Programas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}