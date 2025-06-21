# Archivos para Migración LMS

## Archivos que debes copiar desde este proyecto:

### 1. Páginas principales (client/src/pages/):
- **CourseBuilder.tsx** - Constructor principal con drag & drop
- **ProgressTracking.tsx** - Dashboard completo de analytics  
- **CollaboratorForm.tsx** - Formulario de registro de profesores

### 2. Componentes LMS (client/src/components/):
- **DemoCourseBuilder.tsx** - Curso demo "Derecho Laboral Avanzado"
- **SCORMTracker.tsx** - Sistema completo de tracking SCORM
- **H5PIntegration.tsx** - Integración de contenido H5P
- **CoursePreview.tsx** - Vista previa de cursos

### 3. Toda la carpeta UI (client/src/components/ui/):
- Todos los componentes Shadcn/UI necesarios
- Especialmente: tabs.tsx, progress.tsx, dropdown-menu.tsx, card.tsx

### 4. Configuración base:
- **LMS_package.json** → renombrar como package.json
- **tailwind.config.ts** con colores Sagardoy
- **vite.config.ts** con alias configurados
- **client/src/index.css** con variables CSS

### 5. Archivos de contexto y utilidades:
- **client/src/lib/utils.ts** - Utilidades generales
- **client/src/lib/queryClient.ts** - Cliente React Query
- **client/src/contexts/** - Contextos necesarios

## Estructura del nuevo proyecto:
```
sagardoy-lms/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/ (copiar completa)
│   │   │   ├── DemoCourseBuilder.tsx
│   │   │   ├── SCORMTracker.tsx
│   │   │   ├── H5PIntegration.tsx
│   │   │   └── CoursePreview.tsx
│   │   ├── pages/
│   │   │   ├── CourseBuilder.tsx
│   │   │   ├── ProgressTracking.tsx
│   │   │   └── CollaboratorForm.tsx
│   │   ├── lib/
│   │   ├── contexts/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── server/ (opcional si necesitas backend)
├── shared/ (opcional si necesitas base de datos)
├── package.json (usar LMS_package.json)
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── postcss.config.js
```

## App.tsx simplificado para LMS:
```jsx
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import CourseBuilder from "./pages/CourseBuilder";
import ProgressTracking from "./pages/ProgressTracking";
import CollaboratorForm from "./pages/CollaboratorForm";
import DemoCourseBuilder from "./components/DemoCourseBuilder";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-gray-50">
          <nav className="bg-white shadow-md p-4 mb-8">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <h1 className="text-2xl font-bold text-sagardoy-navy">
                Sagardoy LMS
              </h1>
              <div className="space-x-4">
                <a href="/constructor-cursos" className="text-sagardoy-blue hover:underline">
                  Constructor
                </a>
                <a href="/seguimiento-progreso" className="text-sagardoy-blue hover:underline">
                  Analytics
                </a>
                <a href="/curso-demo" className="text-sagardoy-blue hover:underline">
                  Demo
                </a>
                <a href="/ficha-colaboradores" className="text-sagardoy-blue hover:underline">
                  Colaboradores
                </a>
              </div>
            </div>
          </nav>
          
          <Switch>
            <Route path="/" component={CourseBuilder} />
            <Route path="/constructor-cursos" component={CourseBuilder} />
            <Route path="/seguimiento-progreso" component={ProgressTracking} />
            <Route path="/curso-demo" component={DemoCourseBuilder} />
            <Route path="/ficha-colaboradores" component={CollaboratorForm} />
          </Switch>
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
```

## Pasos para migrar:
1. Crear nuevo Replit con template React + Vite
2. Copiar package.json (desde LMS_package.json)
3. Ejecutar `npm install`
4. Copiar todos los archivos listados arriba
5. Configurar tailwind.config.ts y vite.config.ts
6. Probar cada ruta del LMS

El sistema estará completamente funcional como LMS independiente.