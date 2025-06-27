import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";

export default function Programs() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");

  const apiPrograms = useQuery(api.programs.getPrograms);
  
  // Transform apiPrograms to match the expected format
  const programs = apiPrograms?.map(program => ({
    id: program.path,
    title: program.title,
    duration: program.duration,
    price: program.hours,
    category: program.type,
    categoryLabel: program.type === "master" ? "Máster" : 
                  program.type === "incompany" ? "In Company" : "Especialización",
    image: program.cover
  })) || [];

  const filters = [
    { key: "all", label: t("programs.filters.all") },
    { key: "master", label: t("programs.filters.master") },
    { key: "specialization", label: "Especialización" },
    { key: "incompany", label: "In Company" }
  ];

  const filteredPrograms = activeFilter === "all" 
    ? programs 
    : programs.filter(program => program.category === activeFilter);

  const getBadgeColor = (category: string) => {
    switch (category) {
      case "mba": return "bg-sagardoy-gold";
      case "master": return "bg-sagardoy-blue";
      case "specialization": return "bg-green-500";
      case "incompany": return "bg-purple-500";
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
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
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
                    : "bg-sagardoy-light-gray text-sagardoy-blue hover:bg-sagardoy-navy hover:text-white"
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
                  className="w-full h-96 object-cover object-center"
                />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={`${getBadgeColor(program.category)} text-white`}>
                      {program.categoryLabel}
                    </Badge>
                    <span className="text-sagardoy-blue text-sm">{program.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-sagardoy-navy mb-3">{program.title}</h3>
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
              <p className="text-xl text-sagardoy-gray">{t("programs.noResults")}</p>
            </div>
          )}

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-sagardoy-navy mb-4">{t("programs.cta.title")}</h3>
            <p className="text-sagardoy-blue mb-8">{t("programs.cta.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button className="bg-sagardoy-gold text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                  {t("programs.cta.contact")}
                </Button>
              </Link>
              <Link href="/solicitud-admision">
                <Button variant="outline" className="border-2 border-sagardoy-navy text-sagardoy-navy px-8 py-4 rounded-lg font-semibold hover:bg-sagardoy-navy hover:text-white transition-colors duration-200">
                  {t("programs.cta.apply")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
