import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="relative overflow-hidden h-[70vh] min-h-[600px] flex items-center justify-center">
    <div className="absolute inset-0">
      <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Immersive architecture" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </div>

    <div className="section-padding relative z-10 text-center w-full max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      >
        <span className="text-sm font-heading tracking-[0.3em] uppercase text-primary mb-6 flex items-center justify-center gap-4 font-semibold">
          <span className="w-8 h-[1px] bg-primary"></span>
          Elevate Your Lifestyle
          <span className="w-8 h-[1px] bg-primary"></span>
        </span>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-10 leading-[1.1] tracking-tighter">
          Ready to Find Your <br/><span className="font-light italic text-foreground/80">Dream Space?</span>
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
          <Button size="lg" className="h-14 px-8 rounded-full text-base tracking-widest uppercase font-medium group transition-all" asChild>
            <Link to="/contact">
              Schedule a Viewing
              <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="h-14 px-8 rounded-full text-base tracking-widest uppercase font-medium border-white/10 hover:bg-white/5 transition-all"
          >
            <Link to="/properties">Explore Portfolio</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
