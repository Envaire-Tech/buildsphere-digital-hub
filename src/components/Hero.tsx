import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, BarChart3, Shield } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Blueprint grid background */}
    <div className="absolute inset-0 blueprint-grid" />
    <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]">
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <line x1="0" y1="0" x2="400" y2="400" stroke="currentColor" strokeWidth="0.5" />
        <line x1="400" y1="0" x2="0" y2="400" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <rect x="50" y="50" width="300" height="300" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    </div>

    <div className="section-padding w-full pt-24 pb-16 md:pt-32 md:pb-24 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-heading font-medium tracking-wider uppercase mb-6">
            <Shield size={14} />
            Enterprise Real Estate Technology
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] tracking-tight text-foreground mb-6">
            Engineering Intelligent Digital Infrastructure for{" "}
            <span className="text-gradient-steel">Modern Real Estate</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-8">
            Advanced supervision systems, scalable property platforms, and enterprise-grade
            operational intelligence for forward-thinking developers.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Schedule a Strategic Consultation
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button variant="outline-navy" size="xl" asChild>
              <Link to="/solutions">Explore Solutions</Link>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8">
            {[
              { value: "150+", label: "Projects Delivered" },
              { value: "98%", label: "Client Retention" },
              { value: "40M+", label: "Sq Ft Monitored" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-border">
            <img
              src={heroDashboard}
              alt="BuildSphere Suite 2D Building Supervision Dashboard"
              className="w-full h-auto"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
          {/* Floating metric cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -left-4 bottom-8 glass-card rounded-lg p-3 hidden md:flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-md gradient-steel flex items-center justify-center">
              <Building2 size={20} className="text-accent-foreground" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Active Projects</div>
              <div className="font-heading font-bold text-foreground">24 Live</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -right-4 top-8 glass-card rounded-lg p-3 hidden md:flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-md gradient-navy flex items-center justify-center">
              <BarChart3 size={20} className="text-primary-foreground" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Efficiency Gain</div>
              <div className="font-heading font-bold text-foreground">+340%</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
