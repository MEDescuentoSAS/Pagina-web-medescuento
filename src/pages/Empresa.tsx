import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Target, Eye, Lightbulb, Heart, Handshake } from "lucide-react";
import { useEffect, useState } from "react";

const Empresa = () => {
  const images = [
    "/Galeria/empresa9.jpg",
    "/Galeria/empresa2.jpeg",
    "/Galeria/empresa3.jpeg",
    "/Galeria/empresa4.jpeg",
    "/Galeria/empresa5.jpeg",
    "/Galeria/empresa6.jpeg",
    "/Galeria/empresa7.jpeg",
    "/Galeria/empresa8.jpeg",
    "/Galeria/empresa10.jpg",
    "/Galeria/empresa1.jpeg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(id);
  }, [images.length]);

  const next = () => setCurrent((i) => (i + 1) % images.length);
  const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* HERO */}
      <section className="relative h-[460px] w-full overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
              index === current ? "opacity-90" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
            aria-hidden={index !== current}
          />
        ))}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            NUESTRA EMPRESA
          </h1>
          <p className="mt-3 text-lg md:text-xl text-white/90 drop-shadow">
            12 años transformando el sistema de salud en el Quindío
          </p>
        </div>
        <button
          onClick={prev}
          aria-label="Anterior"
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/45 px-3 py-2 text-white hover:bg-black/60"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Siguiente"
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/45 px-3 py-2 text-white hover:bg-black/60"
        >
          ›
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Ir a la imagen ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === current ? "bg-white" : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <main className="container mx-auto px-4 py-12 relative z-10 w-full">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* DESCRIPCIÓN */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl font-bold text-green-800">
                <Building2 className={`w-8 h-8 text-yellow-400`} />
                DESCRIPCIÓN
              </CardTitle>
            </CardHeader>
            <CardContent className="font-bold text-lg leading-relaxed">
              <p>
                MEDescuento S.A.S. es una empresa quindiana que nació hace doce (12) años a partir
                de la iniciativa de un estudiante universitario que identificó un déficit
                significativo en el sistema de salud colombiano. Su propósito fue mejorar esta
                situación mediante alianzas con profesionales particulares e IPS de la salud,
                buscando ahorrar tiempo y dinero a personas y empresas, logrando así; bienestar
                integral a usuarios, sus familias y mascotas.
              </p>
              <p className="mt-4">
                Actualmente, cuenta con una amplia red de especialistas en diferentes áreas de la
                salud y alianzas estratégicas con el sector empresarial. Esto le ha permitido
                consolidarse como una empresa líder a nivel departamental, destacándose por ofrecer
                acceso a servicios especializados con tarifas preferenciales y una atención de
                calidad, con agendamiento ágil y oportuno.
              </p>
            </CardContent>
          </Card>

          {/* MISIÓN Y VISIÓN */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-bold text-green-800">
                  <Target className={`w-6 h-6 text-sky-400`} />
                  MISIÓN
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-bold text-lg leading-relaxed">
                  Brindar a las personas y organizaciones un plan complementario de salud con
                  privilegios y descuentos: médicos y exequiales, al igual que capacitaciones y
                  charlas empresariales que fortalezcan el bienestar y la responsabilidad social.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-bold text-green-800">
                  <Eye className={`w-6 h-6 text-orange-500`} />
                  VISIÓN
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-bold text-lg leading-relaxed">
                  En el 2030 seremos en el departamento del Quindío la empresa líder en marketing de
                  planes complementarios de salud y exequiales con proyección nacional e
                  internacional, destacando la gestión en sus procesos y alto desarrollo tecnológico.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* PRINCIPIOS Y VALORES */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-bold text-green-800">
                  <Lightbulb className="w-6 h-6 text-yellow-500" />
                  PRINCIPIOS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-lg">
                  <li className="font-bold flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Transparencia
                  </li>
                  <li className="font-bold flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Cumplimiento
                  </li>
                  <li className="font-bold flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Puntualidad
                  </li>
                  <li className="font-bold flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Trabajo en equipo
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-bold text-green-800">
                  <Heart className="w-6 h-6 text-red-600 fill-red-600" />
                  VALORES CORPORATIVOS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-lg">
                  <li className="font-bold flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Vocación por el servicio
                  </li>
                  <li className="font-bold flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Confianza
                  </li>
                  <li className="font-bold flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Constancia
                  </li>
                  <li className="font-bold flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Honestidad
                  </li>
                  <li className="font-bold flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Credibilidad
                  </li>
                  <li className="font-bold flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Eficacia
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* PROMESA DE VALOR */}
          <Card className="bg-[#43d9cb]">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl font-bold text-green-800 justify-center">
                <Handshake className="w-8 h-8" />
                PROMESA DE VALOR
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-2xl font-semibold text-black">
                "APORTANDO A UN MUNDO SALUDABLE"
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Empresa;
