import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Briefcase, Users } from "lucide-react";
import sagardoyLogo from "@assets/sagardoy-logo-1_1750499204211.png";

interface UserAccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function UserAccessModal({ open, onOpenChange }: UserAccessModalProps) {
  const accessAreas = [
    {
      title: "Estudiante",
      description: "Accede a tu campus virtual, recursos académicos y seguimiento de programas",
      icon: BookOpen,
      gradient: "from-sagardoy-blue/90 to-blue-700/90",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      href: "#"
    },
    {
      title: "Profesional",
      description: "Portal corporativo para empresas, formación in-company y servicios especializados",
      icon: Briefcase,
      gradient: "from-sagardoy-navy/90 to-blue-900/90",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      href: "#"
    },
    {
      title: "Alumni",
      description: "Red de antiguos alumnos, oportunidades profesionales y eventos exclusivos",
      icon: Users,
      gradient: "from-sagardoy-light-blue/90 to-blue-600/90",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      href: "#"
    }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl w-full max-h-[90vh] overflow-y-auto p-0">
        <div className="bg-gradient-to-br from-gray-50 to-white">
          {/* Header */}
          <DialogHeader className="p-8 pb-6">
            <div className="flex items-center justify-center mb-6">
              <img 
                src={sagardoyLogo} 
                alt="Sagardoy Business School" 
                className="h-16 w-auto"
              />
            </div>
            <DialogTitle className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-sagardoy-navy to-sagardoy-blue bg-clip-text text-transparent mb-2">
                mySagardoy
              </div>
              <div className="text-lg text-sagardoy-gray font-normal">
                Accede a tu área personalizada
              </div>
            </DialogTitle>
            <DialogDescription className="text-center text-sagardoy-gray">
              Selecciona tu perfil para acceder a los recursos y servicios personalizados de Sagardoy Business School
            </DialogDescription>
          </DialogHeader>

          {/* Access Areas */}
          <div className="px-8 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {accessAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <Card 
                    key={index} 
                    className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border-0"
                    onClick={() => {
                      // Aquí se manejaría la navegación a cada área
                      console.log(`Navigating to ${area.title}`);
                    }}
                  >
                    <div className="relative h-64">
                      {/* Background Image */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${area.image})` }}
                      />
                      
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} group-hover:opacity-80 transition-opacity duration-300`} />
                      
                      {/* Additional overlay for better text readability */}
                      <div className="absolute inset-0 bg-black/20" />
                      
                      {/* Content */}
                      <CardContent className="relative h-full flex flex-col justify-between p-6 text-white">
                        {/* Logo */}
                        <div className="flex justify-center mb-4">
                          <div className="text-3xl font-bold tracking-wider text-white drop-shadow-lg">
                            mySagardoy
                          </div>
                        </div>

                        {/* Bottom Section */}
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-2xl font-bold text-white drop-shadow-lg">{area.title}</h3>
                            <div className="transform group-hover:translate-x-2 transition-transform duration-300">
                              <ArrowRight className="w-6 h-6 drop-shadow-lg" />
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2 mb-3">
                            <IconComponent className="w-5 h-5 drop-shadow-md" />
                            <span className="text-sm drop-shadow-md">Portal de acceso</span>
                          </div>
                          
                          <p className="text-sm leading-relaxed text-white/95 drop-shadow-md">
                            {area.description}
                          </p>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Footer Info */}
            <div className="mt-8 text-center">
              <p className="text-sagardoy-gray text-sm mb-4">
                ¿Necesitas ayuda para acceder? Contacta con nuestro soporte técnico
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  variant="outline" 
                  className="border-sagardoy-navy text-sagardoy-navy hover:bg-sagardoy-navy hover:text-white"
                >
                  Soporte Técnico
                </Button>
                <Button 
                  variant="outline" 
                  className="border-sagardoy-gold text-sagardoy-gold hover:bg-sagardoy-gold hover:text-white"
                >
                  Solicitar Acceso
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}