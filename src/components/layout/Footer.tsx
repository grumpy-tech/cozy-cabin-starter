import { useNavigate } from "react-router-dom";
import { Bike, Mail, Phone, MapPin } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Experience", path: "/experience" },
  { name: "Gallery", path: "/gallery" },
  { name: "Dates & Booking", path: "/booking" },
  { name: "Contact", path: "/contact" },
];

export function Footer() {
  const navigate = useNavigate();

  // Scroll to top when clicking footer links
  const handleNavClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <button 
              onClick={() => handleNavClick("/")}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Bike className="h-8 w-8 text-amber-400" />
              <span className="font-heading text-xl font-semibold">
                Cycle Logic
              </span>
            </button>
            <p className="text-white/70 text-sm leading-relaxed">
              Experience Colombia through the eyes of cyclists who call it home. 
              Eleven days of exceptional riding, deep cultural immersion, and 
              genuine connections.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-amber-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.path)}
                    className="text-white/70 hover:text-amber-400 transition-colors text-sm block text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-amber-400">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <MapPin className="h-4 w-4 text-amber-400 flex-shrink-0" />
                <span>Medellín, Colombia</span>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <Phone className="h-4 w-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+12503744515" className="hover:text-amber-400 transition-colors block">
                    250-374-4515
                  </a>
                  <span className="text-xs">Mon-Fri 9AM-6PM MT</span>
                </div>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Mail className="h-4 w-4 text-amber-400 flex-shrink-0" />
                <a href="mailto:pedaltheworld@gmail.com" className="hover:text-amber-400 transition-colors">
                  pedaltheworld@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Tour Info */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-amber-400">
              Tour Details
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>• 11-day guided tours</li>
              <li>• Road & gravel cycling</li>
              <li>• Coffee region & Andes</li>
              <li>• Max 12 riders per tour</li>
              <li>• January-February 2025</li>
              <li>• $5,600 CAD per person</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Cycle Logic Colombia Tours. All rights reserved.
            </p>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-white/40">
              Founded and operated by Cycle Logic • Canadian-based company • Est. 2018
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}