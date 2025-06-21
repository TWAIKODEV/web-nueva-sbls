import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import sagardoyLogo from "@assets/sagardoy-logo-1_1750499204211.png";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navigation = [
    { name: t("nav.inicio"), href: "/" },
    { name: t("nav.programas"), href: "/programas" },
    { name: t("nav.escuela"), href: "/la-escuela" },
    { name: t("nav.noticias"), href: "/noticias" },
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
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium text-base transition-colors duration-200 py-2 px-1 border-b-2 ${
                  isActive(item.href)
                    ? "text-sagardoy-blue border-sagardoy-gold"
                    : "text-sagardoy-dark-gray hover:text-sagardoy-blue border-transparent"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Language Selector & CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <Link href="/solicitud-admision">
              <Button className="bg-sagardoy-gold text-white px-6 py-3 rounded-md font-semibold hover:bg-amber-600 transition-all duration-200 shadow-sm">
                {t("nav.admision")}
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-sagardoy-gray hover:text-sagardoy-navy">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-3 py-2 font-medium transition-colors duration-200 ${
                        isActive(item.href)
                          ? "text-sagardoy-navy"
                          : "text-sagardoy-gray hover:text-sagardoy-blue"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <LanguageSelector />
                  </div>
                  <Link
                    href="/solicitud-admision"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 bg-sagardoy-gold text-white rounded-lg mt-4 text-center font-semibold"
                  >
                    {t("nav.admision")}
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
