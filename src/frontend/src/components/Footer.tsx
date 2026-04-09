import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";

  return (
    <footer className="bg-card border-t border-border py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-display font-bold text-foreground">
              Guduru Vythanya Sree
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Aspiring AI/ML Engineer
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:vythanyasree2008@gmail.com"
              aria-label="Email"
              className="w-9 h-9 rounded-lg bg-muted hover:bg-accent/20 flex items-center justify-center text-muted-foreground hover:text-accent transition-smooth"
              data-ocid="footer-email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-lg bg-muted hover:bg-accent/20 flex items-center justify-center text-muted-foreground hover:text-accent transition-smooth"
              data-ocid="footer-linkedin"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-lg bg-muted hover:bg-accent/20 flex items-center justify-center text-muted-foreground hover:text-accent transition-smooth"
              data-ocid="footer-github"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground text-center">
            Guduru Vythanya Sree © {year}.{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-smooth"
            >
              Built with love using caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
