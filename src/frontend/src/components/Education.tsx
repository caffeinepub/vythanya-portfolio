import { BookOpen, Calendar, GraduationCap, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";

const educationItems = [
  {
    icon: GraduationCap,
    type: "Education",
    degree: "B.Tech in Artificial Intelligence & Machine Learning",
    institution: "Geetanjali College of Engineering and Technology",
    location: "Hyderabad, Telangana, India",
    duration: "2024 – 2028",
    detail: "Current CGPA: In Progress",
    description:
      "Pursuing foundational and advanced topics in AI, machine learning, data structures, and C programming. Active participant in academic workshops and peer learning groups.",
    status: "current",
  },
];

const experienceItems = [
  {
    icon: BookOpen,
    type: "Experience",
    role: "Online Tutor (Exploring)",
    focus: "C Programming & Engineering Basics",
    duration: "2024 – Present",
    description:
      "Exploring online tutoring opportunities to help fellow students master C programming concepts, recursion, pointer manipulation, and engineering fundamentals. Open to collaborative student projects.",
    status: "exploring",
  },
];

export default function Education() {
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
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" ref={ref} className="py-24 bg-muted/30 opacity-0">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
            Background
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            Education & Experience
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {educationItems.map((item) => (
            <div
              key={item.degree}
              className="bg-card border border-border rounded-2xl p-7 shadow-card hover-lift"
              data-ocid="education-card"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-semibold bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded-full">
                      {item.type}
                    </span>
                    <span className="text-xs font-semibold bg-accent/10 text-accent border border-accent/20 px-2 py-0.5 rounded-full capitalize">
                      {item.status}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-0.5">
                    {item.degree}
                  </h3>
                  <p className="text-accent font-medium text-sm mb-2">
                    {item.institution}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {item.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {item.location}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  <p className="text-xs text-accent mt-2 font-medium">
                    {item.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {experienceItems.map((item) => (
            <div
              key={item.role}
              className="bg-card border border-border rounded-2xl p-7 shadow-card hover-lift"
              data-ocid="experience-card"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-semibold bg-accent/10 text-accent border border-accent/20 px-2 py-0.5 rounded-full">
                      {item.type}
                    </span>
                    <span className="text-xs font-semibold bg-muted text-muted-foreground border border-border px-2 py-0.5 rounded-full capitalize">
                      {item.status}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-0.5">
                    {item.role}
                  </h3>
                  <p className="text-accent font-medium text-sm mb-2">
                    {item.focus}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
