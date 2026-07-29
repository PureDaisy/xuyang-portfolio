# Portfolio Website Specification

## 1. Concept & Vision

A modern, dark-themed developer portfolio showcasing expertise in AI Agent development, real-time voice interaction systems, and full-stack development. The site presents technical depth through clean visual hierarchy and subtle animations, conveying both capability and professionalism suitable for senior technical positions.

## 2. Design Language

### Aesthetic Direction
Inspired by modern developer tools and AI dashboards — clean, technical, with purposeful use of gradients and glows to suggest intelligence and innovation.

### Color Palette
- **Primary**: `#6366f1` (Indigo-500) — main accent
- **Secondary**: `#8b5cf6` (Violet-500) — gradients and highlights
- **Accent**: `#22d3ee` (Cyan-400) — interactive elements
- **Background**: `#0f172a` (Slate-900) — main background
- **Surface**: `#1e293b` (Slate-800) — cards and sections
- **Text Primary**: `#f8fafc` (Slate-50)
- **Text Secondary**: `#94a3b8` (Slate-400)

### Typography
- **Headings**: Inter (Google Fonts) — clean, technical feel
- **Body**: Inter — excellent readability
- **Code/Tech**: JetBrains Mono — monospace for technical elements

### Spatial System
- Base unit: 4px
- Section padding: 96px vertical (desktop), 64px (mobile)
- Card padding: 24px
- Gap between cards: 24px

### Motion Philosophy
- Subtle fade-in on scroll (intersection observer)
- Smooth hover transitions (200ms ease-out)
- Gradient animations on hero section (slow, ambient)
- No jarring or distracting animations

## 3. Layout & Structure

### Navigation
- Fixed top navigation with blur backdrop
- Logo/Name on left, nav links on right
- Smooth scroll to sections

### Sections (in order)
1. **Hero** — Name, title, brief intro, CTA buttons
2. **About** — Education, interests, career focus
3. **Projects** — Featured project cards with links
4. **Skills** — Technical skills by category
5. **Contact** — Contact information and links

### Responsive Strategy
- Desktop: max-width 1200px container
- Tablet: 2-column grids become 1-column
- Mobile: stacked layout, hamburger menu

## 4. Features & Interactions

### Navigation
- Click nav link → smooth scroll to section
- Hover → underline animation
- Active section highlighted in nav

### Hero Section
- Animated gradient background
- Typing effect for role/title (optional enhancement)
- CTA buttons: "View Projects" (scrolls) and "Contact Me" (scrolls)

### Project Cards
- Hover → slight scale (1.02) and glow effect
- Click → open project details or external link
- Tags showing tech stack
- Status badge (Live, Archived, etc.)

### Skills Section
- Category grouping (Languages, Frameworks, Tools, etc.)
- Skill tags with proficiency indicators
- Hover → subtle highlight

### Contact Section
- Social links (GitHub, Email)
- Clear visual hierarchy

## 5. Component Inventory

### Navbar
- States: default, scrolled (with shadow), mobile-menu-open
- Mobile: hamburger icon, slide-down menu

### Hero
- Large heading, subheading, animated background
- Two CTA buttons

### Section Title
- Centered heading with decorative underline
- Consistent spacing

### Project Card
- Image/preview area (or gradient placeholder)
- Title, description, tech tags
- Status badge
- Hover state with glow

### Skill Tag
- Rounded pill shape
- Icon + text
- Hover highlight

### Social Link Button
- Icon + label
- Hover color change

## 6. Technical Approach

### Framework
- React 18 + TypeScript
- Vite for build tooling
- TailwindCSS for styling

### Architecture
- Single-page application
- Component-based structure
- Custom hooks for scroll animations

### File Structure
```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   ├── data/
│   │   └── projects.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

### Deployment
- GitHub Pages (via GitHub Actions or static export)
- Vercel as alternative option
