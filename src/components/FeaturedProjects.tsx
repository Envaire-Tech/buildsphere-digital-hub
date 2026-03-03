import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    image: project1,
    tag: "Construction Monitoring",
    title: "Multi-Tower Residential Development Platform",
    metrics: ["12 Towers", "2,400 Units", "Real-Time Tracking"],
    description: "End-to-end construction oversight dashboard with blueprint integration and phase-level tracking for a major urban development.",
  },
  {
    image: project2,
    tag: "Property Management",
    title: "Commercial Property Reservation Automation",
    metrics: ["98% Occupancy", "450+ Units", "Automated Workflows"],
    description: "Enterprise booking and reservation system with automated slot locking, payment integration, and sales analytics.",
  },
  {
    image: project3,
    tag: "Enterprise SaaS",
    title: "Integrated Developer SaaS Platform",
    metrics: ["15 Projects", "3x ROI", "Cloud-Native"],
    description: "Full-stack property management platform with portfolio analytics, leasing metrics, and multi-project oversight.",
  },
];

const FeaturedProjects = () => (
  <section className="py-20 md:py-28">
    <div className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4"
      >
        <div>
          <span className="text-xs font-heading font-medium tracking-widest uppercase text-accent mb-3 block">
            Featured Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Measurable Impact at Scale
          </h2>
        </div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
        >
          View All Projects <ArrowRight size={16} />
        </Link>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group rounded-xl overflow-hidden border border-border bg-card hover-lift"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-heading font-medium bg-card/90 backdrop-blur-sm text-foreground">
                  {project.tag}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.metrics.map((m) => (
                  <span
                    key={m}
                    className="px-3 py-1 rounded-md text-xs font-medium bg-blueprint-faint text-accent border border-accent/10"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProjects;
