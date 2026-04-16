import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CountryFlag from 'react-country-flag';

// ─── Imágenes del carrusel ───────────────────────────────────────────────────
const imagenesCarrusel = [
  "/Galeria/paisaje1.jpeg",
  "/Galeria/londres.jpg",
  "/Galeria/miami.jpeg",
  "/Galeria/australia.jpeg",
  "/Galeria/nuevayork.jpeg",
  "/Galeria/roma.jpeg",
  "/Galeria/peru.jpeg",
  "/Galeria/torreeiffel.jpeg",
];

const imagenesIntro = [
  "/Galeria/logoturismo.jpeg",
  "/Galeria/empresa.jpeg",
];

// ─── Tamaños de imágenes de la intro (solo aplican en desktop) ──────────────
const introImageSizes = [
  { width: 285, height: 144 },
  { width: 285, height: 144 },
];

const cuadros = [
  {
    titulo: ["PLAN COMPLEMENTARIO DE SALUD", "COMPLEMENTARY HEALTH PLAN"],
    banderas: ["pt", "fr"],
    imagenes: ["/Galeria/holistico.jpeg", "/Galeria/holistico2.jpeg"],
    imageSizes: [
      { width: 224, height: 170 },
      { width: 224, height: 170 },
    ],
    descripcion: [
      [
        "A. MODALIDAD VIRTUAL – ATENCIÓN DESDE CUALQUIER LUGAR DEL MUNDO",
        "Accede a un equipo de profesionales certificados en Colombia, con acompañamiento seguro, confiable y accesible:",
        "• Médico general",
        "• Psicólogos, coaches y terapeutas",
        "• Especialistas en diversas áreas de la salud",
        "Recibe tu fórmula médica digital por WhatsApp o correo, lista para ser adquirida en el país donde te encuentres.",
      ],
      [
        "B. MODALIDAD PRESENCIAL EN COLOMBIA – ATENCIÓN PREPARADA PARA TU VISITA",
        "Si viajas a Colombia, te ayudamos a programar con anticipación los servicios de salud más solicitados:",
        "• Médico general",
        "• Odontología",
        "• Optometría",
        "• Ginecología",
        "• Dermatología",
        "• Laboratorios clínicos",
        "• Ecografías, radiografías y mamografías",
        "• Oftalmología",
        "• Masajes terapéuticos",
        "• Psicología",
        "• Terapias alternativas y complementarias",
      ],
    ],
  },
  {
    titulo: ["SERVICIOS EXEQUIALES – ALIANZA OLIVOS Y RENACER", "FUNERAL SERVICES – OLIVOS & RENACER ALLIANCE"],
    banderas: ["us", "cl"],
    imagenes: [
      "/Galeria/olivos3.png",
      "/Galeria/repatriacion.jpg",
      "/Galeria/expatriacion.jpg",
      "/Galeria/renacer.jpg",
    ],
    imageSizes: [
      { width: 260, height: 208 },
      { width: 260, height: 190 },
      { width: 260, height: 190 },
      { width: 450, height: 208 },
    ],
    descripcion: [
      [
        "A. PLAN ESTÁNDAR EN COLOMBIA",
        "Incluye una cobertura completa y acompañamiento continuo:",
        "• Asesoría jurídica",
        "• Cofre fúnebre",
        "• Carroza fúnebre",
        "• Preservación del cuerpo",
        "• Traslado nacional",
        "• Cobertura en todo el país",
        "• Velación 24 horas",
        "• Elementos de velación",
        "• Arreglo floral y cinta conmemorativa",
        "• Servicio de cafetería 24 horas",
        "• Transporte para acompañantes",
        "• Organización del servicio exequial",
        "• Destino final incluido",
      ],
      [
        "B. PLAN DE REPATRIACIÓN",
        "Por cada familia colombiana hay un ser querido viviendo en el exterior. Este plan garantiza la repatriación segura y digna del cuerpo a Colombia, protegiendo a la familia de los altos costos exequiales fuera del país, independientemente del estatus migratorio.",
        "",
        "C. PLAN DE EXPATRIACIÓN",
        "Pensado para extranjeros que residen o visitan Colombia. Permite asegurar su protección en caso de fallecimiento en el país, garantizando un proceso responsable, humano y acorde a los requerimientos legales.",
        "",
        "D. PLAN PARA MASCOTAS",
        "Porque nuestros animales son parte de la familia, ofrecemos un plan para despedirlos con amor y dignidad:",
        "• Recogida del cuerpo en ciudades principales",
        "• Cremación",
        "• Urna decorativa personalizada con la foto de tu mascota",
      ],
    ],
  },
  {
    titulo: ["TRÁMITES PARA VIAJAR CON TU MASCOTA", "TRAVEL PROCEDURES WITH YOUR PET"],
    banderas: ["mx", "pa"],
    imagenes: ["/Galeria/mascota1.jpeg", "/Galeria/mascota2.jpeg"],
    imageSizes: [
      { width: 224, height: 230 },
      { width: 224, height: 230 },
    ],
    descripcion: [
      [
        "Viajar con tu mascota requiere cumplir regulaciones que varían según el país. MEDescuento, junto a la clínica DOG CENTER, te acompaña en el proceso para garantizar un viaje seguro y libre de contratiempos.",
        "",
        "A. DOCUMENTOS GENERALES A PRESENTAR:",
        "(Se detallan según país de destino)",
      ],
      [
        "B. PAÍSES CON RESTRICCIONES DE INGRESO:",
        "(Se explican según cada normativa internacional)",
      ],
    ],
  },
  {
    titulo: ["TIPS DE ESPECIALISTAS – CUIDADOS ANTE CAMBIOS DE CLIMA", "SPECIALIST TIPS – CLIMATE CHANGE CARE"],
    banderas: ["pe", "ca"],
    imagenes: [
      "/Galeria/primavera.jpeg",
      "/Galeria/otoño.jpeg",
      "/Galeria/Invierno.jpeg",
      "/Galeria/verano.jpeg",
    ],
    imageSizes: [
      { width: 176, height: 176 },
      { width: 176, height: 176 },
      { width: 176, height: 176 },
      { width: 176, height: 176 },
    ],
    descripcion: [
      [
        "RECOMENDACIONES ESENCIALES PARA INVIERNO, VERANO, PRIMAVERA Y OTOÑO:",
        "• Reduce el consumo de carnes",
        "• Incrementa la ingesta de frutas, verduras y hortalizas",
        "• Revisa fechas de vencimiento de alimentos",
        "• Evita duchas demasiado calientes en verano",
        "• Mantén tu cuerpo hidratado",
        "• Cubre boca y nariz al salir de lugares muy cálidos",
        "• Evita cambios bruscos de temperatura",
        "• Mantén una actitud positiva",
      ],
      [
        "• Desarrolla mentalidad de crecimiento",
        "• Construye una red de apoyo",
        "• Usa bicicleta o transporte sostenible",
        "• Desconecta dispositivos cuando no los uses",
        "• Realiza mantenimiento preventivo de calefacción y aire acondicionado",
        "• Cambia bombillos tradicionales por bajo consumo",
        "• Reduce, reutiliza y recicla",
        "• Aprende nuevas habilidades y cultura",
      ],
    ],
  },
  {
    titulo: ["TIPS DE ALIMENTACIÓN EN OTROS PAÍSES", "NUTRITION TIPS ABROAD"],
    banderas: ["br", "gb"],
    imagenes: ["/Galeria/alimentacion.png", "/Galeria/alimentacion2.jpeg"],
    imageSizes: [
      { width: 224, height: 144 },
      { width: 224, height: 144 },
    ],
    descripcion: [
      [
        "CUIDA TU SALUD CUANDO ESTÉS EN EL EXTERIOR:",
        "• Evita químicos, frutas o líquidos de dudosa procedencia",
        "• Asegúrate de que los alimentos cumplan normas sanitarias",
        "• Prefiere alimentos locales, nutritivos y económicos",
        "• Elige granos integrales sobre refinados",
        "• Prioriza grasas insaturadas",
        "• Limita alimentos ricos en azúcar, sal y grasas",
        "• Controla las porciones",
        "• Consume proteínas saludables",
        "• Mantente hidratado",
      ],
      [
        "• Exposición moderada al sol",
        "• Aumenta consumo de fibra y vegetales",
        "• Realiza actividad física",
        "• Evita alcohol y tabaco",
        "• Duerme bien",
        "• Controla el estrés",
        "• Medita",
        "• Cuida tu higiene física y mental",
      ],
    ],
  },
  {
    titulo: ["SI VISITAS COLOMBIA, TEN EN CUENTA:", "IF YOU VISIT COLOMBIA, KEEP IN MIND:"],
    banderas: ["ar", "au"],
    imagenes: ["/Galeria/colombia.jpeg", "/Galeria/colombia2.jpeg"],
    imageSizes: [
      { width: 224, height: 290 },
      { width: 224, height: 300 },
    ],
    descripcion: [
      [
        "• Clima de la ciudad que visitas",
        "• Vacunas necesarias para ingresar o salir",
        "• Restricciones de sitios turísticos",
        "• Recomendaciones de alimentos y bebidas",
        "• Tarifas con descuento en centros turísticos",
      ],
      [
        "• Elegir profesionales o centros de salud confiables",
        "• Revisar con anticipación el transporte adecuado para tu destino",
        "• Llevar copias de documentos; los originales déjalos en casa",
        "• Cuidar joyas, dinero, tarjetas y celular",
        "• Preferir viajar en grupo o con un familiar residente en Colombia",
      ],
    ],
  },
  {
    titulo: ["CIUDADES Y CLÍNICAS DESTACADAS PARA TURISMO SALUDABLE", "TOP CITIES & CLINICS FOR HEALTHY TOURISM"],
    banderas: ["es", "fr"],
    imagenes: [
      "/Galeria/medellin.jpg",
      "/Galeria/cali.jpg",
      "/Galeria/bogota.jpg",
      "/Galeria/cartagena.jpg",
    ],
    imageSizes: [
      { width: 224, height: 144 },
      { width: 224, height: 144 },
      { width: 224, height: 144 },
      { width: 224, height: 144 },
    ],
    descripcion: [
      [
        "BOGOTÁ",
        "Capital con infraestructura médica de alto nivel y hospitales certificados internacionalmente.",
        "Aliados potenciales: clínicas privadas, centros diagnósticos, hoteles para acompañantes, agencias de turismo en salud.",
        "",
        "MEDELLÍN",
        "Referente en innovación médica y experiencia para pacientes internacionales.",
        "Aliados: hospitales bilingües, facilitadores de turismo en salud, alojamiento especializado, transporte asistido.",
      ],
      [
        "CALI",
        "Fuerte en cirugía estética, procedimientos médicos y recuperación postoperatoria.",
        "Aliados: clínicas estéticas, spas y redes de turismo wellness.",
        "",
        "CARTAGENA",
        "Destino emergente por su combinación de turismo y bienestar.",
        "Aliados: resorts médicos, clínicas para extranjeros, operadores de paquetes turísticos + salud.",
      ],
    ],
  },
  {
    titulo: ["SERVICIOS HOLÍSTICOS", "HOLISTIC SERVICES"],
    banderas: ["it", "pt"],
    imagenes: ["/Galeria/holistico3.jpeg", "/Galeria/holistico4.jpeg"],
    imageSizes: [
      { width: 230, height: 208 },
      { width: 230, height: 208 },
    ],
    descripcion: [
      [
        "COMPLEMENTA TU BIENESTAR CON TERAPIAS ALTERNATIVAS:",
        "• Astrólogo",
        "• Terapias de liberación emocional",
        "• Tabla radiónica y radiestesia",
        "• Constelaciones familiares",
        "• Masajes terapéuticos",
        "• Barras de Access",
      ],
      [
        "• Acupuntura",
        "• Reflexología",
        "• Moxibustión",
        "• Hipnosis",
        "• Biomagnetismo",
        "• Programa para adulto mayor",
        "• Yoga",
      ],
    ],
    boton: true,
  },
];

const banderaISO = {
  es: 'ES', it: 'IT', pt: 'PT', fr: 'FR', us: 'US',
  cl: 'CL', mx: 'MX', pa: 'PA', pe: 'PE', ca: 'CA',
  br: 'BR', gb: 'GB', ar: 'AR', au: 'AU',
};

// ─── Helper: líneas de texto ─────────────────────────────────────────────────
const RenderLineas = ({ lineas }) => (
  <div className="flex flex-col gap-1">
    {lineas.map((linea, i) =>
      linea === "" ? (
        <div key={i} className="h-3" />
      ) : (
        <p key={i} className="text-sm sm:text-base leading-snug font-bold text-gray-800 m-0">
          {linea}
        </p>
      )
    )}
  </div>
);

// ─── Galería responsive ──────────────────────────────────────────────────────
// Móvil: grid 2 columnas con imágenes que llenan el ancho disponible
// Desktop: layout horizontal original con tamaños exactos del array imageSizes
const ImageGallery = ({ imagenes, titulo, imageSizes = [] }) => {
  const getSize = (i) => imageSizes[i] ?? { width: 224, height: 144 };

  return (
    <>
      {/* ── MÓVIL ── */}
      <div className="grid grid-cols-2 gap-3 px-4 py-4 sm:hidden bg-white">
        {imagenes.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${titulo} - imagen ${i + 1}`}
            className="w-full h-32 object-cover rounded-lg border"
          />
        ))}
      </div>

      {/* ── DESKTOP: 2 imágenes ── */}
      {imagenes.length === 2 && (
        <div className="hidden sm:flex gap-6 justify-center items-center bg-white py-6 flex-wrap">
          {imagenes.map((src, i) => {
            const { width, height } = getSize(i);
            return (
              <img key={i} src={src} alt={`${titulo} - imagen ${i + 1}`}
                className="object-cover rounded-lg border flex-shrink-0"
                style={{ width, height }}
              />
            );
          })}
        </div>
      )}

      {/* ── DESKTOP: 4 imágenes con laterales opacas ── */}
      {imagenes.length === 4 && (
        <div className="hidden sm:flex gap-4 justify-center items-center bg-white py-6 flex-wrap">
          {imagenes.map((src, i) => {
            const { width, height } = getSize(i);
            const isLateral = i === 0 || i === 3;
            return (
              <img key={i} src={src} alt={`${titulo} - imagen ${i + 1}`}
                className="object-cover rounded-lg border flex-shrink-0"
                style={{
                  width, height,
                  opacity: isLateral ? 0.75 : 1,
                  transform: isLateral ? "scale(0.92)" : "none",
                }}
              />
            );
          })}
        </div>
      )}

      {/* ── DESKTOP: fallback para otras cantidades ── */}
      {imagenes.length !== 2 && imagenes.length !== 4 && (
        <div className="hidden sm:flex gap-4 justify-center items-center bg-white py-6 flex-wrap">
          {imagenes.map((src, i) => {
            const { width, height } = getSize(i);
            return (
              <img key={i} src={src} alt={`${titulo} - imagen ${i + 1}`}
                className="object-cover rounded-lg border flex-shrink-0"
                style={{ width, height }}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

// ─── Componente principal ────────────────────────────────────────────────────
const HealthyTourismSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

  const goTo = (n) => setCurrentSlide((n + imagenesCarrusel.length) % imagenesCarrusel.length);

  const startAuto = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % imagenesCarrusel.length);
    }, 3500);
  };

  useEffect(() => {
    startAuto();
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white">

      {/* ── CARRUSEL ── */}
      <div className="relative h-[220px] sm:h-[480px] w-full overflow-hidden mb-6 sm:mb-12">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: `url(${imagenesCarrusel[currentSlide]})`, filter: "blur(22px)" }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div
          className="relative flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {imagenesCarrusel.map((src, i) => (
            <div key={i} className="min-w-full h-full flex items-center justify-center">
              <img src={src} alt={`slide-${i}`} className="max-h-full w-auto object-contain drop-shadow-xl" />
            </div>
          ))}
        </div>
        <button
          onClick={() => { goTo(currentSlide - 1); startAuto(); }}
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-xl sm:text-2xl transition"
          aria-label="Anterior"
        >‹</button>
        <button
          onClick={() => { goTo(currentSlide + 1); startAuto(); }}
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-xl sm:text-2xl transition"
          aria-label="Siguiente"
        >›</button>
        <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20">
          {imagenesCarrusel.map((_, i) => (
            <button key={i} onClick={() => { goTo(i); startAuto(); }}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${i === currentSlide ? "bg-white scale-110" : "bg-white/40"}`}
            />
          ))}
        </div>
      </div>

      {/* ── CUADROS ── */}
      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-10">
        <div className="grid gap-5 sm:gap-8">

          {/* Primer cuadro: Servicios Internacionales */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-[#43d9cb] p-4 sm:p-6">
              <h4 className="flex flex-wrap items-center gap-2 text-base sm:text-2xl font-bold text-green-800 m-0 uppercase leading-tight">
                SERVICIOS INTERNACIONALES
                <span className="flex gap-1">
                  <CountryFlag countryCode="ES" svg style={{ width: '22px', height: '16px', borderRadius: '3px', boxShadow: '0 1px 3px #0002', border: '1px solid #ccc' }} title="España" />
                  <CountryFlag countryCode="IT" svg style={{ width: '22px', height: '16px', borderRadius: '3px', boxShadow: '0 1px 3px #0002', border: '1px solid #ccc' }} title="Italia" />
                </span>
                INTERNATIONAL SERVICES
              </h4>
            </div>

            {/* Imágenes intro */}
            <div className="grid grid-cols-2 gap-3 px-4 py-4 sm:hidden bg-white">
              {imagenesIntro.map((src, i) => (
                <img key={i} src={src} alt={`Servicios internacionales ${i + 1}`}
                  className="w-full h-32 object-cover rounded-lg border" />
              ))}
            </div>
            <div className="hidden sm:flex gap-6 justify-center items-center bg-white py-6">
              {imagenesIntro.map((src, i) => {
                const { width, height } = introImageSizes[i] ?? { width: 224, height: 144 };
                return (
                  <img key={i} src={src} alt={`Servicios internacionales ${i + 1}`}
                    className="object-cover rounded-lg border" style={{ width, height }} />
                );
              })}
            </div>

            {/* Texto */}
            <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
              <div className="flex flex-col gap-1">
                <p className="text-sm sm:text-base leading-snug font-bold text-gray-800 m-0">
                  Soluciones en salud y bienestar para colombianos dentro y fuera del país
                </p>
                <div className="h-3" />
                <p className="text-sm sm:text-base leading-snug font-bold text-gray-800 m-0">
                  En MEDescuento contamos con más de 13 años de experiencia, ofreciendo alternativas accesibles y confiables en salud y bienestar para miles de familias en Colombia y el exterior.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm sm:text-base leading-snug font-bold text-gray-800 m-0">
                  Nuestro propósito es facilitar el acceso a profesionales certificados, con tarifas competitivas y procesos simples, especialmente para quienes viven fuera del país y necesitan atención médica oportuna sin costos elevados.
                </p>
                <div className="h-3" />
                <p className="text-sm sm:text-base leading-snug font-bold text-gray-800 m-0">
                  Gracias a nuestras teleconsultas internacionales, hoy puedes recibir orientación médica profesional, obtener fórmulas prescritas directamente a tu WhatsApp o correo electrónico, y complementar tus tratamientos sin importar en qué país te encuentres.
                </p>
                <div className="h-3" />
                <p className="text-sm sm:text-base leading-snug font-bold text-gray-800 m-0">
                  Si viajas a Colombia para visitar a tu familia, también puedes programar tus citas con anticipación, asegurando atención prioritaria y aprovechando al máximo tu tiempo en el país.
                </p>
              </div>
            </div>
          </Card>

          {/* Resto de cuadros */}
          {cuadros.map((cuadro, idx) => (
            <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-[#43d9cb] p-4 sm:p-6">
                <h4 className="flex flex-wrap items-center gap-2 text-base sm:text-2xl font-bold text-green-800 m-0 uppercase leading-tight">
                  {cuadro.titulo[0]}
                  {cuadro.banderas && (
                    <span className="flex gap-1">
                      <CountryFlag countryCode={banderaISO[cuadro.banderas[0]]} svg
                        style={{ width: '22px', height: '16px', borderRadius: '3px', boxShadow: '0 1px 3px #0002', border: '1px solid #ccc' }}
                        title={cuadro.banderas[0]} />
                      <CountryFlag countryCode={banderaISO[cuadro.banderas[1]]} svg
                        style={{ width: '22px', height: '16px', borderRadius: '3px', boxShadow: '0 1px 3px #0002', border: '1px solid #ccc' }}
                        title={cuadro.banderas[1]} />
                    </span>
                  )}
                  {cuadro.titulo[1]}
                </h4>
              </div>

              <ImageGallery
                imagenes={cuadro.imagenes}
                titulo={cuadro.titulo[0]}
                imageSizes={cuadro.imageSizes}
              />

              {/* Texto — 1 col en móvil, 2 col en desktop */}
              <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                <RenderLineas lineas={cuadro.descripcion[0]} />
                <RenderLineas lineas={cuadro.descripcion[1]} />
              </div>

              {cuadro.boton && (
                <div className="pb-5 sm:pb-6 px-4 sm:px-0 flex justify-center">
                  <a href="https://casaholisticaananda.com" target="_blank" rel="noopener noreferrer">
                    <Button size="lg"
                      className="bg-[#43d9cb] text-green-800 font-bold hover:bg-[#36b6a8] text-sm sm:text-base px-4 sm:px-6 whitespace-normal h-auto py-3 text-center">
                      👉 CONOCE MÁS EN CASA HOLÍSTICA ANANDA
                    </Button>
                  </a>
                </div>
              )}
            </Card>
          ))}

        </div>
      </div>
    </section>
  );
};

export default HealthyTourismSection;