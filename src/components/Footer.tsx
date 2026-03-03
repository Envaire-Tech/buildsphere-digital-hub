import { Link } from "react-router-dom";

const footerLinks = {
  Solutions: [
    { label: "Building Supervision", href: "/solutions" },
    { label: "Construction Tracking", href: "/solutions" },
    { label: "Property Booking", href: "/solutions" },
    { label: "Enterprise SaaS", href: "/solutions" },
    { label: "Analytics Suite", href: "/solutions" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Process", href: "/process" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Case Studies", href: "/projects" },
    { label: "FAQ", href: "/contact" },
    { label: "Documentation", href: "#" },
  ],
};

const Footer = () => (
  <footer className="gradient-navy text-primary-foreground">
    <div className="section-padding py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-md bg-accent flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-foreground">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
              </svg>
            </div>
            <span className="font-heading font-bold text-lg">BuildSphere Suite</span>
          </div>
          <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
            Engineering intelligent digital infrastructure for modern real estate operations.
          </p>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/80">
              {title}
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
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
        <p className="text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} BuildSphere Suite. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-primary-foreground/40">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Security</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
