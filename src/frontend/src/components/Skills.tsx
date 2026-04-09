import { Badge } from "@/components/ui/badge";
import { useEffect, useRef } from "react";

interface SkillBar {
  name: string;
  level: number;
  label: string;
}

const programmingSkills: SkillBar[] = [
  { name: "C", level: 90, label: "Advanced" },
  { name: "Python", level: 65, label: "Intermediate" },
];

const aiMlSkills: SkillBar[] = [
  { name: "Machine Learning Basics", level: 50, label: "Beginner" },
  { name: "Neural Network Fundamentals", level: 40, label: "Beginner" },
];

const toolSkills: SkillBar[] = [
  { name: "YouTube Learning", level: 85, label: "Proficient" },
  { name: "Online IDEs", level: 80, label: "Proficient" },
  { name: "Presentation Software", level: 75, label: "Intermediate" },
];

const softSkills = [
  "Problem Solving",
  "Time Management",
  "Self-driven Learning",
  "Team Collaboration",
  "Quick Learner",
];

function SkillBarItem({ name, level, label }: SkillBar) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && barRef.current) {
            barRef.current.style.width = `${level}%`;
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.5 },
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground">
          {label} — {level}%
        </span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
          style={{ width: "0%" }}
        />
      </div>
    </div>
  );
}

function SkillCategory({
  title,
  skills,
}: { title: string; skills: SkillBar[] }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-card hover-lift">
      <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
        {title}
      </h3>
      {skills.map((s) => (
        <SkillBarItem key={s.name} {...s} />
      ))}
    </div>
  );
}

export default function Skills() {
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
    <section id="skills" ref={ref} className="py-24 bg-background opacity-0">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
            What I Know
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            Skills
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <SkillCategory
              title="Programming Languages"
              skills={programmingSkills}
            />
            <SkillCategory title="AI / ML" skills={aiMlSkills} />
          </div>
          <SkillCategory title="Tools & Platforms" skills={toolSkills} />

          {/* Soft Skills */}
          <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
            <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <Badge
                  key={skill}
                  className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-smooth px-3 py-1 text-sm"
                  data-ocid={`soft-skill-${skill.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
