import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, GraduationCap, Activity, Building } from "lucide-react";

const Servicios = () => {
  const services = [
    {
      icon: Shield,
      title: "PLAN EXEQUIAL",
      description: "MEDescuento presta el servicio exequial con dos empresas como son: LOS OLIVOS Y JARDINES DE RENACER, para ocho (8) integrantes, un (1) titular y siete (7) beneficiarios en su PLAN ESTANDAR",
      features: ["Cobertuna nacional y traslado nacional", "Recogida y preparación del cuerpo", "Cofre y sala de velación (24) horas con cafeteria", "Misa (Si es catolico), carrosa funebre, bus (Transporte acompañantes)", "Inhumación o cremación", "Ramo de flores y cintas", "Tramites legales" , "SERVICIOS ADICIONALES", "Repatriación y expatriación exequial de mascotas", "Post-final (Auxilio económico para osario y cenizario) con RENACER", "Acompañamiento musical", "Salas VIP con OLIVOS" ]
    },
    {
      icon: Heart,
      title: "PLAN COMPLEMENTARIO DE SALUD", 
      description: "MEDescuento SAS, somos una empresa QUINDIANA que llega con su PLAN COMPLEMENTARIO DE SALUD, a mitigar el impacto que se genera en las personas, por el déficit de la prestación del servicio del sector de salud Colombiano. Ofreciendo la venta de una membrecía por (1) un año, para (8) integrantes: (1) TITULAR y (7) BENEFICIARIOS más, incluido su MASCOTA donde obtendrán los siguientes beneficios:",
      features: [
    "Descuentos hasta un (70%) en citas con profesionales ESPECIALISTAS de todas las áreas, en el departamento del QUINDÍO y PEREIRA, con alianzas estratégicas en los departamentos de ANTIOQUIA, VALLE DEL CAUCA, MONTERIA, BARRANQUILLA, CAUCASIA, QUIBDO, ISTMINA, POPAYAN Y PASTO.",
    "Descuentos en atención VIP EN LABORATORIOS Y A DOMICILIO, igualmente EXÁMENES ESPECIALIZADOS. (Resonancias, ecografías y radiografías)",
    "MÉDICO GENERAL en consultorio, empresarial, a domicilio y virtual.",
    "SALUD MENTAL (Psicólogo, psiquiatra, coaching y terapeutas)",
    "Descuento en OPTOMETRÍA para usted y sus beneficiarios",
    "Descuento del (10%) en LENTES y hasta el (50%) en MONTURAS",
    "Valoración sin costo con ODONTOLOGÍA, descuento hasta (30%) en tratamientos.",
    "Descuento con ODONTOLOGÍA PEDIATRICA O PARA PERSONAS NERVIOSAS",
    "CURACIONES, INYECTOLOGIA, TERAPIAS FISICAS Y RESPIRATORIAS a domicilio.",
    "SPA, CENTRO DE ESTETICA, MASAJES RELAJANTES Y TERAPEUTICOS.",
    "MEDICINA ALTERNATIVA (medicina cuántica, carta astral y terapéuticas, otras).",
    "CONSULTA VETERINARIA, en consultorio, a domicilio, virtual y ESTETICA.",
    "Campañas empresariales de PROMOCIÓN Y PREVENCIÓN EN SALUD, BIENESTAR, JURÍDICA, COACHING Y CONSULTAS ADMINISTRATIVAS.",
    "Campañas saludables (paquetes especiales en ginecología y odontología).",
    "Asesoría jurídica para procesos y demandas EN SALUD Y PENSIÓN U OTRAS.",
    "CAPACITACIÓN EMPRESARIAL y de CRECIMIENTO PERSONAL con énfasis en COACHING (ENFOCADAS (70%) PRÁCTICO y (30%) TEORICO).",
    "PAUSAS ACTIVAS (FISICAS Y MENTALES).",
    "Proceso de selección de personal con examen de ingreso y laboratorio.",
    "Programa PROYECTO DE VIDA para JOVENES con Problemas de drogadicción, alcoholismo, suicidio, déficit de atención entre otro (Diseño de firma).",
    "Programa ADULTOS VIDA ACTIVA, yoga, terapias, salud holística y mente activa.",
    "Descuento especial en paquetes de YOGA, AROMATERAPIA, RUMBATERAPIA (hora loca) y recreacionistas.",
    "Organización y logística para eventos EMPRESARIALES Y FAMILIARES."
  ]
    },
    {
      icon: GraduationCap,
      title: "CAPACITACIÓN CON ENFASIS EN COACHING",
      description: "Por normatividad y por requisitos para la implementación del sistema de seguridad en las empresas, es necesario dictar charlas, capacitaciones o talleres enfocados al crecimiento personal y al empoderamiento requerido para el cumplimiento de metas y proyectos empresariales. Nuestras capacitaciones son innovadoras y exclusivas de acuerdo a la necesidad de la empresa o el mercado, diferenciándose de las tradicionales por su ambientación, dinamismo como son presentadas, motivando a los participantes con premios durante toda la charla por su participación. LA CAPACITACION INCLUYE:",
      features: ["El (70%) es práctico y el (30%) teórico", "Son dictadas con énfasis en coaching", "Se realiza una introducción de la empresa que contrata", "Personalizadas de acuerdo a la proyección o necesidad de la empresa", "Papelería (Formatos didácticos)", "Duración (45) minutos mínimo, de acuerdo a la necesidad de la empresa."]
    },
    {
      icon: Activity,
      title: "PAUSAS ACTIVAS (FISICAS Y MENTALES)",
      description: "PAUSAS ACTIVAS FISICAS: Se realizan atraves de actividades físicas, didácticas y deportivas, motivando ese niño que hay en mí. PAUSAS ACTIVAS MENTALES: Se realizan atraves de canciones, imágenes y formatos escritos, que exigen un nivel de concentración y del manejo del estrés por parte del empleado, logrando una sonrisa y un estado de alegría en su día laboral",
      features: ["Innovadoras y estratégicas", "Diseñadas de acuerdo a la actividad económica de la empresa, área de trabajo o profesión", "Duración de (10 a 15) minutos o de acuerdo a la necesidad de la empresa", "Dictadas con énfasis en coaching."]
    },
    {
      icon: Building,
      title: "CONSULTORIAS EMPRESARIALES",
      description: "Teniendo en cuenta el mundo tan competitivo en el que nos encontramos, donde las empresas deben de innovar para poder posicionarse en el mercado, queremos proporcionarle consultorías que le permitan lograr el cumplimiento de objetivos y metas, para ellos queremos brindarles:",
      features: ["Descuento hasta el (40%) en la consultoria", "Valoración gratuita", "Descuento hasta un (40%) en diagnóstico, recomendaciones y plan de trabajo a seguir", "Descuento hasta un (40%) en implementación de estrategias de mejora o avance"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800">NUESTROS SERVICIOS</h1>
            <p className="text-xl text-black-600 max-w-3xl mx-auto">
              Soluciones integrales en salud y bienestar para las personas y empresas
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8">
            {services.map((service, index) => (
              <div key={index}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-[#43d9cb]">
                    <CardTitle className="flex items-center gap-3 text-2xl font-bold text-green-800">
                      <service.icon className={`w-8 h-8 ${
                        index === 0 ? 'text-purple-600' : 
                        index === 1 ? 'text-red-600' : 
                        index === 2 ? 'text-yellow-500' : 
                        index === 3 ? 'text-red-500' : 
                        index === 4 ? 'text-orange-500' : ''
                      }`} />
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-lg leading-relaxed mb-6 font-bold text-black-700">
                      {service.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span className="font-bold text-black-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Images for specific services */}
                {index === 0 && (
                  <div className="mt-8 mb-4 flex justify-center">
                    <div className="grid md:grid-cols-2 gap-4 max-w-4xl w-full">
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <img 
                            src="/medescuento-renewed-web/Galeria/olivos3.png" 
                            alt="Los Olivos"
                            className="w-full h-48 object-contain bg-white"
                            loading="lazy"
                          />
                        </CardContent>
                      </Card>
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <img 
                            src="/medescuento-renewed-web/Galeria/renacer.jpg" 
                            alt="Jardines de Renacer"
                            className="w-full h-48 object-cover"
                            loading="lazy"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )}
                
                {/* Medical Guide Image after Plan Complementario de Salud */}
                {index === 1 && (
                  <div className="mt-8 mb-4 flex justify-center">
                    <div className="max-w-3xl w-full">
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <img 
                            src="/medescuento-renewed-web/Galeria/guiamedica.jpg" 
                            alt="Guía Médica - Contamos con más de 2.000 prestadores de servicios de salud"
                            className="w-full h-auto object-cover"
                            loading="lazy"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )}

                {/* Images for other services */}
                {index === 2 && (
                  <div className="mt-8 mb-4 flex justify-center">
                    <div className="grid md:grid-cols-2 gap-4 max-w-4xl w-full">
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <img 
                          src="/medescuento-renewed-web/Galeria/capacitacion2.jpg" 
                          alt="Capacitación con énfasis en Coaching"
                          className="w-full h-48 object-cover"
                          loading="lazy"
                          />
                        </CardContent>
                      </Card>
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <img 
                          src="/medescuento-renewed-web/Galeria/capacitacion.jpg" 
                          alt="Capacitación empresarial"
                          className="w-full h-48 object-cover"
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
                          src="/medescuento-renewed-web/Galeria/pausa2.jpg" 
                          alt="Pausas Activas Físicas y Mentales"
                          className="w-full h-48 object-cover"
                          loading="lazy"
                          />
                        </CardContent>
                      </Card>
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <img 
                          src="/medescuento-renewed-web/Galeria/pausa1.jpg" 
                          alt="Pausas activas en empresa"
                          className="w-full h-48 object-cover"
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
                            src="/medescuento-renewed-web/Galeria/consultoria.jpg" 
                            alt="Consultorías Empresariales"
                            className="w-full h-48 object-cover"
                            loading="lazy"
                            />
                          </CardContent>
                        </Card>
                        <Card className="overflow-hidden">
                          <CardContent className="p-0">
                            <img 
                            src="/medescuento-renewed-web/Galeria/consultoria2.jpg" 
                            alt="Consultoría empresarial"
                            className="w-full h-48 object-cover"
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

          {/* Call to Action */}
          <Card className="bg-green-100 text-center">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                ¿Interesado en nuestros servicios?
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Contáctanos para obtener más información y descubrir cómo podemos ayudarte
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

export default Servicios;