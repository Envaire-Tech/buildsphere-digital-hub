import { motion } from "framer-motion";
import { ShieldCheck, Eye, BadgeDollarSign, UserCheck, ScanEye } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Verified Listings", text: "Every property is personally inspected and verified by our team before listing." },
  { icon: BadgeDollarSign, title: "Transparent Pricing", text: "No hidden fees. What you see is what you pay — honest and upfront." },
  { icon: Eye, title: "Secure Transactions", text: "End-to-end encrypted transactions with escrow protection for your peace of mind." },
  { icon: UserCheck, title: "Professional Agents", text: "Licensed, experienced agents dedicated to finding your perfect property." },
  { icon: ScanEye, title: "Virtual Inspection", text: "Explore floor plans and property details from anywhere, anytime." },
];

const WhyChooseUs = () => (
  <section className="py-20 md:py-28 bg-card">
    <div className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-xs font-body font-semibold tracking-widest uppercase text-primary mb-2 block">
          Why Choose Us
        </span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Your Trusted Real Estate Partner
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          We make buying, selling, and renting properties simple, secure, and rewarding.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="text-center p-6 rounded-2xl border border-border bg-background hover-lift"
          >
            <div className="w-14 h-14 rounded-xl gradient-emerald flex items-center justify-center mx-auto mb-4">
              <r.icon size={24} className="text-primary-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">{r.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{r.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
