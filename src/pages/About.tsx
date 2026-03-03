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

      <section className="py-20 bg-background">
        <div className="section-padding">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4 text-center">Meet Our Leadership</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            The visionary minds behind BuildSphere, bringing together decades of real estate, technology, and design expertise.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Eleanor Vance", role: "Chief Executive Officer", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" },
              { name: "Marcus Thorne", role: "Head of Acquisitions", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" },
              { name: "Sarah Jenkins", role: "Chief Operating Officer", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600" }
            ].map((leader, i) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group select-none"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-4 border border-border shadow-lg">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <p className="text-white text-sm font-medium tracking-wide">Connect on LinkedIn →</p>
                  </div>
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground text-center">{leader.name}</h3>
                <p className="text-sm font-medium text-primary text-center tracking-wide uppercase mt-1">{leader.role}</p>
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
