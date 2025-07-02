import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PrivacyPolicy() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-sagardoy-dark-blue py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Política de Privacidad
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Sagardoy School desea informarle de manera transparente a través de la presente Política de Privacidad sobre el tratamiento de tus datos personales
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
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  SAGARDOY BUSINESS & LAW SCHOOL, S.L. desea informarle de manera transparente a través de la presente Política de Privacidad sobre todos los tratamientos que realizamos con sus datos personales, las finalidades para las cuales los tratamos y los derechos que como usuario puede ejercer sobre sus datos personales.
                </p>
                <p className="text-sagardoy-blue leading-relaxed">
                  Le informamos que al acceder a nuestro Sitio web pasa a tener la condición de Usuario. Como Usuario, declara que dispone de la capacidad legal necesario de comprender y aceptar en su integridad la Política de Privacidad. Gracias por visitar nuestro Sitio web. Esperemos que disfrute conociendo los servicios que SAGARDOY le ofrece.
                </p>
              </CardContent>
            </Card>

            {/* Responsable del tratamiento */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-sagardoy-navy mb-6">1. ¿QUIÉN ES EL RESPONSABLE DEL TRATAMIENTO DE SUS DATOS?</h2>
                <p className="text-sagardoy-blue leading-relaxed">
                  La compañía responsable del tratamiento de sus datos es SAGARDOY BUSINESS & LAW SCHOOL, S.L. (en adelante, "SAGARDOY") inscrita en el Registro Mercantil de Madrid al Tomo 40086, Libro 0, Folio 140, Sec. 8ª, Hoja M-712220, inscripción 1ª con CIF número B-88562079 y con domicilio social en la calle C/Velazquez 86D. 28006 Madrid.
                </p>
              </CardContent>
            </Card>

            {/* Datos personales */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-sagardoy-navy mb-6">2. ¿QUÉ ES UN DATO DE CARÁCTER PERSONAL Y UN TRATAMIENTO?</h2>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  Un dato de carácter personal es aquella información que identifica o puede identificar a una persona. Por ejemplo, los datos que pueden identificar directamente a una persona son el nombre y apellidos, mientras que el número de D.N.I. puede llegar a identificarla. Los datos de carácter personal incluyen información como el teléfono móvil, la dirección de correo electrónico, fecha de nacimiento y sexo entre otros. También podría incluirse los identificadores numéricos como la dirección IP de su ordenador, así como la información que se obtiene a través de las cookies.
                </p>
                <p className="text-sagardoy-blue leading-relaxed">
                  Por otro lado, un tratamiento de datos de carácter personal es toda operación o conjunto de operaciones que realizamos sobre sus datos personales como, por ejemplo, la recogida, registro, conservación, utilización y comunicación de sus datos.
                </p>
              </CardContent>
            </Card>

            {/* Información recopilada */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-sagardoy-navy mb-6">3. ¿QUÉ TIPO DE INFORMACIÓN RECOPILAMOS?</h2>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  Para poder realizar correctamente los tratamientos de datos recogidos en la presente Política de Privacidad, necesitamos recopilar determinada información sobre usted. Por ello, recopilamos la información que nos facilita a través de los canales de interacción y comunicación con SAGARDOY. Los datos que podemos recabar sobre usted a través de estos canales son:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sagardoy-blue">
                  <li>Nombre y apellidos, nacionalidad, domicilio, número de DNI/NIE/Pasaporte, fecha de nacimiento, género;</li>
                  <li>Nombre su empresa y teléfono;</li>
                  <li>Dirección de correo electrónico;</li>
                  <li>Número de teléfono móvil;</li>
                  <li>Información contenida en su Currículum Vitae como expediente académico, trayectoria profesional, recomendaciones, títulos, habilidades, competencias, etc.;</li>
                  <li>Información sobre el uso y navegación por la web (página web desde la que llega al Sitio Web, capas del mismo visitadas, procesos iniciados y abandonados, dirección IP, tiempo que ha permanecido en el Sitio web, etc.).</li>
                  <li>Cualquier otra información que nos pueda facilitar al ponerse en contacto con nosotros por cualquier vía o canal.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Vías de captación */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-sagardoy-navy mb-6">4. ¿A TRAVÉS DE QUÉ VÍAS CAPTAMOS SUS DATOS PERSONALES?</h2>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  En SAGARDOY solo captamos y tratamos información que usted nos facilita a través de las siguientes vías:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-sagardoy-blue">
                  <li>Al contratar los servicios de SAGARDOY para participar en cursos y programas de formación.</li>
                  <li>Asistencia a alguno de nuestros eventos.</li>
                  <li>Opiniones y comentarios en nuestro apartado de noticias en el Sitio web.</li>
                  <li>Interacción con nuestro servicio de atención al cliente.</li>
                  <li>Navegación por la página https://sagardoyschool.com/</li>
                </ol>
              </CardContent>
            </Card>

            {/* Tratamientos */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-sagardoy-navy mb-6">5. ¿QUÉ TRATAMIENTOS REALIZAMOS CON SUS DATOS PERSONALES Y PARA QUÉ FINALIDADES?</h2>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  Queremos ser transparentes con usted e informarle sobre las operaciones que llevamos a cabo con sus datos y las finalidades para las cuales tratamos dichos datos. Por este motivo, hemos procedido a separar la información relativa en cuadros independientes.
                </p>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  Cada cuadro descriptivo de cada tratamiento de datos personales recoge la siguiente información:
                </p>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-lg font-bold text-sagardoy-navy mb-2">¿Para qué finalidades tratamos sus datos?</h4>
                    <p className="text-sagardoy-blue text-sm">En esta columna explicamos con qué finalidad tratamos sus datos personales.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-sagardoy-navy mb-2">¿Cuál es la base legal que nos legitima para el tratamiento de sus datos?</h4>
                    <p className="text-sagardoy-blue text-sm">La normativa de protección de datos requiere que para el tratamiento de sus datos personales tengamos una base que legitime dicho tratamiento. Así, para tratar su información personal nos basamos en las siguientes bases legales:</p>
                    <ul className="list-disc list-inside space-y-1 text-sagardoy-blue text-sm mt-2">
                      <li><strong>Interés legítimo:</strong> SAGARDOY tiene interés legítimo en mantener un contacto regular con los usuarios para mantenerles informados sobre noticias relacionadas con SAGARDOY y sus programas formativos.</li>
                      <li><strong>Ejecución de un contrato:</strong> en el momento que acepta expresamente las Condiciones Generales de Contratación, se convierte en parte del contrato de servicios suscrito con nosotros.</li>
                      <li><strong>Obligación legal:</strong> SAGARDOY actúa como responsable de sus datos y es por ello que debe cumplir con una serie de obligaciones impuestas por normativa contable, fiscal, de protección de datos, etc.</li>
                      <li><strong>Su consentimiento:</strong> En el caso de que SAGARDOY desee realizar algún tratamiento de sus datos cuya justificación legal no pueda basarse en la base legal anteriormente explicada, solicitaremos previamente su consentimiento para dicho tratamiento.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-sagardoy-navy mb-2">¿Durante cuánto tiempo conservamos sus datos?</h4>
                    <p className="text-sagardoy-blue text-sm">En esta columna se informa de manera orientativa durante cuánto tiempo se conservarán sus datos. El tiempo de conservación dependerá en todo caso del tratamiento que se lleva a cabo sobre su información personal.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-sagardoy-navy mb-2">¿Cuáles son sus derechos cuando nos facilita sus datos?</h4>
                    <p className="text-sagardoy-blue text-sm">Esta columna describe los derechos que puede ejercer sobre sus datos personales según al tratamiento que se realice sobre los mismos. Deberá tener en cuenta que dependiendo de la base legal que legitime el tratamiento de sus datos, sus derechos pueden verse limitados.</p>
                  </div>
                </div>

                <div className="space-y-8">
                  {/* Tabla 1: Gestión de inscripción */}
                  <div>
                    <h3 className="text-xl font-bold text-sagardoy-navy mb-4">1. Gestión de la inscripción a nuestros programas y cursos</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-sagardoy-navy text-white">
                            <th className="border border-gray-300 p-3 text-left">¿Para qué finalidades tratamos sus datos?</th>
                            <th className="border border-gray-300 p-3 text-left">¿Sobre qué base legal tratamos sus datos?</th>
                            <th className="border border-gray-300 p-3 text-left">¿Durante cuánto tiempo conservamos sus datos personales?</th>
                            <th className="border border-gray-300 p-3 text-left">¿Cuáles son sus derechos y cómo puede ejercerlos?</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-sm text-sagardoy-blue">
                              • Gestionar las solicitudes inscripción y admisión a los programas de formación y el cumplimiento del contrato existente entre el interesado y SAGARDOY.<br/>
                              • Gestionar su participación en eventos académicos o de divulgación que haya solicitado al SAGARDOY.<br/>
                              • Proporcionar asistencia a los usuarios.<br/>
                              • Gestionar el pago efectivo del programa.<br/>
                              • Gestionar cualquier incidencia relacionada con el programa.
                            </td>
                            <td className="border border-gray-300 p-3 text-sm text-sagardoy-blue">
                              Ejecución del contrato existente entre SAGARDOY y el interesado
                            </td>
                            <td className="border border-gray-300 p-3 text-sm text-sagardoy-blue">
                              Los datos personales serán tratados por SAGARDOY mientras esté vigente el contrato suscrito entre SAGARDOY y el interesado.<br/>
                              Posteriormente, los datos personales proporcionados se conservarán debidamente bloqueados durante el plazo legalmente estipulado de prescripción de las acciones que puedan derivarse como consecuencia de o en relación con el contrato suscrito entre SAGARDOY y el interesado.<br/>
                              Alcanzado el plazo máximo de conservación de los datos, SAGARDOY anonimizará o eliminará los datos personales del interesado.
                            </td>
                            <td className="border border-gray-300 p-3 text-sm text-sagardoy-blue">
                              Podrá ejercer los derechos descritos en el apartado 5 de la presente Política de Privacidad, según lo estipulado en dicho apartado.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Tabla 2: Contacto */}
                  <div>
                    <h3 className="text-xl font-bold text-sagardoy-navy mb-4">2. Contacto y servicio de atención al cliente</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-sagardoy-navy text-white">
                            <th className="border border-gray-300 p-3 text-left">¿Para qué finalidades tratamos sus datos?</th>
                            <th className="border border-gray-300 p-3 text-left">¿Sobre qué base legal tratamos sus datos?</th>
                            <th className="border border-gray-300 p-3 text-left">¿Durante cuánto tiempo conservamos sus datos personales?</th>
                            <th className="border border-gray-300 p-3 text-left">¿Cuáles son sus derechos y cómo puede ejercerlos?</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-sm text-sagardoy-blue">
                              • Proporcionar un servicio de atención al cliente atendiendo dudas y respondiendo a consultas y solicitudes de información remitidas por el usuario.<br/>
                              • Elaborar presupuestos u ofertas de los programas en respuesta a la solicitud que haya efectuado.<br/>
                              • Grabación de la interacción mantenida con SAGARDOY a través de los canales del servicio de atención al cliente.
                            </td>
                            <td className="border border-gray-300 p-3 text-sm text-sagardoy-blue">
                              Consentimiento del usuario
                            </td>
                            <td className="border border-gray-300 p-3 text-sm text-sagardoy-blue">
                              Los datos personales del interesado serán tratados por SAGARDOY mientras resulte necesario para gestionar eficazmente la petición del usuario o hasta que ejercite su derecho de supresión u oposición.<br/>
                              Posteriormente, los datos personales proporcionados se conservarán durante el plazo legalmente estipulado de prescripción de las acciones que puedan derivarse.<br/>
                              Alcanzado el plazo máximo de conservación de los datos personales, SAGARDOY anonimizará o eliminará los datos personales del usuario.
                            </td>
                            <td className="border border-gray-300 p-3 text-sm text-sagardoy-blue">
                              Podrá ejercer los derechos descritos en el apartado 5 de la presente Política de Privacidad, según lo estipulado en dicho apartado.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Tabla 3: Comunicaciones */}
                  <div>
                    <h3 className="text-xl font-bold text-sagardoy-navy mb-4">3. Envío de comunicaciones e información por vías electrónicas</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-sagardoy-navy text-white">
                            <th className="border border-gray-300 p-3 text-left">¿Para qué finalidades tratamos sus datos?</th>
                            <th className="border border-gray-300 p-3 text-left">¿Sobre qué base legal tratamos sus datos?</th>
                            <th className="border border-gray-300 p-3 text-left">¿Durante cuánto tiempo conservamos sus datos personales?</th>
                            <th className="border border-gray-300 p-3 text-left">¿Cuáles son sus derechos y cómo puede ejercerlos?</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-sm text-sagardoy-blue">
                              • Envío de comunicaciones con la finalidad de mantener a los usuarios informados sobre noticias relacionadas con SAGARDOY.<br/>
                              • Envío de comunicaciones comerciales con fines publicitarios y promocionales.
                            </td>
                            <td className="border border-gray-300 p-3 text-sm text-sagardoy-blue">
                              La base legal para el tratamiento de sus datos será el consentimiento del interesado o, en caso de existir una relación jurídica previa, interés legítimo de SAGARDOY de mantener una comunicación directa regular con los usuarios.
                            </td>
                            <td className="border border-gray-300 p-3 text-sm text-sagardoy-blue">
                              Sus datos personales serán tratados por SAGARDOY hasta que ejerza su derecho de oposición o supresión o retire su consentimiento. Alcanzado el plazo máximo de conservación de los datos, SAGARDOY anonimizará o eliminará los datos personales del usuario.
                            </td>
                            <td className="border border-gray-300 p-3 text-sm text-sagardoy-blue">
                              Tiene derecho a oponerse a recibir comunicaciones comerciales en cualquier momento a través de las siguientes vías:<br/>
                              • Revocando su consentimiento en cualquier momento a través del envío de un correo electrónico solicitándolo a protecciondedatos@sagardoy.com.<br/>
                              • Siguiendo las instrucciones en el pie del cuerpo de cada una de las comunicaciones electrónicas que reciba.<br/><br/>
                              Los derechos descritos en el apartado 5 de la presente Política de Privacidad quedan limitados por ser este un tratamiento fundamentado en una obligación legal.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Tabla 4: Listas de supresión */}
                  <div>
                    <h3 className="text-xl font-bold text-sagardoy-navy mb-4">4. Mantenimiento de listas de supresión actualizadas para evitar ser contactado</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-sagardoy-navy text-white">
                            <th className="border border-gray-300 p-3 text-left">¿Para qué finalidades tratamos sus datos?</th>
                            <th className="border border-gray-300 p-3 text-left">¿Sobre qué base legal tratamos sus datos?</th>
                            <th className="border border-gray-300 p-3 text-left">¿Durante cuánto tiempo conservamos sus datos personales?</th>
                            <th className="border border-gray-300 p-3 text-left">¿Cuáles son sus derechos y cómo puede ejercerlos?</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-sm text-sagardoy-blue">
                              Mantener una lista de supresión con la confirmación de aquellos usuarios que hayan solicitado la supresión de sus datos o su oposición al tratamiento de los mismos.
                            </td>
                            <td className="border border-gray-300 p-3 text-sm text-sagardoy-blue">
                              Obligación legal: el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y por el que se deroga la Directiva 95/46/CE nos obliga a respetar sus derechos y mantener evidencia del cumplimiento por nuestra parte de su petición de ejercicio del derecho de supresión.
                            </td>
                            <td className="border border-gray-300 p-3 text-sm text-sagardoy-blue">
                              Conservaremos sus datos personales durante el plazo legalmente previsto para la interposición de cualquier reclamación en relación con la efectiva o deficiente respuesta por nuestra parte al derecho de supresión u oposición que haya ejercitado.<br/>
                              Alcanzado el plazo máximo de conservación de los datos, SAGARDOY, anonimizará o eliminará los datos personales del usuario.
                            </td>
                            <td className="border border-gray-300 p-3 text-sm text-sagardoy-blue">
                              Los derechos descritos en el apartado 5 de la presente Política de Privacidad quedan limitados por ser este un tratamiento fundamentado en una obligación legal.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Tabla 5: Análisis web */}
                  <div>
                    <h3 className="text-xl font-bold text-sagardoy-navy mb-4">5. Análisis de uso, funcionamiento y mejora de la web</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-sagardoy-navy text-white">
                            <th className="border border-gray-300 p-3 text-left">¿Para qué finalidades tratamos sus datos?</th>
                            <th className="border border-gray-300 p-3 text-left">¿Sobre qué base legal tratamos sus datos?</th>
                            <th className="border border-gray-300 p-3 text-left">¿Durante cuánto tiempo conservamos sus datos personales?</th>
                            <th className="border border-gray-300 p-3 text-left">¿Cuáles son sus derechos y cómo puede ejercerlos?</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 text-sm text-sagardoy-blue">
                              • Reconocer al usuario cuando vuelve a la web corporativa.<br/>
                              • Facilitar compartir contenidos de la web corporativa a través de redes sociales y vías de comunicación.<br/>
                              • Mantener la seguridad y proteger la web corporativa de usos malintencionados.<br/>
                              • Adecuar la web al tipo de dispositivo empleado.<br/>
                              • Adecuar la web a los criterios de personalización elegidos por el usuario y recordarlos.<br/>
                              • Estudiar posibles mejoras de la web para optimizar la experiencia de usabilidad e implementarlas.<br/>
                              • Mostrar el contenido de la web correcto y solicitado por el usuario en cada momento.
                            </td>
                            <td className="border border-gray-300 p-3 text-sm text-sagardoy-blue">
                              Consentimiento del usuario
                            </td>
                            <td className="border border-gray-300 p-3 text-sm text-sagardoy-blue">
                              Conservaremos sus datos personales durante el plazo que cada tipo de cookie necesite o hasta que retire su consentimiento o ejercite su derecho de oposición.
                            </td>
                            <td className="border border-gray-300 p-3 text-sm text-sagardoy-blue">
                              Podrá ejercer los derechos descritos en el punto 5 de la presente Política de Privacidad, según lo estipulado en el citado apartado.<br/>
                              También puede parametrizar el uso de cookies a través del navegador de Internet que utilice para navegar por el Sitio Web.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comunicación de datos */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-sagardoy-navy mb-6">6. ¿A QUIÉN COMUNICAMOS SUS DATOS PERSONALES?</h2>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  SAGARDOY únicamente comunicará sus datos personales a aquellos terceros cuya comunicación sea necesaria para la correcta prestación de sus servicios. Salvo el supuesto anterior, SAGARDOY no revela la información personal que usted nos proporciona a través de las vías descritas en el apartado cuarto.
                </p>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  Igualmente, es posible que podamos comunicar sus datos personales a otros terceros, previo requerimiento legal o base que legitime la comunicación:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sagardoy-blue mb-6">
                  <li>Asesores legales</li>
                  <li>Tribunales</li>
                  <li>Administración Tributaria</li>
                  <li>Organismos de Gobierno y Administración Pública</li>
                  <li>Fuerzas y Cuerpos de Seguridad del Estado</li>
                  <li>Encargados del Tratamiento que, para prestar los servicios necesarios deben acceder a cierta información y/o datos personales. Los datos podrán ser comunicados a proveedores con acceso a datos con quienes se formalizan las obligaciones y responsabilidades que asumen en el tratamiento de los datos, en calidad de Encargados de Tratamiento. SAGARDOY suscribe los correspondientes contratos de encargo de tratamiento que recogen las debidas garantías en cuanto al tratamiento de los datos de carácter personal, la confidencialidad y la cancelación, destrucción o devolución.</li>
                </ul>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  Asimismo, podremos comunicar su información personal en los siguientes casos:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sagardoy-blue">
                  <li>Si nosotros o sustancialmente todos nuestros activos, son adquiridos por un tercero en cuyo caso, los datos de carácter personal que tenemos de nuestros clientes y usuarios serán uno de los activos transferidos. Cualquier operación de este tipo será previamente informada y comunicada.</li>
                  <li>Para proteger la seguridad y los derechos de nuestro personal, nuestros clientes y usuarios y nuestros sistemas de información. Ello incluye intercambiar información con fuerzas y cuerpos de seguridad o Tribunales en los casos de detección de fraude, usurpación de identidad o cualquier otro uso, tratamiento o hecho ilícito.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Seguridad */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-sagardoy-navy mb-6">7. ¿ESTÁN SUS DATOS SEGUROS?</h2>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  Con el fin de asegurar un procesamiento justo y transparente de su información personal, adoptaremos los procedimientos adecuados que incluirán la implementación de medidas técnicas y organizativas que tengan en cuenta el posible riesgo y corrijan cualquier imprecisión identificada en los datos personales tratados, de modo que el riesgo de cualquier error se minimice, tratando sus datos de manera justa y segura.
                </p>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  Toda información que nos proporciona se almacena en servidores seguros. Lamentablemente, la transmisión o comunicación de información a través de internet no es completamente segura. Así, una vez hayamos recibido toda su información utilizaremos procedimientos estrictos de seguridad para tratar de evitar cualquier acceso no autorizado.
                </p>
                <p className="text-sagardoy-blue leading-relaxed">
                  Igualmente, nos aseguramos de que nuestros proveedores de servicios también gozan de estándares de seguridad adecuados para la protección de los datos de carácter personal respecto de los cuales tengan o puedan llegar a tener acceso, en atención con la legislación de protección de datos aplicable en cada momento.
                </p>
              </CardContent>
            </Card>

            {/* Cambios en la política */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-sagardoy-navy mb-6">8. CAMBIOS EN LA PRESENTE POLÍTICA DE PRIVACIDAD</h2>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  En SAGARDOY solo captamos y tratamos información que usted nos facilita a través de las siguientes vías:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-sagardoy-blue mb-6">
                  <li>Al contratar los servicios de SAGARDOY para participar en cursos y programas de formación.</li>
                  <li>Asistencia a alguno de nuestros eventos.</li>
                  <li>Opiniones y comentarios en nuestro apartado de noticias en el Sitio web.</li>
                  <li>Interacción con nuestro servicio de atención al cliente.</li>
                  <li>Navegación por la página https://sagardoyschool.com/</li>
                </ol>
                <p className="text-sagardoy-blue font-semibold">
                  Última versión: 1 marzo de 2020.
                </p>
              </CardContent>
            </Card>

            {/* Contacto */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-sagardoy-navy mb-6">9. CONTACTO</h2>
                <p className="text-sagardoy-blue leading-relaxed mb-6">
                  Si tiene alguna duda acerca de los tratamientos que realizamos sobre sus datos personales, puede ponerse en contacto con nosotros a través del correo electrónico:
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
              ¿Tienes alguna pregunta sobre nuestra política de privacidad?
            </h2>
            <p className="text-xl text-sagardoy-blue mb-8 max-w-3xl mx-auto">
              Nuestro equipo está disponible para resolver cualquier duda que puedas tener sobre el tratamiento de tus datos personales.
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
