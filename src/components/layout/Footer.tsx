import { Link } from "react-router-dom";
import { Bike, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Experience", path: "/experience" },
  { name: "Gallery", path: "/gallery" },
  { name: "Dates & Booking", path: "/booking" },
  { name: "Contact", path: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Bike className="h-8 w-8 text-amber-400" />
              <span className="font-heading text-xl font-semibold">
                Cycle Logic
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
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
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
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
              <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                <MapPin className="h-4 w-4 text-amber-400 flex-shrink-0" />
                <span>Medellín, Colombia</span>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70 text-sm">
                <Phone className="h-4 w-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+12503744515" className="hover:text-amber-400 transition-colors block">
                    250-374-4515
                  </a>
                  <span className="text-xs">Mon-Fri 9AM-6PM MT</span>
                </div>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
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
            <ul className="space-y-2 text-sm text-primary-foreground/70">
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
        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Cycle Logic Colombia Tours. All rights reserved.
            </p>
            
            {/* Social Links - Optional */}
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/50 hover:text-amber-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/50 hover:text-amber-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-primary-foreground/40">
              Operated by Cycle Logic • Canadian-based company • Est. 2018
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
