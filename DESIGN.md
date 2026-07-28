---
name: Stephen.Tech
description: Proof-first digital work presented through precise, atmospheric glass.
colors:
  ember: "#ff9d00"
  burnished-brass: "#beae60"
  mineral-clay: "#d7cbc6"
  studio-ink: "#0D0E15"
  deep-void: "#0a0a0f"
  slate-panel: "#0f172a"
  pearl: "#ffffff"
  glass: "rgba(255, 255, 255, 0.06)"
  glass-strong: "rgba(255, 255, 255, 0.13)"
  glass-line: "rgba(255, 255, 255, 0.16)"
typography:
  display:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "clamp(3.25rem, 8vw, 7.5rem)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "-0.055em"
  headline:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4.75rem)"
    fontWeight: 650
    lineHeight: 1
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "-0.01em"
  label:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.14em"
rounded:
  control: "14px"
  panel: "16px"
  detail: "24px"
  showcase: "26px"
  cinema: "36px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "64px"
  section: "112px"
components:
  button-primary:
    backgroundColor: "{colors.ember}"
    textColor: "{colors.deep-void}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "14px 22px"
  button-secondary:
    backgroundColor: "{colors.glass}"
    textColor: "{colors.pearl}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "14px 22px"
  glass-card:
    backgroundColor: "{colors.glass}"
    textColor: "{colors.pearl}"
    rounded: "{rounded.panel}"
    padding: "24px"
---

# Design System: Stephen.Tech

## Overview

**Creative North Star: "Proof Under Glass"**

Stephen.Tech treats finished work as the atmosphere, not as content placed below a sales pitch. Projects sit under optically layered glass while the shader behaves like slow studio light moving across the surface. The world is dark and precise rather than conventionally “luxury”: its confidence comes from scale, editing, and real artifacts.

Glass is functional. It groups controls, creates depth over moving media, and keeps type legible. It is not applied to every object. The interface alternates between immersive work, dense evidence, and quiet breathing room so the page never becomes a stack of interchangeable cards.

**Key Characteristics:**

- Work occupies the largest surfaces.
- Thin luminous edges define depth more than heavy shadows.
- Ember is a directional signal, not a decorative wash.
- Inter carries decisive display statements; Geist carries navigation, metadata, and body copy.
- Motion reveals relationships between projects and systems.

## Colors

The palette is a nocturnal studio lit by one warm, refracted source.

### Primary

- **Ember:** The active signal for primary actions, selection states, and short orientation labels.

### Secondary

- **Burnished Brass:** A restrained midpoint used inside the shader and data accents.
- **Mineral Clay:** A pale warm neutral for secondary highlights and softer shader transitions.

### Neutral

- **Studio Ink:** The default surface beneath glass.
- **Deep Void:** The deepest page field and modal scrim.
- **Slate Panel:** A cool tonal alternative for dense proof surfaces.
- **Pearl:** Primary text and high-contrast iconography.
- **Glass / Glass Strong / Glass Line:** Translucent surface, active surface, and optical edge roles.

**The Ember Compass Rule.** Ember indicates where to look or act next. It does not color whole paragraphs, decorate every icon, or appear on more than one dominant action in a viewport.

## Typography

**Display Font:** Inter (with Arial fallback)
**Body Font:** Geist (with Arial fallback)

**Character:** The pairing is deliberately restrained. Inter supplies compact, architectural display shapes; Geist keeps dense technical and project information highly readable.

### Hierarchy

- **Display** (700, fluid 3.25–7.5rem, 0.94 line-height): One decisive idea or project title per viewport.
- **Headline** (650, fluid 2.25–4.75rem, 1.0 line-height): Section transitions and capability statements.
- **Title** (600, 1.25–2rem, 1.15 line-height): Project and package names.
- **Body** (400, 1rem, 1.65 line-height): Explanations, limited to roughly 68 characters per line.
- **Label** (600, 0.75rem, 0.14em tracking, uppercase): Categories, indices, statuses, and compact controls.

**The Sentence Before Slogan Rule.** Display copy is concise and specific enough to understand without the eyebrow above it.

## Layout

The system uses a 12-column desktop grid with a maximum readable content width near 1440px and fluid outer gutters. Project media may break the content grid, but text never does. Open, hairline-separated ledgers are the default for services, proof, and process content. Large containers are reserved for real media or interactions that need the footprint; they are never used only to create section height.

Section spacing stays compact enough to keep related sales information in view: roughly 68–104px on desktop and 60px on mobile. At tablet widths, secondary rails become horizontal tracks. Below 768px, the reading order is introduction, selected media, project controls, project context, qualification, services, proof, process, and contact. Controls remain at least 42px tall and no text-bearing element may create horizontal scrolling.

## Elevation & Depth

Depth comes from translucent layering, edge light, backdrop blur, and controlled media occlusion. Resting glass uses a 1px luminous border and restrained ambient shadow. Active or selected glass may increase opacity and edge brightness, but should not add a generic neon glow.

**The One Lens Rule.** A viewport gets one dominant glass plane. Supporting controls may use smaller translucent surfaces, but nested glass-on-glass stacks must remain rare.

## Shapes

Showcase surfaces use confident 16–36px corners according to scale. Controls use 14px corners or true pills. Thin index lines and circular markers counterbalance the rounded glass without introducing unrelated geometric decoration.

## Components

### Buttons

- **Shape:** Compact pill for persistent actions; 14px corners for contextual actions.
- **Primary:** Ember fill with deep-void text and a visible directional icon or verb.
- **Hover / Focus:** Slight lift, brighter fill, and a 2px offset focus outline. Never rely on color alone.
- **Secondary:** Translucent glass with a luminous border; opacity rises on hover.

### Chips

- **Style:** Compact translucent labels with an index, category, or technology.
- **State:** Selected chips use an ember edge and pearl text; unselected chips stay quiet.

### Cards / Containers

- **Corner Style:** 16px for project information, 24–36px for showcase media.
- **Background:** Glass over visible shader or media; solid studio ink when legibility requires it.
- **Density:** Prefer proximity, typography, and hairlines over wrapping each unit in a panel. A container must group a real interaction, media asset, or modal task.
- **Shadow Strategy:** Ambient only. Selection is expressed through edge light and scale.
- **Border:** One-pixel optical edge.
- **Internal Padding:** 24px mobile, 32–40px desktop.

### Inputs / Fields

- **Style:** Studio-ink field under translucent glass, 14px corners, persistent text labels.
- **Focus:** Ember border plus an external focus ring.
- **Error / Disabled:** Error copy is explicit; disabled controls lower contrast without disappearing.

### Navigation

Navigation is a slim glass instrument panel rather than an oversized capsule. Stephen.Tech, Work, Services, About, and the consultation action remain immediately legible. Mobile navigation exposes state through `aria-expanded` and never hides the current page context.

### Project Stage

The project stage is the signature component: one selected live-work capture at dominant scale, an explicit category and short description, and nearby project selectors that make range discoverable without forcing a long scroll.

### Hero Device Showcase

The opening proof moment pairs one browser window with one companion phone frame, both showing the same selected project. It may rotate through no more than three projects, pauses while hovered or focused, stops when offscreen, and becomes manual under reduced-motion preferences. Device labels describe real delivery surfaces—website, mobile, and PWA—while the surrounding page remains open rather than turning into a collage or oversized glass container.

## Do's and Don'ts

### Do:

- **Do** let real project imagery or motion dominate the first viewport.
- **Do** use glass to preserve legibility over the shader and media.
- **Do** vary section density and composition while preserving the same material grammar.
- **Do** honor reduced-motion preferences and keep content visible without animation.
- **Do** separate verified outcomes from illustrative or projected impact.

### Don't:

- **Don't** stack identical centered heading-and-card sections down the page.
- **Don't** place long unbreakable display spans that create horizontal overflow.
- **Don't** block the first visit with a timed loading screen.
- **Don't** fabricate testimonials, metrics, form success, or production behavior.
- **Don't** use gradients or glass as substitutes for real project assets.
