import { Award, Users, Building, TrendingUp, Globe, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const stats = [
    { icon: TrendingUp, value: "50+", label: t("about.statsLabels.experience"), description: "Especialistas en formación jurídica y empresarial" },
    { icon: Users, value: "10,000+", label: t("about.statsLabels.professionals"), description: "Abogados y directivos de RRHH certificados" },
    { icon: Building, value: "200+", label: t("about.statsLabels.professors"), description: "Profesionales activos del sector jurídico y empresarial" },
    { icon: Award, value: "300+", label: t("about.statsLabels.collaborators"), description: "Red de despachos de abogados para prácticas profesionales" }
  ];

  const values = [
    {
      icon: Award,
      title: t("about.valuesList.specialization.title"),
      description: t("about.valuesList.specialization.description")
    },
    {
      icon: Globe,
      title: t("about.valuesList.experience.title"),
      description: t("about.valuesList.experience.description")
    },
    {
      icon: Users,
      title: t("about.valuesList.networking.title"),
      description: t("about.valuesList.networking.description")
    },
    {
      icon: BookOpen,
      title: t("about.valuesList.practical.title"),
      description: t("about.valuesList.practical.description")
    }
  ];

  const accreditations = [
    {
      name: "AACSB International",
      description: "Acreditación de la Association to Advance Collegiate Schools of Business",
      logo: "🏆"
    },
    {
      name: "EQUIS",
      description: "European Quality Improvement System para escuelas de negocio",
      logo: "⭐"
    },
    {
      name: "AMBA",
      description: "Association of MBAs - Acreditación internacional para programas MBA",
      logo: "🎖️"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-sagardoy-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl mb-6 title">
              {t("about.title")} <span className="text-sagardoy-gold">{t("about.titleHighlight")}</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              {t("about.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-subtitle text-sagardoy-navy mb-6 title">{t("about.mission")}</h2>
              <p className="text-xl text-sagardoy-blue mb-6 leading-relaxed">
                {t("about.missionText")}
              </p>
              <p className="text-lg text-sagardoy-blue mb-8 leading-relaxed">
                {t("about.missionDetails")}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-sagardoy-gold rounded-full p-2 mt-1">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sagardoy-navy mb-1">Calidad Educativa</h4>
                    <p className="text-sagardoy-blue">Programas acreditados internacionalmente</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-sagardoy-blue rounded-full p-2 mt-1">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sagardoy-navy mb-1">Comunidad Global</h4>
                    <p className="text-sagardoy-blue">Red internacional de profesionales</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-500 rounded-full p-2 mt-1">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sagardoy-navy mb-1">Innovación Continua</h4>
                    <p className="text-sagardoy-blue">Metodologías pedagógicas de vanguardia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Modern business school building" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
              
              {/* Floating stats */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-sagardoy-navy mb-1">98%</div>
                  <div className="text-sm text-sagardoy-blue">Satisfacción<br />del Estudiante</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-sagardoy-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-subtitle text-sagardoy-navy mb-4 title">Números que Hablan</h2>
            <p className="text-xl text-sagardoy-blue max-w-3xl mx-auto">
              Nuestro compromiso con la excelencia se refleja en los resultados y el impacto de nuestros programas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <IconComponent className="w-12 h-12 text-sagardoy-gold mx-auto mb-4" />
                    <div className="text-4xl font-bold text-sagardoy-navy mb-2">{stat.value}</div>
                    <div className="text-lg font-semibold text-sagardoy-navy mb-2">{stat.label}</div>
                    <div className="text-sm text-sagardoy-blue">{stat.description}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-subtitle text-sagardoy-navy mb-4 title">Nuestros Valores</h2>
            <p className="text-xl text-sagardoy-blue max-w-3xl mx-auto">
              Los principios que guían nuestra misión educativa y definen nuestra identidad institucional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="bg-sagardoy-gold rounded-lg p-3">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-sagardoy-navy mb-3">{value.title}</h3>
                        <p className="text-sagardoy-blue leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="py-20 bg-sagardoy-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-subtitle mb-4 title">
              Acreditaciones <span className="text-sagardoy-gold">Internacionales</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Nuestros programas cuentan con las más prestigiosas acreditaciones internacionales que garantizan la calidad educativa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accreditations.map((accreditation, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-center p-8">
                <CardContent className="p-0">
                  <div className="text-4xl mb-4">{accreditation.logo}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{accreditation.name}</h3>
                  <p className="text-blue-100 text-sm">{accreditation.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-blue-100 mb-8">
              Estas acreditaciones nos posicionan entre las mejores escuelas de negocio del mundo y garantizan 
              el reconocimiento internacional de nuestros títulos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
