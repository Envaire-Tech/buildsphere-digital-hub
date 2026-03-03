import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Target, Eye, Lightbulb, Users } from "lucide-react";

const values = [
  { icon: Target, title: "Precision Engineering", text: "Every system is architected with structural discipline — mirroring the precision demanded by the built environment." },
  { icon: Eye, title: "Operational Transparency", text: "Real-time visibility across every project phase, from foundation to handover, powered by live data synchronization." },
  { icon: Lightbulb, title: "Innovation-Led Design", text: "We challenge convention through forward-thinking digital architecture that evolves with industry demands." },
  { icon: Users, title: "Partnership Model", text: "Long-term strategic alliances with developers, builders, and property enterprises — not transactional vendor relationships." },
];

const About = () => (
  <>
    <Navbar />
    <main>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 blueprint-grid">
        <div className="section-padding">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-xs font-heading font-medium tracking-widest uppercase text-accent mb-3 block">About BuildSphere Suite</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              Bridging Construction Sites & Digital Intelligence
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              BuildSphere Suite was designed to bridge the operational gap between construction sites and digital intelligence systems. We specialize in scalable architecture, real-time synchronization, and performance-focused engineering.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission: to modernize property development through structured digital supervision, automation, and enterprise-level system design.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="section-padding">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-6 rounded-xl border border-border bg-background"
              >
                <div className="w-12 h-12 rounded-lg gradient-steel flex items-center justify-center shrink-0">
                  <v.icon size={22} className="text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
    <Footer />
  </>
);

export default About;
