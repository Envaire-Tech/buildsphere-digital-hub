import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    image: project1,
    tag: "Construction Monitoring",
    title: "Multi-Tower Residential Development Monitoring Platform",
    challenge: "A 12-tower residential complex required centralized construction oversight with real-time progress tracking across 2,400 units.",
    solution: "Deployed a 2D blueprint supervision system with floor-by-floor progress indicators, phase tracking, and supervisor annotation capabilities.",
    impact: ["87% reduction in reporting time", "Real-time visibility across all 12 towers", "Zero critical milestone delays"],
  },
  {
    image: project2,
    tag: "Reservation Automation",
    title: "Commercial Property Reservation Automation System",
    challenge: "A commercial property group needed to automate their manual reservation process spanning 450+ units across multiple locations.",
    solution: "Built an end-to-end booking platform with interactive unit maps, automated slot locking, payment confirmation, and sales analytics dashboards.",
    impact: ["98% occupancy rate achieved", "60% faster reservation processing", "Automated payment reconciliation"],
  },
  {
    image: project3,
    tag: "Enterprise SaaS",
    title: "Integrated Developer SaaS Platform",
    challenge: "A major developer required a unified platform to manage 15 concurrent projects with portfolio-level analytics and ROI tracking.",
    solution: "Engineered a cloud-native SaaS platform with multi-project oversight, leasing metrics, automated reporting, and role-based access control.",
    impact: ["3x ROI within 12 months", "15 projects managed from single dashboard", "40% operational cost reduction"],
  },
];

const Projects = () => (
  <>
    <Navbar />
    <main>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 blueprint-grid">
        <div className="section-padding max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-xs font-heading font-medium tracking-widest uppercase text-accent mb-3 block">Case Studies</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">Projects & Impact</h1>
            <p className="text-lg text-muted-foreground">Challenge → Digital Architecture → Measurable Impact</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="section-padding space-y-16">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-10 items-center"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="rounded-xl overflow-hidden border border-border shadow-lg">
                  <img src={p.image} alt={p.title} className="w-full aspect-[4/3] object-cover" loading="lazy" />
                </div>
              </div>
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-heading font-medium bg-accent/10 text-accent">{p.tag}</span>
                <h3 className="text-2xl font-heading font-bold text-foreground mt-4 mb-4">{p.title}</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground mb-1">Challenge</h4>
                    <p className="text-sm text-foreground/80">{p.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground mb-1">Digital Architecture</h4>
                    <p className="text-sm text-foreground/80">{p.solution}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-heading font-semibold uppercase tracking-wider text-accent">Measurable Impact</h4>
                  {p.impact.map((im) => (
                    <div key={im} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {im}
                    </div>
                  ))}
                </div>
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

export default Projects;
