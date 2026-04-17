# Design Brief

## Direction

**Luxury Celestial** — Premium bridal makeup artist portfolio merging deep dark backgrounds with vibrant rose-pink accents and cinematic 3D animations to showcase celebrity-grade artistry.

## Tone

Maximalist luxury with restraint. Every animation serves the narrative, blurry glow effects add depth without excess, dark base creates an intimate gallery aesthetic. Vogue editorial meets immersive tech showcase.

## Differentiation

Seamless 3D particle animations in every section with choreographed entrance effects and rose-gold shimmer accents. Blurry backdrop-filtered cards with subtle glow shadows create a premium jewelry-box aesthetic.

## Color Palette

| Token           | OKLCH              | Role                          |
| --------------- | ------------------ | ----------------------------- |
| background      | 0.10 0.01 260      | Ultra-dark navy-black base    |
| foreground      | 0.95 0.01 260      | Crisp white text              |
| card            | 0.16 0.02 260      | Deep charcoal with glow layer |
| primary         | 0.55 0.22 300      | Vivid rose-pink accent        |
| secondary       | 0.65 0.18 320      | Rose-gold warm accent         |
| accent          | 0.55 0.22 300      | Primary highlight             |
| destructive     | 0.55 0.22 25       | Alert/error red               |
| border          | 0.22 0.02 260      | Subtle dark divider           |

## Typography

- Display: Fraunces — elegant, high-fashion serif for headings, hero text, and luxury branding
- Body: Satoshi — modern, warm sans-serif for body copy, UI labels, and descriptive text
- Mono: JetBrains Mono — technical polish for details, stats, and code elements
- Scale: hero `text-6xl md:text-7xl font-bold`, h2 `text-4xl md:text-5xl`, body `text-base md:text-lg`, label `text-xs font-semibold`

## Elevation & Depth

Layered depth through glow-shadow hierarchy: ultra-dark base with semi-transparent cards (backdrop-filtered), rose-pink and rose-gold glow overlays, and floating 3D elements. Shadows are colored and diffuse, never sharp.

## Structural Zones

| Zone    | Background        | Border                   | Notes                                         |
| ------- | ----------------- | ------------------------ | --------------------------------------------- |
| Header  | dark transparent  | subtle pink bottom line  | Navigation sticky, floats above content       |
| Hero    | 3D particles      | none                     | Full-viewport animated background, centered content |
| Sections | dark base + glow  | rose-pink accent borders | Alternating light/medium cards for rhythm    |
| Footer  | semi-transparent  | subtle top border        | Contact, socials, floating buttons aligned   |

## Spacing & Rhythm

Large section gaps (8rem–12rem) with spacious internal padding (3rem–4rem). Micro-spacing (0.5rem–1rem) for component grouping. Dense card grids with breathing room between elements.

## Component Patterns

- Buttons: Rose-pink primary with subtle glow on hover, secondary style with dark background and pink border
- Cards: Rounded corners (0.625rem) with backdrop-filter blur, rose-tinted glow shadows, semi-transparent backgrounds
- Badges: Rose-gold foreground on dark background, uppercase labels with letter-spacing

## Motion

- Entrance: Staggered fade-in with subtle scale (300ms per element, 100ms delay cascade)
- Hover: Glow intensification, subtle lift via transform, 250ms smooth transition
- Decorative: Floating particle animations in hero (infinite loop), pulsing accents on CTAs, smooth scroll parallax

## Constraints

- All text on backgrounds must maintain AA+ contrast (dark text on light backgrounds prohibited)
- No harsh shadows or glow over text readability
- Animations should not distract from portfolio content (keep FPS smooth, avoid motion sickness)
- Floating buttons must remain accessible and not occlude critical content

## Signature Detail

Rose-gold shimmer accents that pulse subtly on hover—a luxury jewelry-inspired detail that reinforces the bridal makeup artist positioning and creates an unforgettable premium impression.
