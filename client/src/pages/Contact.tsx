import { useState } from "react";
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
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useMutation as useConvexMutation, useQuery } from "convex/react";
import { api } from "@convex/_generated/api";
import GoogleMapComponent from "@/components/GoogleMap";

const contactFormSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  apellidos: z.string().min(2, "Los apellidos deben tener al menos 2 caracteres"),
  email: z.string().email("Ingresa un email válido"),
  telefono: z.string().min(1, "El teléfono es obligatorio"),
  programa: z.string().min(1, "Debes seleccionar un programa"),
  mensaje: z.string().optional(),
  privacidad: z.boolean().refine(val => val === true, "Debes aceptar la política de privacidad")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  
  // Fetch programs from Convex
  const programs = useQuery(api.programs.getPrograms);
  
  // Convex mutation for contact form
  const submitContactForm = useConvexMutation(api.contactForm.submitContactForm);
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      nombre: "",
      apellidos: "",
      email: "",
      telefono: "",
      programa: "",
      mensaje: "",
      privacidad: false
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      // Find the selected program by path to get its ID
      const selectedProgram = programs?.find(p => p.path === data.programa);
      if (!selectedProgram) {
        throw new Error("Programa no encontrado");
      }

      // Submit to Convex
      const result = await submitContactForm({
        name: data.nombre,
        lastName: data.apellidos,
        email: data.email,
        phone: data.telefono,
        program: selectedProgram._id,
        message: data.mensaje,
      });

      return result;
    },
    onSuccess: () => {
      toast({
        title: "¡Mensaje enviado!",
        description: "Hemos recibido tu solicitud. Nos pondremos en contacto contigo pronto.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error al enviar",
        description: error.message || "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Dirección",
      content: ["Calle Velázquez, 86D", "Salamanca, 28002 Madrid"],
      color: "bg-sagardoy-gold"
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: ["+34 91 454 00 71"],
      color: "bg-sagardoy-blue"
    },
    {
      icon: Mail,
      title: "Email",
      content: ["info@sagardoyschool.com"],
      color: "bg-green-500"
    },
    {
      icon: Clock,
      title: "Horario de Atención",
      content: ["Lunes a Viernes: 9:00 - 18:00", "Sábados: 10:00 - 14:00"],
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-sagardoy-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl mb-6 title">
              {t("contact.title")} <span className="text-sagardoy-gold">{t("contact.titleHighlight")}</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              {t("contact.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-sagardoy-navy mb-6">{t("contact.form.title")}</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                        <FormLabel className="text-sagardoy-blue">Teléfono</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+34 123 456 789" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="programa"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sagardoy-blue">Programa de Interés</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona un programa" />
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

                  <FormField
                    control={form.control}
                    name="mensaje"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sagardoy-blue">Mensaje</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Cuéntanos más sobre tus objetivos profesionales..." 
                            rows={4}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

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
                            {" "}y el tratamiento de mis datos personales *
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-sagardoy-gold text-white py-4 text-lg font-semibold hover:bg-yellow-600"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Enviando..." : "Enviar Solicitud"}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-sagardoy-navy mb-6">Información de Contacto</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className={`${info.color} rounded-lg p-3`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sagardoy-navy mb-1">{info.title}</h4>
                          {info.content.map((line, lineIndex) => (
                            <p key={lineIndex} className="text-sagardoy-blue">{line}</p>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Google Maps */}
              <Card className="bg-white overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-4 bg-sagardoy-navy text-white">
                    <h4 className="font-bold text-lg mb-1">Ubicación</h4>
                    <p className="text-blue-100 text-sm">Calle Velázquez, 86D, Salamanca, 28002 Madrid</p>
                  </div>
                  <GoogleMapComponent 
                    address="Sagardoy Business & Law School"
                    height="300px"
                  />
                </CardContent>
              </Card>

              {/* Quick Contact Card */}
              <Card className="bg-sagardoy-navy text-white p-6">
                <CardContent className="p-0">
                  <h4 className="font-bold text-lg mb-3">¿Necesitas respuesta inmediata?</h4>
                  <p className="text-blue-100 mb-4">
                    Nuestro equipo de admisiones está disponible para atenderte
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="bg-sagardoy-gold text-white flex-1">
                      Llamar Ahora
                    </Button>
                    <Button variant="outline" className="border-white text-sagardoy-blue flex-1">
                      Chat Online
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
