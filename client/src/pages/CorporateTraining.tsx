import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Target, TrendingUp, Building2, CheckCircle, Award, Clock, Globe, Shield, Briefcase, Code, Lightbulb, BookOpen, Settings, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CorporateTraining() {
  const { t } = useLanguage();

  const areas = [
    {
      title: "Recursos Humanos",
      description: "El gran impacto que ha tenido la pandemia tanto en las estructuras organizativas, como en las metodologías y procesos de trabajo, la dificultad para atraer y seleccionar profesionales cualificados, la dificultad de diseñar e implantar un plan de conciliación flexible y adaptado a la nueva realidad, ponen de manifiesto que la función de RR.HH. es sin duda una pieza fundamental en la viabilidad y sostenibilidad del negocio.",
      details: "A través de nuestros programas in-company especializados en RR.HH. hemos ayudado a organizaciones de muy diversos sectores a reflexionar y replantearse sus políticas de RR.HH., su modelo de gestión de talento y estrategia de compensación.",
      icon: Users,
      color: "bg-blue-500"
    },
    {
      title: "Management",
      description: "La situación actual está poniendo en jaque todo nuestro modelo de desarrollo profesional desde una triple perspectiva: Nuestra actitud, autoliderazgo y gestión emocional ante el impacto de la incertidumbre. La forma en que gestionamos, dirigimos y lideramos. La forma en que nos relacionamos con los clientes y afrontamos la incertidumbre del mercado.",
      details: "Desde Sagardoy Business & Law School, con nuestro claustro de reconocidos expertos, hemos desarrollado una amplia experiencia en la formación de directivos de muy diversos sectores a través nuestro programa 'High Performance Management' y 'Liderazgo de Nueva Generación'.",
      icon: Target,
      color: "bg-green-500"
    },
    {
      title: "Banca y Finanzas",
      description: "La formación financiera y regulatoria en el sector Banca y Seguros es uno de los pilares fundamentales en los que se soporta el amplio expertise de la formación in-company de Sagardoy Business & Law School.",
      details: "Actualmente nuestros programas están contrastados con los requerimientos de la CNMV a los efectos del cumplimiento con MIFID II, y con los estándares de calidad y certificación de EFPA España. Contamos con reconocidos clientes como Bankinter, BBVA o Seguros Santa Lucía entre otros.",
      icon: TrendingUp,
      color: "bg-purple-500"
    },
    {
      title: "Jurídica/Legal Tech",
      description: "En Sagardoy B&L School, contamos con una dilatada experiencia en la formación y actualización de profesionales del ámbito jurídico, societario, laboral y fiscal.",
      details: "A través de nuestros programas in-company 'Liderando las Relaciones Laborales' y 'Programa Nuevo Marco de Relaciones Laborales post Covid', hemos impulsado la actualización de equipos de relaciones laborales, responsables de RR.HH. y HR Business Partners para afrontar la nueva organización del trabajo.",
      icon: Briefcase,
      color: "bg-indigo-500"
    },
    {
      title: "Innovación",
      description: "En Sagardoy B&L School, contamos con una dilatada experiencia en el desarrollo de programas que impulsan estrategias de transformación cultural, digitalización y desarrollo de culturas de innovación, creatividad e intra-emprendimiento.",
      details: "Nuestros programas están diseñados para desarrollar capacidades de innovación e intraemprendimiento en los equipos corporativos.",
      icon: Lightbulb,
      color: "bg-orange-500"
    },
    {
      title: "Ciberseguridad",
      description: "El 70% de los ciber ataques y brechas de seguridad dependen de los empleados. Sagardoy B&L School y AIWIN desarrollan una herramienta única que aúna formación y gamificación de última generación: Firewall, el sistema de concienciación en ciberseguridad de mayor impacto.",
      details: "Se trata de una aventura formativa inmersiva, que consigue atrapar la atención de los participantes y transformar sus conductas para proteger a la compañía de ciberataques.",
      icon: Shield,
      color: "bg-red-500"
    },
    {
      title: "Desarrollo de Negocio y Redes Comerciales",
      description: "Nuestros docentes expertos en materia de desarrollo comercial, y coaching de ventas, coinciden en que la mayor parte de las redes comerciales adolecen de falta de confianza y seguridad con canales telemáticos, errores en la preparación y ejecución de las reuniones virtuales.",
      details: "Sagardoy B&L School, con su claustro de expertos formadores de desarrollo de negocio, ha colaborado en proyectos de formación comercial de compañías tales como Cofares, Ecoembes o Italfarmaco, para acelerar la adaptación de los procedimientos comerciales a través de la formación en técnicas propias de los medios digitales.",
      icon: Globe,
      color: "bg-teal-500"
    }
  ];

  const methodologyAreas = [
    {
      title: "Formaciones personalizadas",
      description: "Creación de programas exclusivos que abordan los desafíos únicos de tu compañía y potencian las competencias clave para lograr los objetivos y retos a los que se enfrenta.",
      icon: BookOpen,
      color: "text-green-600"
    },
    {
      title: "Programas de Management y Desarrollo Directivo",
      description: "Capacitación avanzada que desarrolla líderes visionarios capaces de gestionar el cambio y alcanzar un impacto significativo en la organización.",
      icon: Settings,
      color: "text-yellow-600"
    },
    {
      title: "Especialización Funcional Avanzada",
      description: "Módulos que profundizan en áreas estratégicas del negocio, mejorando el rendimiento y la eficiencia operativa.",
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <nav className="text-sm text-sagardoy-gray mb-4">
              <Link href="/" className="hover:text-sagardoy-blue">Inicio</Link>
              <span className="mx-2">/</span>
              <span>Formación in Company</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-sagardoy-navy mb-6">
              Formación in Company
            </h1>
            <p className="text-xl text-sagardoy-gray max-w-3xl mx-auto">
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
                <h2 className="text-3xl md:text-4xl font-bold text-sagardoy-navy mb-6">
                  El futuro de tu empresa
                </h2>
              </div>
              
              <div className="space-y-6 text-sagardoy-gray">
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
                        <div className="text-xs text-sagardoy-gray">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Areas de Especialización */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sagardoy-navy mb-4">
                Áreas de Especialización
              </h2>
              <p className="text-xl text-sagardoy-gray max-w-3xl mx-auto">
                Nuestros programas especializados cubren las principales necesidades de desarrollo corporativo
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {areas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <Card key={index} className="h-full hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8">
                      <div className={`${area.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-sagardoy-navy mb-4">{area.title}</h3>
                      <p className="text-sagardoy-gray leading-relaxed mb-4">{area.description}</p>
                      {area.details && (
                        <p className="text-sm text-sagardoy-gray leading-relaxed font-medium border-t border-gray-200 pt-4">
                          {area.details}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Metodología */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sagardoy-navy mb-4">
                Nuestra Metodología
              </h2>
              <p className="text-xl text-sagardoy-gray max-w-4xl mx-auto">
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
                      <p className="text-sagardoy-gray leading-relaxed">{area.description}</p>
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
            <h2 className="text-3xl font-bold text-white mb-12">Nuestros Resultados</h2>
            
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
            <h2 className="text-3xl md:text-4xl font-bold text-sagardoy-navy mb-6">
              ¿Listo para transformar tu empresa?
            </h2>
            <p className="text-xl text-sagardoy-gray mb-8 max-w-3xl mx-auto">
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