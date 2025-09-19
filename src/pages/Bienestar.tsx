import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flower2, Sparkles, Music, PartyPopper, Zap } from "lucide-react";

const Bienestar = () => {
  const activities = [
    {
      icon: Flower2,
      title: "YOGA",
      description: "Para MEDescuento la actividad del yoga se realiza de manera terapeutica donde posturas del cuerpo, la respiración y la meditación, son fundamentales para mantener el equilibrio, relajar la mente y alcanzar el bienestar integral. Es ideal para reducir el estrés, mejorar la flexibilidad y encontrar armonía entre cuerpo y espíritu.",
      benefits: ["Reducción del estrés", "Mejora de la flexibilidad", "Fortalecimiento muscular", "Equilibrio y salud mental", "Disposición a los sonidos", "Relajación mental y física"]
    },
    {
      icon: Sparkles,
      title: "AROMATERAPIA",
      description: "La aromaterapia es aplicada en la empresa MEDescuento, mediante variedades de aceites y esencias naturales que permiten estimular y sensibilizar los sentidos, generando relajación y mejora de la salud física y emocional. A través de aromas, masajes o difusores, esta terapia holística ayuda a disminuir.",
      benefits: ["La ansiedad", "El insomnio", " El enojo", "La tensión diaria"]
    },
    {
      icon: Music,
      title: "RUMBATERAPIA",
      description: "Con MEDescuento con rumbaterapia te relajas y te diviertes combinando baile, ejercicio aeróbico y canto al ritmo de la música. Más que un entrenamiento físico, es una fiesta llena de energía que ayuda a quemar calorías, mejorar la coordinación y liberar el estrés con alegría.",
      benefits: ["Ejercicio cardiovascular controlado", "Entretenimiento grupal", "Liberación de tensiones y energías negativas", "Coordinación física"]
    },
    {
      icon: PartyPopper,
      title: "HORA LOCA",
      description: "La hora loca es una actividad divertida que se realiza normalmente después de media-noche, llena de música, baile, color y esencias, que convierte cualquier fiesta en una celebración experiencial. Con disfraces, coreografías, luces, DJ, logística y mucha diversión, es la mejor forma de romper la rutina y encender la alegría en eventos sociales y corporativos.",
      benefits: ["Armonía grupal", "Libre expresión entre compañeros o amigos", "Diversión grupal personalizada", "Integración del equipo"]
    },
    {
      icon: Zap,
      title: "VIDA ACTIVA",
      description: "Vida Activa es un programa pensando en la persona adulta donde se equilibra cuerpo, mete y espiritu, mejorando su flexibilidad, reduciendo el estrés, aprendiendo algo nuevo y socializando, INCLUYE: ",
      benefits: ["Hábitos Cuerpo activo (Yoga y Chinkun)", "Salud Holistica (Aprendiendo herramientas de sanación)", "Mente activa (Cuidado congnitivo y neuroplasticidad)", "Apoyo psicológico y terapéutico", "Formación (Proceso de morir y cuidando al cuidador)", "Diversión, sala de cine y premiación"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800">BIENESTAR INTEGRAL</h1>
            <p className="text-xl text-black-600 max-w-3xl mx-auto">
              Actividades diseñadas para el bienestar físico, mental y emocional de las personas y las empresas
            </p>
          </div>

          {/* Activities Grid */}
          <div className="grid gap-8">
            {activities.map((activity, index) => (
              <div key={index}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-[#43d9cb]">
                    <CardTitle className="flex items-center gap-3 text-2xl font-bold text-green-800">
                      <activity.icon 
                        className={`w-8 h-8 ${
                          index === 0 ? 'text-purple-600' : 
                          index === 1 ? 'text-pink-500' : 
                          index === 2 ? 'text-fuchsia-600' : 
                          index === 3 ? 'text-yellow-400' : 
                          index === 4 ? 'text-yellow-400' : ''
                        }`} 
                      />
                      {activity.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-lg leading-relaxed mb-6 font-bold text-black-700">
                      {activity.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <h4 className="font-semibold font-bold text-green-800 mb-3 md:col-span-2">Beneficios:</h4>
                      {activity.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span className="font-bold text-black-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Image sections remain unchanged */}
                {index === 0 && (
                  <div className="mt-8 mb-4 flex justify-center">
                    <div className="grid md:grid-cols-2 gap-4 max-w-4xl w-full">
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <img 
                            src="/Galeria/yoga.jpg" 
                            alt="Yoga - Equilibrio y bienestar integral"
                            className="w-full h-52 object-cover"
                            loading="lazy"
                          />
                        </CardContent>
                      </Card>
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <img 
                            src="/Galeria/yoga2.jpg" 
                            alt="Práctica de yoga en grupo"
                            className="w-full h-52 object-cover"
                            loading="lazy"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )}
                {index === 1 && (
                  <div className="mt-8 mb-4 flex justify-center">
                    <div className="grid md:grid-cols-2 gap-4 max-w-4xl w-full">
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <img 
                            src="/Galeria/aromaterapia.jpg" 
                            alt="Aromaterapia - Relajación con aceites esenciales"
                            className="w-full h-52 object-cover"
                            loading="lazy"
                          />
                        </CardContent>
                      </Card>
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <img 
                            src="/Galeria/aromaterapia2.jpg" 
                            alt="Sesión de aromaterapia"
                            className="w-full h-52 object-cover"
                            loading="lazy"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )}
                {index === 2 && (
                  <div className="mt-8 mb-4 flex justify-center">
                    <div className="grid md:grid-cols-2 gap-4 max-w-4xl w-full">
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <img 
                            src="/Galeria/rumbaterapia2.jpg" 
                            alt="Rumbaterapia - Diversión y ejercicio al ritmo de la música"
                            className="w-full h-52 object-cover"
                            loading="lazy"
                          />
                        </CardContent>
                      </Card>
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <img 
                            src="/Galeria/rumbaterapia.jpg" 
                            alt="Clase de rumbaterapia grupal"
                            className="w-full h-52 object-cover"
                            loading="lazy"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )}
                {index === 3 && (
                  <div className="mt-8 mb-4 flex justify-center">
                    <div className="grid md:grid-cols-2 gap-4 max-w-4xl w-full">
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <img 
                            src="/Galeria/horaloca.jpg" 
                            alt="Hora Loca - Diversión y celebración"
                            className="w-full h-52 object-cover"
                            loading="lazy"
                          />
                        </CardContent>
                      </Card>
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <img 
                            src="/Galeria/horaloca2.jpg" 
                            alt="Celebración hora loca empresarial"
                            className="w-full h-52 object-cover"
                            loading="lazy"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )}
                {index === 4 && (
                  <div className="mt-8 mb-4 flex justify-center">
                    <div className="grid md:grid-cols-2 gap-4 max-w-4xl w-full">
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <img 
                            src="/Galeria/vidaactiva.jpg" 
                            alt="Vida Activa - Bienestar para cuerpo y mente"
                            className="w-full h-52 object-cover object-top"
                            loading="lazy"
                          />
                        </CardContent>
                      </Card>
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <img 
                            src="/Galeria/vidaactiva2.jpg" 
                            alt="Programa vida activa para adultos"
                            className="w-full h-52 object-cover"
                            loading="lazy"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Why Wellness Section */}
          <Card className="bg-gradient-to-r from-green-100 to-blue-100">
            <CardContent className="p-8 text-center">
              <h3 className="text-3xl font-bold text-green-800 mb-6">
                ¿Por qué el Bienestar es Importante?
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl mb-3">🧠</div>
                  <h4 className="font-semibold text-green-800 mb-2">SALUD MENTAL</h4>
                  <p className="text-gray-700">Reducción del estrés y mejora del estado de ánimo</p>
                </div>
                <div>
                  <div className="text-4xl mb-3">💪</div>
                  <h4 className="font-semibold text-green-800 mb-2">SALUD FÍSICA</h4>
                  <p className="text-gray-700">Fortalecimiento del cuerpo y prevención de enfermedades</p>
                </div>
                <div>
                  <div className="text-4xl mb-3">🤝</div>
                  <h4 className="font-semibold text-green-800 mb-2">INTEGRACIÓN SOCIAL</h4>
                  <p className="text-gray-700">Fortalecimiento de vínculos y trabajo en equipo</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-green-100 text-center">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                ¿Quieres implementar estas actividades en tu empresa?
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Contáctanos para diseñar un programa de bienestar personalizado
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:medescuentosas@gmail.com"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Enviar Correo
                </a>
                <a 
                  href="https://wa.me/573002870540"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium"
                >
                  WhatsApp
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Bienestar;
