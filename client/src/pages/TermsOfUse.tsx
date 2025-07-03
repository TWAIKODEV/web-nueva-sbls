import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-sagardoy-navy text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl mb-6 title">
              Condiciones de Uso
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Sagardoy pone la web a disposición de los usuarios de Internet con el fin de que puedan conocernos mejor y conocer los servicios que prestamos.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Aviso Legal */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-sagardoy-navy mb-6">1. AVISO LEGAL</h2>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  La web https://sagardoyschool.com/ (en adelante, la "Web") es titularidad de la compañía SAGARDOY BUSINESS & LAW SCHOOL, S.L. con domicilio social en la calle C/Velazquez 86D, 28006 Madrid y titular del CIF número B-88562079 e inscrita en el Registro Mercantil de Madrid al Tomo 40086, Libro 0, Folio 140, Sec. 8ª, Hoja M-712220, inscripción 1ª (en adelante, "SAGARDOY" o la "Empresa").
                </p>
                <p className="text-sagardoy-blue leading-relaxed">
                  SAGARDOY pone la Web a disposición de los usuarios de Internet con el fin de que puedan conocernos mejor, saber los servicios que prestamos y contactar con nosotros.
                </p>
              </CardContent>
            </Card>

            {/* Objeto y Ámbito */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-sagardoy-navy mb-6">2. OBJETO Y ÁMBITO DE APLICACIÓN</h2>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  Las presentes condiciones generales de uso de la Web (en adelante, las "Condiciones de Uso") regulan junto con la Política de Privacidad y la Política de Cookies el uso de la Web, así como la relación entre SAGARDOY y los Usuarios. Las presentes Condiciones de Uso regulan en concreto las normas a respetar y cumplir en el uso de la Web.
                </p>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  Las presentes Condiciones de Uso estarán siempre a su disposición en la Web para que pueda consultarlas, archivarlas o imprimirlas en cualquier momento.
                </p>
                <p className="text-sagardoy-blue leading-relaxed">
                  Tanto las presentes Condiciones de Uso, como la Política de Privacidad y la Política de Cookies se han redactado de conformidad con lo dispuesto en la normativa vigente aplicable en materia de Internet, consumidores y usuarios y protección de datos, entre otras, la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico, la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales y el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y por el que se deroga la Directiva 95/46/CE.
                </p>
              </CardContent>
            </Card>

            {/* Acceso y Aceptación */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-sagardoy-navy mb-6">3. ACCESO Y ACEPTACIÓN DE LAS CONDICIONES DE USO</h2>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  Al acceder a la Web pasa a tener la condición de usuario (en adelante, el "Usuario). El acceso al Sitio web es gratuito salvo en la parte relativa al coste de la conexión a través de la red de telecomunicaciones suministrada por el proveedor de acceso a Internet que haya contratado.
                </p>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  El Usuario puede navegar libremente por la Web y acceder a la misma tantas veces como quiera sin necesidad de suscribirse o registrarse.
                </p>
                <p className="text-sagardoy-blue leading-relaxed">
                  Al acceder a la Web el Usuario declara que tiene capacidad suficiente para comprender y aceptar íntegramente las presentes Condiciones de Uso.
                </p>
              </CardContent>
            </Card>

            {/* Obligaciones del Usuario */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-sagardoy-navy mb-6">4. OBLIGACIONES DEL USUARIO DE LA WEB</h2>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  Como Usuario se compromete a usar la Web conforme a las presentes Condiciones de Uso, la buena fe y la legislación vigente. Asimismo, manifiesta y garantiza comprender las presentes Condiciones de Uso. Queda terminantemente prohibido cualquier uso de la Web y sus funcionalidades fraudulento, abusivo, ilícito o contrario a la buena fe por parte del Usuario.
                </p>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  En todo caso, el Usuario deberá abstenerse de:
                </p>
                <ul className="list-disc list-inside space-y-3 text-sagardoy-blue">
                  <li>Reproducir, distribuir, comunicar públicamente, transformar o modificar la Web o cualquiera de sus contenidos, incluidas las presentes Condiciones de Uso, independientemente del fin de dicho uso, sin autorización previa y por escrito de SAGARDOY.</li>
                  <li>Introducir en la Web o su red programas de datos susceptibles de provocar daños en los sistemas informáticos de SAGARDOY, sus proveedores o terceros.</li>
                  <li>Realizar cualquier tipo de actividad ilícita, fraudulenta o contraria a las presentes Condiciones de uso, la legislación vigente y/o la buena fe o que impida y/o dificulte la correcta utilización de la Web o su contenido.</li>
                  <li>Insertar en páginas webs, plataformas, foros, chats, blogs o redes sociales ajenas cualquier tipo de enlace o vínculo que permita vincular o reproducir la Web o cualquier contenido de las mismas con dichas webs, plataformas, foros, chats, blogs o redes sociales ajenas salvo si el enlace únicamente vincula directamente a la página principal de la Web sin que pueda reproducirlo de ninguna forma.</li>
                  <li>Vincular o reproducir la Web o su contenido desde webs, plataformas, foros, chats, blogs o redes sociales ajenas que sean contrarias a la ley, ofensivas o atentatorias contra la dignidad humana, los derechos fundamentales o la propia SAGARDOY y/o sean susceptibles de ser consideradas delictivas.</li>
                  <li>Introducir y/o difundir en la Web contenidos que atenten contra los derechos humanos y la dignidad de las personas como, por ejemplo, contenido racista, xenófobo, pornográfico o que supongan apología del terrorismo.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Protección de Datos */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-sagardoy-navy mb-6">5. PROTECCIÓN DE DATOS Y COOKIES</h2>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  Tal y como establece nuestra Política de Privacidad, SAGARDOY se compromete a tratar los datos de los Usuarios respetando siempre su confidencialidad y a utilizarlos de acuerdo con las finalidades por los que son captados, así como a dar cumplimiento a su obligación de guardarlos y adaptar todas las medidas necesarias para evitar la alteración, pérdida, tratamiento o acceso de terceros no autorizados de acuerdo con lo establecido en la legislación vigente referente a la protección de datos de carácter personal.
                </p>
                <p className="text-sagardoy-blue leading-relaxed">
                  Para saber más sobre cómo tratamos sus datos de carácter personal, por favor lea nuestra Política de Privacidad y nuestra Política de Cookies.
                </p>
              </CardContent>
            </Card>

            {/* Régimen de Responsabilidad */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-sagardoy-navy mb-6">6. RÉGIMEN DE RESPONSABILIDAD</h2>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  El Usuario deberá usar la Web y su contenido conforme a lo establecido en las presentes Condiciones de Uso, la legislación vigente y la buena fe. Queda expresamente prohibido cualquier uso de la Web o de su contenido contrario a las presentes Condiciones de Uso, la ley o la buena fe, independientemente de que dicho uso tenga o no finalidad económica.
                </p>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  El Usuario será responsable de cualquier daño o perjuicio causado a SAGARDOY o a terceros derivado directa o indirectamente de cualquier uso que haga de la Web o de su contenido contrario a las presentes Condiciones de Uso, la ley, la moral, el orden público o la buena fe.
                </p>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  SAGARDOY requiere de servicios proporcionados por terceros para que la Web y su contenido estén accesibles. Es posible que a pesar de los esfuerzos que realiza SAGARDOY para mantener disponible y accesible la Web, ésta puede verse suspendida, interrumpida o cancelada por causas ajenas a SAGARDOY. Por ello SAGARDOY no garantiza la inexistencia de interrupciones o errores en el acceso a la Web o su contenido, ni que el mismo se encuentre actualizado en todo momento o se muestre en su última versión. En consecuencia, SAGARDOY declina cualquier responsabilidad por los daños o perjuicios que puedan derivarse al Usuario como consecuencia de la suspensión, interrupción, falta de continuidad, caída de red o desconexión de la Web.
                </p>
                <p className="text-sagardoy-blue leading-relaxed">
                  En ningún caso y bajo ningún concepto responderá SAGARDOY por los daños o perjuicios derivados al Usuario de causas no imputables a la primera tales como, a mero título ejemplificativo y en ningún caso limitativo, catástrofes naturales, situaciones de fuerza mayor o urgencia extrema, virus, componentes dañinos, mal funcionamiento del navegador, intrusiones informáticas o ataques de terceros.
                </p>
              </CardContent>
            </Card>

            {/* Propiedad Intelectual */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-sagardoy-navy mb-6">7. DERECHOS DE PROPIEDAD INTELECTUAL E INDUSTRIAL</h2>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  La Web y su contenido son objeto de protección en aplicación de la normativa vigente en materia de Propiedad Intelectual e Industrial. SAGARDOY es el titular o tiene debidamente licenciados todos los derechos de Propiedad Intelectual e Industrial sobre la Web y su contenido.
                </p>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  Queda prohibida cualquier forma de reproducción, distribución, comunicación pública, transformación, puesta a disposición y, en general, cualquier otro acto de explotación, tenga o no fines comerciales y/o carácter oneroso o gratuito de la Web o de su contenido, sin el consentimiento previo y expreso de SAGARDOY.
                </p>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  SAGARDOY se reserva todos los derechos de Propiedad Intelectual e Industrial sobre la Web y su contenido. En ningún caso y bajo ningún concepto el acceso a la Web o la navegación en la misma suponen una cesión de ningún tipo por parte de SAGARDOY de los derechos de Propiedad Intelectual o Industrial de la Web y su contenido.
                </p>
                <p className="text-sagardoy-blue leading-relaxed">
                  Al reproducir, difundir, publicar, compartir o enviar el Usuario cualquier contenido en o a través de la Web, garantiza a SAGARDOY que es el legítimo titular de los mismos o que ostenta los derechos de imagen, de Propiedad Intelectual y/o Industrial o cualesquiera otros necesarios para su uso, reproducción y comunicación pública sobre los mismos. Asimismo, al reproducir, difundir, publicar, compartir o enviar cualquier contenido, independientemente de su naturaleza o contenido, en o a través de la Web cedes gratuitamente a SAGARDOY sobre dichos contenidos de manera no exclusiva, para todo el mundo, hasta que las obras entren en el dominio público y de manera irrevocable todos los derechos de explotación de propiedad intelectual en todas sus modalidades incluyendo la facultad de sublicenciar a terceros dichos derechos.
                </p>
              </CardContent>
            </Card>

            {/* Enlaces */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-sagardoy-navy mb-6">8. ENLACES</h2>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  Las webs, plataformas, foros, chats, blogs o redes sociales ajenos que enlacen o vinculen a la Web deberán informar claramente que no cuentan con la autorización, ni la supervisión de la Empresa y que dicha vinculación o enlace no conlleva, supone o implica asociación de ningún tipo entre SAGARDOY y las webs, plataformas, foros, chats, blogs o redes sociales ajenos que enlacen o vinculen a la Web.
                </p>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  En todo caso, cualquier enlace que tenga como destino la Web deberá dirigirse de manera directa al home page o página de inicio de la web mediante un click a la dirección URL de la web abarcando la totalidad de la pantalla del home page o página de inicio de la Web.
                </p>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  SAGARDOY no responde en ningún caso y bajo ninguna circunstancia, de los contenidos, informaciones o datos relativos a la Web, a su contenido o a cualquier otra materia que contengan las webs, plataformas, foros, chats, blogs o redes sociales ajenos que enlacen o vinculen a la Web.
                </p>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  Queda expresamente prohibido enlazar o vincular a la Web desde webs, plataformas, foros, chats, blogs o redes sociales contrarias a la ley, la moral y las buenas costumbres, especialmente aquellas con contenidos pornográficos, ilícitos, ilegales o atentatorios contra los derechos humanos.
                </p>
                <p className="text-sagardoy-blue leading-relaxed">
                  Por otro lado, la Web puede contener enlaces a webs, plataformas, foros, chats, blogs o redes sociales de terceros. A pesar de nuestros esfuerzos, la Empresa no dispone de medios humanos y/o técnicos para conocer o controlar la información y/o contenidos que aparecen en los sitios webs de terceros. Por ello SAGARDOY en ningún caso será responsable del contenido de los sitios enlazados y bajo ningún concepto dichos enlaces podrán considerarse conocimiento efectivo del contenido de los sitios a los que enlazan.
                </p>
              </CardContent>
            </Card>

            {/* Duración y Modificación */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-sagardoy-navy mb-6">9. DURACIÓN Y MODIFICACIÓN DE LOS TÉRMINOS Y CONDICIONES</h2>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  Las presentes Condiciones de Uso estarán vigentes durante el tiempo que estén expuestas a los Usuarios en la Web, de manera que en cuanto sean modificadas o actualizadas total o parcialmente, las presentes condiciones dejarán de estar vigentes, siendo las nuevas Condiciones de Uso las que pasen a regular el uso de la Web y la relación entre SAGARDOY y los Usuarios.
                </p>
                <p className="text-sagardoy-blue leading-relaxed">
                  SAGARDOY informa a los Usuarios que las presentes Condiciones de Uso pueden variar con el tiempo. Así, SAGARDOY se reserva la facultad de modificar las presentes Condiciones de Uso cuando ello resulte necesario como consecuencia de cambios en la Web; modificaciones de SAGARDOY a nivel societario; circunstancias económicas, operativas o de negocio o cambios en el modelo de negocio de SAGARDOY y/o novedades legislativas o jurisprudenciales. En caso de modificación de las presentes Condiciones de Uso, SAGARDOY avisará a los Usuarios en el home page de la Web sobre dicha circunstancia con el fin de que los Usuarios estén debidamente informados y puedan consultar las revisiones, modificaciones o actualizaciones a su entera satisfacción.
                </p>
              </CardContent>
            </Card>

            {/* Contacto */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-sagardoy-navy mb-6">10. CONTACTO</h2>
                <p className="text-sagardoy-blue leading-relaxed">
                  SAGARDOY pone a disposición de los Usuarios el formulario de contacto en la dirección www.sagardoyschool.com y el email de contacto info@sagardoyschool.com para que puedan ponerse en contacto con SAGARDOY para solucionar cualquier problema o duda que tengan.
                </p>
              </CardContent>
            </Card>

            {/* Fuero y Ley */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-sagardoy-navy mb-6">11. FUERO Y LEY APLICABLE</h2>
                <p className="text-sagardoy-blue leading-relaxed">
                  Las presentes Condiciones de Uso junto con la Política de Privacidad y la Política de Cookies se rigen por la normativa española vigente en cada momento. En caso de controversia, ambas partes se someterán para la resolución de los conflictos al fuero que corresponda al Usuario según la normativa aplicable.
                </p>
              </CardContent>
            </Card>

            {/* Generalidades */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-sagardoy-navy mb-6">12. GENERALIDADES</h2>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  En ningún caso y bajo la falta de ejercicio de sus derechos por parte de SAGARDOY podrá entenderse como una renuncia a los mismos.
                </p>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  Los encabezamientos contenidos en las presentes condiciones son meramente orientativas o informativas, de manera que no afectan, califican o amplían la interpretación de las mismas.
                </p>
                <p className="text-sagardoy-blue leading-relaxed">
                  En el caso de que cualquiera de las cláusulas contenidas en las presentes Condiciones de Uso fuera declarada nula, abusiva o inaplicable, total o parcialmente, por un órgano judicial o administrativo, dicha declaración afectará de manera individual a la cláusula en cuestión, teniéndose la misma por no puesta y sin que la declaración de nulidad, abuso o inaplicabilidad pueda extenderse bajo ningún concepto al resto de condiciones, que subsistirán.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl text-sagardoy-navy mb-6 title">
              ¿Tienes alguna pregunta sobre nuestras condiciones de uso?
            </h2>
            <p className="text-xl text-sagardoy-blue mb-8 max-w-3xl mx-auto">
              Nuestro equipo está disponible para resolver cualquier duda que puedas tener sobre el uso de nuestro sitio web.
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
