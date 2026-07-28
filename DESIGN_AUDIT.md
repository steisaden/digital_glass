# Stephen.Tech Design Audit

Audit date: 2026-07-27
Surfaces reviewed: current Next.js portfolio at 1440×900 and 390×844, plus the five supplied live demos.

## Executive finding

The current site already has usable identity ingredients: a warm shader, dark optical glass, Inter/Geist, and strong motion capability. Its problem is sameness. Nearly every section repeats the same centered eyebrow, centered headline, paragraph, and rounded glass-card grid. The site says “custom systems,” but the composition reads like a familiar luxury SaaS template.

The redesign should preserve the material system while replacing the page rhythm. Work must appear in the first viewport, the five design demos must become primary evidence, and commercial content should support rather than precede the portfolio.

## What is working

- The shader creates a recognizable warm, mineral atmosphere.
- Inter and Geist are legible and already integrated through `next/font`.
- Glass surfaces have enough contrast to support content over moving backgrounds.
- The existing project modal demonstrates useful depth of evidence.
- Contact details, service packages, and an explicit consultation path already exist.
- The five live demos show meaningful range across interiors, entertainment, luxury products, service businesses, and fashion.

## Highest-priority problems

### 1. The work is absent from the opening

The first viewport is almost entirely sales copy. Visitors cannot judge the craft until much later, even though the live demos are the portfolio’s strongest proof.

**Change:** Put a selected project artifact, category, and live link above the fold. Move the service explanation into the supporting scroll.

### 2. Desktop display copy overflows

The hero’s animated text spans are `inline-block`, so long phrases cannot wrap naturally. At 1440px the content runs beyond the right edge, clipping the navigation and headline.

**Change:** Use block-level wrapping, controlled maximum line lengths, and fluid type that is tested at common laptop widths.

### 3. Mobile starts behind a timed gate

The 2.5-second loading screen delays access without doing meaningful loading work. On a narrow viewport it becomes the whole experience, and development UI reveals an additional layout gutter.

**Change:** Remove the timed loader. Render meaningful content immediately and let shader/media fade in progressively.

### 4. Repeated glass cards flatten hierarchy

Glass appears on the hero, metrics, services, outcomes, pricing, testimonials, navigation, and footer CTA at similar radii and opacity. When everything is elevated, nothing is.

**Change:** Establish one dominant glass plane per viewport. Use open space, media, hairlines, and solid tonal sections as counter-rhythms.

### 5. Proof language is internally inconsistent

The page advertises “2 detailed build case studies” while presenting three entries. `placeholderMetrics` are displayed as project impact, and the testimonials section visibly asks the owner to replace its content.

**Change:** Label project facts accurately, remove projected numbers from public proof, and use “build notes” or “outcome snapshot” when client-approved testimony is unavailable.

### 6. The consultation form simulates success

The current form waits locally and reports “Request received” without transmitting the submission.

**Change:** Until a real endpoint exists, route the primary action to email/WhatsApp or label the form as a prototype. Never imply receipt.

### 7. Motion and interaction need accessibility controls

The shader, Lenis scrolling, pointer-following glass effects, custom cursor, autoplay video, and spring transitions run without a unified reduced-motion policy. Several icon buttons also lack complete accessible names or state attributes.

**Change:** Respect `prefers-reduced-motion`, keep native cursor behavior on touch/coarse pointers, provide focus-visible styles, label carousel controls, and expose mobile navigation state.

### 8. Performance cost is front-loaded

The opening includes a WebGL shader, custom cursor tracking, smooth scrolling, animation libraries, and a timed loader before showing any project proof. Autoplay videos do not consistently use poster images.

**Change:** Keep one background effect, lazy-load below-fold motion, provide posters, and make static captures the default project index material.

## Four implemented directions

### 01 — Orbit

A selected project sits at the center of a large glass stage while the remaining demos behave like nearby coordinates. Choosing a project pulls it into focus and updates the surrounding evidence.

- Best for: memorable first impression and range.
- Signature interaction: projects contract into one selected artifact, then scatter back into the index.
- Risk: spatial staging needs careful mobile linearization.

### 02 — Showreel

The portfolio becomes a sequence of full-viewport acts. Each scroll advances to a new demo with a slim glass timeline and a concise service annotation.

- Best for: cinematic work and video-heavy demos.
- Signature interaction: scroll-linked chapter progress without hijacking native scrolling.
- Risk: visitors looking for a specific project need persistent wayfinding.

### 03 — Index

A dense editorial list controls a large preview pane. Category, role, medium, and live status remain scannable while the selected work supplies atmosphere.

- Best for: fast evaluation, accessibility, and future portfolio growth.
- Signature interaction: keyboard-accessible project rows update the preview.
- Risk: can feel utilitarian if the preview stage is not visually generous.

### 04 — Cabinet

The work is arranged as an asymmetric collection of translucent specimens. Card scale communicates importance; filters and numbered labels reveal range without forcing equal treatment.

- Best for: browsing and strong thumbnail assets.
- Signature interaction: focused specimens lift and reveal a compact project note.
- Risk: requires disciplined curation as the collection grows.

## Recommended baseline

Use **Orbit** as the strongest Stephen.Tech homepage direction, then borrow the **Index** structure for the complete work archive. Orbit creates the memorable first viewport the current site lacks; Index supplies the practical scanability needed as more work is added.
