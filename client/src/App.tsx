import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import About from "./pages/About";
import CorporateTraining from "./pages/CorporateTraining";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import Contact from "./pages/Contact";
import ProgramDetail from "./pages/ProgramDetail";
import Admission from "./pages/Admission";
import CollaboratorForm from "./pages/CollaboratorForm";
import CourseBuilder from "./pages/CourseBuilder";
import ProgressTracking from "./pages/ProgressTracking";
import DemoCourseBuilder from "./components/DemoCourseBuilder";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiesPolicy from "./pages/CookiesPolicy";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";

const ScrollToTop = () => {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // o "auto" si prefieres sin animación
    });
  }, [location]);

  return null;
};

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ScrollToTop />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/programas" component={Programs} />
          <Route path="/la-escuela" component={About} />
          <Route path="/corporate-training" component={CorporateTraining} />
          <Route path="/noticias" component={News} />
          <Route path="/noticia/:id" component={NewsDetail} />
          <Route path="/eventos" component={Events} />
          <Route path="/evento/:id" component={EventDetail} />
          <Route path="/contacto" component={Contact} />
          <Route path="/programa/:id" component={ProgramDetail} />
          <Route path="/solicitud-admision" component={Admission} />
          <Route path="/ficha-colaboradores" component={CollaboratorForm} />
          <Route path="/constructor-cursos" component={CourseBuilder} />
          <Route path="/seguimiento-progreso" component={ProgressTracking} />
          <Route path="/curso-demo" component={DemoCourseBuilder} />
          <Route path="/politica-de-privacidad" component={PrivacyPolicy} />
          <Route path="/politica-de-cookies" component={CookiesPolicy} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
