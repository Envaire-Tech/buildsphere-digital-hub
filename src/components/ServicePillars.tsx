import { motion } from "framer-motion";
import { Monitor, Construction, CalendarCheck, Code2, BarChart3 } from "lucide-react";

const pillars = [
  {
    icon: Monitor,
    title: "2D Building Supervision Systems",
    description: "Blueprint-driven monitoring with structured oversight, floor-by-floor progress indicators, and real-time status tracking.",
  },
  {
    icon: Construction,
    title: "Construction Monitoring & Automation",
    description: "Live operational control with resource allocation charts, timeline forecasting, and automated task management.",
  },
  {
    icon: CalendarCheck,
    title: "Property Booking & Reservation",
    description: "Scalable booking engines with interactive unit availability maps, automated slot locking, and sales tracking.",
  },
  {
    icon: Code2,
    title: "Enterprise Real Estate SaaS",
    description: "Custom infrastructure for developers and property managers with full-stack digital platform development.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Operational Intelligence",
    description: "Portfolio performance visualization, occupancy metrics, ROI dashboards, and multi-project overview panels.",
  },
];

const ServicePillars = () => (
  <section className="py-20 md:py-28 bg-card relative">
    <div className="absolute inset-0 blueprint-grid opacity-50" />
    <div className="section-padding relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-xs font-heading font-medium tracking-widest uppercase text-accent mb-3 block">
          Core Service Pillars
        </span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          End-to-End Digital Infrastructure
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          From blueprint supervision to enterprise analytics — a unified technology ecosystem
          engineered for the modern real estate lifecycle.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group p-6 md:p-8 rounded-xl border border-border bg-background hover-lift cursor-default"
          >
            <div className="w-12 h-12 rounded-lg gradient-steel flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <pillar.icon size={24} className="text-accent-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
              {pillar.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicePillars;
