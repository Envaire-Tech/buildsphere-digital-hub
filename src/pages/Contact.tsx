import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().min(1, "Company is required").max(100),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const faqs = [
  { q: "How do you handle data security and compliance?", a: "All systems are built with enterprise-grade security — encrypted data at rest and in transit, role-based access control, audit logging, and compliance with industry standards." },
  { q: "Can your systems scale with our growth?", a: "Absolutely. Our cloud-native architecture is designed for horizontal scaling. We've supported projects from 50 to 50,000+ units without performance degradation." },
  { q: "Do you integrate with existing systems?", a: "Yes. We design API-first architectures that integrate with ERPs, CRMs, accounting software, and existing property management tools." },
  { q: "What is the typical implementation timeline?", a: "Discovery takes 2-3 weeks. MVP deployment is typically 8-12 weeks. Full enterprise rollout averages 4-6 months depending on scope." },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", company: "", projectType: "", budget: "", timeline: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast.success("Thank you. We'll be in touch within 24 hours.");
    setForm({ name: "", company: "", projectType: "", budget: "", timeline: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 blueprint-grid">
          <div className="section-padding">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="text-xs font-heading font-medium tracking-widest uppercase text-accent mb-3 block">Get in Touch</span>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">Let's Build Something Exceptional</h1>
                <p className="text-muted-foreground mb-10">Tell us about your project. Our team will respond within 24 business hours with a tailored strategy overview.</p>

                <div className="space-y-6">
                  {[
                    { icon: Mail, label: "contact@buildsphere.io" },
                    { icon: Phone, label: "+1 (800) 555-0199" },
                    { icon: MapPin, label: "New York · Dubai · Singapore" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <item.icon size={18} className="text-accent" />
                      </div>
                      {item.label}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                onSubmit={handleSubmit}
                className="rounded-xl border border-border bg-card p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-heading font-medium text-foreground mb-1.5 block">Full Name</label>
                    <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                    {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-heading font-medium text-foreground mb-1.5 block">Company</label>
                    <Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company name" />
                    {errors.company && <p className="text-xs text-destructive mt-1">{errors.company}</p>}
                  </div>
                </div>
                <div>
                  <label className="text-xs font-heading font-medium text-foreground mb-1.5 block">Project Type</label>
                  <Select value={form.projectType} onValueChange={(v) => setForm({ ...form, projectType: v })}>
                    <SelectTrigger><SelectValue placeholder="Select project type" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="supervision">2D Building Supervision</SelectItem>
                      <SelectItem value="construction">Construction Monitoring</SelectItem>
                      <SelectItem value="booking">Property Booking System</SelectItem>
                      <SelectItem value="saas">Enterprise SaaS Platform</SelectItem>
                      <SelectItem value="analytics">Analytics Dashboard</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.projectType && <p className="text-xs text-destructive mt-1">{errors.projectType}</p>}
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-heading font-medium text-foreground mb-1.5 block">Estimated Budget</label>
                    <Select value={form.budget} onValueChange={(v) => setForm({ ...form, budget: v })}>
                      <SelectTrigger><SelectValue placeholder="Select range" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="50k-100k">$50K – $100K</SelectItem>
                        <SelectItem value="100k-250k">$100K – $250K</SelectItem>
                        <SelectItem value="250k-500k">$250K – $500K</SelectItem>
                        <SelectItem value="500k+">$500K+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-xs font-heading font-medium text-foreground mb-1.5 block">Timeline</label>
                    <Select value={form.timeline} onValueChange={(v) => setForm({ ...form, timeline: v })}>
                      <SelectTrigger><SelectValue placeholder="Select timeline" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-3">1 – 3 months</SelectItem>
                        <SelectItem value="3-6">3 – 6 months</SelectItem>
                        <SelectItem value="6-12">6 – 12 months</SelectItem>
                        <SelectItem value="12+">12+ months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-heading font-medium text-foreground mb-1.5 block">Project Details</label>
                  <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Describe your project requirements..." rows={4} />
                  {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                </div>
                <Button variant="hero" size="lg" type="submit" className="w-full">
                  Submit Inquiry <Send size={16} />
                </Button>
              </motion.form>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-card">
          <div className="section-padding max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-border rounded-lg overflow-hidden bg-background">
                  <button
                    className="w-full text-left p-5 flex items-center justify-between"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-heading font-medium text-foreground text-sm">{faq.q}</span>
                    <span className="text-muted-foreground text-lg ml-4">{openFaq === i ? "−" : "+"}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
