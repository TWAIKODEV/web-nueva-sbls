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
import { Badge } from "@/components/ui/badge";
import { Upload, FileText, CheckCircle, User, Briefcase, GraduationCap, MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useMutation as useConvexMutation, useQuery } from "convex/react";
import { api } from "@convex/_generated/api";
import { uploadFile } from "@/firebase/config";
import { useState, useRef } from "react";

const admissionFormSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  apellidos: z.string().min(2, "Los apellidos deben tener al menos 2 caracteres"),
  email: z.string().email("Ingresa un email válido"),
  telefono: z.string().min(9, "El teléfono debe tener al menos 9 dígitos"),
  programa: z.string().min(1, "Debes seleccionar un programa"),
  experiencia: z.string().min(10, "Describe tu experiencia profesional (mínimo 10 caracteres)"),
  empresa: z.string().min(1, "El nombre de la empresa es obligatorio"),
  cargo: z.string().min(1, "El cargo es obligatorio"),
  linkedin: z.string().url("Ingresa una URL de LinkedIn válida"),
  comoNosConociste: z.string().min(10, "Describe cómo nos conociste (mínimo 10 caracteres)"),
  porQueNosElegiste: z.string().min(10, "Explica por qué nos elegiste (mínimo 10 caracteres)"),
  razonesParaEstudiar: z.string().min(10, "Describe tus razones para estudiar (mínimo 10 caracteres)"),
  cv: z.string().optional(),
  privacidad: z.boolean().refine(val => val === true, "Debes aceptar la política de privacidad")
});

type AdmissionFormData = z.infer<typeof admissionFormSchema>;

export default function Admission() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Fetch programs from Convex
  const programs = useQuery(api.programs.getPrograms);
  
  // Convex mutation for admission form
  const submitAdmissionForm = useConvexMutation(api.admissionForm.submitAdmissionForm);
  
  const form = useForm<AdmissionFormData>({
    resolver: zodResolver(admissionFormSchema),
    defaultValues: {
      nombre: "",
      apellidos: "",
      email: "",
      telefono: "",
      programa: "",
      experiencia: "",
      empresa: "",
      cargo: "",
      linkedin: "",
      comoNosConociste: "",
      porQueNosElegiste: "",
      razonesParaEstudiar: "",
      cv: "",
      privacidad: false
    }
  });

  const admissionMutation = useMutation({
    mutationFn: async (data: AdmissionFormData) => {
      // Find the selected program by path to get its ID
      const selectedProgram = programs?.find(p => p.path === data.programa);
      if (!selectedProgram) {
        throw new Error("Programa no encontrado");
      }

      let cvUrl = data.cv;

      // Upload file to Firebase if a file was selected
      if (selectedFile) {
        // Validate file type
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        if (!allowedTypes.includes(selectedFile.type)) {
          throw new Error("Tipo de archivo no válido. Solo se permiten archivos PDF, DOC o DOCX.");
        }

        // Validate file size (5MB max)
        const maxSize = 5 * 1024 * 1024; // 5MB
        if (selectedFile.size > maxSize) {
          throw new Error("El archivo no puede superar los 5MB.");
        }

        try {
          cvUrl = await uploadFile(selectedFile);
        } catch (error) {
          console.error(error);
          throw new Error("Error al subir el archivo. Inténtalo de nuevo.");
        }
      }

      // Submit to Convex
      const result = await submitAdmissionForm({
        name: data.nombre,
        lastName: data.apellidos,
        email: data.email,
        phone: data.telefono,
        program: selectedProgram._id,
        company: data.empresa,
        position: data.cargo,
        linkedin: data.linkedin,
        experience: data.experiencia,
        howDidYouKnowUs: data.comoNosConociste,
        whyDidYouChooseUs: data.porQueNosElegiste,
        reasonsToStudy: data.razonesParaEstudiar,
        cv: cvUrl,
      });

      return result;
    },
    onSuccess: () => {
      toast({
        title: "¡Solicitud enviada con éxito!",
        description: "Hemos recibido tu solicitud de admisión. Nuestro equipo la revisará y se pondrá en contacto contigo pronto.",
      });
      form.reset();
      setSelectedFile(null);
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

  // File handling functions
  const handleFileSelect = (file: File) => {
    // Validate file type
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(file.type)) {
      toast({
        title: "Tipo de archivo no válido",
        description: "Solo se permiten archivos PDF, DOC o DOCX.",
        variant: "destructive",
      });
      return;
    }

    // Validate file size (5MB max)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      toast({
        title: "Archivo demasiado grande",
        description: "El archivo no puede superar los 5MB.",
        variant: "destructive",
      });
      return;
    }

    setSelectedFile(file);
    form.setValue("cv", ""); // Clear URL field when file is selected
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const removeSelectedFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const selectedProgram = programs?.find(p => p.path === form.watch("programa"));

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

                  <div className="mt-8 p-4 bg-sagardoy-light-gray rounded-lg">
                    <h4 className="font-semibold text-sagardoy-navy mb-2">¿Necesitas ayuda?</h4>
                    <p className="text-sm text-sagardoy-blue mb-3">
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
                    <p className="text-sagardoy-blue">
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
                                <FormLabel className="text-sagardoy-blue">Nombre *</FormLabel>
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
                                <FormLabel className="text-sagardoy-blue">Apellidos *</FormLabel>
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
                                <FormLabel className="text-sagardoy-blue">Email *</FormLabel>
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
                                <FormLabel className="text-sagardoy-blue">Teléfono *</FormLabel>
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
                              <FormLabel className="text-sagardoy-blue">Programa de Interés *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Selecciona el programa que te interesa" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {programs?.map((program) => (
                                    <SelectItem key={program._id} value={program.path}>
                                      {program.title}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

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
                                <FormLabel className="text-sagardoy-blue">Empresa Actual *</FormLabel>
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
                                <FormLabel className="text-sagardoy-blue">Cargo/Posición *</FormLabel>
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
                          name="linkedin"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sagardoy-blue">URL de LinkedIn *</FormLabel>
                              <FormControl>
                                <Input type="url" placeholder="https://www.linkedin.com/in/tu-perfil" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="experiencia"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sagardoy-blue">Experiencia Profesional *</FormLabel>
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

                      {/* How did you know us */}
                      <div className="space-y-6">
                        <div className="flex items-center space-x-2 mb-4">
                          <MessageSquare className="w-5 h-5 text-sagardoy-gold" />
                          <h3 className="text-xl font-bold text-sagardoy-navy">¿Cómo nos conociste?</h3>
                        </div>

                        <FormField
                          control={form.control}
                          name="comoNosConociste"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sagardoy-blue">¿Cómo conociste Sagardoy Business School? *</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Explica cómo llegaste a conocer nuestra escuela: redes sociales, recomendación, búsqueda web, evento..." 
                                  rows={4}
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Why did you choose us */}
                      <div className="space-y-6">
                        <div className="flex items-center space-x-2 mb-4">
                          <MessageSquare className="w-5 h-5 text-sagardoy-gold" />
                          <h3 className="text-xl font-bold text-sagardoy-navy">¿Por qué nos elegiste?</h3>
                        </div>

                        <FormField
                          control={form.control}
                          name="porQueNosElegiste"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sagardoy-blue">¿Por qué elegiste Sagardoy Business School? *</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Explica qué te llevó a elegir nuestra escuela: metodología, profesorado, prestigio, programa específico..." 
                                  rows={4}
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Reasons to study */}
                      <div className="space-y-6">
                        <div className="flex items-center space-x-2 mb-4">
                          <MessageSquare className="w-5 h-5 text-sagardoy-gold" />
                          <h3 className="text-xl font-bold text-sagardoy-navy">Razones para estudiar</h3>
                        </div>

                        <FormField
                          control={form.control}
                          name="razonesParaEstudiar"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sagardoy-blue">¿Cuáles son tus razones para realizar este programa? *</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Describe tus motivaciones, objetivos profesionales y cómo este programa te ayudará a alcanzarlos..." 
                                  rows={4}
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
                              <FormLabel className="text-sagardoy-blue">Adjuntar CV (Opcional)</FormLabel>
                              <FormControl>
                                <div className={`border-2 ${isDragOver ? 'border-sagardoy-blue' : 'border-gray-300'} rounded-lg p-6 text-center hover:border-sagardoy-blue transition-colors`}
                                  onDragOver={handleDragOver}
                                  onDragLeave={handleDragLeave}
                                  onDrop={handleDrop}
                                >
                                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                  <p className="text-sm text-gray-600 mb-2">Arrastra tu CV aquí o haz clic para seleccionar</p>
                                  <p className="text-xs text-gray-500">Formatos admitidos: PDF, DOC, DOCX (máx. 5MB)</p>
                                  
                                  {/* File input */}
                                  <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    className="hidden"
                                    onChange={handleFileInputChange}
                                  />
                                  
                                  <Button
                                    type="button"
                                    variant="outline"
                                    className="mt-4"
                                    onClick={() => fileInputRef.current?.click()}
                                  >
                                    Seleccionar Archivo
                                  </Button>
                                  
                                  {/* Show selected file */}
                                  {selectedFile && (
                                    <div className="mt-4 p-3 bg-green-50 rounded border border-green-200">
                                      <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                          <FileText className="w-4 h-4 text-green-600" />
                                          <span className="text-sm text-green-700 font-medium">
                                            {selectedFile.name}
                                          </span>
                                        </div>
                                        <Button
                                          type="button"
                                          variant="ghost"
                                          size="sm"
                                          onClick={removeSelectedFile}
                                          className="text-red-600 hover:text-red-700"
                                        >
                                          ×
                                        </Button>
                                      </div>
                                      <p className="text-xs text-green-600 mt-1">
                                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                                      </p>
                                    </div>
                                  )}
                                  
                                  {/* URL input as alternative */}
                                  {!selectedFile && (
                                    <div className="mt-4">
                                      <p className="text-xs text-gray-500 mb-2">O ingresa la URL de tu CV online:</p>
                                      <Input 
                                        type="url" 
                                        placeholder="https://ejemplo.com/mi-cv.pdf" 
                                        value={field.value || ""}
                                        onChange={field.onChange}
                                      />
                                    </div>
                                  )}
                                  
                                  {/* Show URL if provided */}
                                  {field.value && !selectedFile && (
                                    <div className="mt-4 p-2 bg-blue-50 rounded border border-blue-200">
                                      <p className="text-sm text-blue-700">
                                        ✓ URL de CV proporcionada
                                      </p>
                                    </div>
                                  )}
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
                                <FormLabel className="text-sm text-sagardoy-blue">
                                  Acepto la <a href="#" className="text-sagardoy-blue font-bold hover:underline">política de privacidad</a> 
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
                          className="w-full bg-sagardoy-gold text-white py-4 text-lg font-semibold"
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
                        
                        <p className="text-center text-sm text-sagardoy-blue mt-4">
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
