import { useNavigate } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Experience", path: "/experience" },
  { name: "Gallery", path: "/gallery" },
  { name: "Dates & Booking", path: "/booking" },
  { name: "Contact", path: "/contact" },
];

export function Footer() {
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    navigate(path);
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 0);
  };

  return (
    <footer className="bg-white border-t border-slate-200 relative overflow-hidden">
      {/* Mountain illustration as subtle background */}
      <div className="absolute bottom-0 left-0 right-0 h-48 opacity-5">
        <img 
          src="/mountains-illustration.png" 
          alt="" 
          className="w-full h-full object-cover object-bottom"
        />
      </div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo & Tagline */}
          <div>
            <h2 className="font-heading text-2xl font-extrabold text-[#606C38] mb-4 uppercase">
              PedalTheWorld
            </h2>
            <p className="text-sm text-slate-600 mb-3">
              Colombia's ultimate cycling experience
            </p>
            <p className="text-xs text-slate-500 italic">
              Founded by Cycle Logic
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-extrabold text-[#606C38] mb-4 uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavClick(item.path)}
                    className="text-sm text-slate-600 hover:text-[#DC4712] transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-extrabold text-[#606C38] mb-4 uppercase">
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#EE712B] flex-shrink-0 mt-0.5" />
                <div>
                  <a 
                    href="mailto:pedaltheworld@gmail.com" 
                    className="text-sm text-slate-600 hover:text-[#DC4712] transition-colors"
                  >
                    pedaltheworld@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#EE712B] flex-shrink-0 mt-0.5" />
                <div>
                  <a 
                    href="tel:+12503744515" 
                    className="text-sm text-slate-600 hover:text-[#DC4712] transition-colors"
                  >
                    250-374-4515
                  </a>
                  <p className="text-xs text-slate-500">Canada PST</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#EE712B] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-slate-600">
                    Medellín, Colombia
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} PedalTheWorld. All rights reserved.
            </p>
            <p className="text-xs text-slate-400 italic">
              Founded by Cycle Logic
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
