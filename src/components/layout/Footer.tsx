import { useNavigate } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const navItems = [
  { name: "home", path: "/" },
  { name: "experience", path: "/experience" },
  { name: "gallery", path: "/gallery" },
  { name: "dates & booking", path: "/booking" },
  { name: "contact", path: "/contact" },
];

export function Footer() {
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    navigate(path);
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 0);
  };

  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo & Tagline */}
          <div>
            <img 
              src="/logo.png" 
              alt="PedalTheWorld" 
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-slate-600 lowercase mb-3">
              colombia's ultimate cycling experience
            </p>
            <p className="text-xs text-slate-500 lowercase italic">
              founded by cycle logic
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-extrabold text-[#606C38] mb-4 lowercase">
              quick links
            </h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavClick(item.path)}
                    className="text-sm text-slate-600 hover:text-[#DC4712] transition-colors lowercase"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-extrabold text-[#606C38] mb-4 lowercase">
              get in touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#EE712B] flex-shrink-0 mt-0.5" />
                <div>
                  <a 
                    href="mailto:pedaltheworld@gmail.com" 
                    className="text-sm text-slate-600 hover:text-[#DC4712] transition-colors lowercase"
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
                  <p className="text-xs text-slate-500 lowercase">canada pst</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#EE712B] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-slate-600 lowercase">
                    medellín, colombia
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500 lowercase">
              © {new Date().getFullYear()} pedaltheworld. all rights reserved.
            </p>
            <p className="text-xs text-slate-400 lowercase italic">
              founded by cycle logic
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
