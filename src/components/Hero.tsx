import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-property.jpg";

const Hero = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"buy" | "rent">("buy");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (mode === "rent") params.set("status", "For Rent");
    else params.set("status", "For Sale");
    if (location) params.set("city", location);
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Luxury modern home" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/20" />
      </div>

      <div className="section-padding w-full pt-32 pb-20 md:pt-40 md:pb-28 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] text-primary-foreground mb-5">
            Find Your{" "}
            <span className="text-gradient-gold">Perfect Home</span>
          </h1>
          <p className="text-lg text-primary-foreground/70 leading-relaxed max-w-xl mb-10">
            Discover premium homes for sale and buildings for rent in prime locations.
          </p>

          {/* Search bar */}
          <div className="bg-card/95 backdrop-blur-md rounded-2xl p-4 md:p-5 shadow-2xl border border-border/50">
            {/* Buy / Rent toggle */}
            <div className="flex gap-2 mb-4">
              {(["buy", "rent"] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    mode === m
                      ? "gradient-emerald text-primary-foreground shadow-sm"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {m === "buy" ? "Buy" : "Rent"}
                </button>
              ))}
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 relative">
                <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="City, neighborhood, or address..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full h-12 pl-10 pr-4 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <Button variant="emerald" size="lg" onClick={handleSearch} className="h-12 px-8">
                <Search size={18} />
                Search Properties
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-10 flex gap-10">
            {[
              { value: "200+", label: "Properties" },
              { value: "50+", label: "Locations" },
              { value: "1,000+", label: "Happy Clients" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-heading font-bold text-primary-foreground">{s.value}</div>
                <div className="text-xs text-primary-foreground/50 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
