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
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactFormSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  apellidos: z.string().min(2, "Los apellidos deben tener al menos 2 caracteres"),
  email: z.string().email("Ingresa un email válido"),
  telefono: z.string().optional(),
  programa: z.string().optional(),
  mensaje: z.string().optional(),
  privacidad: z.boolean().refine(val => val === true, "Debes aceptar la política de privacidad")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  
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
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
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
      content: ["Calle Serrano 93, 6ª planta", "28006 Madrid, España"],
      color: "bg-sagardoy-gold"
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: ["+34 91 700 40 70"],
      color: "bg-sagardoy-blue"
    },
    {
      icon: Mail,
      title: "Email",
      content: ["info@sagardoy.edu"],
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-sagardoy-gold">Contacto</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              ¿Listo para dar el siguiente paso en tu carrera? Contacta con nuestro equipo de admisiones
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
              <h3 className="text-2xl font-bold text-sagardoy-navy mb-6">Solicita Información</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                        <FormLabel className="text-sagardoy-gray">Teléfono</FormLabel>
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
                        <FormLabel className="text-sagardoy-gray">Programa de Interés</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona un programa" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="mba">MBA Ejecutivo</SelectItem>
                            <SelectItem value="master-estrategia">Máster en Dirección Estratégica</SelectItem>
                            <SelectItem value="liderazgo-digital">Liderazgo Digital</SelectItem>
                            <SelectItem value="otros">Otros programas</SelectItem>
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
                        <FormLabel className="text-sagardoy-gray">Mensaje</FormLabel>
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
                          <FormLabel className="text-sm text-sagardoy-gray">
                            Acepto la <a href="#" className="text-sagardoy-blue hover:underline">política de privacidad</a> 
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
                            <p key={lineIndex} className="text-sagardoy-gray">{line}</p>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Map Placeholder */}
              <Card className="bg-gray-200 h-64 flex items-center justify-center">
                <CardContent className="text-center text-sagardoy-gray p-0">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg font-semibold mb-2">Mapa Interactivo</p>
                  <p className="text-sm">Visítanos en nuestras instalaciones</p>
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
                    <Button className="bg-sagardoy-gold text-white hover:bg-yellow-600 flex-1">
                      Llamar Ahora
                    </Button>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-sagardoy-navy flex-1">
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
