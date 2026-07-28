"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Mail,
  MessageCircle,
} from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/app/page";
import { ConsultationModal } from "@/components/ConsultationModal";
import { DiaTextReveal } from "@/components/DiaTextReveal";
import { HeroPortfolioComposition } from "@/components/HeroPortfolioComposition";
import { PaperShaderBackground } from "@/components/PaperShaderBackground";
import { caseStudies } from "@/components/TheCollection";
import { demoProjects } from "@/components/concepts/projects";
import styles from "./OrbitHome.module.css";

const CaseStudyModal = dynamic(
  () =>
    import("@/components/CaseStudyModal").then((module) => module.CaseStudyModal),
  { ssr: false },
);

const proofThumbnails: Record<string, string> = {
  "Goddess Care Co": "/proof-thumbnails/goddess-care.webp",
  Monumentaal: "/proof-thumbnails/monumentaal.webp",
  "Internal Ops Automation": "/proof-thumbnails/internal-ops.webp",
};

const offers = [
  {
    number: "01",
    name: "Lead-generation website",
    price: "From $799",
    promise: "A focused, mobile-first site with one clear conversion path.",
    scope: ["Offer clarity", "Forms + scheduling", "Technical SEO", "Launch"],
  },
  {
    number: "02",
    name: "AI follow-up system",
    price: "From $1,500",
    promise: "Nurture and qualification flows that keep good leads moving.",
    scope: ["Email / SMS", "Qualification", "CRM handoff", "Visibility"],
  },
  {
    number: "03",
    name: "Custom automation",
    price: "Scoped quote",
    promise: "Connected tools and internal workflows with less repeated admin.",
    scope: ["Internal tools", "Integrations", "AI intake", "Operations"],
  },
];

const steps = [
  {
    number: "01",
    title: "Find the friction",
    copy: "We identify the point where attention, inquiries, or operator time is being lost.",
  },
  {
    number: "02",
    title: "Build the shortest useful system",
    copy: "The design, follow-up, and automation are scoped around the job they need to do.",
  },
  {
    number: "03",
    title: "Launch with a clean handoff",
    copy: "You get a working build, launch support, and documentation your team can use.",
  },
];

export function OrbitHome() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(
    null,
  );
  const [isContactOpen, setIsContactOpen] = useState(false);
  const preloadedImages = useRef<HTMLImageElement[]>([]);
  const reduceMotion = useReducedMotion();
  const selected = demoProjects[selectedIndex];
  const openContact = () => setIsContactOpen(true);

  useEffect(() => {
    const preloadProjectImages = () => {
      preloadedImages.current = demoProjects.slice(1).map((project) => {
        const image = new window.Image();
        image.decoding = "async";
        image.src = project.image;
        void image.decode?.().catch(() => undefined);
        return image;
      });
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(preloadProjectImages, {
        timeout: 1200,
      });
      return () => {
        window.cancelIdleCallback(idleId);
        preloadedImages.current = [];
      };
    }

    const timeoutId = setTimeout(preloadProjectImages, 500);
    return () => {
      clearTimeout(timeoutId);
      preloadedImages.current = [];
    };
  }, []);

  return (
    <>
      <PaperShaderBackground />

      <div className={styles.root}>
        <a className={styles.skipLink} href="#main-content">
          Skip to content
        </a>

        <header className={styles.header}>
          <div className={styles.headerInner}>
            <a className={styles.brand} href="#top" aria-label="Stephen.Tech home">
              Stephen<span>.Tech</span>
            </a>
            <nav className={styles.nav} aria-label="Primary navigation">
              <a href="#work">Work</a>
              <a href="#services">Services</a>
              <a href="#proof">Proof</a>
            </nav>
            <button className={styles.headerCta} type="button" onClick={openContact}>
              Book a consultation
              <ArrowUpRight aria-hidden="true" />
            </button>
          </div>
        </header>

        <main id="main-content" className={styles.main}>
          <section id="top" className={styles.hero} aria-labelledby="hero-title">
            <div className={styles.heroLead}>
              <p className={styles.eyebrow}>Design, development + automation</p>
              <h1 id="hero-title">
                Distinct websites.
                <br />
                Shorter paths to yes.
              </h1>
              <p className={styles.heroCopy}>
                Stephen designs digital experiences that earn attention, qualify
                intent, and connect the follow-up behind the click.
              </p>
              <div className={styles.heroActions}>
                <button type="button" className={styles.primaryAction} onClick={openContact}>
                  Discuss your project
                  <ArrowUpRight aria-hidden="true" />
                </button>
                <a className={styles.textAction} href="#work">
                  See selected work
                  <ArrowDownRight aria-hidden="true" />
                </a>
              </div>
            </div>
            <HeroPortfolioComposition />
            <dl className={styles.fitLine}>
              <div>
                <dt>Best fit</dt>
                <dd>Founder-led and service businesses</dd>
              </div>
              <div>
                <dt>Useful when</dt>
                <dd>Your site or follow-up is losing intent</dd>
              </div>
              <div>
                <dt>Starting point</dt>
                <dd>$799 for a focused website</dd>
              </div>
            </dl>
          </section>

          <section id="work" className={styles.work} aria-labelledby="work-title">
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>Selected design demonstrations</p>
              <h2 id="work-title">Five industries. Five different visual worlds.</h2>
              <span>
                The system stays disciplined. The art direction changes with the
                subject.
              </span>
            </div>

            <div className={styles.workLayout}>
              <div className={styles.projectStage}>
                <AnimatePresence initial={false}>
                  <motion.div
                    key={selected.slug}
                    className={styles.projectImage}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            clipPath: "inset(3% 3% 3% 3% round 24px)",
                          }
                    }
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            opacity: 1,
                            clipPath: "inset(0% 0% 0% 0% round 24px)",
                          }
                    }
                    exit={
                      reduceMotion
                        ? undefined
                        : {
                            opacity: 0,
                            clipPath: "inset(2% 2% 2% 2% round 24px)",
                          }
                    }
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={selected.image}
                      alt={`${selected.title} website preview`}
                      fill
                      priority={selectedIndex === 0}
                      fetchPriority={selectedIndex === 0 ? "high" : "auto"}
                      sizes="(max-width: 760px) 100vw, 76vw"
                      className={styles.coverImage}
                    />
                    <div className={styles.imageShade} />
                    <span className={styles.projectCount} aria-live="polite">
                      {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                      {String(demoProjects.length).padStart(2, "0")}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className={styles.projectSelectors} aria-label="Select a project">
                {demoProjects.map((project, index) => (
                  <button
                    key={project.slug}
                    type="button"
                    aria-pressed={selectedIndex === index}
                    onClick={() => setSelectedIndex(index)}
                    className={selectedIndex === index ? styles.selectedProject : undefined}
                    style={
                      { "--project-accent": project.accent } as React.CSSProperties
                    }
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{project.title}</strong>
                    <small>{project.category}</small>
                  </button>
                ))}
              </div>

              <div className={styles.projectMeta}>
                <div>
                  <p>{selected.eyebrow}</p>
                  <h3>{selected.title}</h3>
                </div>
                <p>{selected.description}</p>
                <a href={selected.url} target="_blank" rel="noreferrer">
                  View live website
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>

          <section className={styles.qualifier} aria-labelledby="qualifier-title">
            <div>
              <p className={styles.eyebrow}>Engagement at a glance</p>
              <h2 id="qualifier-title">Know the lane before the call.</h2>
            </div>
            {offers.map((offer) => (
              <div key={offer.name} className={styles.qualifierItem}>
                <span>{offer.name}</span>
                <strong>{offer.price}</strong>
              </div>
            ))}
            <button type="button" onClick={openContact}>
              Check project fit
              <ArrowRight aria-hidden="true" />
            </button>
          </section>

          <section id="services" className={styles.services} aria-labelledby="services-title">
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>Services</p>
              <h2 id="services-title">One clear outcome per engagement.</h2>
              <span>
                Start with the bottleneck. Add complexity only when it earns its
                place.
              </span>
            </div>
            <div className={styles.serviceLedger}>
              {offers.map((offer) => (
                <article key={offer.name} className={styles.serviceRow}>
                  <span className={styles.rowNumber}>{offer.number}</span>
                  <div className={styles.serviceName}>
                    <h3>{offer.name}</h3>
                    <p>{offer.promise}</p>
                  </div>
                  <ul>
                    {offer.scope.map((item) => (
                      <li key={item}>
                        <Check aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <strong className={styles.price}>{offer.price}</strong>
                  <button
                    type="button"
                    onClick={openContact}
                    aria-label={`Discuss ${offer.name}`}
                  >
                    <ArrowUpRight aria-hidden="true" />
                  </button>
                </article>
              ))}
            </div>
          </section>

          <section id="proof" className={styles.proof} aria-labelledby="proof-title">
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>Proof in working systems</p>
              <h2 id="proof-title">Beyond the surface.</h2>
              <span>
                Client builds framed around the problem, the system, and the
                operational result.
              </span>
            </div>
            <div className={styles.proofLedger}>
              {caseStudies.map((project, index) => (
                <article key={project.title} className={styles.proofRow}>
                  <span className={styles.rowNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className={styles.proofThumb}>
                    <Image
                      src={proofThumbnails[project.title] ?? project.image}
                      alt=""
                      fill
                      loading="eager"
                      fetchPriority="low"
                      sizes="(max-width: 760px) 92px, 150px"
                      className={styles.coverImage}
                    />
                  </div>
                  <div className={styles.proofTitle}>
                    <p>{project.category}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <p className={styles.proofOutcome}>{project.outcomeHeadline}</p>
                  <ul className={styles.proofSignals}>
                    {project.resultMetrics.slice(0, 2).map((metric) => (
                      <li key={metric}>{metric}</li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => setSelectedCaseStudy(project)}
                    aria-label={`View ${project.title} build notes`}
                  >
                    Build notes
                    <ArrowUpRight aria-hidden="true" />
                  </button>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.process} aria-labelledby="process-title">
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>Working together</p>
              <h2 id="process-title">A direct path from friction to launch.</h2>
            </div>
            <div className={styles.processGrid}>
              {steps.map((step) => (
                <article key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </article>
              ))}
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <div className={styles.footerLead}>
            <p className={styles.eyebrow}>Have a live opportunity?</p>
            <h2>
              <DiaTextReveal
                text="Bring the bottleneck. Leave with a useful next step."
                colors={[
                  "var(--orbit-ember)",
                  "var(--orbit-gold)",
                  "var(--orbit-pearl)",
                  "var(--orbit-text)",
                ]}
                textColor="var(--orbit-text)"
                pendingTextColor="var(--orbit-text-pending)"
                duration={1.25}
                delay={0.1}
                startOnView
                once
                data-testid="closing-text-reveal"
              />
            </h2>
            <button type="button" className={styles.primaryAction} onClick={openContact}>
              Book a consultation
              <ArrowUpRight aria-hidden="true" />
            </button>
          </div>
          <div className={styles.footerContact}>
            <p>
              Share what you are building, what is not working, and what a
              successful launch needs to make possible.
            </p>
            <a href="mailto:stephen.tech139@gmail.com?subject=Stephen.Tech%20project%20inquiry">
              <Mail aria-hidden="true" />
              Email Stephen
            </a>
            <a
              href="https://wa.me/19713579090?text=Hi%20Stephen%2C%20I%27d%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle aria-hidden="true" />
              WhatsApp
            </a>
          </div>
          <div className={styles.footerBase}>
            <span>Stephen.Tech</span>
            <span>Design / Development / Automation</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </footer>
      </div>

      {selectedCaseStudy ? (
        <CaseStudyModal
          isOpen
          onClose={() => setSelectedCaseStudy(null)}
          project={selectedCaseStudy}
        />
      ) : null}
      <ConsultationModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
