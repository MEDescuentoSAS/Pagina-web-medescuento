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

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-full mb-8">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <span className="text-lg font-bold">HEALTHY TOURISM</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Experience Health & Paradise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Welcome to Colombia's premier destination for health tourism. Combine world-class healthcare 
            with unforgettable experiences in one of South America's most beautiful countries.
          </p>
        </div>

        {/* Why Choose Us Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {benefit.value}
              </div>
              <p className="text-sm md:text-base text-gray-600 font-semibold">
                {benefit.label}
              </p>
            </Card>
          ))}
        </div>

        {/* Tourism Packages */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Our Packages</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tourismPackages.map((pkg, index) => {
              const IconComponent = pkg.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-xl transition-all hover:scale-105">
                  <div className="mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">{pkg.title}</h4>
                    <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-center gap-2">
                        <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
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
