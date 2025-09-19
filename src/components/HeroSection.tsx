import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const slides = [
    "/Galeria/slider1.png",
    "/Galeria/slider2.jpg",
    "/Galeria/slider3.jpg",
    "/Galeria/slider4.png"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const useCarousel = (images, intervalTime = 3000) => {
    const [index, setIndex] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, intervalTime);
      return () => clearInterval(interval);
    }, [images, intervalTime]);
    return images[index];
  };

  const promoImages = [
    "/Galeria/mascotas1.jpg",
    "/Galeria/mascotas2.jpg",
    "/Galeria/mascotas3.jpg"
  ];
  const clienteImages = [
    "/Galeria/clientes1.jpg",
    "/Galeria/clientes2.jpeg",
    "/Galeria/clientes3.jpg"
  ];
  const terapeutaImages = [
    "/Galeria/Terapeuta1.jpeg",
    "/Galeria/Terapeuta2.jpeg",
    "/Galeria/Terapeuta3.jpg"
  ];

  const promoImage = useCarousel(promoImages);
  const clienteImage = useCarousel(clienteImages);
  const terapeutaImage = useCarousel(terapeutaImages);

  return (
    <section className="bg-gradient-hero min-h-[60vh] py-8 md:py-16 relative overflow-hidden">
      {/* Fondo con carrusel */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-60" : "opacity-0"
            }`}
            style={{ 
              backgroundImage: `url(${slide})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'scroll'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-3 space-y-8">
            {/* Logo + Botón */}
            <div className="text-center lg:text-left">
              <div className="mb-6 flex justify-center lg:justify-start">
                <img
                  src="/Galeria/imagenhero.png"
                  alt="Un mundo de privilegios a su alcance"
                  className="h-32 w-auto object-contain"
                />
              </div>

              <a
                href="https://wa.me/573225426408?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full text-lg font-semibold">
                  CONTACTO
                </Button>
              </a>
            </div>

            {/* Cuadros de contenido */}
            <div className="grid md:grid-cols-4 gap-4 md:gap-6">
              {/* Nuestras Mascotas */}
              <Card className="p-1 md:p-3 text-black text-center hover:scale-105 transition-transform relative overflow-hidden h-48 md:h-64">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                  style={{ backgroundImage: `url(${promoImage})` }}
                ></div>
                <div className="relative z-10 bg-pink-500/70 px-2 py-1 md:px-3 md:py-2 rounded-lg inline-block mt-1 md:mt-2">
                  <h3 className="text-xs md:text-lg font-bold text-white">Nuestras Mascotas</h3>
                </div>
              </Card>

              {/* Clientes Satisfechos */}
              <Card className="p-1 md:p-3 text-black text-center hover:scale-105 transition-transform relative overflow-hidden h-48 md:h-64">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                  style={{ backgroundImage: `url(${clienteImage})` }}
                ></div>
                <div className="relative z-10 bg-green-500/70 px-2 py-1 md:px-3 md:py-2 rounded-lg inline-block mt-1 md:mt-2">
                  <h3 className="text-xs md:text-lg font-bold text-white">
                    Clientes Satisfechos
                  </h3>
                </div>
              </Card>

              {/* Terapias Holísticas */}
              <Card className="p-1 md:p-3 text-black text-center hover:scale-105 transition-transform relative overflow-hidden h-48 md:h-64">
                <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                style={{ backgroundImage: `url(${terapeutaImage})` }}
                ></div>
                <div className="relative z-10 bg-blue-500/70 px-2 py-1 md:px-3 md:py-2 rounded-lg inline-block mt-1 md:mt-2">
                  <h3 className="text-xs md:text-lg font-bold text-white">Terapias Holísticas</h3>
                  <p className="text-xs md:text-sm text-white mt-1">
                    Ansiedad, depresión, estrés, insomnio y duelo.
                  </p>
                </div>
              </Card>

              {/* Mapa */}
              <Card className="bg-hero-bg/80 border-accent border-2 p-3 flex flex-col justify-between text-white text-center hover:scale-105 transition-transform h-48 md:h-64">
                <h3 className="text-lg font-bold">Nuestra Ubicación</h3>
                <div className="flex-1 flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.1942622415304!2d-75.65653328939742!3d4.559058242849977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38f5f16926682d%3A0xa603f0d7104df83f!2sMEDescuento!5e0!3m2!1ses!2sco!4v1755476797875!5m2!1ses!2sco"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
                <p className="opacity-90 text-xs mt-2">Búscanos en la sección Contacto</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
