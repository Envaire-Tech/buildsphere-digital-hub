import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { properties } from "@/data/properties";
import PropertyCard from "./PropertyCard";

const FeaturedListings = () => {
  const featured = properties.filter((p) => p.featured).slice(0, 5);

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-xl">
            <span className="text-sm font-heading tracking-[0.2em] uppercase text-primary mb-4 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-primary"></span>
              Curated Spaces
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-[1.1]">
              Architectural <span className="font-light italic text-foreground/70">Masterpieces</span>
            </h2>
          </div>
          <Link
            to="/properties"
            className="group inline-flex items-center gap-3 text-sm font-medium tracking-widest uppercase text-foreground hover:text-primary transition-colors"
          >
            Explore Portfolio
            <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
              <ArrowRight size={16} />
            </span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-min">
          {featured.map((property, i) => {
            let colSpan = "md:col-span-4";
            let imgClass = "aspect-[4/3]";
            
            if (i === 0) {
              colSpan = "md:col-span-8";
              imgClass = "aspect-video md:aspect-auto md:h-[600px]"; // Large horizontal left
            } else if (i === 1) {
              colSpan = "md:col-span-4";
              imgClass = "aspect-square md:aspect-auto md:h-[600px] h-[400px]"; // Tall vertical right
            } else if (i === 2) {
              colSpan = "md:col-span-4";
              imgClass = "aspect-[4/5] object-cover h-full"; // Vertical left
            } else if (i === 3) {
              colSpan = "md:col-span-8";
              imgClass = "aspect-video md:aspect-[2/1] h-full object-cover"; // Wide right
            } else {
              colSpan = "md:col-span-12";
              imgClass = "aspect-video md:aspect-[21/9] h-full object-cover"; // Full width bottom
            }

            return (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: i * 0.15, ease: [0.25, 1, 0.5, 1] }}
                className={colSpan}
              >
                <PropertyCard property={property} className="h-full flex flex-col" imageClassName={`${imgClass} rounded-t-xl`} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
