import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Target, Eye, Heart, Users } from "lucide-react";

const values = [
  { icon: Target, title: "Trusted Expertise", text: "Over a decade of experience helping families and investors find the perfect property." },
  { icon: Eye, title: "Total Transparency", text: "Honest pricing, verified listings, and clear communication at every step." },
  { icon: Heart, title: "Client-First Approach", text: "Your dream home is our mission. We go the extra mile to make it happen." },
  { icon: Users, title: "Local Knowledge", text: "Deep understanding of neighborhoods, market trends, and community amenities." },
];

const About = () => (
  <>
    <Navbar />
    <main>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="section-padding">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-xs font-body font-semibold tracking-widest uppercase text-primary mb-3 block">About BuildSphere</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              Helping You Find Home, Not Just a House
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              BuildSphere is a premium real estate platform dedicated to connecting buyers, renters, and investors with exceptional properties in prime locations. We believe everyone deserves a place they can truly call home.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is to make the property journey simple, transparent, and rewarding — from first search to moving day.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="section-padding">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl border border-border bg-background"
              >
                <div className="w-12 h-12 rounded-xl gradient-emerald flex items-center justify-center shrink-0">
                  <v.icon size={22} className="text-primary-foreground" />
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
