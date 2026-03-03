import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const footerLinks = {
  Properties: [
    { label: "Houses for Sale", href: "/properties?category=Houses+for+Sale" },
    { label: "Apartments for Rent", href: "/properties?category=Apartments+for+Rent" },
    { label: "Luxury Homes", href: "/properties?category=Luxury+Homes" },
    { label: "Commercial", href: "/properties?category=Commercial+Buildings" },
    { label: "New Developments", href: "/properties?category=New+Developments" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "All Properties", href: "/properties" },
    { label: "Contact", href: "/contact" },
  ],
  Support: [
    { label: "FAQ", href: "/contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const Footer = () => (
  <footer className="gradient-charcoal text-foreground">
    <div className="section-padding py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <Link to="/" className="inline-block mb-6">
            <img src="/suite-logo.png" alt="BuildSphere Logo" className="h-10 md:h-12 w-auto transition-transform duration-500 hover:scale-105" />
          </Link>
          <p className="text-foreground/60 text-sm leading-relaxed max-w-xs font-light tracking-wide">
            Premium real estate platform helping you find the perfect home to buy or rent in prime locations.
          </p>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-heading font-bold text-xs uppercase tracking-[0.2em] mb-6 text-foreground/80">
              {title}
            </h4>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-foreground/50 hover:text-primary transition-colors hover:translate-x-1 inline-block duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-foreground/40 tracking-wider">
          © {new Date().getFullYear()} BuildSphere. All rights reserved.
        </p>
        <div className="flex gap-8 text-xs text-foreground/40 tracking-wider">
          <Link to="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link to="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
