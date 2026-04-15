import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Edit, Monitor, Send } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Main heading */}
        <div className="text-center mb-12">
          <div className="inline-block bg-accent text-white px-8 py-4 rounded-full mb-8">
            <h2 className="text-2xl font-bold">NUESTRAS CIFRAS</h2>
          </div>
          
          {/* Stats Ovals */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-[#43d9cb] text-white px-6 py-4 rounded-full text-center">
              <span className="font-bold text-lg">12 AÑOS DE EXPERIENCIA</span>
            </div>
            <div className="bg-[#43d9cb] text-white px-6 py-4 rounded-full text-center">
              <span className="font-bold text-lg">MÁS DE 6000 AFILIADOS</span>
            </div>
            <div className="bg-[#43d9cb] text-white px-6 py-4 rounded-full text-center">
              <span className="font-bold text-lg">MÁS DE 2000 CONVENIOS ESTRATEGICOS</span>
            </div>
            <div className="bg-[#43d9cb] text-white px-6 py-4 rounded-full text-center">
              <span className="font-bold text-lg">10 CIUDADES CON COBERTURA</span>
            </div>
            <div className="bg-[#43d9cb] text-white px-6 py-4 rounded-full text-center">
              <span className="font-bold text-lg">MÁS DE 300 MASCOTAS AFILIADAS</span>
            </div>
            <div className="bg-[#43d9cb] text-white px-6 py-4 rounded-full text-center">
              <span className="font-bold text-lg">2 EMPRESAS EXEQUIALES (OLIVOS Y RENACER)</span>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="mb-6">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Edit className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Servicios de Impacto</h3>
              <p className="text-muted-foreground leading-relaxed">
                Trabajamos con amor brindando servicios y beneficios que contribuyen a 
                la armonía, equilibrio del ser humano y a nuestra promesa de valor 
                (aportando a un mundo saludable).
              </p>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="mb-6">
              <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Monitor className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Servicios</h3>
              <p className="text-muted-foreground leading-relaxed">
                Te brindamos atención personalizada para el agendamiento de citas, 
                procedimientos y servicios de salud en general.
              </p>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Send className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Contacto</h3>
              <p className="text-muted-foreground leading-relaxed">
                Contáctanos y encuentra con nosotros en descuentos especiales en todo lo 
                relacionado con salud y bienestar para tu empresa y tu familia.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;