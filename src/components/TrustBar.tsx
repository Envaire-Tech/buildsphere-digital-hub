import { motion } from "framer-motion";
import { CheckCircle2, Cloud, Zap, Lock, Globe, Cpu } from "lucide-react";

const items = [
  { icon: Cloud, label: "Cloud-Based Deployments" },
  { icon: Zap, label: "Real-Time Data Broadcasting" },
  { icon: Cpu, label: "Automation Engines" },
  { icon: Lock, label: "Secure Scalable Architecture" },
  { icon: Globe, label: "High-Availability Infrastructure" },
  { icon: CheckCircle2, label: "Enterprise-Grade Compliance" },
];

const TrustBar = () => (
  <section className="py-16 border-y border-border bg-muted/50">
    <div className="section-padding">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-x-10 gap-y-4"
      >
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-muted-foreground">
            <item.icon size={16} className="text-accent" />
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TrustBar;
