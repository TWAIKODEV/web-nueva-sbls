import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import {Link} from 'wouter';

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-sagardoy-navy text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Política de Cookies
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              La presente Política de Cookies explica qué son las cookies, cómo las emplea SAGARDOY BUSINESS & LAW SCHOOL, S.L. en su página web y cómo puede administrarlas el usuario.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Introducción */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-sagardoy-navy mb-6">Introducción</h2>
                <p className="text-sagardoy-blue leading-relaxed">
                  La presente Política Cookies explica qué son las cookies, cómo las emplea SAGARDOY BUSINESS & LAW SCHOOL, S.L. (en adelante, "SAGARDOY") en su página web https://sagardoyschool.com/ (en adelante, el "Sitio web") y cómo puede administrarlas el usuario.
                </p>
              </CardContent>
            </Card>

            {/* ¿Qué es una cookie? */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-sagardoy-navy mb-6">1. ¿QUÉ ES UNA COOKIE?</h2>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  Una cookie es cualquier tipo de dispositivo del almacenamiento y recuperación de datos que se utilice en el equipo terminal de un usuario con la finalidad de almacenar información y recuperar la información ya almacenada. Así, las cookies son pequeños ficheros de datos que se alojan en el ordenador del usuario y que contienen cierta información de la visita que el usuario hace al Sitio web. La cookie es descargada por el dispositivo que usa para acceder al Sitio web y almacenada en el disco duro de dicho dispositivo. En la presente Política de Cookies utilizamos la palabra cookie para referirnos a todos los archivos que almacenan información de esta manera.
                </p>
                <p className="text-sagardoy-blue leading-relaxed">
                  Las cookies tienen diversas utilidades, entre ellas permitir que el Sitio web reconozca su dispositivo cuando vuelva a visitarnos, asegurar que recibe el contenido correcto o guardar información con preferencias o servicios que el usuario nos hay proporcionado. Las cookies no dañan el dispositivo del usuario.
                </p>
              </CardContent>
            </Card>

            {/* Tipos de cookies */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-sagardoy-navy mb-6">2. ¿QUÉ TIPO DE COOKIES UTILIZAMOS?</h2>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  En SAGARDOY empleamos cookies en el Sitio web para fines analíticos, mejorar nuestros servicios y mostrarte publicidad relacionada con tus preferencias basada en tus hábitos de navegación.
                </p>
                <p className="text-sagardoy-blue leading-relaxed mb-8">
                  Las cookies pueden diferenciarse teniendo en cuenta la finalidad para las que se emplean, su duración o quién las gestiona. Es importante tener en cuenta que una misma cookie puede pertenecer a diversas categorías. A continuación, te proporcionamos una descripción de las cookies empleadas en el Sitio web:
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-sagardoy-navy mb-4">A) Según la finalidad de las cookies</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-bold text-sagardoy-navy mb-3">Cookies técnicas</h4>
                        <p className="text-sagardoy-blue leading-relaxed">
                          Son cookies técnicas aquellas que te permiten navegar a través del Sitio Web y la utilizar las diferentes opciones o servicios que el mismo ofrece. Nuestro Sitio Web emplea cookies técnicas, algunas de las cuales son esenciales para el funcionamiento del sitio web, como, por ejemplo, las cookies que nos permiten identificar a los usuarios de manera que puedan entrar en su acceso privado o mantener la sesión con el servidor. Si decides no habilitar estas cookies, puede que la navegación por el Sitio Web no sea posible o resulte mucho menos satisfactoria porque haya contenido que no puedas ver o funcionalidades que no puedas emplear.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-sagardoy-navy mb-3">Cookies de análisis</h4>
                        <p className="text-sagardoy-blue leading-relaxed mb-4">
                          Las cookies de análisis permiten obtener información genérica sobre tus accesos al Sitio Web con el fin de proporcionarnos información agregada de los mismos con fines estadísticos. Este tipo de cookies se emplean para analizar cómo navegan los usuarios por el Sitio Web y monitorizar el rendimiento del mismo.
                        </p>
                        <p className="text-sagardoy-blue leading-relaxed mb-4">
                          Adicionalmente, las herramientas utilizadas para obtener estadísticas de uso del Sitio Web ofrecen la posibilidad de obtener un nivel de detalle cada vez más alto sobre el comportamiento de los visitantes y usuarios del sitio web. Estos datos pueden recogerse, tratarse y conservarse asociados a una dirección IP o a un usuario determinado o bien ser sometidos a un proceso de disociación con el fin de obtener conclusiones basadas en datos anónimos.
                        </p>
                        <p className="text-sagardoy-blue leading-relaxed">
                          La información recogida a través de cookies puede incluir, entre otros datos, la dirección IP que identifica el ordenador en ese momento, la fecha y hora del acceso y las áreas del Sitio Web que se visitan. La finalidad de esta recogida de datos es supervisar el uso y la utilidad de nuestro Sitio Web, con fines estadísticos y de seguridad.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-sagardoy-navy mb-3">Cookies de publicidad comportamental</h4>
                        <p className="text-sagardoy-blue leading-relaxed">
                          Estas cookies almacenan información del comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrarles publicidad en función del mismo. Utilizamos estas cookies para gestionar, de la forma más eficaz posible, los espacios publicitarios en otras páginas webs en base a criterios como el contenido editado o la frecuencia en la que se muestran los anuncios.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-sagardoy-navy mb-3">Cookies de personalización</h4>
                        <p className="text-sagardoy-blue leading-relaxed">
                          Son aquellas que permiten recordar información para que el usuario acceda al Sitio Web y los servicios que ofrece con determinadas características que pueden diferenciar su experiencia de la de otros usuarios, como, por ejemplo, el idioma, el número de resultados a mostrar cuando el usuario realiza una búsqueda, el aspecto o contenido del servicio en función del tipo de navegador a través del cual el usuario accede al servicio o de la región desde la que accede al servicio, etc. Las cookies también pueden ser utilizadas para recordar la configuración y las preferencias del usuario en cuanto al diseño, los colores y las zonas o menús que desea tener más accesibles en la pantalla de inicio. Usamos cookies de funcionalidad para recordar tus preferencias. Por ejemplo, recordamos cambios que hayas hecho en las preferencias de tu cuenta.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-sagardoy-navy mb-4">B) Según la entidad que las gestione</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-bold text-sagardoy-navy mb-2">Cookies propias</h4>
                        <p className="text-sagardoy-blue leading-relaxed">
                          Son las cookies enviadas a su terminal desde un equipo o dominio gestionado por SAGARDOY y desde el que se presta el servicio solicitado.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-sagardoy-navy mb-2">Cookies de terceros</h4>
                        <p className="text-sagardoy-blue leading-relaxed mb-4">
                          Son las cookies que se envían a tu terminal desde un equipo o dominio que no es gestionado por SAGARDOY, sino por otra entidad que trata los datos obtenidos través de las cookies.
                        </p>
                        <p className="text-sagardoy-blue leading-relaxed">
                          A continuación puedes encontrar la relación las compañías responsables de las cookies de terceros que emplea el Sitio Web:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-sagardoy-blue mt-2">
                          <li>Google LLC</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-sagardoy-navy mb-4">C) Según el plazo de activación</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-bold text-sagardoy-navy mb-2">Cookies de sesión</h4>
                        <p className="text-sagardoy-blue leading-relaxed">
                          Son las cookies diseñadas para recabar y almacenar datos mientras el usuario accede al Sitio Web.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-sagardoy-navy mb-2">Cookies persistentes</h4>
                        <p className="text-sagardoy-blue leading-relaxed">
                          Son aquellas cookies en las que los datos siguen almacenados en el terminal del usuario y pueden ser accedidos y tratados durante un periodo definido por el responsable de la cookie, y que puede ir de unos minutos a varios años.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cookies específicas */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-sagardoy-navy mb-6">3. ¿QUÉ COOKIES PODRÁS ENCONTRAR EN NUESTRO SITIO WEB?</h2>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  A continuación, se presenta una lista de las cookies que podrá encontrar en nuestro Sitio web:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-sagardoy-navy text-white">
                        <th className="border border-gray-300 p-3 text-left">Cookie</th>
                        <th className="border border-gray-300 p-3 text-left">Tipo</th>
                        <th className="border border-gray-300 p-3 text-left">Duración</th>
                        <th className="border border-gray-300 p-3 text-left">Descripción</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 text-sm text-sagardoy-blue">Google Analytics (_ga)</td>
                        <td className="border border-gray-300 p-3 text-sm text-sagardoy-blue">Cookies De Terceros</td>
                        <td className="border border-gray-300 p-3 text-sm text-sagardoy-blue">2 Años</td>
                        <td className="border border-gray-300 p-3 text-sm text-sagardoy-blue">Se Utiliza Para Identificar Y Distinguir A Un Usuario. Almacenan Un Identificador De Cliente Único (ID De Cliente), Que Se Genera Aleatoriamente. Se Utiliza Para Calcular Las Interacciones De Los Usuarios (Visitas, Los Datos De Usuarios, Sesiones Y Campañas), Con El Fin De Optimizar Los Servicios Que Ofrecen.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-sm text-sagardoy-blue">Google Analytics (_ga)</td>
                        <td className="border border-gray-300 p-3 text-sm text-sagardoy-blue">Cookies De Terceros</td>
                        <td className="border border-gray-300 p-3 text-sm text-sagardoy-blue">1 Minuto</td>
                        <td className="border border-gray-300 p-3 text-sm text-sagardoy-blue">Se Utiliza Para Diferenciar Entre Los Diferentes Objetos De Seguimiento Creados En La Sesión. La Cookie Se Actualiza Cada Vez Que Envía Los Datos A Google Analytics.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-sm text-sagardoy-blue">Google Analytics (_ga)</td>
                        <td className="border border-gray-300 p-3 text-sm text-sagardoy-blue">Cookies De Terceros</td>
                        <td className="border border-gray-300 p-3 text-sm text-sagardoy-blue">24 Horas</td>
                        <td className="border border-gray-300 p-3 text-sm text-sagardoy-blue">Se Utiliza Para Identificar Al Mismo Usuario Durante Un Único Día.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Deshabilitar cookies */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-sagardoy-navy mb-6">4. ¿CÓMO DESHABILITAR Y BLOQUEAR COOKIES?</h2>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  Le informamos que, en cualquier caso, puede deshabilitar o bloquear las cookies activando la configuración de su navegador, permitiéndole rechazar la instalación de todas o alguna de las cookies. Si rechaza las cookies, podrá seguir haciendo uso de nuestra web, aunque el uso de algunos de los servicios puede ser limitado y como consecuencia, su experiencia en nuestro Sitio Web será menos satisfactoria.
                </p>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  Si desea retirar su consentimiento relacionado con la presente Política de Cookies, deberá eliminar las cookies almacenadas en su equipo a través de los ajustes y configuraciones de su navegador de internet.
                </p>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  Puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador. Para más información sobre cómo ajustar sus configuraciones de cookies en los siguientes navegadores, le remitimos al enlace pertinente:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-sagardoy-navy mb-2">Internet Explorer</h4>
                    <a href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies" 
                       className="text-sagardoy-gold hover:text-yellow-600 underline break-all">
                      https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-sagardoy-navy mb-2">Firefox</h4>
                    <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias?redirectlocale=es&redirectslug=habilitar-y-deshabilitar-cookies-que-los-sitios-we" 
                       className="text-sagardoy-gold hover:text-yellow-600 underline break-all">
                      https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias?redirectlocale=es&redirectslug=habilitar-y-deshabilitar-cookies-que-los-sitios-we
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-sagardoy-navy mb-2">Chrome</h4>
                    <a href="https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&hl=es" 
                       className="text-sagardoy-gold hover:text-yellow-600 underline break-all">
                      https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&hl=es
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-sagardoy-navy mb-2">Safari</h4>
                    <a href="https://support.apple.com/kb/PH19214?viewlocale=es_ES&locale=es_ES" 
                       className="text-sagardoy-gold hover:text-yellow-600 underline break-all">
                      https://support.apple.com/kb/PH19214?viewlocale=es_ES&locale=es_ES
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cambios en la política */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-sagardoy-navy mb-6">5. CAMBIOS EN LA POLÍTICA DE COOKIES</h2>
                <p className="text-sagardoy-blue leading-relaxed">
                  Es posible que la presente Política de Cookies esté sujeta a cambios o modificaciones, por ello le recomendamos revisar esta política cada vez que acceda a nuestro sitio web con el objetivo de estar adecuadamente informado sobre cómo y para qué utilizamos las cookies.
                </p>
              </CardContent>
            </Card>

            {/* Contacto */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-sagardoy-navy mb-6">6. CONTACTO</h2>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  Si tuviera alguna duda, comentario o sugerencia sobre la Política de Cookies, por favor póngase en contacto con nosotros a través de la dirección de correo electrónico:
                </p>
                <p className="text-sagardoy-blue font-semibold">
                  protecciondedatos@sagardoy.com
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-sagardoy-navy mb-6">
              ¿Tienes alguna pregunta sobre nuestra política de cookies?
            </h2>
            <p className="text-xl text-sagardoy-blue mb-8 max-w-3xl mx-auto">
              Nuestro equipo está disponible para resolver cualquier duda que puedas tener sobre el uso de cookies en nuestro sitio web.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button className="bg-sagardoy-gold text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300">
                  Contactar
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="border-2 border-sagardoy-navy text-sagardoy-navy px-8 py-3 rounded-lg font-semibold hover:bg-sagardoy-navy hover:text-white transition-all duration-300">
                  Volver al Inicio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
