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
  <footer className="gradient-charcoal text-primary-foreground">
    <div className="section-padding py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
              <Home size={18} className="text-primary-foreground" />
            </div>
            <span className="font-heading font-bold text-xl">BuildSphere</span>
          </div>
          <p className="text-primary-foreground/50 text-sm leading-relaxed max-w-xs">
            Premium real estate platform helping you find the perfect home to buy or rent in prime locations.
          </p>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/70">
              {title}
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/40 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-primary-foreground/30">
          © {new Date().getFullYear()} BuildSphere. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-primary-foreground/30">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
