import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { properties } from "@/data/properties";
import PropertyCard from "./PropertyCard";

const FeaturedListings = () => {
  const featured = properties.filter((p) => p.featured).slice(0, 6);

  return (
    <section className="py-20 md:py-28">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div>
            <span className="text-xs font-body font-semibold tracking-widest uppercase text-primary mb-2 block">
              Featured Listings
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Handpicked Properties
            </h2>
          </div>
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            View All Properties <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((property, i) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
