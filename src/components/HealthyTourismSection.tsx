import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, MapPin, Heart, Stethoscope, DollarSign, Users } from "lucide-react";

const HealthyTourismSection = () => {
  const tourismPackages = [
    {
      icon: Heart,
      title: "Wellness Retreats",
      description: "Immersive health and wellness experiences in Colombia's most beautiful destinations",
      features: ["Spa & Relaxation", "Yoga & Meditation", "Healthy Cuisine", "Natural Therapies"]
    },
    {
      icon: Stethoscope,
      title: "Medical Tourism",
      description: "Premium healthcare services with leading specialists at competitive international prices",
      features: ["Consultations", "Procedures", "Follow-up Care", "International Standards"]
    },
    {
      icon: MapPin,
      title: "Adventure & Health",
      description: "Active tourism combining outdoor adventures with health and wellness monitoring",
      features: ["Hiking", "Water Sports", "Health Coaching", "Eco-tourism"]
    },
    {
      icon: DollarSign,
      title: "Affordable Excellence",
      description: "High-quality health services at 40-60% lower costs than North America and Europe",
      features: ["Cost Savings", "Premium Care", "Luxury Hotels", "VIP Treatment"]
    }
  ];

  const benefits = [
    { label: "Countries Served", value: "15+" },
    { label: "Foreign Visitors", value: "2,500+" },
    { label: "Medical Partners", value: "50+" },
    { label: "5-Star Ratings", value: "98%" }
  ];

  const destinations = [
    {
      name: "Cartagena",
      description: "Caribbean beauty with world-class medical facilities and luxury resorts",
      climate: "Tropical",
      language: "Spanish (English spoken)"
    },
    {
      name: "Medellín",
      description: "The City of Eternal Spring with advanced healthcare and vibrant culture",
      climate: "Spring-like (22°C)",
      language: "Spanish (English spoken)"
    },
    {
      name: "Bogotá",
      description: "Capital city with top medical centers and cultural attractions",
      climate: "Cool (14°C)",
      language: "Spanish (English spoken)"
    },
    {
      name: "Santa Marta",
      description: "Gateway to Lost City and pristine beaches with wellness centers",
      climate: "Tropical",
      language: "Spanish (English spoken)"
    }
  ];

  // Cuadros de información para Servicios Internacionales
  const infoCuadros = [
    {
      titulo: "Servicios Internacionales",
      color: "bg-[#43d9cb]",
      descripcion: `En MEDescuento, contamos con más de 13 años de experiencia ofreciendo soluciones en salud y bienestar a miles de familias dentro y fuera de Colombia.\nNuestro compromiso es brindar servicios accesibles, confiables y oportunos, especialmente para quienes residen en el exterior y necesitan atención médica oportuna a costos mucho más favorables que los de otros países.\n\nGracias a nuestras teleconsultas internacionales, hoy es posible acceder a profesionales de la salud en modalidades virtuales o presenciales, recibir fórmulas médicas directamente por WhatsApp o correo electrónico, y programar servicios médicos con anticipación cuando visites Colombia.`
    },
    {
      titulo: "Plan Complementario de Salud",
      color: "bg-[#43d9cb]",
      descripcion: `A. Modalidad Virtual\nAccede a atención médica desde cualquier lugar del mundo, con profesionales certificados en Colombia:\n• Médico General\n• Psicología\n• Especialistas en diversas áreas\nRecibe tu fórmula médica por WhatsApp o correo electrónico, lista para ser adquirida donde te encuentres.\n\nB. Modalidad Presencial en Colombia\nSi vienes de visita, puedes programar tus citas con anticipación para aprovechar al máximo tu tiempo en el país.\nServicios disponibles:\n• Médico General\n• Odontología\n• Optometría\n• Ginecología\n• Dermatología\n• Laboratorios Clínicos\n• Ecografías, Radiografías y Mamografías\n• Oftalmología`
    },
    {
      titulo: "Servicios Exequiales – Aliados: Olivos y Renacer",
      color: "bg-[#43d9cb]",
      descripcion: `Ofrecemos planes diseñados para brindar tranquilidad a las familias en momentos difíciles, tanto dentro como fuera de Colombia.\n\nA. Plan Estándar en Colombia\nIncluye:\n• Asesoría Jurídica\n• Suministro de Cofre\n• Carroza Fúnebre\n• Preservación del cuerpo\n• Traslado del cuerpo a nivel nacional\n• Cobertura en todo el país\n\nB. Plan de Repatriación para Colombianos en el Exterior\nEn muchas familias colombianas, siempre hay un ser querido viviendo fuera del país. Este plan está diseñado para protegerlos ante cualquier eventualidad, sin importar su estatus migratorio, evitando los altos costos exequiales en el exterior.\n\nC. Plan de Repatriación para Extranjeros en Colombia\nCon el aumento del turismo y la llegada de extranjeros que se radican en el país, este plan brinda cobertura especializada en caso de fallecimiento mientras se encuentran en Colombia.\n\nD. Plan Exequial para Mascotas\nPorque nuestras mascotas son parte de la familia, ofrecemos un plan que garantiza una despedida digna y amorosa:\n• Recogida del cuerpo en ciudades principales\n• Cremación\n• Urna decorativa personalizada con la foto del peludito`
    },
    {
      titulo: "Asesoría en Trámites para Viajar con tu Mascota",
      color: "bg-[#43d9cb]",
      descripcion: `Si deseas viajar con tu mascota, te acompañamos en todo el proceso. Cada país tiene requisitos específicos, normativas sanitarias y documentación obligatoria para ingresar o salir con animales de compañía.\nNuestros asesores te guiarán paso a paso para garantizar un viaje seguro y sin contratiempos.`
    },
    {
      titulo: "TIPS Importantes de especialistas sobre cuidado en los cambios de clima (Invierno, verano, primavera y otoño)",
      color: "bg-[#fbbf24]", // amarillo
      descripcion: `• Usar menos coche privado (Usar bicicleta)\n• Chorro Energía (No dejar televisores, celulares, computadores o cargadores conectados o prendidos)\n• Mantenimiento preventivo de la calefacción como aire acondicionado y electrodomésticos.\n• Cambios de bombillos tradicionales por bombillos de bajo consumo.\n• Reduce, consume menos\n• Reutiliza, aprovecha\n• Recicla, Cuidas y ganas dinero\n• Aprende nuevas habilidades y cultura`
    },
    {
      titulo: "TIPS Cuidados en alimentación en otros países",
      color: "bg-[#34d399]", // verde
      descripcion: `• Químicos, frutas, verduras, líquidos (Agua)\n• Tener en cuenta lo que produce una mala alimentación, son contaminados, con bacterias, virus, toxinas o productos químicos`
    },
    {
      titulo: "Si visitas tu país (Colombia) TEN EN CUENTA!!!",
      color: "bg-[#60a5fa]", // azul
      descripcion: `A. Ciudad que visitas (Clima)\nB. Vacunas (Para entrar o salir del país)\nC. Lugares turísticos y sus restricciones\nD. Recomendaciones, alimentación y bebidas`
    },
    {
      titulo: "Ciudades y clínicas más reconocidas para turismo saludable",
      color: "bg-[#f472b6]", // rosa
      descripcion: `INFORMACIÓN QUE SE DEBE PROPORCIONAR`
    },
    {
      titulo: "Servicios Holísticos",
      color: "bg-[#a78bfa]", // morado
      descripcion: `• Astrologo\n• Terapia con tabla radiónica\n• Constelaciones\n• Tarot`
    }
  ];

  // Imágenes para la galería
  const galeria = [
    "/Galeria/aromaterapia.jpg",
    "/Galeria/vidaactiva.jpg",
    "/Galeria/mascotas1.jpg",
    "/Galeria/consultoria.jpg",
    "/Galeria/yoga.jpg"
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white">
      {/* HERO HEADER CON FONDO */}
      <div className="relative h-[340px] w-full overflow-hidden mb-12 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/Galeria/empresa9.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">SERVICIOS INTERNACIONALES</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow">
            En MEDescuento, contamos con más de 13 años de experiencia ofreciendo soluciones en salud y bienestar a miles de familias dentro y fuera de Colombia.
            Nuestro compromiso es brindar servicios accesibles, confiables y oportunos, especialmente para quienes residen en el exterior y necesitan atención médica oportuna a costos mucho más favorables que los de otros países.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4">
        {/* Cuadros de información Servicios Internacionales - estilo igual a Servicios */}
        <div className="mb-20">
          <div className="grid gap-8">
            {infoCuadros.map((cuadro, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-[#43d9cb] p-6">
                  <h4 className="flex items-center gap-3 text-2xl font-bold text-green-800 m-0">
                    {cuadro.titulo}
                  </h4>
                </div>
                <div className="p-6">
                  <p className="text-lg leading-relaxed font-bold text-black-700 whitespace-pre-line mb-0">
                    {cuadro.descripcion}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Galería de imágenes */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Galería de Experiencias</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {galeria.map((img, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden shadow-md bg-white/80">
                <img src={img} alt={`Turismo saludable ${idx + 1}`} className="w-full h-40 object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Featured Destinations */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Featured Destinations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-slate-50 to-white border-2 hover:border-blue-400 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <h4 className="text-lg font-bold">{destination.name}</h4>
                </div>
                <p className="text-sm text-gray-600 mb-4">{destination.description}</p>
                <div className="space-y-2 text-xs">
                  <p><span className="font-semibold">Climate:</span> {destination.climate}</p>
                  <p><span className="font-semibold">Language:</span> {destination.language}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Colombia Section */}
        <Card className="bg-gradient-to-r from-blue-50 to-teal-50 p-12 mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Why Choose Colombia?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-3 text-blue-600">💰 Exceptional Value</h4>
              <p className="text-gray-700">
                Medical procedures cost 40-60% less than the USA or Europe while maintaining the highest quality standards.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-3 text-teal-600">🏥 World-Class Healthcare</h4>
              <p className="text-gray-700">
                JCI-accredited hospitals, board-certified specialists trained internationally, and cutting-edge technology.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-3 text-blue-600">🌴 Paradise Healing</h4>
              <p className="text-gray-700">
                Recover in stunning natural landscapes, perfect weather year-round, and welcoming Colombian hospitality.
              </p>
            </div>
          </div>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Ready to Start Your Healthy Journey?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/573225426408?text=Hola%20MEDescuento,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios%20de%20turismo%20saludable"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                <Globe className="mr-2 w-5 h-5" />
                Get Your Personal Quote
              </Button>
            </a>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Free consultations available in English and Spanish.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HealthyTourismSection;
