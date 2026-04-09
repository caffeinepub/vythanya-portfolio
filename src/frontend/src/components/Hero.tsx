import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current?.classList.add("fade-in");
  }, []);

  const scrollToSkills = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background accent blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div
        ref={containerRef}
        className="container mx-auto px-6 pt-24 pb-16 opacity-0"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Avatar */}
          <div className="flex-shrink-0 fade-in-delay-1">
            <div className="relative w-48 h-48 lg:w-56 lg:h-56">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 blur-xl" />
              <div className="relative w-full h-full rounded-full border-4 border-accent/40 overflow-hidden shadow-lg">
                <img
                  src="/assets/generated/profile-avatar.dim_400x400.png"
                  alt="Guduru Vythanya Sree"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-medium px-3 py-1 rounded-full mb-4 fade-in-delay-1">
              <Sparkles className="h-3 w-3" />
              Open to projects & tutoring opportunities
            </div>
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-foreground mb-3 leading-tight fade-in-delay-1">
              Guduru Vythanya Sree
            </h1>
            <p className="text-accent font-semibold text-lg lg:text-xl mb-4 fade-in-delay-2">
              Aspiring AI/ML Engineer | C Programming Enthusiast
            </p>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-8 fade-in-delay-2">
              Passionate about AI, machine learning, and foundational
              engineering. Skilled in C programming, and building efficient
              algorithms. Exploring online tutoring and student projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start fade-in-delay-3">
              <Button
                onClick={scrollToSkills}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 transition-smooth hover:scale-105"
                data-ocid="hero-cta-skills"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-accent/50 text-accent hover:bg-accent/10 font-semibold px-8 transition-smooth hover:scale-105"
                data-ocid="hero-cta-contact"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-accent transition-smooth animate-bounce"
        aria-label="Scroll to About section"
        data-ocid="scroll-indicator"
      >
        <ChevronDown className="h-6 w-6" />
      </button>
    </section>
  );
}
