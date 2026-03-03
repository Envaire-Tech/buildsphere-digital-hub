import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="relative overflow-hidden">
    <div className="gradient-navy py-20 md:py-28 relative">
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="section-padding relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6 max-w-3xl mx-auto leading-tight">
            Ready to Digitize Your Development?
          </h2>
          <p className="text-primary-foreground/60 max-w-xl mx-auto mb-10 text-lg">
            Partner with BuildSphere Suite to transform your property operations
            into a structured, automated, enterprise-grade digital ecosystem.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="steel" size="xl" asChild>
              <Link to="/contact">
                Schedule a Strategic Consultation
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="xl"
              asChild
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link to="/projects">View Case Studies</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CTASection;
