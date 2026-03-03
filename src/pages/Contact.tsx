import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const faqs = [
  { q: "How do I schedule a property viewing?", a: "Simply click 'Schedule Viewing' on any property page, or contact us directly. Our agents will arrange a convenient time for you." },
  { q: "Are all listings verified?", a: "Yes. Every property on BuildSphere is personally inspected and verified by our team before listing." },
  { q: "Do you offer mortgage assistance?", a: "We partner with trusted lenders to help you explore financing options. Use our mortgage calculator on any property page for estimates." },
  { q: "Can I list my property on BuildSphere?", a: "Absolutely! Contact us through this form or call our team to get started with listing your property." },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
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
    toast.success("Thank you! We'll be in touch shortly.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="section-padding">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="text-xs font-body font-semibold tracking-widest uppercase text-primary mb-3 block">Get in Touch</span>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">Let's Find Your Perfect Home</h1>
                <p className="text-muted-foreground mb-10">Have questions about a property or want to list yours? We'd love to hear from you.</p>

                <div className="space-y-6">
                  {[
                    { icon: Mail, label: "hello@buildsphere.io" },
                    { icon: Phone, label: "+1 (800) 555-0199" },
                    { icon: MapPin, label: "New York · Miami · Austin" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <item.icon size={18} className="text-primary" />
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
                className="rounded-2xl border border-border bg-card p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-medium text-foreground mb-1.5 block">Full Name</label>
                    <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                    {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-medium text-foreground mb-1.5 block">Email</label>
                    <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground mb-1.5 block">Phone (optional)</label>
                  <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+1 (555) 000-0000" />
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground mb-1.5 block">Message</label>
                  <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us what you're looking for..." rows={4} />
                  {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                </div>
                <Button variant="emerald" size="lg" type="submit" className="w-full">
                  Send Message <Send size={16} />
                </Button>
              </motion.form>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card">
          <div className="section-padding max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-border rounded-xl overflow-hidden bg-background">
                  <button
                    className="w-full text-left p-5 flex items-center justify-between"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-heading font-medium text-foreground text-sm">{faq.q}</span>
                    <span className="text-muted-foreground text-lg ml-4">{openFaq === i ? "−" : "+"}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</div>
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
