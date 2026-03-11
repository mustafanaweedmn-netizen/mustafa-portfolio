"use client";

import { useEffect, useRef, useState } from "react";

type Project = {
  title: string;
  category: string;
  thumb: string;
  intro: string;
  visuals: string[];
};

const projects: Project[] = [
  {
    title: "FlavaBoom Creamery",
    category: "Brand Identity & Packaging",
    thumb: "/images/thumbnail_flavaboom.jpg",
    intro:
      "An experimental ice-cream brand built around bold, unexpected flavors and a loud, playful visual identity.",
    visuals: [
      "/images/flavaboom/flavaboom-hero.jpg",
      "/images/flavaboom/flavaboom-logo.jpg",
      "/images/flavaboom/flavaboom-packaging.jpg",
      "/images/flavaboom/flavaboom-brand-assets.jpg",
      "/images/flavaboom/flavaboom-social.jpg",
    ],
  },
  {
    title: "Gelateria La Carraia",
    category: "Brand Redesign",
    thumb: "/images/thumbnail_gelateria_la_carraia.jpg",
    intro:
      "A contemporary brand redesign for the historic Florentine gelato shop, balancing modern minimalism with traditional Italian heritage.",
    visuals: [
      "/images/gelateria/gelateria-carraia-hero.jpg",
      "/images/gelateria/gelateria-carraia-original-brand.jpg",
      "/images/gelateria/gelateria-carraia-typography.jpg",
      "/images/gelateria/gelateria-carraia-logo-concepts.jpg",
      "/images/gelateria/gelateria-carraia-packaging.jpg",
    ],
  },
  {
    title: "Forge Fusion Studios",
    category: "Brand Identity & Creative Direction",
    thumb: "/images/thumbnail_forge_fusion_studios.jpg",
    intro:
      "A creative advertising agency identity designed to represent innovation, collaboration, and bold visual storytelling across campaigns, digital platforms, and brand assets.",
    visuals: [
      "/images/forge-fusion/forge-fusion-hero.jpg",
      "/images/forge-fusion/forge-fusion-logo.jpg",
      "/images/forge-fusion/forge-fusion-social.jpg",
      "/images/forge-fusion/forge-fusion-website.jpg",
      "/images/forge-fusion/forge-fusion-business-card.jpg",
    ],
  },
  {
    title: "Hour Glass",
    category: "Lifestyle Brand Concept",
    thumb: "/images/thumbnail_hourglass.jpg",
    intro:
      "A minimalist lifestyle brand concept built around reducing everyday decision fatigue through timeless design, neutral aesthetics, and versatile products.",
    visuals: [
      "/images/hourglass/hourglass-hero.jpg",
      "/images/hourglass/hourglass-brand-essence.jpg",
      "/images/hourglass/hourglass-logo.jpg",
      "/images/hourglass/hourglass-typography.jpg",
      "/images/hourglass/hourglass-color-palette.jpg",
      "/images/hourglass/hourglass-packaging.jpg",
    ],
  },
  {
    title: "XP – Gamified Productivity System",
    category: "Product Design & UX Concept",
    thumb: "/images/thumbnail_rpg_productivity_system.jpg",
    intro:
      "A gamified habit-building app concept that turns real-world tasks into an RPG-style progression system with XP, levels, streaks, and rewards.",
    visuals: [
      "/images/gamification/gamification-hero.jpg",
      "/images/gamification/gamification-objective.jpg",
      "/images/gamification/gamification-loop.jpg",
      "/images/gamification/gamification-framework.jpg",
      "/images/gamification/gamification-personas.jpg",
      "/images/gamification/gamification-ui.jpg",
    ],
  },
  {
    title: "Midnight Creatures",
    category: "Illustration Series",
    thumb: "/images/thumbnail_midnight_creatures.jpg",
    intro:
      "A personal illustration series exploring stylized nocturnal worlds through layered landscapes, character design, and atmospheric color palettes.",
    visuals: [
      "/images/midnight-creatures/midnight-creatures-hero.jpg",
      "/images/midnight-creatures/midnight-creatures-astro-slime.jpg",
      "/images/midnight-creatures/midnight-creatures-frankenstein-jr.jpg",
      "/images/midnight-creatures/midnight-creatures-monkey-business.jpg",
    ],
  },
];

const skills = [
  "Brand Identity",
  "Packaging Design",
  "Art Direction",
  "Creative Direction",
  "Social Media Design",
  "Illustration",
  "UI / UX Concepts",
  "Game Design Thinking",
];

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function MustafaNaweedPortfolio() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const previous = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";

    const sectionIds = ["home", "work", "about", "contact", ...projects.map((p) => slugify(p.title))];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]?.target?.id) {
          const id = visibleEntries[0].target.id;
          if (["home", "work", "about", "contact"].includes(id)) {
            setActiveSection(id);
          } else {
            setActiveSection("work");
          }
        }
      },
      {
        threshold: [0.2, 0.35, 0.5, 0.7],
        rootMargin: "-10% 0px -45% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      document.documentElement.style.scrollBehavior = previous;
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-12">
          <a href="#home" className="text-sm uppercase tracking-[0.28em] text-neutral-300 transition hover:text-white">
            Mustafa Naweed
          </a>
          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    isActive
                      ? "bg-white text-neutral-950"
                      : "text-neutral-400 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
        <RevealSection>
          <section id="home" className="scroll-mt-24 grid gap-10 border-b border-white/10 pb-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-neutral-400">
                Portfolio 2026
              </p>
              <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
                Mustafa Naweed
              </h1>
              <p className="mt-4 text-xl text-neutral-300 md:text-2xl">
                Brand Designer & Art Director
              </p>
              <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-400 md:text-lg">
                I design brand identities, packaging, illustration, and visual systems
                that combine strategy, storytelling, and bold visual thinking.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-neutral-300 transition duration-300 hover:border-white/20 hover:bg-white/[0.06]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:items-end">
              <img
                src="/images/mustafa_profile.jpg"
                alt="Mustafa Naweed"
                className="aspect-square w-full max-w-sm rounded-[28px] border border-white/10 object-cover transition duration-500 hover:scale-[1.01]"
              />
            </div>
          </section>
        </RevealSection>

        <RevealSection>
          <section id="work" className="scroll-mt-24 border-b border-white/10 py-16">
            <p className="text-sm uppercase tracking-[0.35em] text-neutral-400">
              Selected Work
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              A selection of branding, product, and illustration projects.
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, index) => (
                <a
                  key={project.title}
                  href={`#${slugify(project.title)}`}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] transition duration-500 hover:-translate-y-1.5 hover:border-white/20"
                  style={{ transitionDelay: `${index * 40}ms` }}
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <FadeInImage
                      src={project.thumb}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition duration-500 group-hover:from-black/70" />
                  </div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-medium text-white">{project.title}</h3>
                    <p className="mt-1 text-sm text-neutral-300">{project.category}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </RevealSection>

        <RevealSection>
          <section id="about" className="scroll-mt-24 border-b border-white/10 py-16">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-neutral-400">
                  About
                </p>
                <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                  Visual design with strategy at the core.
                </h2>
              </div>
              <div className="space-y-5 text-base leading-7 text-neutral-300">
                <p>
                  I am a designer and art director with a background in visual communication,
                  branding, and game design. My work moves across identity systems, packaging,
                  digital campaigns, interface concepts, and illustration.
                </p>
                <p>
                  I currently lead creative work at Forge Fusion Studios while continuing to
                  develop independent concept projects that combine storytelling, visual systems,
                  and world-building.
                </p>
              </div>
            </div>
          </section>
        </RevealSection>

        <RevealSection>
          <section className="border-b border-white/10 py-16">
            <p className="text-sm uppercase tracking-[0.35em] text-neutral-400">
              Experience & Education
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                <h3 className="text-xl font-medium">Experience</h3>
                <div className="mt-5 space-y-5 text-neutral-300">
                  <div>
                    <p className="font-medium text-white">Owner & Art Director</p>
                    <p className="text-sm text-neutral-400">Forge Fusion Studios · 2021 – Present</p>
                  </div>
                  <div>
                    <p className="font-medium text-white">Freelance Graphic & UI/UX Designer</p>
                    <p className="text-sm text-neutral-400">Independent · 2015 – Present</p>
                  </div>
                  <div>
                    <p className="font-medium text-white">Senior Graphic Designer</p>
                    <p className="text-sm text-neutral-400">IVYLAB Tech · 2019 – 2021</p>
                  </div>
                  <div>
                    <p className="font-medium text-white">Graphic Designer</p>
                    <p className="text-sm text-neutral-400">Creative Junction · 2017 – 2019</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                <h3 className="text-xl font-medium">Education</h3>
                <div className="mt-5 space-y-5 text-neutral-300">
                  <div>
                    <p className="font-medium text-white">M.A. in Game Design</p>
                    <p className="text-sm text-neutral-400">Bahçeşehir University · 2021 – 2023</p>
                  </div>
                  <div>
                    <p className="font-medium text-white">B.F.A. in Visual Communication Design</p>
                    <p className="text-sm text-neutral-400">Beaconhouse National University · 2012 – 2016</p>
                  </div>
                  <div>
                    <p className="font-medium text-white">Diploma in Illustration</p>
                    <p className="text-sm text-neutral-400">Florence Institute of Design International · 2021</p>
                  </div>
                  <div>
                    <p className="font-medium text-white">Diploma in Graphic Design</p>
                    <p className="text-sm text-neutral-400">Florence Institute of Design International · 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealSection>

        {projects.map((project) => (
          <RevealSection key={project.title}>
            <section
              id={slugify(project.title)}
              className="scroll-mt-24 border-b border-white/10 py-16"
            >
              <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-neutral-400">
                    Case Study
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold md:text-5xl">{project.title}</h2>
                  <p className="mt-3 text-base text-neutral-400 md:text-lg">{project.category}</p>
                  <p className="mt-5 max-w-lg text-sm leading-7 text-neutral-300 md:text-base">
                    {project.intro}
                  </p>
                </div>
                <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]">
                  <FadeInImage
                    src={project.visuals[0]}
                    alt={`${project.title} hero`}
                    className="h-full w-full object-cover transition duration-700 hover:scale-[1.02]"
                  />
                </div>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {project.visuals.slice(1).map((image, index) => (
                  <div
                    key={`${project.title}-${index}`}
                    className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03]"
                  >
                    <FadeInImage
                      src={image}
                      alt={`${project.title} visual ${index + 2}`}
                      className="h-full w-full object-cover transition duration-700 hover:scale-[1.02]"
                    />
                  </div>
                ))}
              </div>
            </section>
          </RevealSection>
        ))}

        <RevealSection>
          <section id="contact" className="scroll-mt-24 py-16">
            <p className="text-sm uppercase tracking-[0.35em] text-neutral-400">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Let’s Work Together
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-300">
              Available for branding, creative direction, and design collaborations.
              For inquiries or project discussions, feel free to reach out.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <a
                href="mailto:mustafanaweed.mn@gmail.com"
                className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">Email</p>
                <p className="mt-2 text-lg text-white">mustafanaweed.mn@gmail.com</p>
              </a>

              <a
                href="https://www.forgefusionstudios.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">Website</p>
                <p className="mt-2 text-lg text-white">forgefusionstudios.com</p>
              </a>

              <a
                href="https://www.linkedin.com/in/mustafa-naweed"
                target="_blank"
                rel="noreferrer"
                className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">LinkedIn</p>
                <p className="mt-2 text-lg text-white">Mustafa Naweed</p>
              </a>

              <a
                href="/files/Mustafa_Naweed_CV_2026.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">CV</p>
                <p className="mt-2 text-lg text-white">Download Resume</p>
              </a>
            </div>

            <div className="mt-12 border-t border-white/10 pt-6 text-sm text-neutral-500">
              © 2026 Mustafa Naweed · Owner & Art Director — Forge Fusion Studios
            </div>
          </section>
        </RevealSection>
      </main>
    </div>
  );
}

function RevealSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

function FadeInImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete) {
      setLoaded(true);
    }
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      onLoad={() => setLoaded(true)}
      className={`${className ?? ""} transition-opacity duration-700 ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}
