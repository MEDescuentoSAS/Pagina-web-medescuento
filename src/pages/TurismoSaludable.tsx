import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HealthyTourismSection from "@/components/HealthyTourismSection";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, MapPin, Heart, Stethoscope, DollarSign } from "lucide-react";

const tourismServices = [
  {
    icon: Heart,
    title: "Wellness Retreats",
    description: "Immersive health and wellness experiences in Colombia's most beautiful destinations.",
    features: ["Spa & Relaxation", "Yoga & Meditation", "Healthy Cuisine", "Natural Therapies"]
  },
  {
    icon: Stethoscope,
    title: "Medical Tourism",
    description: "Premium healthcare services with leading specialists at competitive international prices.",
    features: ["Consultations", "Procedures", "Follow-up Care", "International Standards"]
  },
  {
    icon: MapPin,
    title: "Adventure & Health",
    description: "Active tourism combining outdoor adventures with health and wellness monitoring.",
    features: ["Hiking", "Water Sports", "Health Coaching", "Eco-tourism"]
  },
  {
    icon: DollarSign,
    title: "Affordable Excellence",
    description: "High-quality health services at 40-60% lower costs than North America and Europe.",
    features: ["Cost Savings", "Premium Care", "Luxury Hotels", "VIP Treatment"]
  }
];

const cuadrosInfo = [
  {
    title: "¿Qué es el turismo saludable?",
    description: "El turismo saludable combina el bienestar físico, mental y emocional con experiencias turísticas únicas en Colombia."
  },
  {
    title: "Beneficios para ti",
    description: "Acceso a servicios médicos de calidad, recuperación en entornos naturales y la oportunidad de conocer nuevas culturas."
  },
  {
    title: "Acompañamiento integral",
    description: "Te guiamos en cada paso, desde la planeación hasta el regreso a casa, con atención personalizada."
  },
  {
    title: "Experiencias únicas",
    description: "Disfruta de actividades de relajación, aventura y salud en los destinos más hermosos del país."
  }
];


const TurismoSaludable = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HealthyTourismSection />
      </main>
      <Footer />
    </div>
  );
};

export default TurismoSaludable;

// ...existing code...
  
