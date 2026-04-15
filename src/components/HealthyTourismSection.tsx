import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CountryFlag from 'react-country-flag';

// ─── Imágenes del carrusel ───────────────────────────────────────────────────
const imagenesCarrusel = [
  "/Galeria/paisaje1.jpeg",
  "/Galeria/londres.jpeg",
  "/Galeria/miami.jpg",
  "/Galeria/australia.webp",
  "/Galeria/nuevayork.jpeg",
  "/Galeria/roma.jpg",
  "/Galeria/peru.jpg",
];

const imagenesIntro = [
  "/Galeria/logoturismo.jpeg",
  "/Galeria/empresa9.jpg",
];

const cuadros = [
  {
    titulo: ["PLAN COMPLEMENTARIO DE SALUD", "COMPLEMENTARY HEALTH PLAN"],
    banderas: ["pt", "fr"],
    imagenes: ["/Galeria/holistico.jpeg", "/Galeria/holistico2.jpeg"],
    imageOrientation: "horizontal",
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
    // 4 imágenes: izquierda extra, centro 1, centro 2, derecha extra
    imagenes: [
      "/Galeria/repatriacion_extra.jpg",
      "/Galeria/repatriacion.jpg",
      "/Galeria/expatriacion.jpg",
      "/Galeria/expatriacion_extra.jpg",
    ],
    imageOrientation: "vertical",
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
        "",
        "B. PLAN DE REPATRIACIÓN",
        "Por cada familia colombiana hay un ser querido viviendo en el exterior. Este plan garantiza la repatriación segura y digna del cuerpo a Colombia, protegiendo a la familia de los altos costos exequiales fuera del país, independientemente del estatus migratorio.",
      ],
      [
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
    imageOrientation: "horizontal",
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
    // 4 imágenes originales del array ya tenía 4: primavera, otoño, invierno, verano
    // Ahora las colocamos como: lateral izq, centro 1, centro 2, lateral der
    imagenes: [
      "/Galeria/primavera.avif",
      "/Galeria/otoño.jpeg",
      "/Galeria/Invierno.jpeg",
      "/Galeria/verano.jpeg",
    ],
    imageOrientation: "square",
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
    imageOrientation: "horizontal",
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
    imagenes: ["/Galeria/colombia.jpg", "/Galeria/colombia2.png"],
    imageOrientation: "horizontal",
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
    // 4 imágenes: lateral izq extra, cali, bogota, lateral der extra
    imagenes: [
      "/Galeria/medellin.jpg",
      "/Galeria/cali.jpg",
      "/Galeria/bogota.avif",
      "/Galeria/cartagena.jpg",
    ],
    imageOrientation: "horizontal",
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
    imageOrientation: "vertical",
    descripcion: [
      [
        "COMPLEMENTA TU BIENESTAR CON TERAPIAS ALTERNATIVAS:",
        "• Astrólogo",
        "• Terapias de liberación emocional",
        "• Tabla radiónica y radiestesia",
        "• Constelaciones familiares",
        "• Masajes terapéuticos",
        "• Barras de Access",
        "• Acupuntura",
      ],
      [
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

// Dimensiones según orientación
const imageDimensions = {
  horizontal: { width: "w-56", height: "h-36" },  // 224x144 — más ancha que alta
  vertical:   { width: "w-36", height: "h-52" },  // 144x208 — más alta que ancha
  square:     { width: "w-44", height: "h-44" },  // 176x176 — cuadrada
};

// Helper: renderiza un array de líneas como párrafos con negrita
const RenderLineas = ({ lineas }) => (
  <div className="flex flex-col gap-1">
    {lineas.map((linea, i) =>
      linea === "" ? (
        <div key={i} className="h-3" />
      ) : (
        <p key={i} className="text-base leading-snug font-bold text-gray-800 m-0">
          {linea}
        </p>
      )
    )}
  </div>
);

// Componente para la galería de imágenes de un cuadro
const ImageGallery = ({ imagenes, titulo, orientation = "horizontal" }) => {
  const dims = imageDimensions[orientation] || imageDimensions.horizontal;
  const imgClass = `${dims.width} ${dims.height} object-cover rounded-lg border flex-shrink-0`;

  // 2 imágenes: centradas
  if (imagenes.length === 2) {
    return (
      <div className="flex gap-6 justify-center items-center bg-white py-6 flex-wrap">
        {imagenes.map((src, i) => (
          <img key={i} src={src} alt={`${titulo} - imagen ${i + 1}`} className={imgClass} />
        ))}
      </div>
    );
  }

  // 4 imágenes: primera y última en los laterales (más pequeñas/opacas), centro las 2 principales
  if (imagenes.length === 4) {
    return (
      <div className="flex gap-4 justify-center items-center bg-white py-6 flex-wrap">
        {/* Imagen lateral izquierda — levemente más pequeña y opaca */}
        <img
          src={imagenes[0]}
          alt={`${titulo} - imagen lateral izquierda`}
          className={`${dims.width} ${dims.height} object-cover rounded-lg border flex-shrink-0 opacity-75 scale-95`}
          style={{ transform: "scale(0.92)" }}
        />
        {/* Imágenes centrales principales */}
        <img
          src={imagenes[1]}
          alt={`${titulo} - imagen principal 1`}
          className={imgClass}
        />
        <img
          src={imagenes[2]}
          alt={`${titulo} - imagen principal 2`}
          className={imgClass}
        />
        {/* Imagen lateral derecha */}
        <img
          src={imagenes[3]}
          alt={`${titulo} - imagen lateral derecha`}
          className={`${dims.width} ${dims.height} object-cover rounded-lg border flex-shrink-0 opacity-75`}
          style={{ transform: "scale(0.92)" }}
        />
      </div>
    );
  }

  // Fallback: mostrar todas centradas
  return (
    <div className="flex gap-4 justify-center items-center bg-white py-6 flex-wrap">
      {imagenes.map((src, i) => (
        <img key={i} src={src} alt={`${titulo} - imagen ${i + 1}`} className={imgClass} />
      ))}
    </div>
  );
};

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
      <div className="relative h-[340px] w-full overflow-hidden mb-12">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {imagenesCarrusel.map((src, i) => (
            <div key={i} className="min-w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${src})` }} />
          ))}
        </div>
        <button onClick={() => { goTo(currentSlide - 1); startAuto(); }}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl transition-colors"
          aria-label="Anterior">‹</button>
        <button onClick={() => { goTo(currentSlide + 1); startAuto(); }}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl transition-colors"
          aria-label="Siguiente">›</button>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {imagenesCarrusel.map((_, i) => (
            <button key={i} onClick={() => { goTo(i); startAuto(); }}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentSlide ? "bg-white" : "bg-white/40"}`} />
          ))}
        </div>
      </div>

      {/* ── CUADROS ── */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-8">

          {/* Primer cuadro: Servicios Internacionales */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-[#43d9cb] p-6">
              <h4 className="flex items-center gap-3 text-2xl font-bold text-green-800 m-0 uppercase">
                SERVICIOS INTERNACIONALES
                <span className="flex gap-1 mx-2">
                  <CountryFlag countryCode="ES" svg style={{ width: '28px', height: '20px', borderRadius: '4px', boxShadow: '0 1px 3px #0002', border: '1px solid #ccc' }} title="España" />
                  <CountryFlag countryCode="IT" svg style={{ width: '28px', height: '20px', borderRadius: '4px', boxShadow: '0 1px 3px #0002', border: '1px solid #ccc' }} title="Italia" />
                </span>
                INTERNATIONAL SERVICES
              </h4>
            </div>
            <div className="flex gap-6 justify-center items-center bg-white py-6">
              <img src={imagenesIntro[0]} alt="Servicios internacionales 1"
                className="w-56 h-36 object-cover rounded-lg border" />
              <img src={imagenesIntro[1]} alt="Servicios internacionales 2"
                className="w-56 h-36 object-cover rounded-lg border" />
            </div>
            <div className="p-6 grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-1">
                <p className="text-base leading-snug font-bold text-gray-800 m-0">
                  Soluciones en salud y bienestar para colombianos dentro y fuera del país
                </p>
                <div className="h-3" />
                <p className="text-base leading-snug font-bold text-gray-800 m-0">
                  En MEDescuento contamos con más de 13 años de experiencia, ofreciendo alternativas accesibles y confiables en salud y bienestar para miles de familias en Colombia y el exterior.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-base leading-snug font-bold text-gray-800 m-0">
                  Nuestro propósito es facilitar el acceso a profesionales certificados, con tarifas competitivas y procesos simples, especialmente para quienes viven fuera del país y necesitan atención médica oportuna sin costos elevados.
                </p>
                <div className="h-3" />
                <p className="text-base leading-snug font-bold text-gray-800 m-0">
                  Gracias a nuestras teleconsultas internacionales, hoy puedes recibir orientación médica profesional, obtener fórmulas prescritas directamente a tu WhatsApp o correo electrónico, y complementar tus tratamientos sin importar en qué país te encuentres.
                </p>
                <div className="h-3" />
                <p className="text-base leading-snug font-bold text-gray-800 m-0">
                  Si viajas a Colombia para visitar a tu familia, también puedes programar tus citas con anticipación, asegurando atención prioritaria y aprovechando al máximo tu tiempo en el país.
                </p>
              </div>
            </div>
          </Card>

          {/* Resto de cuadros */}
          {cuadros.map((cuadro, idx) => (
            <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-[#43d9cb] p-6">
                <h4 className="flex items-center gap-3 text-2xl font-bold text-green-800 m-0 uppercase">
                  {cuadro.titulo[0]}
                  {cuadro.banderas && (
                    <span className="flex gap-1 mx-2">
                      <CountryFlag countryCode={banderaISO[cuadro.banderas[0]]} svg
                        style={{ width: '28px', height: '20px', borderRadius: '4px', boxShadow: '0 1px 3px #0002', border: '1px solid #ccc' }}
                        title={cuadro.banderas[0]} />
                      <CountryFlag countryCode={banderaISO[cuadro.banderas[1]]} svg
                        style={{ width: '28px', height: '20px', borderRadius: '4px', boxShadow: '0 1px 3px #0002', border: '1px solid #ccc' }}
                        title={cuadro.banderas[1]} />
                    </span>
                  )}
                  {cuadro.titulo[1]}
                </h4>
              </div>

              {/* Galería adaptativa según orientación y cantidad de imágenes */}
              <ImageGallery
                imagenes={cuadro.imagenes}
                titulo={cuadro.titulo[0]}
                orientation={cuadro.imageOrientation || "horizontal"}
              />

              <div className="p-6 grid grid-cols-2 gap-8">
                <RenderLineas lineas={cuadro.descripcion[0]} />
                <RenderLineas lineas={cuadro.descripcion[1]} />
              </div>
              {cuadro.boton && (
                <div className="pb-6 flex justify-center">
                  <a href="https://casaholisticaananda.com" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-[#43d9cb] text-green-800 font-bold hover:bg-[#36b6a8]">
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