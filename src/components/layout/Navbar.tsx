import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Bike } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Experience", path: "/experience" },
  { name: "Gallery", path: "/gallery" },
  { name: "Dates & Booking", path: "/booking" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <Bike
            className={cn(
              "h-8 w-8 transition-colors duration-300",
              isScrolled ? "text-primary" : "text-white"
            )}
          />
          <span
            className={cn(
              "font-heading text-xl md:text-2xl font-semibold tracking-tight transition-colors duration-300",
              isScrolled ? "text-foreground" : "text-white"
            )}
          >
            Cycle Logic Colombia
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-primary/10",
                  location.pathname === item.path
                    ? isScrolled
                      ? "text-primary bg-primary/10"
                      : "text-amber-300 bg-white/10"
                    : isScrolled
                    ? "text-foreground/80"
                    : "text-white/90"
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Book Now Button - Desktop */}
        <Link to="/booking" className="hidden md:block">
          <Button 
            variant="default" 
            size="lg"
            className={cn(
              "transition-all duration-300",
              !isScrolled && "bg-amber-500 hover:bg-amber-600 text-white"
            )}
          >
            Book Now
          </Button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "md:hidden p-2 rounded-md transition-colors",
            isScrolled ? "text-foreground" : "text-white"
          )}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-md border-t border-border"
          >
            <ul className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.path}
                    className={cn(
                      "block px-4 py-3 rounded-md text-base font-medium transition-colors",
                      location.pathname === item.path
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/80 hover:bg-muted"
                    )}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="pt-2"
              >
                <Link to="/booking">
                  <Button variant="default" size="lg" className="w-full">
                    Book Now
                  </Button>
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
