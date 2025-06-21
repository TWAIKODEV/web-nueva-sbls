# Guía para Crear Nuevo Replit LMS

## Archivos principales del LMS que necesitas copiar:

### 1. Páginas principales:
- `client/src/pages/CourseBuilder.tsx` - Constructor de cursos con drag & drop
- `client/src/pages/ProgressTracking.tsx` - Dashboard de seguimiento completo
- `client/src/pages/CollaboratorForm.tsx` - Formulario de colaboradores

### 2. Componentes LMS:
- `client/src/components/DemoCourseBuilder.tsx` - Curso demo interactivo
- `client/src/components/SCORMTracker.tsx` - Sistema de seguimiento SCORM
- `client/src/components/H5PIntegration.tsx` - Integración H5P
- `client/src/components/CoursePreview.tsx` - Vista previa de cursos

### 3. Dependencias necesarias en package.json:
```json
{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-beautiful-dnd": "^13.1.1",
    "framer-motion": "^10.0.0",
    "recharts": "^2.8.0",
    "@radix-ui/react-tabs": "^1.0.4",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-progress": "^1.0.3",
    "lucide-react": "^0.300.0",
    "wouter": "^3.0.0",
    "@tanstack/react-query": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "zod": "^3.22.0"
  }
}
```

### 4. Configuración Tailwind (colores Sagardoy):
```css
:root {
  --sagardoy-navy: #1e3d59;
  --sagardoy-blue: #3b82f6;
  --sagardoy-gold: #f59e0b;
  --sagardoy-gray: #6b7280;
  --sagardoy-light-gray: #f3f4f6;
}
```

### 5. Rutas principales para App.tsx:
```jsx
<Route path="/constructor-cursos" component={CourseBuilder} />
<Route path="/seguimiento-progreso" component={ProgressTracking} />
<Route path="/curso-demo" component={DemoCourseBuilder} />
<Route path="/ficha-colaboradores" component={CollaboratorForm} />
```

## Características del LMS:

✅ **Constructor de Cursos**: Drag & drop con 5 tipos de módulos
✅ **Seguimiento SCORM**: Tracking completo de progreso y puntuaciones
✅ **Integración H5P**: Contenido interactivo con analytics
✅ **Dashboard Analytics**: Gráficos y métricas en tiempo real
✅ **Formulario Colaboradores**: Registro profesional completo
✅ **Curso Demo**: "Derecho Laboral Avanzado" con 5 módulos interactivos

## Pasos para crear el nuevo Replit:

1. Crear nuevo Replit con template React + Vite
2. Copiar todos los archivos listados arriba
3. Instalar las dependencias mencionadas
4. Configurar Tailwind con los colores Sagardoy
5. Añadir las rutas en App.tsx
6. Probar cada funcionalidad del LMS

¿Te gustaría que extraiga algún archivo específico o cree alguna documentación adicional?