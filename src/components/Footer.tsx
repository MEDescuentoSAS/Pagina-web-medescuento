import React from "react";
import medescuentoLogo from "@/assets/logomedescuento.png";

const Footer = () => {
  const socialLinks = [
    { 
      name: "Facebook", 
      href: "https://www.facebook.com/medescuentoSas?locale=es_LA", 
      bgColor: "bg-[#1877F2]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      name: "Instagram", 
      href: "https://www.instagram.com/medescuentosas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", 
      bgColor: "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
  ];

  return (
    <footer className="bg-[#43d9cb] text-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img 
              src={medescuentoLogo} 
              alt="MEDescuento Logo" 
              className="h-20 w-auto mb-4"
            />
            <p className="font-bold text-black-900 opacity-80 mb-6 max-w-md">
              Un mundo de privilegios a su alcance. Brindamos servicios de salud 
              con descuentos especiales para tu empresa y familia.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.bgColor} text-white p-2 rounded-lg hover:opacity-80 transition-opacity`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ENLACES RÁPIDOS</h3>
            <ul className="space-y-2 font-bold text-black-900 opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">INICIO</a></li>
              <li><a href="Empresa" className="hover:opacity-100 transition-opacity">EMPRESA</a></li>
              <li><a href="Servicios" className="hover:opacity-100 transition-opacity">SERVICIOS</a></li>
              <li><a href="Bienestar" className="hover:opacity-100 transition-opacity">BIENESTAR</a></li>
              <li><a href="Contactanos" className="hover:opacity-100 transition-opacity">CONTÁCTANOS</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-black-900 font-semibold mb-4">CONTACTO</h3>
            <div className="font-bold text-black-900 opacity-80 space-y-2">
              <p>Email: medescuentosas@gmail.com</p>
              <p>Teléfono: +57 3225426408</p>
              <p>Horario: Lun - Vie 8:00 AM - 4:15 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-60">
          <p>&copy; 2025 MEDescuento. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;