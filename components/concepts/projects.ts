export type DemoProject = {
  slug: string;
  title: string;
  category: string;
  eyebrow: string;
  description: string;
  contribution: string;
  image: string;
  url: string;
  accent: string;
};

export const demoProjects: DemoProject[] = [
  {
    slug: "unquiet-walls",
    title: "Unquiet Walls",
    category: "Interior / Luxury Design",
    eyebrow: "Material storytelling",
    description:
      "A cinematic interior-design demonstration where wallpaper becomes a world-building material.",
    contribution: "Art direction, experience design, development",
    image: "/portfolio/unquiet-walls.png",
    url: "https://steisaden.github.io/wallpaperdemo/",
    accent: "#ff6b5f",
  },
  {
    slug: "eric-bellinger",
    title: "Eric Bellinger",
    category: "Music / Artist Website",
    eyebrow: "Artist archive",
    description:
      "A release, tour, credits, and media world built around an R&B artist’s complete body of work.",
    contribution: "Product design, interaction, development",
    image: "/portfolio/eric-bellinger.png",
    url: "https://steisaden.github.io/eric_bellinger/",
    accent: "#c58cff",
  },
  {
    slug: "meridian",
    title: "Meridian / 12",
    category: "Luxury Product / Watch",
    eyebrow: "Scroll-driven product film",
    description:
      "One uninterrupted passage through mechanical time, expanded by scroll instead of cut into slides.",
    contribution: "Concept, motion system, development",
    image: "/portfolio/meridian-watch.png",
    url: "https://steisaden.github.io/htmx_video_website_watch/",
    accent: "#ff6684",
  },
  {
    slug: "dunc-electric",
    title: "DuncElectric",
    category: "Electrician / Service Business",
    eyebrow: "Commerce with voltage",
    description:
      "A product-led service site that turns a specialist electric-bagpipe system into a stage-ready brand.",
    contribution: "Brand translation, commerce UI, development",
    image: "/portfolio/dunc-electric.png",
    url: "https://steisaden.github.io/dunc-electric/",
    accent: "#a86cff",
  },
  {
    slug: "grit-glory",
    title: "Grit & Glory",
    category: "Streetwear / Fashion",
    eyebrow: "Architectural fashion",
    description:
      "A restrained fashion archive where proportion, concrete, and editorial pacing carry the collection.",
    contribution: "Art direction, editorial system, development",
    image: "/portfolio/gritty-glory.png",
    url: "https://steisaden.github.io/gritty/",
    accent: "#f1bb4b",
  },
];

export const conceptLinks = [
  {
    slug: "orbit",
    name: "Orbit",
    note: "A selected work gathers the portfolio around it.",
  },
  {
    slug: "showreel",
    name: "Showreel",
    note: "Five full-viewport acts paced like a studio reel.",
  },
  {
    slug: "index",
    name: "Index",
    note: "A fast, editorial ledger with a live preview plane.",
  },
  {
    slug: "cabinet",
    name: "Cabinet",
    note: "An asymmetric field of translucent specimens.",
  },
] as const;

export type ConceptSlug = (typeof conceptLinks)[number]["slug"];
