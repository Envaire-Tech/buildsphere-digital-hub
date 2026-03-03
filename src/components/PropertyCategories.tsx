import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, Building2, Crown, Landmark, Sparkles } from "lucide-react";

const categories = [
  { icon: Home, label: "Houses for Sale", count: "45+", query: "Houses for Sale" },
  { icon: Building2, label: "Apartments for Rent", count: "80+", query: "Apartments for Rent" },
  { icon: Landmark, label: "Commercial Buildings", count: "30+", query: "Commercial Buildings" },
  { icon: Crown, label: "Luxury Homes", count: "25+", query: "Luxury Homes" },
  { icon: Sparkles, label: "New Developments", count: "15+", query: "New Developments" },
];

const PropertyCategories = () => (
  <section className="py-16 border-y border-border bg-muted/30">
    <div className="section-padding">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
      >
        {categories.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <Link
              to={`/properties?category=${encodeURIComponent(c.query)}`}
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <c.icon size={20} className="text-primary" />
              </div>
              <div>
                <div className="text-sm font-medium text-foreground">{c.label}</div>
                <div className="text-xs text-muted-foreground">{c.count} listings</div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default PropertyCategories;
