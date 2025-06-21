import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Link } from "wouter";
import sagardoyLogo from "@assets/sagardoy-logo-1_1750499204211.png";

const collaboratorFormSchema = z.object({
  nombre: z.string().min(2, "El nombre es requerido"),
  apellidos: z.string().min(2, "Los apellidos son requeridos"),
  nif: z.string().min(9, "NIF válido requerido"),
  telefono: z.string().min(9, "Teléfono válido requerido"),
  empresaActual: z.string().min(2, "La empresa actual es requerida"),
  cargo: z.string().min(2, "El cargo es requerido"),
  email: z.string().email("Email válido requerido"),
  telefonoEmpresa: z.string().min(9, "Teléfono de empresa válido requerido"),
  domicilio: z.string().min(5, "Domicilio completo requerido"),
  codigoPostal: z.string().min(5, "Código postal válido requerido"),
  localidad: z.string().min(2, "La localidad es requerida"),
  provincia: z.string().min(2, "La provincia es requerida"),
  nombreTitular: z.string().min(2, "Nombre del titular requerido"),
  bancoCaja: z.string().min(2, "Banco/Caja requerido"),
  direccionBanco: z.string().min(5, "Dirección del banco requerida"),
  codigoPostalBanco: z.string().min(5, "Código postal del banco requerido"),
  localidadBanco: z.string().min(2, "Localidad del banco requerida"),
  provinciaBanco: z.string().min(2, "Provincia del banco requerida"),
  iban: z.string().min(24, "IBAN válido requerido"),
  opcionFacturacion: z.string().min(1, "Seleccione una opción de facturación"),
  usoImagen: z.boolean().default(false),
  politicaPrivacidad: z.boolean().refine(val => val === true, "Debe aceptar la política de privacidad")
});

type CollaboratorFormData = z.infer<typeof collaboratorFormSchema>;

export default function CollaboratorForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageRightsModalOpen, setImageRightsModalOpen] = useState(false);

  const form = useForm<CollaboratorFormData>({
    resolver: zodResolver(collaboratorFormSchema),
    defaultValues: {
      usoImagen: false,
      politicaPrivacidad: false
    }
  });

  const onSubmit = async (data: CollaboratorFormData) => {
    setIsSubmitting(true);
    try {
      // Aquí se enviarían los datos al servidor
      console.log("Datos del colaborador:", data);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simular envío
      alert("Formulario enviado correctamente");
    } catch (error) {
      alert("Error al enviar el formulario");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-sagardoy-navy text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <img 
              src={sagardoyLogo} 
              alt="Sagardoy School" 
              className="h-12 w-auto filter brightness-0 invert"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-sagardoy-navy mb-4">
            Equipo docente Sagardoy School
          </h1>
          <p className="text-sagardoy-gray">
            Complete los siguientes datos para formar parte de nuestro equipo docente
          </p>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Datos Personales */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-sagardoy-navy">Datos Personales</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="nombre">Nombre *</Label>
                  <Input
                    id="nombre"
                    {...form.register("nombre")}
                    className="mt-1"
                  />
                  {form.formState.errors.nombre && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.nombre.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="apellidos">Apellidos *</Label>
                  <Input
                    id="apellidos"
                    {...form.register("apellidos")}
                    className="mt-1"
                  />
                  {form.formState.errors.apellidos && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.apellidos.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="nif">NIF *</Label>
                  <Input
                    id="nif"
                    {...form.register("nif")}
                    className="mt-1"
                    placeholder="12345678A"
                  />
                  {form.formState.errors.nif && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.nif.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="telefono">Teléfono *</Label>
                  <Input
                    id="telefono"
                    {...form.register("telefono")}
                    className="mt-1"
                    placeholder="+34 600 000 000"
                  />
                  {form.formState.errors.telefono && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.telefono.message}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Domicilio Fiscal */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-sagardoy-navy">Domicilio fiscal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="empresaActual">Empresa actual *</Label>
                  <Input
                    id="empresaActual"
                    {...form.register("empresaActual")}
                    className="mt-1"
                  />
                  {form.formState.errors.empresaActual && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.empresaActual.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="cargo">Cargo *</Label>
                  <Input
                    id="cargo"
                    {...form.register("cargo")}
                    className="mt-1"
                  />
                  {form.formState.errors.cargo && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.cargo.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...form.register("email")}
                    className="mt-1"
                    placeholder="email@ejemplo.com"
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="telefonoEmpresa">Teléfono *</Label>
                  <Input
                    id="telefonoEmpresa"
                    {...form.register("telefonoEmpresa")}
                    className="mt-1"
                  />
                  {form.formState.errors.telefonoEmpresa && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.telefonoEmpresa.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="domicilio">Domicilio *</Label>
                  <Input
                    id="domicilio"
                    {...form.register("domicilio")}
                    className="mt-1"
                  />
                  {form.formState.errors.domicilio && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.domicilio.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="codigoPostal">Código postal *</Label>
                  <Input
                    id="codigoPostal"
                    {...form.register("codigoPostal")}
                    className="mt-1"
                    placeholder="28001"
                  />
                  {form.formState.errors.codigoPostal && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.codigoPostal.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="localidad">Localidad *</Label>
                  <Input
                    id="localidad"
                    {...form.register("localidad")}
                    className="mt-1"
                  />
                  {form.formState.errors.localidad && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.localidad.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="provincia">Provincia *</Label>
                  <Input
                    id="provincia"
                    {...form.register("provincia")}
                    className="mt-1"
                  />
                  {form.formState.errors.provincia && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.provincia.message}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Datos Bancarios */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-sagardoy-navy">Datos Bancarios</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="nombreTitular">Nombre del titular *</Label>
                  <Input
                    id="nombreTitular"
                    {...form.register("nombreTitular")}
                    className="mt-1"
                  />
                  {form.formState.errors.nombreTitular && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.nombreTitular.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="bancoCaja">Banco / Caja *</Label>
                  <Input
                    id="bancoCaja"
                    {...form.register("bancoCaja")}
                    className="mt-1"
                  />
                  {form.formState.errors.bancoCaja && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.bancoCaja.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="direccionBanco">Dirección del banco *</Label>
                  <Input
                    id="direccionBanco"
                    {...form.register("direccionBanco")}
                    className="mt-1"
                  />
                  {form.formState.errors.direccionBanco && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.direccionBanco.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="codigoPostalBanco">Código postal *</Label>
                  <Input
                    id="codigoPostalBanco"
                    {...form.register("codigoPostalBanco")}
                    className="mt-1"
                  />
                  {form.formState.errors.codigoPostalBanco && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.codigoPostalBanco.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="localidadBanco">Localidad *</Label>
                  <Input
                    id="localidadBanco"
                    {...form.register("localidadBanco")}
                    className="mt-1"
                  />
                  {form.formState.errors.localidadBanco && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.localidadBanco.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="provinciaBanco">Provincia *</Label>
                  <Input
                    id="provinciaBanco"
                    {...form.register("provinciaBanco")}
                    className="mt-1"
                  />
                  {form.formState.errors.provinciaBanco && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.provinciaBanco.message}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="iban">IBAN / Número de cuenta bancaria *</Label>
                  <Input
                    id="iban"
                    {...form.register("iban")}
                    className="mt-1"
                    placeholder="ES00 0000 0000 0000 0000 0000"
                  />
                  {form.formState.errors.iban && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.iban.message}</p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="opcionFacturacion">Opción de facturación *</Label>
                <Select onValueChange={(value) => form.setValue("opcionFacturacion", value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="autonomo">Autónomo</SelectItem>
                    <SelectItem value="empresa">Empresa</SelectItem>
                    <SelectItem value="sociedad">Sociedad</SelectItem>
                  </SelectContent>
                </Select>
                {form.formState.errors.opcionFacturacion && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.opcionFacturacion.message}</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Términos y Condiciones */}
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="usoImagen"
                  checked={form.watch("usoImagen")}
                  onCheckedChange={(checked) => form.setValue("usoImagen", !!checked)}
                />
                <div className="text-sm">
                  <Label htmlFor="usoImagen" className="cursor-pointer">
                    Uso del derecho de imagen.{" "}
                    <button 
                      type="button"
                      onClick={() => setImageRightsModalOpen(true)}
                      className="text-sagardoy-blue hover:underline"
                    >
                      Ver
                    </button>
                  </Label>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="politicaPrivacidad"
                  checked={form.watch("politicaPrivacidad")}
                  onCheckedChange={(checked) => form.setValue("politicaPrivacidad", !!checked)}
                />
                <div className="text-sm">
                  <Label htmlFor="politicaPrivacidad" className="cursor-pointer">
                    Política de privacidad.{" "}
                    <Link href="#" className="text-sagardoy-blue hover:underline">
                      Ver
                    </Link>
                    <span className="text-red-500 ml-1">*</span>
                  </Label>
                </div>
              </div>
              {form.formState.errors.politicaPrivacidad && (
                <p className="text-red-500 text-sm">{form.formState.errors.politicaPrivacidad.message}</p>
              )}
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-sagardoy-red text-white px-8 py-3 text-lg font-semibold hover:bg-red-700 disabled:opacity-50"
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </Button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-sagardoy-navy text-white py-12 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img 
                src={sagardoyLogo} 
                alt="Sagardoy School" 
                className="h-12 w-auto filter brightness-0 invert mb-6"
              />
              <div className="space-y-2 text-slate-300">
                <p>
                  <Link href="#" className="hover:text-white">Condiciones de uso</Link>
                </p>
                <p>
                  <Link href="#" className="hover:text-white">Política de Cookies</Link>
                </p>
                <p>
                  <Link href="#" className="hover:text-white">Política de Privacidad</Link>
                </p>
                <p className="text-sm mt-4">
                  © Copyright 2024<br />
                  Sagardoy School<br />
                  Powered by: Engage360
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">VISITA NUESTRA ESCUELA:</h4>
                <p className="text-slate-300">
                  C/Velázquez 86D, 28006 Madrid
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">ESCRÍBENOS UN EMAIL:</h4>
                <p className="text-slate-300">
                  info@sagardoyschool.com
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">LLÁMANOS:</h4>
                <p className="text-slate-300">
                  Telf: +34 91 54 29 040
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal de Derechos de Imagen */}
      <Dialog open={imageRightsModalOpen} onOpenChange={setImageRightsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-sagardoy-navy">
              Autorización para el uso del derecho de imagen
            </DialogTitle>
            <DialogDescription className="sr-only">
              Términos y condiciones para el uso del derecho de imagen
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              Mediante la aceptación de la presente autorización ("Autorización") declaro ser mayor de 
              edad y autorizo expresamente a Sagardoy Business & Law School (en adelante "SBLS"), 
              con domicilio social en la c/ Tutor, 27, 28008 Madrid y C.I.F. nº B-88.562.079 para que, 
              directamente o a través de terceros, pueda captar y reproducir por cualquier medio mi 
              imagen (incluyendo mi voz y mi nombre) (las "Captaciones") con ocasión de mi 
              participación en las actividades docentes y no docentes de SBLS durante el curso 
              académico 2020-2021. La presente Autorización comprende la captación, explotación, 
              reproducción, publicación, transformación y comunicación pública (incluyendo la puesta a 
              disposición del público) de mi imagen (y/o mi voz o nombre) por cualquier medio o soporte, 
              incluyendo a título enunciativo medios impresos, audiovisuales, digitales, internet, prensa, 
              radio, redes sociales, páginas web, aplicaciones móviles, etc. La presente Autorización 
              abarca el uso de la imagen, voz y/o nombre con la finalidad de difundir y publicitar la 
              actividad docente y/o comercial de SBLS en cualquier medio de comunicación, con 
              capacidad plena de transmisión o sublicencia a terceros, para un ámbito territorial mundial 
              y por el plazo máximo de duración de los derechos, de conformidad con la legislación 
              aplicable.
            </p>

            <div className="mt-6">
              <h3 className="font-bold text-sagardoy-navy mb-3">DECLARO Y ASUMO</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  Que SBLS no tendrá que contar con mi aprobación para la utilización de las 
                  Captaciones.
                </li>
                <li>
                  Que la presente Autorización no dará lugar a ningún tipo de contraprestación 
                  económica.
                </li>
                <li>
                  Que no realizaré ningún acto susceptible de impedir o dificultar el pleno ejercicio 
                  pacífico de los derechos que a SBLS le correspondan en virtud de la presente 
                  Autorización.
                </li>
                <li>
                  Que las Captaciones podrán encontrarse disponibles, más allá de los límites de la 
                  presente Autorización, en repositorios virtuales y/o redes sociales.
                </li>
              </ul>
            </div>

            <p className="mt-4">
              El responsable del tratamiento de los datos personales facilitados en el formulario es el 
              Sagardoy Business & Law School, quien tiene un interés legítimo en tratarlos con la 
              finalidad gestionar la presente autorización y su participación en la difusión y publicidad de 
              SBLS para promocionar sus actividades y servicios pertenecientes al sector de la 
              educación superior. Podrán acceder a sus datos personales los prestadores de servicios 
              de SBLS. Tiene derecho a acceder, rectificar y suprimir sus datos, así como otros 
              derechos, como se explica en la información adicional sobre privacidad que figura al 
              reverso de este documento.
            </p>
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <Button 
              variant="outline" 
              onClick={() => setImageRightsModalOpen(false)}
            >
              Cancelar
            </Button>
            <Button 
              className="bg-sagardoy-red text-white hover:bg-red-700"
              onClick={() => {
                form.setValue("usoImagen", true);
                setImageRightsModalOpen(false);
              }}
            >
              Aceptar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}