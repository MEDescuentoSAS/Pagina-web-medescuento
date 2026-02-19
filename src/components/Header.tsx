import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Mail, Clock, Phone, Menu, X } from "lucide-react";
import medescuentoLogo from "@/assets/logomedescuento.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "INICIO", href: "/" },
    { label: "EMPRESA", href: "/empresa" },
    { label: "SERVICIOS", href: "/servicios" },
    { label: "BIENESTAR", href: "/bienestar" },
    { label: "TURISMO SALUDABLE", href: "/turismo-saludable" },
    { label: "CONTÁCTANOS", href: "/contactanos" },
  ];

  return (
    <header className="bg-green-100">
      {/* Top section with logo, contact info, and social icons */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={medescuentoLogo} 
              alt="MEDescuento Logo" 
              className="h-20 w-auto"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm">
            {/* Email */}
            <div className="flex items-center space-x-2">
              <Mail className="w-6 h-6 text-blue-600 bg-white p-1 rounded" />
              <div>
                <p className="text-blue-900 font-medium ">Correo electrónico</p>
                <p className="text-blue-900 font-medium">medescuentosas@gmail.com</p>
              </div>
            </div>
            
            {/* Hours */}
            <div className="flex items-center space-x-2">
              <Clock className="w-6 h-6 text-blue-600 bg-white p-1 rounded" />
              <div>
                <p className="text-blue-900 font-medium">Horario de atención</p>
                <p className="text-blue-900 font-medium">Lunes a Viernes</p>
                <p className="text-blue-900 font-medium">8:00 AM - 11:30 AM</p>
                <p className="text-blue-900 font-medium">DE 2:00 PM - 4:15 PM</p>
              </div>
            </div>
            
            {/* Phone */}
            <div className="flex items-center space-x-2">
              <Phone className="w-6 h-6 text-blue-600 bg-white p-1 rounded" />
              <div>
                <p className="text-blue-900 font-medium">Contáctanos</p>
                <p className="text-blue-900 font-medium">+57 322 5426408</p>
                <p className="text-blue-900 font-medium">+57 300 2870540</p>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex space-x-2">
              <a 
                href="https://www.facebook.com/medescuentoSas?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1877F2] text-white p-2 rounded hover:opacity-80 transition-opacity"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/medescuentosas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white p-2 rounded hover:opacity-80 transition-opacity"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`bg-[#43d9cb] ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
        <div className="container mx-auto px-4">
          <ul className="flex flex-col md:flex-row md:justify-center md:space-x-12 py-3">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  className="block py-2 px-4 text-black-800 font-medium hover:bg-green-300 rounded transition-colors text-sm"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;