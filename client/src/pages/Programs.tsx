import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Programs() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");

  const programs = [
    {
      id: "master-acceso-abogacia",
      title: "Máster de Acceso a la Abogacía",
      description: "Programa oficial que habilita para el ejercicio de la profesión de abogado. Incluye prácticas en despachos de prestigio y especialización sectorial.",
      duration: "12 meses",
      price: "Consultar",
      category: "master",
      categoryLabel: "Máster",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      id: "master-derecho-trabajo",
      title: "Máster en Derecho del Trabajo y RRHH",
      description: "Especialización integral en derecho laboral y gestión de recursos humanos. Formación práctica con casos reales del sector.",
      duration: "12 meses",
      price: "Consultar",
      category: "master",
      categoryLabel: "Máster",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      id: "executive-rrhh",
      title: "Executive en Recursos Humanos",
      description: "Programa ejecutivo para directivos de RRHH. Actualización en normativa laboral, gestión del talento y transformación digital.",
      duration: "6 meses",
      price: "Consultar",
      category: "executive",
      categoryLabel: "Executive",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      id: "curso-especialista-derecho-trabajo",
      title: "Curso de Especialista en Derecho del Trabajo",
      description: "Formación intensiva en derecho laboral con enfoque práctico. Actualización normativa y resolución de casos complejos.",
      duration: "4 meses",
      price: "Consultar",
      category: "executive",
      categoryLabel: "Executive",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      id: "programa-compliance-laboral",
      title: "Programa de Compliance Laboral",
      description: "Especialización en cumplimiento normativo laboral. Prevención de riesgos y auditorías laborales en la empresa.",
      duration: "3 meses",
      price: "Consultar",
      category: "executive",
      categoryLabel: "Executive",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      id: "master-derecho-empresa",
      title: "Máster en Derecho de la Empresa",
      description: "Formación integral en asesoría jurídica empresarial. Especialización en derecho corporativo y mercantil.",
      duration: "12 meses",
      price: "Consultar",
      category: "master",
      categoryLabel: "Máster",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    }
  ];

  const filters = [
    { key: "all", label: t("programs.filters.all") },
    { key: "master", label: t("programs.filters.master") },
    { key: "executive", label: t("programs.filters.executive") }
  ];

  const filteredPrograms = activeFilter === "all" 
    ? programs 
    : programs.filter(program => program.category === activeFilter);

  const getBadgeColor = (category: string) => {
    switch (category) {
      case "mba": return "bg-sagardoy-gold";
      case "master": return "bg-sagardoy-blue";
      case "executive": return "bg-green-500";
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
              {t("programs.title")}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              {t("programs.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Program Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                  activeFilter === filter.key
                    ? "bg-sagardoy-navy text-white"
                    : "bg-white text-sagardoy-gray hover:bg-sagardoy-navy hover:text-white"
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => (
              <Card key={program.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={`${getBadgeColor(program.category)} text-white`}>
                      {program.categoryLabel}
                    </Badge>
                    <span className="text-sagardoy-gray text-sm">{program.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-sagardoy-navy mb-3">{program.title}</h3>
                  <p className="text-sagardoy-gray mb-4">{program.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-sagardoy-navy">{program.price}</span>
                    <Link href={`/programa/${program.id}`}>
                      <Button variant="ghost" className="text-sagardoy-blue hover:text-sagardoy-navy font-semibold">
                        {t("programs.moreInfo")} <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No results message */}
          {filteredPrograms.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-sagardoy-gray">No se encontraron programas para este filtro.</p>
            </div>
          )}

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-sagardoy-navy mb-4">¿No encuentras el programa ideal?</h3>
            <p className="text-sagardoy-gray mb-8">Contacta con nuestro equipo de admisiones para recibir asesoramiento personalizado</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button className="bg-sagardoy-gold text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-200">
                  Contactar Asesor
                </Button>
              </Link>
              <Link href="/solicitud-admision">
                <Button variant="outline" className="border-2 border-sagardoy-navy text-sagardoy-navy px-8 py-4 rounded-lg font-semibold hover:bg-sagardoy-navy hover:text-white transition-colors duration-200">
                  Solicitar Admisión
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
