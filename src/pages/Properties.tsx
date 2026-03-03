import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { properties, propertyCategories } from "@/data/properties";
import { Search, SlidersHorizontal } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const Properties = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "All Properties";
  const initialStatus = searchParams.get("status") || "";

  const [category, setCategory] = useState(initialCategory);
  const [search, setSearch] = useState(searchParams.get("city") || "");
  const [priceRange, setPriceRange] = useState([0, 3000000]);
  const [bedsMin, setBedsMin] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

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
    <>
      <Navbar />
      <main>
        <section className="pt-28 pb-8 md:pt-32 md:pb-10 bg-muted/30">
          <div className="section-padding">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">Properties</h1>
              <p className="text-muted-foreground mb-6">Browse our curated collection of premium properties.</p>

              {/* Search & filter bar */}
              <div className="flex flex-col md:flex-row gap-3 mb-6">
                <div className="flex-1 relative">
                  <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search by city, address, or name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full h-11 pl-10 pr-4 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 h-11 px-5 rounded-xl bg-card border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors"
                >
                  <SlidersHorizontal size={16} />
                  Filters
                </button>
              </div>

              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="p-5 rounded-xl bg-card border border-border mb-6 space-y-4"
                >
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-2 block">
                      Max Price: ${priceRange[1].toLocaleString()}
                    </label>
                    <Slider
                      value={[priceRange[1]]}
                      onValueChange={([v]) => setPriceRange([0, v])}
                      max={3000000}
                      step={50000}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-2 block">
                      Min Bedrooms: {bedsMin}
                    </label>
                    <Slider value={[bedsMin]} onValueChange={([v]) => setBedsMin(v)} max={6} step={1} />
                  </div>
                </motion.div>
              )}

              {/* Category tabs */}
              <div className="flex flex-wrap gap-2">
                {propertyCategories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      category === c
                        ? "gradient-emerald text-primary-foreground shadow-sm"
                        : "bg-card text-muted-foreground border border-border hover:text-foreground"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="section-padding">
            <p className="text-sm text-muted-foreground mb-6">{filtered.length} properties found</p>
            {filtered.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((p, i) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <PropertyCard property={p} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-muted-foreground">
                <p className="text-lg">No properties match your criteria.</p>
                <p className="text-sm mt-2">Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Properties;
