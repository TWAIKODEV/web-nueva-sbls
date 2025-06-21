import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Badge } from "@/components/ui/badge";
import { Upload, FileText, CheckCircle, User, Briefcase, GraduationCap, MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const admissionFormSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  apellidos: z.string().min(2, "Los apellidos deben tener al menos 2 caracteres"),
  email: z.string().email("Ingresa un email válido"),
  telefono: z.string().min(9, "El teléfono debe tener al menos 9 dígitos"),
  programa: z.string().min(1, "Debes seleccionar un programa"),
  experiencia: z.string().min(10, "Describe tu experiencia profesional (mínimo 10 caracteres)"),
  motivacion: z.string().min(50, "La carta de motivación debe tener al menos 50 caracteres"),
  educacion: z.string().min(10, "Describe tu formación académica (mínimo 10 caracteres)"),
  empresa: z.string().optional(),
  cargo: z.string().optional(),
  cv: z.string().optional(),
  privacidad: z.boolean().refine(val => val === true, "Debes aceptar la política de privacidad")
});

type AdmissionFormData = z.infer<typeof admissionFormSchema>;

export default function Admission() {
  const { t } = useLanguage();
  const { toast } = useToast();
  
  const form = useForm<AdmissionFormData>({
    resolver: zodResolver(admissionFormSchema),
    defaultValues: {
      nombre: "",
      apellidos: "",
      email: "",
      telefono: "",
      programa: "",
      experiencia: "",
      motivacion: "",
      educacion: "",
      empresa: "",
      cargo: "",
      cv: "",
      privacidad: false
    }
  });

  const admissionMutation = useMutation({
    mutationFn: async (data: AdmissionFormData) => {
      const response = await apiRequest("POST", "/api/admission", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "¡Solicitud enviada con éxito!",
        description: "Hemos recibido tu solicitud de admisión. Nuestro equipo la revisará y se pondrá en contacto contigo pronto.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error al enviar la solicitud",
        description: error.message || "Hubo un problema al procesar tu solicitud. Inténtalo de nuevo.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: AdmissionFormData) => {
    admissionMutation.mutate(data);
  };

  const programs = [
    { value: "mba", label: "MBA Ejecutivo", duration: "18 meses", price: "€24,500" },
    { value: "master-estrategia", label: "Máster en Dirección Estratégica", duration: "12 meses", price: "€18,900" },
    { value: "liderazgo-digital", label: "Liderazgo Digital", duration: "6 meses", price: "€12,500" },
    { value: "finanzas-corporativas", label: "Finanzas Corporativas", duration: "8 meses", price: "€14,500" },
    { value: "marketing-digital", label: "Marketing Digital", duration: "6 meses", price: "€11,500" },
    { value: "recursos-humanos", label: "Gestión Estratégica de RRHH", duration: "10 meses", price: "€16,900" }
  ];

  const selectedProgram = programs.find(p => p.value === form.watch("programa"));

  const steps = [
    { id: 1, title: "Datos Personales", icon: User, completed: true },
    { id: 2, title: "Información Profesional", icon: Briefcase, completed: false },
    { id: 3, title: "Formación Académica", icon: GraduationCap, completed: false },
    { id: 4, title: "Motivación", icon: MessageSquare, completed: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-sagardoy-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t("admission.title")} <span className="text-sagardoy-gold">{t("admission.titleHighlight")}</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              {t("admission.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Progress Steps */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardContent className="p-6">
                  <h3 className="font-bold text-sagardoy-navy mb-6">Proceso de Solicitud</h3>
                  <div className="space-y-4">
                    {steps.map((step, index) => {
                      const IconComponent = step.icon;
                      return (
                        <div key={step.id} className="flex items-center space-x-3">
                          <div className={`rounded-full p-2 ${step.completed ? 'bg-green-500' : 'bg-sagardoy-gold'}`}>
                            <IconComponent className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-sagardoy-navy">{step.title}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-sagardoy-navy mb-2">¿Necesitas ayuda?</h4>
                    <p className="text-sm text-sagardoy-gray mb-3">
                      Nuestro equipo de admisiones está disponible para resolver tus dudas.
                    </p>
                    <Button variant="outline" className="w-full text-sagardoy-blue border-sagardoy-blue hover:bg-sagardoy-blue hover:text-white">
                      Contactar Asesor
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-3">
              <Card>
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-sagardoy-navy mb-4">Formulario de Solicitud</h2>
                    <p className="text-sagardoy-gray">
                      Completa todos los campos para que podamos evaluar tu candidatura de manera integral.
                    </p>
                  </div>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                      {/* Personal Information */}
                      <div className="space-y-6">
                        <div className="flex items-center space-x-2 mb-4">
                          <User className="w-5 h-5 text-sagardoy-gold" />
                          <h3 className="text-xl font-bold text-sagardoy-navy">Datos Personales</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="nombre"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sagardoy-gray">Nombre *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Tu nombre" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="apellidos"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sagardoy-gray">Apellidos *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Tus apellidos" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sagardoy-gray">Email *</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="tu@email.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="telefono"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sagardoy-gray">Teléfono *</FormLabel>
                                <FormControl>
                                  <Input type="tel" placeholder="+34 123 456 789" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      {/* Program Selection */}
                      <div className="space-y-6">
                        <div className="flex items-center space-x-2 mb-4">
                          <GraduationCap className="w-5 h-5 text-sagardoy-gold" />
                          <h3 className="text-xl font-bold text-sagardoy-navy">Selección de Programa</h3>
                        </div>

                        <FormField
                          control={form.control}
                          name="programa"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sagardoy-gray">Programa de Interés *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Selecciona el programa que te interesa" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {programs.map((program) => (
                                    <SelectItem key={program.value} value={program.value}>
                                      {program.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {selectedProgram && (
                          <div className="p-4 bg-blue-50 rounded-lg">
                            <h4 className="font-semibold text-sagardoy-navy mb-2">{selectedProgram.label}</h4>
                            <div className="flex space-x-4 text-sm text-sagardoy-gray">
                              <span>Duración: {selectedProgram.duration}</span>
                              <span>•</span>
                              <span>Precio: {selectedProgram.price}</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Professional Information */}
                      <div className="space-y-6">
                        <div className="flex items-center space-x-2 mb-4">
                          <Briefcase className="w-5 h-5 text-sagardoy-gold" />
                          <h3 className="text-xl font-bold text-sagardoy-navy">Información Profesional</h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="empresa"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sagardoy-gray">Empresa Actual</FormLabel>
                                <FormControl>
                                  <Input placeholder="Nombre de tu empresa" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="cargo"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sagardoy-gray">Cargo/Posición</FormLabel>
                                <FormControl>
                                  <Input placeholder="Tu cargo actual" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="experiencia"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sagardoy-gray">Experiencia Profesional *</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Describe tu experiencia profesional, logros destacados y responsabilidades actuales..." 
                                  rows={4}
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Academic Background */}
                      <div className="space-y-6">
                        <div className="flex items-center space-x-2 mb-4">
                          <GraduationCap className="w-5 h-5 text-sagardoy-gold" />
                          <h3 className="text-xl font-bold text-sagardoy-navy">Formación Académica</h3>
                        </div>

                        <FormField
                          control={form.control}
                          name="educacion"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sagardoy-gray">Formación Académica *</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Describe tu formación académica: grado universitario, postgrados, certificaciones relevantes..." 
                                  rows={4}
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Motivation */}
                      <div className="space-y-6">
                        <div className="flex items-center space-x-2 mb-4">
                          <MessageSquare className="w-5 h-5 text-sagardoy-gold" />
                          <h3 className="text-xl font-bold text-sagardoy-navy">Carta de Motivación</h3>
                        </div>

                        <FormField
                          control={form.control}
                          name="motivacion"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sagardoy-gray">¿Por qué quieres realizar este programa? *</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Explica tus motivaciones, objetivos profesionales y cómo este programa te ayudará a alcanzarlos..." 
                                  rows={6}
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* CV Upload */}
                      <div className="space-y-6">
                        <div className="flex items-center space-x-2 mb-4">
                          <FileText className="w-5 h-5 text-sagardoy-gold" />
                          <h3 className="text-xl font-bold text-sagardoy-navy">Curriculum Vitae</h3>
                        </div>

                        <FormField
                          control={form.control}
                          name="cv"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sagardoy-gray">Adjuntar CV (Opcional)</FormLabel>
                              <FormControl>
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-sagardoy-blue transition-colors">
                                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                  <p className="text-sm text-gray-600 mb-2">Arrastra tu CV aquí o haz clic para seleccionar</p>
                                  <p className="text-xs text-gray-500">Formatos admitidos: PDF, DOC, DOCX (máx. 5MB)</p>
                                  <Input 
                                    type="url" 
                                    placeholder="O ingresa la URL de tu CV online" 
                                    className="mt-4"
                                    {...field} 
                                  />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Privacy Policy */}
                      <div className="space-y-6">
                        <FormField
                          control={form.control}
                          name="privacidad"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="text-sm text-sagardoy-gray">
                                  Acepto la <a href="#" className="text-sagardoy-blue hover:underline">política de privacidad</a> 
                                  {" "}y el tratamiento de mis datos personales para el proceso de admisión. 
                                  También acepto recibir información sobre programas y eventos de Sagardoy Business School. *
                                </FormLabel>
                                <FormMessage />
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="pt-6 border-t">
                        <Button 
                          type="submit" 
                          className="w-full bg-sagardoy-gold text-white py-4 text-lg font-semibold hover:bg-yellow-600"
                          disabled={admissionMutation.isPending}
                        >
                          {admissionMutation.isPending ? (
                            <div className="flex items-center space-x-2">
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                              <span>Enviando Solicitud...</span>
                            </div>
                          ) : (
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-5 h-5" />
                              <span>Enviar Solicitud de Admisión</span>
                            </div>
                          )}
                        </Button>
                        
                        <p className="text-center text-sm text-sagardoy-gray mt-4">
                          Al enviar esta solicitud, nuestro equipo de admisiones la revisará en un plazo de 3-5 días laborables 
                          y se pondrá en contacto contigo para los siguientes pasos del proceso.
                        </p>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>

              {/* Additional Information */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-sagardoy-navy text-white">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3">Proceso de Admisión</h4>
                    <div className="space-y-2 text-sm text-blue-100">
                      <div>1. Envío de solicitud online</div>
                      <div>2. Revisión de documentación</div>
                      <div>3. Entrevista personal</div>
                      <div>4. Evaluación del comité</div>
                      <div>5. Notificación de resultado</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-sagardoy-gold text-white">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3">Financiación Disponible</h4>
                    <div className="space-y-2 text-sm">
                      <div>• Becas de excelencia académica</div>
                      <div>• Financiación a medida</div>
                      <div>• Descuentos para alumni</div>
                      <div>• Programas de empresa</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
