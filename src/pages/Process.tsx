import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Search, PenTool, Code, Cloud, Activity } from "lucide-react";

const steps = [
  { icon: Search, phase: "01", title: "Discovery & Project Audit", description: "Deep-dive analysis of existing workflows, operational bottlenecks, and digital transformation objectives. Stakeholder interviews and requirements engineering." },
  { icon: PenTool, phase: "02", title: "Digital Blueprint & System Architecture", description: "Structured system design with data models, API architecture, user flow mapping, and integration planning. Blueprint-level precision in every component." },
  { icon: Code, phase: "03", title: "Agile Development & Testing", description: "Iterative development with continuous integration, automated testing, and staged deployments. Regular stakeholder demos and feedback loops." },
  { icon: Cloud, phase: "04", title: "Cloud Deployment & Optimization", description: "Production deployment with load testing, performance optimization, security hardening, and monitoring configuration. Zero-downtime launch protocols." },
  { icon: Activity, phase: "05", title: "Ongoing Monitoring & Scaling", description: "Continuous performance monitoring, proactive scaling, feature evolution, and dedicated technical support. Long-term partnership commitment." },
];

const Process = () => (
  <>
    <Navbar />
    <main>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 blueprint-grid">
        <div className="section-padding max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-xs font-heading font-medium tracking-widest uppercase text-accent mb-3 block">Our Process</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">Enterprise Delivery Framework</h1>
            <p className="text-lg text-muted-foreground">A structured, phase-driven methodology that ensures predictable outcomes and measurable results at every stage.</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="section-padding max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-12">
              {steps.map((step, i) => (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 md:gap-8"
                >
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg gradient-navy flex items-center justify-center">
                      <step.icon size={22} className="text-primary-foreground" />
                    </div>
                  </div>
                  <div className="pb-8">
                    <span className="text-xs font-heading font-semibold text-accent tracking-wider">PHASE {step.phase}</span>
                    <h3 className="text-xl font-heading font-bold text-foreground mt-1 mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
    <Footer />
  </>
);

export default Process;
