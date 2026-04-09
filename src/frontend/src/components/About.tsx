import { Code2, GraduationCap, Lightbulb, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";

const highlights = [
  { icon: GraduationCap, label: "B.Tech AI & ML", value: "Geetanjali College" },
  { icon: MapPin, label: "Location", value: "Hyderabad, India" },
  { icon: Code2, label: "Core Skill", value: "C Programming" },
  { icon: Lightbulb, label: "Passion", value: "AI/ML Research" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-24 bg-muted/30 opacity-0">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
            Who I Am
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            About Me
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          {/* Bio */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-card">
            <p className="text-foreground text-base leading-relaxed mb-4">
              Currently pursuing a B.Tech in Artificial Intelligence and Machine
              Learning at{" "}
              <span className="text-accent font-medium">
                Geetanjali College of Engineering and Technology
              </span>
              , Hyderabad, Telangana, India. I have a deep passion for coding
              practice, especially recursion and string manipulation in C.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              I am enthusiastic about academic productivity tools, creating
              slide decks and PPTs for structured learning. My curiosity drives
              me to explore AI/ML concepts beyond the classroom and connect them
              to real-world applications.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Eager to contribute to student projects and help fellow learners
              grow through online tutoring in C programming and engineering
              fundamentals. I believe great things happen when curiosity meets
              consistency.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="bg-card border border-border rounded-xl p-5 hover-lift text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <p className="text-xs text-muted-foreground mb-1">{label}</p>
                <p className="text-sm font-semibold text-foreground">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
