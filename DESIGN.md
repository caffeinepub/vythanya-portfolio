# Design Brief: Vythanya Sree Portfolio

## Tone
Premium, refined minimalism. Professional yet warm and approachable — builds trust through clarity and polish, not corporate sterility.

## Differentiation
Navy/teal chemistry with warm dark mode. Smooth fade-in scroll interactions. Depth through layered backgrounds and card elevation. Approachable professionalism for AI/ML student credibility.

## Palette

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| Primary | `oklch(0.32 0.16 265)` Navy | `oklch(0.62 0.18 265)` Elevated Navy | Primary CTAs, headings |
| Accent | `oklch(0.55 0.15 188)` Teal | `oklch(0.62 0.17 188)` Vibrant Teal | Highlights, accents, hover states |
| Background | `oklch(0.98 0 0)` White | `oklch(0.13 0.01 0)` Warm Charcoal | Page background |
| Card | `oklch(0.99 0.01 0)` Off-white | `oklch(0.16 0.01 0)` Elevated Dark | Section cards |
| Foreground | `oklch(0.2 0.02 265)` Navy | `oklch(0.92 0.02 0)` Light Gray | Body text |
| Muted | `oklch(0.92 0.02 0)` Light Gray | `oklch(0.22 0.01 0)` Gray | Secondary text |
| Border | `oklch(0.88 0.02 0)` Light | `oklch(0.25 0.01 0)` Dark Gray | Dividers, subtle borders |

## Typography
- **Display**: General Sans (geometric, modern, friendly — hero & section headings)
- **Body**: DM Sans (refined, professional, highly readable — copy & UI text)
- **Mono**: Geist Mono (technical credibility — code snippets, skill badges)

## Elevation & Depth
- Base: `bg-background`
- Elevated sections: `bg-card` with `shadow-card` (0 4px 12px, 6% opacity)
- Hover cards: `shadow-lg` (0 8px 16px, 12% opacity)
- Backgrounds alternate: card, muted/30%, card for visual rhythm

## Structural Zones
| Zone | Light | Dark | Treatment |
|------|-------|------|-----------|
| Header/Nav | `bg-background` with `border-b` `border-border` | `bg-background` with `border-b` `border-border` | Minimal, grounded |
| Hero Section | `bg-card` with `shadow-card` | `bg-card` with `shadow-card` | Elevated, prominent |
| Content Sections | Alternating `bg-background` / `bg-muted/30%` | Alternating `bg-background` / `bg-muted/30%` | Rhythm through contrast |
| Footer | `bg-muted/40%` with `border-t` `border-border` | `bg-muted/40%` with `border-t` `border-border` | Grounded, signature warmth |

## Component Patterns
- **Buttons**: Primary navy with white text; secondary teal outline; hover lift 2px, shadow-lg
- **Cards**: `bg-card` with `shadow-card`, `rounded-lg`, `hover-lift` class for interaction
- **Links**: Teal accent color, underline on hover, smooth transition
- **Inputs**: `bg-input` border `border-border`, focus `ring-2 ring-primary`, placeholder gray
- **Badge/Chip**: `bg-secondary` with `text-secondary-foreground`, `rounded-full`, tight padding

## Motion
- **Scroll fade-in**: All section content fades in from below on scroll (6s ease-out, 10px offset)
- **Staggered delays**: Multiple elements in section stagger 0.1s apart via `fade-in-delay-*` utilities
- **Hover interactions**: Card & button hover lift 2px with elevated shadow, 300ms smooth transition
- **Smooth scroll**: CSS `scroll-behavior: smooth` for navigation jumps

## Spacing & Rhythm
- **Unit**: 0.5rem (8px) base, scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- **Section padding**: 4rem (64px) vertical, 2rem (32px) horizontal mobile
- **Card padding**: 1.5rem (24px)
- **Element gaps**: 1rem (16px) default, 0.5rem (8px) tight, 1.5rem (24px) loose

## Signature Detail
Warm-toned dark mode with charcoal backgrounds that feel organic, not sterile. Navy primary is not corporate blue but sophisticated and grounded. Teal accent pops without overwhelming. Smooth fade-in interactions on scroll create a premium, editorial feel — not rushed. Every interaction has intentional motion; nothing is abrupt.

## Constraints
- Max 2 font families (General Sans display, DM Sans body)
- Max 5 core semantic colors (primary, secondary, accent, muted, destructive)
- Border radius: 0.5rem default, varied for emphasis (0 for flush, 1rem for soft badges)
- No arbitrary colors — all via CSS tokens and Tailwind theme
- No gradients on text or backgrounds — use layered cards for depth
- Animations: fade-in, hover-lift only; no bounce, spin, or distraction
