"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useMemo, useState } from "react";
import { PaperShaderBackground } from "@/components/PaperShaderBackground";
import {
  conceptLinks,
  ConceptSlug,
  demoProjects,
  DemoProject,
} from "./projects";
import styles from "./Concepts.module.css";

const contactHref =
  "mailto:stephen.tech139@gmail.com?subject=Stephen.Tech%20project%20inquiry";

function ConceptBar({ active }: { active?: ConceptSlug }) {
  return (
    <header className={styles.conceptBar}>
      <Link href="/" className={styles.brand}>
        Stephen<span>.Tech</span>
      </Link>
      <nav aria-label="Portfolio design concepts" className={styles.conceptNav}>
        {conceptLinks.map((concept) => (
          <Link
            key={concept.slug}
            href={`/concepts/${concept.slug}`}
            aria-current={active === concept.slug ? "page" : undefined}
            className={active === concept.slug ? styles.activeConcept : undefined}
          >
            {concept.name}
          </Link>
        ))}
      </nav>
      <a href={contactHref} className={styles.contactButton}>
        Let&apos;s talk
        <ArrowUpRight aria-hidden="true" />
      </a>
    </header>
  );
}

function ProjectLink({
  project,
  inverse = false,
}: {
  project: DemoProject;
  inverse?: boolean;
}) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className={inverse ? styles.liveLinkInverse : styles.liveLink}
    >
      View live work
      <ArrowUpRight aria-hidden="true" />
    </a>
  );
}

const studioOffers = [
  {
    name: "Lead-generation website",
    price: "From $799",
    note: "A focused, mobile-first site built around qualified inquiries.",
  },
  {
    name: "AI follow-up system",
    price: "From $1,500",
    note: "Nurture, qualification, and handoff flows connected to your stack.",
  },
  {
    name: "Custom automation",
    price: "Scoped quote",
    note: "Internal tools and integrations that remove repetitive operations.",
  },
];

function HybridStudioTail() {
  return (
    <section className={styles.studioTail} aria-labelledby="studio-tail-title">
      <div className={styles.studioTailHeader}>
        <p>From visual world to working system</p>
        <h2 id="studio-tail-title">
          Design leads. Acquisition and automation make it useful.
        </h2>
        <span>
          Start with the surface you need, then connect the follow-up and
          operations behind it.
        </span>
      </div>
      <div className={styles.serviceOfferGrid}>
        {studioOffers.map((offer, index) => (
          <article key={offer.name} className={styles.serviceOffer}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{offer.name}</h3>
            <p>{offer.note}</p>
            <strong>{offer.price}</strong>
          </article>
        ))}
      </div>
      <div className={styles.studioTailAction}>
        <p>Have a project with a clear job to do?</p>
        <a href={contactHref}>
          Book a consultation
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

function OrbitConcept() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const selected = demoProjects[selectedIndex];

  return (
    <div className={`${styles.conceptRoot} ${styles.orbitRoot}`}>
      <PaperShaderBackground />
      <ConceptBar active="orbit" />

      <main className={styles.orbitMain}>
        <div className={styles.orbitIntro}>
          <p>Independent design + development</p>
          <h1>
            Digital work with
            <br />
            its own gravity.
          </h1>
          <span>
            Stephen builds distinct websites and the systems that make them
            useful—across brand, commerce, lead generation, and automation.
          </span>
        </div>

        <div className={styles.orbitStage}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={selected.slug}
              className={styles.orbitImage}
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, clipPath: "inset(12% 12% 12% 12% round 26px)" }
              }
              animate={
                reduceMotion
                  ? undefined
                  : { opacity: 1, clipPath: "inset(0% 0% 0% 0% round 26px)" }
              }
              exit={
                reduceMotion
                  ? undefined
                  : { opacity: 0, clipPath: "inset(8% 8% 8% 8% round 26px)" }
              }
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={selected.image}
                alt={`${selected.title} website preview`}
                fill
                priority
                sizes="(max-width: 768px) 92vw, 66vw"
                className={styles.coverImage}
              />
              <div className={styles.imageShade} />
            </motion.div>
          </AnimatePresence>

          <div className={styles.orbitInfo}>
            <p>{selected.eyebrow}</p>
            <h2>{selected.title}</h2>
            <span>{selected.description}</span>
            <ProjectLink project={selected} />
          </div>

          <div className={styles.orbitCounter} aria-live="polite">
            <strong>{String(selectedIndex + 1).padStart(2, "0")}</strong>
            <span>/ {String(demoProjects.length).padStart(2, "0")}</span>
          </div>

          <div className={styles.orbitSelectors} aria-label="Select a project">
            {demoProjects.map((project, index) => (
              <button
                key={project.slug}
                type="button"
                aria-pressed={index === selectedIndex}
                onClick={() => setSelectedIndex(index)}
                className={index === selectedIndex ? styles.selectedOrbit : undefined}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{project.title}</strong>
                <small>{project.category}</small>
              </button>
            ))}
          </div>
        </div>

        <HybridStudioTail />
      </main>
    </div>
  );
}

function ShowreelConcept() {
  return (
    <div className={`${styles.conceptRoot} ${styles.showreelRoot}`}>
      <PaperShaderBackground />
      <ConceptBar active="showreel" />
      <main>
        <section className={styles.showreelOpening}>
          <div>
            <p>Stephen.Tech / Selected work</p>
            <h1>Five worlds. No house style.</h1>
            <span>
              The throughline is not how the work looks. It is how deliberately
              each experience fits its subject.
            </span>
            <a href="#showreel-1">
              Begin the reel
              <ArrowDown aria-hidden="true" />
            </a>
          </div>
        </section>

        <nav className={styles.reelRail} aria-label="Showreel chapters">
          {demoProjects.map((project, index) => (
            <a key={project.slug} href={`#showreel-${index + 1}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {project.title}
            </a>
          ))}
        </nav>

        {demoProjects.map((project, index) => (
          <section
            key={project.slug}
            id={`showreel-${index + 1}`}
            className={styles.reelChapter}
            style={{ "--project-accent": project.accent } as React.CSSProperties}
          >
            <Image
              src={project.image}
              alt={`${project.title} website preview`}
              fill
              sizes="100vw"
              className={styles.coverImage}
            />
            <div className={styles.reelShade} />
            <div className={styles.reelMeta}>
              <p>
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(demoProjects.length).padStart(2, "0")}
              </p>
              <h2>{project.title}</h2>
              <span>{project.category}</span>
            </div>
            <div className={styles.reelNote}>
              <p>{project.description}</p>
              <small>{project.contribution}</small>
              <ProjectLink project={project} inverse />
            </div>
          </section>
        ))}

        <HybridStudioTail />
      </main>
    </div>
  );
}

function IndexConcept() {
  const [selectedSlug, setSelectedSlug] = useState(demoProjects[0].slug);
  const selected =
    demoProjects.find((project) => project.slug === selectedSlug) ??
    demoProjects[0];

  return (
    <div className={`${styles.conceptRoot} ${styles.indexRoot}`}>
      <PaperShaderBackground />
      <ConceptBar active="index" />
      <main className={styles.indexMain}>
        <div className={styles.indexHeader}>
          <p>Stephen.Tech / Work index</p>
          <h1>Built to be looked at. Built to work.</h1>
          <span>
            Design demonstrations and production systems across five different
            industries.
          </span>
        </div>

        <div className={styles.indexLayout}>
          <div className={styles.indexList}>
            {demoProjects.map((project, index) => (
              <button
                key={project.slug}
                type="button"
                aria-pressed={project.slug === selected.slug}
                onClick={() => setSelectedSlug(project.slug)}
                onFocus={() => setSelectedSlug(project.slug)}
                onMouseEnter={() => setSelectedSlug(project.slug)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{project.title}</strong>
                <small>{project.category}</small>
                <ArrowUpRight aria-hidden="true" />
              </button>
            ))}
          </div>

          <aside className={styles.indexPreview} aria-live="polite">
            <div className={styles.indexPreviewImage}>
              <Image
                src={selected.image}
                alt={`${selected.title} website preview`}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 56vw"
                className={styles.coverImage}
              />
            </div>
            <div className={styles.indexPreviewCopy}>
              <div>
                <p>{selected.eyebrow}</p>
                <h2>{selected.title}</h2>
              </div>
              <div>
                <span>{selected.description}</span>
                <small>{selected.contribution}</small>
                <ProjectLink project={selected} />
              </div>
            </div>
          </aside>
        </div>

        <HybridStudioTail />
      </main>
    </div>
  );
}

function CabinetConcept() {
  const [selectedSlug, setSelectedSlug] = useState(demoProjects[0].slug);
  const selectedIndex = useMemo(
    () => demoProjects.findIndex((project) => project.slug === selectedSlug),
    [selectedSlug],
  );
  const selected = demoProjects[selectedIndex] ?? demoProjects[0];

  return (
    <div className={`${styles.conceptRoot} ${styles.cabinetRoot}`}>
      <PaperShaderBackground />
      <ConceptBar active="cabinet" />
      <main className={styles.cabinetMain}>
        <div className={styles.cabinetIntro}>
          <div>
            <p>Stephen.Tech / Design cabinet</p>
            <h1>A collection of working worlds.</h1>
          </div>
          <span>
            Five live demonstrations, each tuned to a different audience,
            atmosphere, and commercial job.
          </span>
        </div>

        <div className={styles.cabinetGrid}>
          {demoProjects.map((project, index) => {
            const isSelected = project.slug === selected.slug;
            return (
              <motion.button
                layout
                key={project.slug}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedSlug(project.slug)}
                className={`${styles.specimen} ${styles[`specimen${index + 1}`]} ${
                  isSelected ? styles.selectedSpecimen : ""
                }`}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={project.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.coverImage}
                />
                <div className={styles.specimenShade} />
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{project.title}</strong>
                <small>{project.category}</small>
              </motion.button>
            );
          })}
        </div>

        <motion.section
          key={selected.slug}
          className={styles.cabinetDetail}
          initial={{ opacity: 0.65 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          aria-live="polite"
        >
          <p>Selected specimen</p>
          <h2>{selected.title}</h2>
          <div>
            <span>{selected.description}</span>
            <small>{selected.contribution}</small>
          </div>
          <ProjectLink project={selected} />
        </motion.section>

        <HybridStudioTail />
      </main>
    </div>
  );
}

export function ConceptExperience({ concept }: { concept: ConceptSlug }) {
  switch (concept) {
    case "orbit":
      return <OrbitConcept />;
    case "showreel":
      return <ShowreelConcept />;
    case "index":
      return <IndexConcept />;
    case "cabinet":
      return <CabinetConcept />;
  }
}

export function ConceptGallery() {
  return (
    <div className={`${styles.conceptRoot} ${styles.galleryRoot}`}>
      <PaperShaderBackground />
      <ConceptBar />
      <main className={styles.galleryMain}>
        <div className={styles.galleryIntro}>
          <p>Stephen.Tech / Design study</p>
          <h1>Four ways to put the work first.</h1>
          <span>
            The identity stays fixed—glass, Inter and Geist, warm shader light.
            What changes is the way visitors discover and understand the work.
          </span>
        </div>
        <div className={styles.galleryList}>
          {conceptLinks.map((concept, index) => (
            <Link key={concept.slug} href={`/concepts/${concept.slug}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{concept.name}</strong>
              <small>{concept.note}</small>
              <ArrowUpRight aria-hidden="true" />
            </Link>
          ))}
        </div>
        <div className={styles.galleryRecommendation}>
          <p>Recommended starting point</p>
          <strong>Orbit for the homepage. Index for the full archive.</strong>
          <span>
            Orbit supplies the memorable first viewport; Index scales cleanly
            as the portfolio grows.
          </span>
        </div>
      </main>
    </div>
  );
}
