import React from 'react';
import { FaMoneyBillWave, FaHandshake, FaCalculator } from 'react-icons/fa';
import sabadell from '@/resources/images/sabadell-1.png'
import caixabank from '@/resources/images/Logo-CaixaBank.png'

export default function Financing() {
  return (
    <>

      {/* Header Section */}
      <section className="bg-sagardoy-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Financiación</h1>
            <nav className="text-sm text-gray-300">
              <ol className="flex items-center justify-center space-x-2">
                <li><a href="/" className="hover:text-white transition-colors">Inicio</a></li>
                <li className="text-gray-400">/</li>
                <li className="text-white">Financiación</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Introduction */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-sagardoy-navy mb-8">Financiación hecha a tu medida</h2>
              <div className="mx-auto space-y-4 text-lg text-sagardoy-blue">
                <p>
                  Sagardoy Business & Law School pone a tu disposición diferentes opciones de financiación para que puedas cursar nuestros programas.
                </p>
                <p>
                  Los acuerdos con distintas entidades bancarias pueden proporcionarte la financiación necesaria para cubrir las tasas académicas y la estancia en Madrid. ¿Encontramos la tuya?
                </p>
                <p>
                  Elige el programa que deseas realizar y decide con quien quieres financiarlo. Sagardoy Business & Law School pone a tu disposición diferentes opciones para que puedas cursar uno de nuestros programas.
                </p>
              </div>
            </div>

            {/* Banco Sabadell Section */}
            <div className="mb-16">
              <div className="mb-12">
                <div className="order-2 md:order-1">
                  <img 
                    src={sabadell} 
                    alt="Banco Sabadell" 
                    className="max-w-md"
                  />
                </div>
              </div>

              {/* Banco Sabadell Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 bg-white shadow-lg rounded-lg">
                  <thead>
                    <tr className="bg-sagardoy-navy text-white">
                      <th className="border border-gray-300 p-4 text-left"></th>
                      <th className="border border-gray-300 p-4 text-left">Prestamo Curso (1)</th>
                      <th className="border border-gray-300 p-4 text-left">Préstamo Estudios Máster (2)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-4 bg-sagardoy-navy text-white font-semibold">Importe</td>
                      <td className="border border-gray-300 p-4">Coste del curso y gastos relacionados al Máximo 18,000 €</td>
                      <td className="border border-gray-300 p-4">Coste del máster</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 bg-sagardoy-navy text-white font-semibold">Plazo devolución máximo</td>
                      <td className="border border-gray-300 p-4"></td>
                      <td className="border border-gray-300 p-4">8 años</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 bg-sagardoy-navy text-white font-semibold">Carencia de capital</td>
                      <td className="border border-gray-300 p-4">Sin carencia</td>
                      <td className="border border-gray-300 p-4">Duración del programa Máximo 2 años</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 bg-sagardoy-navy text-white font-semibold">Tipo de interés</td>
                      <td className="border border-gray-300 p-4">0,00%</td>
                      <td className="border border-gray-300 p-4">5,00%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 bg-sagardoy-navy text-white font-semibold">TAE desde</td>
                      <td className="border border-gray-300 p-4">8,12%</td>
                      <td className="border border-gray-300 p-4">5,23%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 bg-sagardoy-navy text-white font-semibold">Comisión de apertura</td>
                      <td className="border border-gray-300 p-4">3,5%, mínimo 50€</td>
                      <td className="border border-gray-300 p-4">0,50%, mínimo 50€</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 bg-sagardoy-navy text-white font-semibold">Comisión de estudio</td>
                      <td className="border border-gray-300 p-4">0,00%</td>
                      <td className="border border-gray-300 p-4">0,00%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 bg-sagardoy-navy text-white font-semibold">Comisión de amortización</td>
                      <td className="border border-gray-300 p-4">0,00%</td>
                      <td className="border border-gray-300 p-4">0,00%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 bg-sagardoy-navy text-white font-semibold">Comisión de cancelación</td>
                      <td className="border border-gray-300 p-4">0,00%</td>
                      <td className="border border-gray-300 p-4">0,00%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 bg-sagardoy-navy text-white font-semibold">Disposiciones</td>
                      <td className="border border-gray-300 p-4">--</td>
                      <td className="border border-gray-300 p-4">--</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 bg-sagardoy-navy text-white font-semibold">Contacto</td>
                      <td className="border border-gray-300 p-4" colSpan={2}>
                        Oficina Princesa: C/ Altamirano 3 (28008 Madrid)
                        <br />
                        iarnoriaga@bancsabadell.com
                        <br />
                        T. 902030255 ext 28730
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CaixaBank Section */}
            <div className="mb-16">
              <div className="mb-12">
                <div className="order-2 md:order-1">
                  <img 
                    src={caixabank} 
                    alt="CaixaBank" 
                    className="max-w-md"
                  />
                </div>
              </div>

              {/* CaixaBank Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 bg-white shadow-lg rounded-lg">
                  <thead>
                    <tr className="bg-sagardoy-navy text-white">
                      <th className="border border-gray-300 p-4 text-left"></th>
                      <th className="border border-gray-300 p-4 text-left">Préstamo Exprés</th>
                      <th className="border border-gray-300 p-4 text-left">Préstamo Estudia Grado/Máster</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-4 bg-sagardoy-navy text-white font-semibold">Importe</td>
                      <td className="border border-gray-300 p-4">Mátricula y gastos vinculados (4) (min 1.000 €)</td>
                      <td className="border border-gray-300 p-4">Mátricula y gastos vinculados</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 bg-sagardoy-navy text-white font-semibold">Plazo devolución máximo</td>
                      <td className="border border-gray-300 p-4">10 meses</td>
                      <td className="border border-gray-300 p-4">hasta 10 años</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 bg-sagardoy-navy text-white font-semibold">Carencia de capital</td>
                      <td className="border border-gray-300 p-4">Sin carencia</td>
                      <td className="border border-gray-300 p-4">hasta 5 años(5)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 bg-sagardoy-navy text-white font-semibold">Tipo de interés</td>
                      <td className="border border-gray-300 p-4">0%</td>
                      <td className="border border-gray-300 p-4"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 bg-sagardoy-navy text-white font-semibold">TAE desde</td>
                      <td className="border border-gray-300 p-4">TAE desde 6,90%, hasta 11,92%(7)</td>
                      <td className="border border-gray-300 p-4">TAE 3,970 %</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 bg-sagardoy-navy text-white font-semibold">Comisión de apertura</td>
                      <td className="border border-gray-300 p-4">3,5%, mínimo 50€</td>
                      <td className="border border-gray-300 p-4">0,0 %</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 bg-sagardoy-navy text-white font-semibold">Comisión de estudio</td>
                      <td className="border border-gray-300 p-4">0,00%</td>
                      <td className="border border-gray-300 p-4">0,00%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 bg-sagardoy-navy text-white font-semibold">Comisión de amortización</td>
                      <td className="border border-gray-300 p-4">0,00%</td>
                      <td className="border border-gray-300 p-4">0,00%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 bg-sagardoy-navy text-white font-semibold">Comisión de cancelación</td>
                      <td className="border border-gray-300 p-4">0,00%</td>
                      <td className="border border-gray-300 p-4">0,00%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 bg-sagardoy-navy text-white font-semibold">Disposiciones</td>
                      <td className="border border-gray-300 p-4">Una sola disposición</td>
                      <td className="border border-gray-300 p-4">anuales o semestrales (6)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 bg-sagardoy-navy text-white font-semibold">Contacto</td>
                      <td className="border border-gray-300 p-4" colSpan={2}>
                        https://www.caixabank.es/particular/prestamos/prestamo-estudios.html?=0
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Legal Notes */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-sagardoy-navy mb-6">Notas legales</h3>
              <div className="space-y-4 text-sm text-sagardoy-blue">
                <p>
                  <strong>(1)</strong> TAE 8,12% para un Préstamo Curso de 3.000 euros en un plazo de 10 meses con un tipo de interés del 0,00% y sin incluir carencia de capital. Cuota mensual de 300 euros. Impoorte total adecuado: 3.105.00 euros.
                </p>
                <p>
                  <strong>(2)</strong> TAE 5,23% para un Préstamo Estudios Máster de 10.000 euros, con 1 única disposición, en un plazo de 96 meses con un tipo de interés del 5,00% y 24 meses de carencia de capital. Cuota mensual 1r y 2° año 41,67 euros, cuota mensual resto de años 161,05 euros y una última cuota de 160,99 euros. Importe total adecuado: 12.645,62 euros.
                </p>
                <p>
                  <strong>(3)</strong> Este préstamo solo puede solicitarse por estudiantes de centros adscritos a convenios con Caixabank. Consúltalos en tu oficina.
                </p>
                <p>
                  <strong>(4)</strong> La financiación de la matrícula de cada curso deberá acreditarse con documentación oficial de la escuela donde se realizarán los estudios y donde se muestre el importe y la duración de dichos estudios.
                </p>
                <p>
                  <strong>(5)</strong> La carencia de capital es opcional. Durante ese periodo, el cliente puede hacer disposiciones sobre el total del importe concedido. Así, las cuotas mensuales corresponderán únicamente al pago de los intereses generados por las cantidades dispuestas, y por tanto, durante ese periodo no se amortiza capital. Transcurrido el period de carencia no se podrán hacer más disposiciones. El importe total adeudado con carencia es superior al importe total sin carencia.
                </p>
                <p>
                  <strong>(6)</strong> En el momento de la solicitud del préstamo, se deberá indicar el importe total a solicitar, aunque se vaya a disponer del mismo en distintos cursos o semestres. Así, cada año o semestre, se deberá comunicar qué cantidad del total del préstamo se quiere disponer. Solo se podrán realizar disposiciones anuales o semestrales durante el periodo de carencia, que corresponderán al coste de la matricula más gastos relacionados con los estudios. Para realizar disposiciones será necesario que el estudiante acredite haber aprobado más de un 70% de los créditos del curso anterior, por eso, se solicitarán ambas matrículas y se comprobara que el 70% de los créditos en los que se matricula son diferentes a los del curso anterior.
                </p>
                <p>
                  <strong>(7)</strong> Préstamo Exprés Matrícula. Ejemplo representativo 1: TAE 6,90 % calculada para un préstamo de 10.000 €. TIN 0 %. Plazo diez meses. Importe total adeudado 10.300 € (capital 10.000 € + intereses 0 € + comisión de apertura 300 €). Importe de las cuotas mensuales: 1.000 €. Ejemplo representativo 2: TAE 11,92 % calculada para un préstamo de 1.000 €. TIN 0 %. Plazo diez meses. Importe total adeudado 1.050 € (capital 1.000 € + intereses 0 € + comisión de apertura 50 €). Importe de las cuotas mensuales: 100 €.
                </p>
                <p>
                  <strong>(8)</strong> Préstamo Estudia Grado/Máster. Ejemplo representativo: TAE 3,970 % calculada para un préstamo de 10.000 €. TIN 3,90 %. Plazo de amortización: 5 años. Importe total adeudado 11.022,88 € (capital 10.000 € + intereses 1.022,88 €). Importe de las cuotas mensuales: 59 cuotas de 183,71 € y una última cuota de 183,99 €. El ejemplo ha sido calculado sin carencia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-sagardoy-navy text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Necesitas más información sobre financiación?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Nuestro equipo está aquí para ayudarte a encontrar la mejor opción de financiación para tus estudios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contacto" 
                className="bg-sagardoy-gold text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors inline-block"
              >
                Contactar
              </a>
              <a 
                href="/programas" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-sagardoy-navy transition-colors inline-block"
              >
                Ver Programas
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};