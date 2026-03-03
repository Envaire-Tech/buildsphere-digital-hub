import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Monitor, Construction, CalendarCheck, Code2, BarChart3, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: Monitor,
    title: "2D Building Supervision Suite",
    description: "Blueprint-driven monitoring with structured oversight systems. Interactive blueprint overlays, floor-by-floor progress indicators, phase tracking, supervisor annotation systems, and real-time status badges.",
    features: ["Interactive Blueprint Overlays", "Floor-by-Floor Progress", "Phase Tracking", "Supervisor Annotations", "Structural Milestone Tracking"],
  },
  {
    icon: Construction,
    title: "Construction Tracking & Automation Suite",
    description: "Live operational control with performance metrics. Project completion tracking, resource allocation, budget analytics, timeline forecasting, and task automation.",
    features: ["Project Completion %", "Resource Allocation Charts", "Budget vs Expenditure", "Timeline Forecasting", "Task Automation"],
  },
  {
    icon: CalendarCheck,
    title: "Property Booking & Reservation Suite",
    description: "Scalable booking engines with automated workflows. Interactive unit availability maps, reservation workflows, automated slot locking, and payment confirmation.",
    features: ["Unit Availability Maps", "Reservation Workflows", "Automated Slot Locking", "Payment Integration", "Sales Tracking"],
  },
  {
    icon: Code2,
    title: "Real Estate Enterprise SaaS",
    description: "Custom infrastructure for developers and property managers. Full-stack platform development with multi-tenant architecture, role-based access, and API integrations.",
    features: ["Multi-Tenant Architecture", "Role-Based Access", "API Integrations", "Custom Workflows", "White-Label Ready"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Portfolio Intelligence Suite",
    description: "Real-time business intelligence for multi-project environments. Portfolio performance, occupancy metrics, ROI dashboards, and multi-project overview panels.",
    features: ["Portfolio Performance", "Occupancy Metrics", "ROI Dashboards", "Multi-Project Overview", "Predictive Analytics"],
  },
];

const Solutions = () => (
  <>
    <Navbar />
    <main>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 blueprint-grid">
        <div className="section-padding max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-xs font-heading font-medium tracking-widest uppercase text-accent mb-3 block">Solutions</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">Enterprise Solutions Suite</h1>
            <p className="text-lg text-muted-foreground">Comprehensive digital infrastructure solutions engineered for every stage of the real estate lifecycle.</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="section-padding space-y-8">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="grid md:grid-cols-[1fr_1.2fr] gap-8 p-8 rounded-xl border border-border bg-card"
            >
              <div>
                <div className="w-12 h-12 rounded-lg gradient-steel flex items-center justify-center mb-4">
                  <sol.icon size={24} className="text-accent-foreground" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">{sol.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{sol.description}</p>
                <Button variant="outline-navy" size="default" asChild>
                  <Link to="/contact">Learn More <ArrowRight size={16} /></Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {sol.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
    <Footer />
  </>
);

export default Solutions;
