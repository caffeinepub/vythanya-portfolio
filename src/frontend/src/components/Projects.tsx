import { Badge } from "@/components/ui/badge";
import { BookOpen, Code2, ExternalLink, LayoutDashboard } from "lucide-react";
import { useEffect, useRef } from "react";
import type { ElementType } from "react";

interface Project {
  icon: ElementType;
  title: string;
  description: string;
  tech: string[];
  highlight: string;
}

const projects: Project[] = [
  {
    icon: Code2,
    title: "C Sorting Algorithm Visualizer",
    description:
      "Visualizes sorting algorithms — bubble, selection, and merge sort — step-by-step using C logic explained with animated walkthroughs and detailed commentary on time complexity.",
    tech: ["C", "Algorithm Design", "Step-by-Step Analysis"],
    highlight: "Recursive merge sort with visual trace",
  },
  {
    icon: BookOpen,
    title: "AI/ML Learning Journal",
    description:
      "A personal learning journal tracking AI/ML concepts, with structured notes on datasets, algorithm comparisons, experiment outcomes, and progress milestones.",
    tech: ["Python", "Machine Learning", "Jupyter", "Data Analysis"],
    highlight: "Covers 20+ ML concepts with experiments",
  },
  {
    icon: LayoutDashboard,
    title: "Study Productivity Dashboard",
    description:
      "A dashboard to track daily study goals, task completion, and academic progress. Visualizes weekly trends, subject-wise time distribution, and milestone achievements.",
    tech: ["HTML/CSS", "JavaScript", "Data Visualization", "Productivity"],
    highlight: "Tracks study sessions & academic milestones",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && ref.current) {
            setTimeout(() => {
              ref.current?.classList.add("fade-in");
            }, index * 100);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className="opacity-0 bg-card border border-border rounded-2xl p-6 shadow-card hover-lift flex flex-col group"
      data-ocid={`project-card-${index}`}
    >
      {/* Icon header */}
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
        <project.icon className="h-6 w-6 text-accent" />
      </div>

      <h3 className="font-display text-lg font-bold text-foreground mb-2">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      {/* Highlight tag */}
      <p className="text-xs text-accent font-medium mb-4 flex items-center gap-1.5">
        <ExternalLink className="h-3 w-3" />
        {project.highlight}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <Badge
            key={t}
            className="text-xs bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-smooth"
          >
            {t}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const headerRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.2 },
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div ref={headerRef} className="text-center mb-14 opacity-0">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
            What I've Built
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            Projects
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
