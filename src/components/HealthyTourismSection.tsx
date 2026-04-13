// Importaciones usando alias para mayor claridad y mantenibilidad
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CountryFlag from 'react-country-flag';

const cuadros = [
  {
    titulo: ["SERVICIOS INTERNACIONALES", "INTERNATIONAL SERVICES"],
    banderas: ["es", "it"],
    descripcion: `Soluciones en salud y bienestar para colombianos dentro y fuera del país\n\nEn MEDescuento contamos con más de 13 años de experiencia, ofreciendo alternativas accesibles y confiables en salud y bienestar para miles de familias en Colombia y el exterior. Nuestro propósito es facilitar el acceso a profesionales certificados, con tarifas competitivas y procesos simples, especialmente para quienes viven fuera del país y necesitan atención médica oportuna sin costos elevados.\n\nGracias a nuestras teleconsultas internacionales, hoy puedes recibir orientación médica profesional, obtener fórmulas prescritas directamente a tu WhatsApp o correo electrónico, y complementar tus tratamientos sin importar en qué país te encuentres.\n\nSi viajas a Colombia para visitar a tu familia, también puedes programar tus citas con anticipación, asegurando atención prioritaria y aprovechando al máximo tu tiempo en el país.`
  },
  {
    titulo: ["PLAN COMPLEMENTARIO DE SALUD", "COMPLEMENTARY HEALTH PLAN"],
    banderas: ["pt", "fr"],
    descripcion: `A. Modalidad Virtual – Atención desde cualquier lugar del mundo\nAccede a un equipo de profesionales certificados en Colombia, con acompañamiento seguro, confiable y accesible:\n* Médico general\n* Psicólogos, coaches y terapeutas\n* Especialistas en diversas áreas de la salud\nRecibe tu fórmula médica digital por WhatsApp o correo, lista para ser adquirida en el país donde te encuentres.\n\nB. Modalidad Presencial en Colombia – Atención preparada para tu visita\nSi viajas a Colombia, te ayudamos a programar con anticipación los servicios de salud más solicitados:\n* Médico general\n* Odontología\n* Optometría\n* Ginecología\n* Dermatología\n* Laboratorios clínicos\n* Ecografías, radiografías y mamografías\n* Oftalmología\n* Masajes terapéuticos\n* Psicología\n* Terapias alternativas y complementarias`
  },
  {
    titulo: ["SERVICIOS EXEQUIALES – ALIANZA OLIVOS Y RENACER", "FUNERAL SERVICES – OLIVOS & RENACER ALLIANCE"],
    banderas: ["us", "cl"],
    descripcion: `Soluciones integrales para acompañar a las familias en los momentos más difíciles.\n\nA. Plan Estándar en Colombia\nIncluye una cobertura completa y acompañamiento continuo:\n* Asesoría jurídica\n* Cofre fúnebre\n* Carroza fúnebre\n* Preservación del cuerpo\n* Traslado nacional\n* Cobertura en todo el país\n* Velación 24 horas\n* Elementos de velación\n* Arreglo floral y cinta conmemorativa\n* Servicio de cafetería 24 horas\n* Transporte para acompañantes\n* Organización del servicio exequial\n* Destino final incluido\n\nB. Plan de Repatriación\nPara cada familia colombiana hay un ser querido viviendo en el exterior. Este plan garantiza la repatriación segura y digna del cuerpo a Colombia, protegiendo a la familia de los altos costos exequiales fuera del país, independientemente del estatus migratorio.\n\nC. Plan de Expatriación\nPensado para extranjeros que residen o visitan Colombia. Permite asegurar su protección en caso de fallecimiento en el país, garantizando un proceso responsable, humano y acorde a los requerimientos legales.\n\nD. Plan para Mascotas\nPorque nuestros animales son parte de la familia, ofrecemos un plan para despedirlos con amor y dignidad:\n* Recogida del cuerpo en ciudades principales\n* Cremación\n* Urna decorativa personalizada con la foto de tu mascota`
  },
  {
    titulo: ["TRÁMITES PARA VIAJAR CON TU MASCOTA", "TRAVEL PROCEDURES WITH YOUR PET"],
    banderas: ["mx", "pa"],
    descripcion: `Viajar con tu mascota requiere cumplir regulaciones que varían según el país. MEDescuento, junto a la clínica DOG CENTER, te acompaña en el proceso para garantizar un viaje seguro y libre de contratiempos.\n\nA. Documentos generales a presentar:\n(Se detallan según país de destino)\n\nB. Países con restricciones de ingreso:\n(Se explican según cada normativa internacional)`
  },
  {
    titulo: ["TIPS DE ESPECIALISTAS – CUIDADOS ANTE CAMBIOS DE CLIMA", "SPECIALIST TIPS – CLIMATE CHANGE CARE"],
    banderas: ["pe", "ca"],
    descripcion: `Recomendaciones esenciales para invierno, verano, primavera y otoño:\n* Reduce el consumo de carnes\n* Incrementa la ingesta de frutas, verduras y hortalizas\n* Revisa fechas de vencimiento de alimentos\n* Evita duchas demasiado calientes en verano\n* Mantén tu cuerpo hidratado\n* Cubre boca y nariz al salir de lugares muy cálidos\n* Evita cambios bruscos de temperatura\n* Mantén una actitud positiva\n* Desarrolla mentalidad de crecimiento\n* Construye una red de apoyo\n* Usa bicicleta o transporte sostenible\n* Desconecta dispositivos cuando no los uses\n* Realiza mantenimiento preventivo de calefacción y aire acondicionado\n* Cambia bombillos tradicionales por bajo consumo\n* Reduce, reutiliza y recicla\n* Aprende nuevas habilidades y cultura`
  },
  {
    titulo: ["TIPS DE ALIMENTACIÓN EN OTROS PAÍSES", "NUTRITION TIPS ABROAD"],
    banderas: ["br", "gb"],
    descripcion: `Cuida tu salud cuando estés en el exterior:\n* Evita químicos, frutas o líquidos de dudosa procedencia\n* Asegúrate de que los alimentos cumplan normas sanitarias\n* Prefiere alimentos locales, nutritivos y económicos\n* Elige granos integrales sobre refinados\n* Prioriza grasas insaturadas\n* Limita alimentos ricos en azúcar, sal y grasas\n* Controla las porciones\n* Consume proteínas saludables\n* Mantente hidratado\n* Exposición moderada al sol\n* Aumenta consumo de fibra y vegetales\n* Realiza actividad física\n* Evita alcohol y tabaco\n* Duerme bien\n* Controla el estrés\n* Medita\n* Cuida tu higiene física y mental`
  },
  {
    titulo: ["SI VISITAS COLOMBIA, TEN EN CUENTA:", "IF YOU VISIT COLOMBIA, KEEP IN MIND:"],
    banderas: ["ar", "au"],
    descripcion: `* Clima de la ciudad que visitas\n* Vacunas necesarias para ingresar o salir\n* Restricciones de sitios turísticos\n* Recomendaciones de alimentos y bebidas\n* Tarifas con descuento en centros turísticos\n* Elegir profesionales o centros de salud confiables\n* Revisar con anticipación el transporte adecuado para tu destino\n* Llevar copias de documentos; los originales déjalos en casa\n* Cuidar joyas, dinero, tarjetas y celular\n* Preferir viajar en grupo o con un familiar residente en Colombia`
  },
  {
    titulo: ["CIUDADES Y CLÍNICAS DESTACADAS PARA TURISMO SALUDABLE", "TOP CITIES & CLINICS FOR HEALTHY TOURISM"],
    banderas: ["es", "fr"],
    descripcion: `Bogotá\nCapital con infraestructura médica de alto nivel y hospitales certificados internacionalmente.\nAliados potenciales: clínicas privadas, centros diagnósticos, hoteles para acompañantes, agencias de turismo en salud.\n\nMedellín\nReferente en innovación médica y experiencia para pacientes internacionales.\nAliados: hospitales bilingües, facilitadores de turismo en salud, alojamiento especializado, transporte asistido.\n\nCali\nFuerte en cirugía estética, procedimientos médicos y recuperación postoperatoria.\nAliados: clínicas estéticas, spas y redes de turismo wellness.\n\nCartagena\nDestino emergente por su combinación de turismo y bienestar.\nAliados: resorts médicos, clínicas para extranjeros, operadores de paquetes turísticos + salud.`
  },
  {
    titulo: ["SERVICIOS HOLÍSTICOS", "HOLISTIC SERVICES"],
    banderas: ["it", "pt"],
    descripcion: `Complementa tu bienestar con terapias alternativas:\n* Astrólogo\n* Terapias de liberación emocional\n* Tabla radiónica y radiestesia\n* Constelaciones familiares\n* Masajes terapéuticos\n* Barras de Access\n* Acupuntura\n* Reflexología\n* Moxibustión\n* Hipnosis\n* Biomagnetismo\n* Programa para adulto mayor\n* Yoga`,
    boton: true
  }
];

const placeholderImgs = [
  "/Galeria/placeholder1.jpg",
  "/Galeria/placeholder2.jpg"
];



// Códigos ISO 3166-1 alpha-2 para react-country-flag
const banderaISO = {
  es: 'ES', // España
  it: 'IT', // Italia
  pt: 'PT', // Portugal
  fr: 'FR', // Francia
  us: 'US', // Estados Unidos
  cl: 'CL', // Chile
  mx: 'MX', // México
  pa: 'PA', // Panamá
  pe: 'PE', // Perú
  ca: 'CA', // Canadá
  br: 'BR', // Brasil
  gb: 'GB', // Reino Unido (Londres)
  ar: 'AR', // Argentina
  au: 'AU', // Australia
};

const HealthyTourismSection = () => {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white">
      {/* HERO HEADER CON FONDO Y TEXTO */}
      <div className="relative h-[340px] w-full overflow-hidden mb-12 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/Galeria/empresa9.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">SERVICIOS INTERNACIONALES / INTERNATIONAL SERVICES</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow">
            En MEDescuento, contamos con más de 13 años de experiencia ofreciendo soluciones en salud y bienestar a miles de familias dentro y fuera de Colombia.
            Nuestro compromiso es brindar servicios accesibles, confiables y oportunos, especialmente para quienes residen en el exterior y necesitan atención médica oportuna a costos mucho más favorables que los de otros países.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-8">
          {cuadros.map((cuadro, idx) => (
            <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-[#43d9cb] p-6">
                <h4 className="flex items-center gap-3 text-2xl font-bold text-green-800 m-0">
                  {cuadro.titulo[0]} <span className="mx-2">/</span> {cuadro.titulo[1]}
                  {cuadro.banderas && (
                    <span className="flex gap-1 ml-2">
                      <CountryFlag countryCode={banderaISO[cuadro.banderas[0]]} svg style={{ width: '28px', height: '20px', borderRadius: '4px', boxShadow: '0 1px 3px #0002', border: '1px solid #ccc' }} title={cuadro.banderas[0]} />
                      <CountryFlag countryCode={banderaISO[cuadro.banderas[1]]} svg style={{ width: '28px', height: '20px', borderRadius: '4px', boxShadow: '0 1px 3px #0002', border: '1px solid #ccc' }} title={cuadro.banderas[1]} />
                    </span>
                  )}
                </h4>
              </div>
              {/* Espacio para dos imágenes debajo del título */}
              <div className="flex gap-4 justify-center items-center bg-white py-4">
                <img src={placeholderImgs[0]} alt="Imagen 1" className="w-40 h-28 object-cover rounded-lg border" />
                <img src={placeholderImgs[1]} alt="Imagen 2" className="w-40 h-28 object-cover rounded-lg border" />
              </div>
              <div className="p-6">
                <p className="text-lg leading-relaxed font-normal text-black-700 whitespace-pre-line mb-0">
                  {cuadro.descripcion}
                </p>
                {cuadro.boton && (
                  <div className="mt-6 flex justify-center">
                    <a
                      href="https://casaholisticaananda.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="lg" className="bg-[#43d9cb] text-green-800 font-bold hover:bg-[#36b6a8]">
                        👉 Conoce más en Casa Holística Ananda
                      </Button>
                    </a>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthyTourismSection;
