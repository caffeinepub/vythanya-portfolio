import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Name is required";
  if (!form.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Enter a valid email";
  if (!form.message.trim()) errors.message = "Message is required";
  else if (form.message.trim().length < 10)
    errors.message = "Message too short (min 10 characters)";
  return errors;
}

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);

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

  const handleBlur = (field: keyof FormState) => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate(form));
  };

  const handleChange = (field: keyof FormState, value: string) => {
    const updated = { ...form, [field]: value };
    setForm(updated);
    if (touched[field]) setErrors(validate(updated));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, message: true };
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    toast.success("Message sent! I'll get back to you soon.", {
      duration: 5000,
    });
    setForm({ name: "", email: "", message: "" });
    setTouched({});
    setErrors({});
  };

  return (
    <section id="contact" ref={ref} className="py-24 bg-muted/30 opacity-0">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
            Let's Connect
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            Get In Touch
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                Contact Details
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:vythanyasree2008@gmail.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-smooth group"
                  data-ocid="contact-email-link"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-smooth">
                    <Mail className="h-4 w-4 text-accent" />
                  </div>
                  <span className="break-all">vythanyasree2008@gmail.com</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-smooth group"
                  data-ocid="contact-linkedin-link"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-smooth">
                    <Linkedin className="h-4 w-4 text-accent" />
                  </div>
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-smooth group"
                  data-ocid="contact-github-link"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-smooth">
                    <Github className="h-4 w-4 text-accent" />
                  </div>
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6">
              <p className="text-sm text-foreground font-medium mb-1">
                Open to opportunities
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Looking for study collaborations, tutoring opportunities, or
                student project partnerships. Don't hesitate to reach out!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-7 shadow-card">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <Label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground mb-1.5 block"
                >
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  className={
                    errors.name && touched.name ? "border-destructive" : ""
                  }
                  data-ocid="contact-name-input"
                />
                {errors.name && touched.name && (
                  <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground mb-1.5 block"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  className={
                    errors.email && touched.email ? "border-destructive" : ""
                  }
                  data-ocid="contact-email-input"
                />
                {errors.email && touched.email && (
                  <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <Label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground mb-1.5 block"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project, tutoring needs, or just say hi..."
                  rows={4}
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  onBlur={() => handleBlur("message")}
                  className={`resize-none ${errors.message && touched.message ? "border-destructive" : ""}`}
                  data-ocid="contact-message-input"
                />
                {errors.message && touched.message && (
                  <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-smooth hover:scale-[1.01]"
                data-ocid="contact-submit-btn"
              >
                {submitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
