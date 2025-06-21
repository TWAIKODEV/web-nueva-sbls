import { Switch, Route } from "wouter";
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
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Contact from "./pages/Contact";
import ProgramDetail from "./pages/ProgramDetail";
import Admission from "./pages/Admission";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/programas" component={Programs} />
          <Route path="/la-escuela" component={About} />
          <Route path="/noticias" component={News} />
          <Route path="/noticia/:id" component={NewsDetail} />
          <Route path="/contacto" component={Contact} />
          <Route path="/programa/:id" component={ProgramDetail} />
          <Route path="/solicitud-admision" component={Admission} />
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
