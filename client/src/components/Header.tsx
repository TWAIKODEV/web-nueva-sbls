import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Programas", href: "/programas" },
    { name: "La Escuela", href: "/la-escuela" },
    { name: "Noticias", href: "/noticias" },
    { name: "Contacto", href: "/contacto" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-sagardoy-navy">
              <span className="text-sagardoy-gold">S</span>agardoy
              <span className="text-sm font-medium text-sagardoy-gray ml-2">Business School</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-sagardoy-navy"
                    : "text-sagardoy-gray hover:text-sagardoy-blue"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/solicitud-admision">
              <Button className="bg-sagardoy-gold text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-200">
                Solicitar Admisión
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
                  <Link
                    href="/solicitud-admision"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 bg-sagardoy-gold text-white rounded-lg mt-4 text-center font-semibold"
                  >
                    Solicitar Admisión
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
