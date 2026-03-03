import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import PropertyCard from "@/components/PropertyCard";
import { properties, propertyCategories } from "@/data/properties";
import { Search, MapPin } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const Properties = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "All Properties";
  const initialStatus = searchParams.get("status") || "";

  const [category, setCategory] = useState(initialCategory);
  const [search, setSearch] = useState(searchParams.get("city") || "");
  const [priceRange, setPriceRange] = useState([0, 10000000]);
  const [bedsMin, setBedsMin] = useState(0);
  const [mapView, setMapView] = useState(true);

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (category !== "All Properties" && p.category !== category) return false;
      if (initialStatus && p.status !== initialStatus) return false;
      if (search && !p.city.toLowerCase().includes(search.toLowerCase()) && !p.address.toLowerCase().includes(search.toLowerCase()) && !p.title.toLowerCase().includes(search.toLowerCase())) return false;
      if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
      if (p.bedrooms < bedsMin) return false;
      return true;
    });
  }, [category, search, priceRange, bedsMin, initialStatus]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Dynamic Fake Map Background */}
      <div className={`fixed inset-0 z-0 transition-all duration-1000 ease-cinematic ${mapView ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'}`}>
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Map" 
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity grayscale"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
        
        {/* Fake Map Pins */}
        {mapView && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {filtered.map((p, i) => (
              <motion.div
                key={`pin-${p.id}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "backOut" }}
                className="absolute flex flex-col items-center"
                style={{ 
                   top: `${20 + (Math.random() * 60)}%`, 
                   left: `${30 + (Math.random() * 60)}%` 
                }}
              >
                <div className="bg-primary text-primary-foreground font-bold text-xs py-1 px-3 rounded-full shadow-lg shadow-primary/20 mb-1">
                  {p.priceLabel}
                </div>
                <div className="w-2 h-2 rounded-full bg-primary/80" />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <main className="flex-1 relative z-10 pt-28 pb-12 px-6 lg:px-12 w-full max-w-[1800px] mx-auto flex flex-col lg:flex-row gap-8 h-screen overflow-hidden">
        
        {/* Floating Filter Panel */}
        <motion.div 
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="w-full lg:w-[380px] flex-shrink-0 flex flex-col h-full z-20"
        >
          <div className="glass-card rounded-[2rem] p-8 h-full flex flex-col overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8 tracking-tighter">Directory.</h2>
            
            <div className="relative mb-8 group">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40 group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="City or neighborhood..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-background/40 hover:bg-background/60 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary/50 transition-all font-medium"
              />
            </div>

            <div className="mb-10">
              <h3 className="text-xs tracking-[0.2em] uppercase font-bold text-foreground/50 mb-4 ml-1">Collections</h3>
              <div className="flex flex-col gap-2">
                {propertyCategories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={`text-left px-5 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-500 ease-cinematic ${
                      category === c
                        ? "bg-foreground text-background shadow-xl scale-100"
                        : "hover:bg-white/5 text-foreground/70 scale-[0.98] hover:scale-100 border border-transparent hover:border-white/5"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-xs tracking-[0.2em] uppercase font-bold text-foreground/50 mb-6 ml-1 flex justify-between items-center">
                <span>Valuation Limit</span>
                <span className="text-primary tracking-normal">${(priceRange[1] / 1000000).toFixed(1)}M</span>
              </h3>
              <Slider
                value={[priceRange[1]]}
                onValueChange={([v]) => setPriceRange([0, v])}
                max={10000000}
                step={250000}
                className="py-2"
              />
            </div>

            <div className="mt-auto pt-8 border-t border-white/5 flex justify-between items-center bg-transparent">
              <span className="text-sm font-medium text-foreground/60">{filtered.length} Discoveries</span>
              <button 
                onClick={() => setMapView(!mapView)}
                className="text-xs font-bold tracking-[0.1em] uppercase bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full text-primary transition-colors"
              >
                {mapView ? "Grid View" : "Map View"}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Scrollable Properties List */}
        <div className="flex-1 h-full overflow-y-auto pb-32 pr-2 lg:pr-6" style={{ scrollbarWidth: 'none' }}>
          <div className={`grid gap-6 ${mapView ? 'grid-cols-1 xl:grid-cols-3 max-w-5xl ml-auto' : 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'}`}>
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.6, delay: i * 0.05, ease: [0.25, 1, 0.5, 1] }}
                >
                  <PropertyCard 
                    property={p} 
                    className="h-full flex flex-col glass-card border-none bg-card/40 hover:bg-card/60" 
                    imageClassName={`${mapView ? 'aspect-video' : 'aspect-[4/3]'} rounded-t-2xl`} 
                  />
                </motion.div>
              ))}
            </AnimatePresence>
            
            {filtered.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="col-span-full h-64 flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-2">
                  <MapPin size={24} className="text-primary/50" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground">No matches found</h3>
                <p className="text-foreground/50 text-sm max-w-xs">We couldn't find any properties matching your exact criteria. Try adjusting the valuation limit or location.</p>
              </motion.div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Properties;
