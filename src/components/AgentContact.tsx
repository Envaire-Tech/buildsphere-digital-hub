import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, CalendarDays } from "lucide-react";
import { toast } from "sonner";
import type { Property } from "@/data/properties";

const AgentContact = ({ property }: { property: Property }) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error("Please fill in your name and email.");
      return;
    }
    toast.success("Inquiry sent! Our agent will contact you shortly.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sticky top-24">
      {/* Agent info */}
      <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
        <img
          src={property.agent.photo}
          alt={property.agent.name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <div className="font-heading font-semibold text-foreground">{property.agent.name}</div>
          <div className="text-xs text-muted-foreground">Licensed Agent</div>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <a href={`tel:${property.agent.phone}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <Phone size={16} className="text-primary" />
          {property.agent.phone}
        </a>
        <a href={`mailto:${property.agent.email}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <Mail size={16} className="text-primary" />
          {property.agent.email}
        </a>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <Input
          type="email"
          placeholder="Email address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <Input
          placeholder="Phone (optional)"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <Textarea
          placeholder="I'm interested in this property..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={3}
        />
        <Button variant="emerald" size="lg" type="submit" className="w-full">
          Send Inquiry
        </Button>
        <Button variant="outline-emerald" size="lg" type="button" className="w-full">
          <CalendarDays size={16} />
          Schedule Viewing
        </Button>
      </form>
    </div>
  );
};

export default AgentContact;
