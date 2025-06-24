import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Menu,
  User,
  ChevronDown,
  Wrench,
  Play,
  UserPlus,
  BarChart3,
} from "lucide-react";
import sagardoyLogo from "@assets/sagardoy-logo-1_1750499204211.png";
import LanguageSelector from "./LanguageSelector";
import UserAccessModal from "./UserAccessModal";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userModalOpen, setUserModalOpen] = useState(false);
  const { t } = useLanguage();

  const navigation = [
    { name: "Nosotros", href: "/la-escuela" },
    { name: t("nav.programas"), href: "/programas" },
    { name: "In Company", href: "/corporate-training" },
    { name: "Actualidad", href: "/noticias" },
    // {
    //   name: "LMS",
    //   href: "#",
    //   isDropdown: true,
    //   dropdownItems: [
    //     { name: "Constructor de Cursos", href: "/constructor-cursos", icon: Wrench },
    //     { name: "Demo SCORM/H5P", href: "/curso-demo", icon: Play },
    //     { name: "Ficha de Colaboradores", href: "/ficha-colaboradores", icon: UserPlus },
    //     { name: "Seguimiento de Progreso", href: "/seguimiento-progreso", icon: BarChart3 }
    //   ]
    // },
    { name: t("nav.contacto"), href: "/contacto" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300 border-b border-sagardoy-light-gray">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src={sagardoyLogo}
              alt="Sagardoy Business School"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-5 items-center">
            {navigation.map((item) => {
              if (item.isDropdown) {
                return (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className={`font-medium text-base transition-colors duration-200 py-2 px-1 border-b-2 hover:bg-transparent ${
                          item.dropdownItems?.some((dropdownItem) =>
                            isActive(dropdownItem.href),
                          )
                            ? "text-sagardoy-blue border-sagardoy-gold"
                            : "text-sagardoy-dark-gray hover:text-sagardoy-blue border-transparent"
                        }`}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-64">
                      {item.dropdownItems?.map((dropdownItem, index) => (
                        <div key={dropdownItem.name}>
                          <DropdownMenuItem asChild>
                            <Link
                              href={dropdownItem.href}
                              className="w-full cursor-pointer flex items-center py-3"
                            >
                              {dropdownItem.icon && (
                                <dropdownItem.icon className="mr-3 h-4 w-4 text-sagardoy-blue" />
                              )}
                              <div>
                                <div className="font-medium">
                                  {dropdownItem.name}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {dropdownItem.name ===
                                    "Constructor de Cursos" &&
                                    "Crea cursos con drag & drop"}
                                  {dropdownItem.name === "Demo SCORM/H5P" &&
                                    "Prueba el seguimiento en tiempo real"}
                                  {dropdownItem.name ===
                                    "Ficha de Colaboradores" &&
                                    "Registro de profesores"}
                                  {dropdownItem.name ===
                                    "Seguimiento de Progreso" &&
                                    "Analytics y métricas"}
                                </div>
                              </div>
                            </Link>
                          </DropdownMenuItem>
                          {index < item.dropdownItems.length - 1 && (
                            <DropdownMenuSeparator />
                          )}
                        </div>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium text-base transition-colors duration-200 px-3 py-0.5 border-b-2 ${
                    isActive(item.href)
                      ? "text-sagardoy-blue border-sagardoy-gold"
                      : "text-sagardoy-dark-gray hover:text-sagardoy-blue border-transparent"
                  } ${item.href === "/contacto" ? "uppercase text-sm border-2 border-sagardoy-gold !text-white rounded-full bg-sagardoy-gold hover:bg-transparent hover:!text-sagardoy-blue" : ''}`}
                >
                  {item.name}
                </Link>
              );
            })}
            {/* Language Selector & User Access */}
            <div className="hidden lg:flex items-center">
              <Button
                variant="ghost"
                className="text-sagardoy-blue hover:text-sagardoy-navy hover:bg-gray-100 p-2"
                onClick={() => setUserModalOpen(true)}
              >
                <User className="h-24 w-24" />
              </Button>
              <LanguageSelector />
            </div>
          </div>

          

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-sagardoy-blue hover:text-sagardoy-navy"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => {
                    if (item.isDropdown) {
                      return (
                        <div key={item.name} className="space-y-2">
                          <div className="px-3 py-2 font-medium text-sagardoy-navy border-b border-gray-200">
                            {item.name}
                          </div>
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center px-6 py-2 text-sm text-sagardoy-gray hover:text-sagardoy-blue transition-colors duration-200"
                            >
                              {dropdownItem.icon && (
                                <dropdownItem.icon className="mr-2 h-4 w-4" />
                              )}
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-3 py-2 font-medium transition-colors duration-200 ${
                          isActive(item.href)
                            ? "bg-sagardoy-gray"
                            : "text-sagardoy-blue hover:bg-sagardoy-gray"
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                  <div className="mt-6 pt-4 border-t border-gray-200 space-y-4">
                    <LanguageSelector />
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sagardoy-blue hover:text-sagardoy-navy"
                      onClick={() => {
                        setUserModalOpen(true);
                        setMobileMenuOpen(false);
                      }}
                    >
                      <User className="h-5 w-5 mr-2" />
                      Acceso de usuarios
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* User Access Modal */}
      <UserAccessModal open={userModalOpen} onOpenChange={setUserModalOpen} />
    </header>
  );
}
