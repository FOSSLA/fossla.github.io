import { Link } from "react-router-dom";
import { Terminal, Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Terminal className="h-6 w-6 text-primary" />
              <span className="font-mono text-xl font-bold">
                <span className="text-primary">FOSS</span>
                <span className="text-foreground"> LA</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground font-mono">
              Building a thriving FOSS community in Ladakh
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@fossla.org"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-mono font-bold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2 font-mono text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-muted-foreground hover:text-primary transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-mono font-bold mb-4 text-foreground">Community</h3>
            <ul className="space-y-2 font-mono text-sm">
              <li>
                <Link to="/team" className="text-muted-foreground hover:text-primary transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Code of Conduct
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Contribute
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono font-bold mb-4 text-foreground">Get In Touch</h3>
            <p className="text-sm text-muted-foreground font-mono mb-4">
              Join our community and help us build a better tech ecosystem in Ladakh.
            </p>
            <a
              href="mailto:contact@fossla.org"
              className="text-sm text-primary hover:text-terminal-glow transition-colors font-mono"
            >
              contact@fossla.org
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} FOSS LA. All rights reserved. Built with ❤️ and Open Source.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
