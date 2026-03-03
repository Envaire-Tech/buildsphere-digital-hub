import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { 
    label: "Properties", 
    href: "/properties",
    hasMegaMenu: true 
  },
  { label: "Dashboard", href: "/dashboard/admin" },
  { label: "Contact", href: "/contact" },
];

const featuredProperties = [
  { id: 1, title: "The Glass House", price: "$4.5M", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 2, title: "Modern Villa", price: "$3.2M", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 3, title: "Urban Penthouse", price: "$6.8M", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
];

const MegaMenu = () => (
  <motion.div
    initial={{ opacity: 0, y: 15, scale: 0.98 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 10, scale: 0.98 }}
    transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-card/70 backdrop-blur-2xl border border-white/5 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden"
  >
    <div className="p-8 grid grid-cols-3 gap-6">
      {featuredProperties.map((prop) => (
        <Link key={prop.id} to={`/property/${prop.id}`} className="group block">
          <div className="relative h-40 rounded-xl overflow-hidden mb-4">
            <img src={prop.img} alt={prop.title} className="w-full h-full object-cover transition-transform duration-700 ease-cinematic group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
          </div>
          <h4 className="font-heading font-semibold text-lg text-foreground mb-1">{prop.title}</h4>
          <p className="text-primary text-sm font-medium">{prop.price}</p>
        </Link>
      ))}
    </div>
    <div className="bg-white/5 p-4 text-center border-t border-white/5 hover:bg-white/10 transition-colors">
      <Link to="/properties" className="text-sm font-medium text-foreground tracking-wide uppercase flex items-center justify-center gap-2">
        View all exclusive properties <span>&rarr;</span>
      </Link>
    </div>
  </motion.div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-card/40 backdrop-blur-2xl shadow-xl border-b border-white/5 py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="section-padding flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src="/suite-logo.png" alt="BuildSphere Logo" className="h-8 md:h-10 w-auto transition-transform duration-500 hover:scale-105" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <div 
              key={item.label}
              className="relative py-8"
              onMouseEnter={() => setHoveredItem(item.label)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link
                to={item.href}
                className={`text-sm tracking-wide uppercase font-medium relative group flex items-center gap-1.5 transition-colors ${
                  location.pathname === item.href ? "text-primary" : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {item.label}
                {item.hasMegaMenu && <ChevronDown size={14} className={`transition-transform duration-300 ${hoveredItem === item.label ? "rotate-180" : ""}`} />}
                
                {/* Animated Underline */}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-500 ease-cinematic ${
                  location.pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
              
              <AnimatePresence>
                {item.hasMegaMenu && hoveredItem === item.label && (
                  <MegaMenu />
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" className="border-white/10 hover:bg-white/5 rounded-full px-6 transition-transform hover:scale-105" asChild>
            <Link to="/contact">List Your Property</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="md:hidden overflow-hidden bg-card/90 backdrop-blur-xl border-b border-white/5"
          >
            <div className="section-padding py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-lg font-heading font-medium tracking-wide ${
                    location.pathname === item.href ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="mt-4 rounded-full" size="lg" asChild>
                <Link to="/contact">List Your Property</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
