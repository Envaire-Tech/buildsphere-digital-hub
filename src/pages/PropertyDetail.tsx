import { useParams, Link } from "react-router-dom";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloorPlan from "@/components/FloorPlan";
import AgentContact from "@/components/AgentContact";
import { properties } from "@/data/properties";
import { Bed, Bath, Maximize, MapPin, ArrowLeft, ChevronLeft, ChevronRight, X, Check, Eye } from "lucide-react";

const PropertyDetail = () => {
  const { slug } = useParams();
  const property = properties.find((p) => p.slug === slug);
  const [activeImage, setActiveImage] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  if (!property) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center text-center section-padding">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4 tracking-tighter">Property Not Found</h1>
          <Link to="/properties" className="text-primary hover:text-primary/80 font-medium tracking-widest uppercase text-sm flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Directory
          </Link>
        </main>
      </div>
    );
  }

  const prevImage = () => setActiveImage((i) => (i === 0 ? property.images.length - 1 : i - 1));
  const nextImage = () => setActiveImage((i) => (i === property.images.length - 1 ? 0 : i + 1));

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      
      {/* 1. Cinematic Gallery Section */}
      <div ref={heroRef} className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-center justify-center">
        <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
          <AnimatePresence initial={false} mode="wait">
            <motion.img
              key={activeImage}
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              src={property.images[activeImage]}
              alt={property.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />
        </motion.div>

        {/* Gallery Controls */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-6 md:px-12 z-20 pointer-events-none">
          <button onClick={prevImage} className="pointer-events-auto w-14 h-14 rounded-full bg-background/20 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:scale-110 transition-all">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextImage} className="pointer-events-auto w-14 h-14 rounded-full bg-background/20 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:scale-110 transition-all">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Hero Content Overlays */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end section-padding pb-32 md:pb-40">
          <Link to="/properties" className="absolute top-32 left-6 md:left-12 lg:left-20 inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors bg-black/20 px-5 py-3 rounded-full backdrop-blur-md border border-white/10 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Directory
          </Link>
          
          <div className="max-w-4xl flex flex-col items-start">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.1em] uppercase bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                  {property.status}
                </span>
                <span className="text-sm tracking-[0.2em] uppercase font-bold text-white/80">{property.type}</span>
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-white mb-6 leading-[1.05] tracking-tighter drop-shadow-xl">{property.title}</h1>
              <div className="flex items-center gap-3 text-white/80 text-xl font-medium tracking-wide">
                <MapPin size={20} className="text-primary" />
                <span>{property.address}, {property.city}</span>
              </div>
            </motion.div>
            
            <motion.button 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
              onClick={() => setFullscreen(true)}
              className="mt-8 flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full text-white transition-all hover:scale-105"
            >
              <Eye size={16} /> Enter the Gallery
            </motion.button>
          </div>
        </div>
      </div>

      <main className="relative z-20 bg-background -mt-16 rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.5)] border-t border-white/5 pt-20. pb-0">
        <div className="section-padding">
          {/* 2. Large Numeric Stats Presentation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-32 border-b border-white/5 pb-20">
            {[
              { label: "Valuation", value: property.priceLabel, icon: null },
              { label: "Footprint", value: `${property.size.toLocaleString()} sq ft`, icon: <Maximize size={24} /> },
              { label: "Bedrooms", value: property.bedrooms, icon: <Bed size={24} /> },
              { label: "Bathrooms", value: property.bathrooms, icon: <Bath size={24} /> }
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="flex flex-col items-start gap-4"
              >
                {stat.icon && <div className="text-primary/50">{stat.icon}</div>}
                <div>
                  <div className={`font-heading font-bold text-foreground mb-2 tracking-tighter ${stat.value === property.priceLabel ? 'text-4xl md:text-5xl text-primary' : 'text-3xl md:text-4xl'}`}>
                    {stat.value}
                  </div>
                  <div className="text-[10px] md:text-xs tracking-[0.2em] font-bold text-foreground/50 uppercase">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-[1fr_420px] gap-16 lg:gap-24 mb-32">
            <div>
              {/* Introduction */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="mb-24"
              >
                <h2 className="text-sm tracking-[0.2em] uppercase font-bold text-primary mb-8 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-primary"></span>
                  The Vision
                </h2>
                <p className="text-2xl md:text-4xl text-foreground font-light leading-snug tracking-wide text-foreground/90">
                  "{property.description}"
                </p>
              </motion.div>

              {/* 3. Spatial Flow Section ("Walk Through the Space" scroll journey) */}
              <div className="mb-32">
                <h2 className="text-sm tracking-[0.2em] uppercase font-bold text-primary mb-12 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-primary"></span>
                  Spatial Flow
                </h2>
                
                <div className="space-y-16">
                  {[...property.images].slice(1, 4).map((img, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                      className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] md:aspect-[21/9] group shadow-2xl"
                    >
                      <img src={img} alt="Property Space" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/50 to-transparent flex items-end p-10 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-white font-heading text-3xl font-bold tracking-wide">Perspective 0{i + 1}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* 4. Interactive Blueprint */}
              <div className="mb-32">
                 <FloorPlan property={property} />
              </div>

              {/* Specifications & Amenities */}
              <div className="grid md:grid-cols-2 gap-16 mb-20">
                <div>
                  <h2 className="text-sm tracking-[0.2em] uppercase font-bold text-primary mb-8 flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-primary"></span>
                    Specifications
                  </h2>
                  <div className="space-y-6">
                    {[
                      { label: "Property Type", value: property.type },
                      { label: "Year Built", value: property.yearBuilt },
                      { label: "Parking Capacity", value: property.parking },
                    ].map((d) => (
                      <div key={d.label} className="flex justify-between items-end border-b border-white/5 pb-4">
                        <span className="text-sm text-foreground/60">{d.label}</span>
                        <span className="text-base font-medium text-foreground">{d.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-sm tracking-[0.2em] uppercase font-bold text-primary mb-8 flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-primary"></span>
                    Amenities
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {property.amenities.map((a) => (
                      <span key={a} className="px-5 py-3 rounded-2xl border border-white/5 bg-background font-bold tracking-wide text-xs text-foreground flex items-center gap-2 hover:bg-white/5 transition-colors shadow-lg shadow-black/20">
                        <Check size={14} className="text-primary" />
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar (Sticky) */}
            <div className="relative">
              <div className="sticky top-32">
                <AgentContact property={property} />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Fullscreen modal */}
      <AnimatePresence>
        {fullscreen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-3xl flex items-center justify-center p-4 md:p-12" 
            onClick={() => setFullscreen(false)}
          >
            <button className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/10 bg-black/40 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all z-50">
              <X size={24} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 bg-black/40 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all z-50">
              <ChevronLeft size={32} />
            </button>
            <motion.img
              key={activeImage}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              src={property.images[activeImage]}
              alt=""
              className="w-full h-full object-contain drop-shadow-2xl rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 bg-black/40 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all z-50">
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default PropertyDetail;
