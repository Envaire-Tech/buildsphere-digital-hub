import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, ChevronRight, ChevronLeft, X } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    title: "The Glass House",
    subtitle: "Beverly Hills, CA",
    price: "$4,500,000"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    title: "Modern Minimalist",
    subtitle: "Austin, TX",
    price: "$2,850,000"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    title: "Architectural Masterpiece",
    subtitle: "Miami, FL",
    price: "$8,200,000"
  }
];

const Hero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [location, setLocation] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      if (!searchExpanded) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 6000);
    return () => clearInterval(timer);
  }, [searchExpanded]);

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((p) => (p - 1 + slides.length) % slides.length);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (location) navigate(`/properties?city=${location}`);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <motion.img
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 15, ease: "easeOut" }}
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-background/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/30 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col justify-end pb-24 pt-40 px-6 md:px-12 lg:px-20 mx-auto max-w-[1800px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* Main Title Area */}
          <div className="lg:col-span-8">
            <motion.div
              key={`title-${currentSlide}`}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
            >
              <h2 className="text-primary font-medium tracking-[0.2em] uppercase mb-6 text-sm md:text-base flex items-center gap-4">
                <span className="w-12 h-[1px] bg-primary"></span>
                {slides[currentSlide].subtitle}
              </h2>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-foreground leading-[1.05] tracking-tighter mb-8">
                {slides[currentSlide].title.split(' ').map((word, i) => (
                  <span key={i} className={i % 2 !== 0 ? "font-light text-foreground/70 italic" : ""}>
                    {word}{" "}
                  </span>
                ))}
              </h1>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12">
                <span className="text-3xl md:text-4xl font-light text-foreground tracking-tight border-b border-primary/30 pb-2">
                  {slides[currentSlide].price}
                </span>
                <button 
                  onClick={() => navigate('/properties')} 
                  className="group flex items-center gap-3 text-sm font-medium tracking-widest uppercase text-foreground/80 hover:text-primary transition-colors mt-4 sm:mt-0"
                >
                  Explore Property 
                  <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <ChevronRight size={16} />
                  </span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Floating Search Controls */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
            <motion.div 
              className={`glass-card overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${searchExpanded ? 'w-full rounded-2xl p-8' : 'w-16 h-16 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/10'}`}
              onClick={() => !searchExpanded && setSearchExpanded(true)}
              layout
            >
              {!searchExpanded ? (
                <Search size={24} className="text-foreground" />
              ) : (
                <motion.form 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                  onSubmit={handleSearch} className="flex flex-col gap-6"
                >
                  <div className="flex justify-between items-center mb-2 text-foreground/80 border-b border-white/10 pb-4">
                    <h3 className="font-heading tracking-wide uppercase text-sm font-semibold">Find your space</h3>
                    <button type="button" onClick={(e) => { e.stopPropagation(); setSearchExpanded(false); }} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                      <X size={18} />
                    </button>
                  </div>
                  <div className="relative">
                    <MapPin size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" />
                    <input
                      autoFocus
                      type="text"
                      placeholder="City, neighborhood or address..."
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full bg-background/40 hover:bg-background/60 border border-white/5 rounded-xl py-4 pl-12 pr-4 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary/50 focus:bg-background/80 transition-all"
                    />
                  </div>
                  <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium tracking-wide uppercase text-sm py-4 rounded-xl transition-colors">
                    Search Archive
                  </button>
                </motion.form>
              )}
            </motion.div>

            {/* Slide Navigation */}
            <div className="flex items-center gap-6 mt-16 w-full lg:justify-end">
              <button onClick={prevSlide} className="p-4 rounded-full border border-white/10 hover:bg-white/5 text-foreground/70 hover:text-foreground transition-all backdrop-blur-md">
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-3">
                {slides.map((_, idx) => (
                  <div key={idx} className={`h-[2px] transition-all duration-700 ease-out bg-white ${idx === currentSlide ? 'w-12 opacity-100' : 'w-4 opacity-30'}`} />
                ))}
              </div>
              <button onClick={nextSlide} className="p-4 rounded-full border border-white/10 hover:bg-white/5 text-foreground/70 hover:text-foreground transition-all backdrop-blur-md">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
