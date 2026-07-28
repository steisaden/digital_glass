"use client";

import Image from "next/image";
import { Pause, Play } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FocusEvent,
} from "react";
import { demoProjects } from "@/components/concepts/projects";
import styles from "./HeroPortfolioComposition.module.css";

const featuredProjects = [
  demoProjects[0],
  demoProjects[3],
  demoProjects[2],
];
const deviceFadeEase = [0.16, 1, 0.3, 1] as const;
const deviceFadeDuration = 0.44;

export function HeroPortfolioComposition() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isRotationPaused, setIsRotationPaused] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);
  const compositionRef = useRef<HTMLElement>(null);
  const isInView = useInView(compositionRef, { amount: 0.25 });
  const reduceMotion = useReducedMotion();
  const activeProject = featuredProjects[activeIndex];

  useEffect(() => {
    const updateVisibility = () => setIsPageVisible(!document.hidden);
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () =>
      document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  useEffect(() => {
    if (
      reduceMotion ||
      !isInView ||
      !isPageVisible ||
      isInteracting ||
      isRotationPaused
    ) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % featuredProjects.length);
    }, 5600);

    return () => window.clearInterval(intervalId);
  }, [
    isInView,
    isInteracting,
    isPageVisible,
    isRotationPaused,
    reduceMotion,
  ]);

  const handleBlur = (event: FocusEvent<HTMLElement>) => {
    if (
      !event.currentTarget.contains(event.relatedTarget as Node | null)
    ) {
      setIsInteracting(false);
    }
  };

  return (
    <figure
      ref={compositionRef}
      className={styles.composition}
      style={
        {
          "--hero-project-accent": activeProject.accent,
        } as CSSProperties
      }
      aria-label="Responsive portfolio demonstration"
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      onFocusCapture={() => setIsInteracting(true)}
      onBlurCapture={handleBlur}
    >
      <div className={styles.stage}>
        <span className={`${styles.deviceLabel} ${styles.browserLabel}`}>
          Website
        </span>

        <div className={styles.browser}>
          <div className={styles.browserBar} aria-hidden="true">
            <span className={styles.windowDots}>
              <i />
              <i />
              <i />
            </span>
            <span className={styles.address}>
              stephen.tech / work / {activeProject.slug}
            </span>
            <span className={styles.liveMark}>Live build</span>
          </div>

          <div className={styles.browserViewport}>
            <AnimatePresence initial={false} mode="sync">
              <motion.div
                key={`${activeProject.slug}-browser`}
                className={styles.mediaLayer}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        scale: 1.018,
                      }
                }
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: 0,
                        scale: 0.992,
                      }
                }
                transition={{
                  duration: reduceMotion ? 0 : deviceFadeDuration,
                  ease: deviceFadeEase,
                }}
              >
                <Image
                  src={activeProject.image}
                  alt={`${activeProject.title} desktop website`}
                  fill
                  priority={activeIndex === 0}
                  fetchPriority={activeIndex === 0 ? "high" : "auto"}
                  sizes="(max-width: 760px) 84vw, (max-width: 1080px) 52vw, 46vw"
                  className={styles.browserImage}
                />
              </motion.div>
            </AnimatePresence>

            <motion.span
              key={`${activeProject.slug}-cursor`}
              className={styles.cursor}
              aria-hidden="true"
              initial={reduceMotion ? false : { opacity: 0, x: 0, y: 0 }}
              animate={
                reduceMotion
                  ? { opacity: 0 }
                  : {
                      opacity: [0, 0.9, 0.9, 0],
                      x: [0, 82, 154, 104],
                      y: [0, 42, -12, 24],
                    }
              }
              transition={{
                duration: 3.8,
                delay: 0.7,
                times: [0, 0.15, 0.78, 1],
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          </div>
        </div>

        <span className={`${styles.deviceLabel} ${styles.phoneLabel}`}>
          Mobile
        </span>

        <div className={styles.phone}>
          <span className={styles.phoneNotch} aria-hidden="true" />
          <div className={styles.phoneScreen}>
            <AnimatePresence initial={false} mode="sync">
              <motion.div
                key={`${activeProject.slug}-phone`}
                className={styles.phoneMedia}
                initial={
                  reduceMotion ? false : { opacity: 0, scale: 1.018 }
                }
                animate={{ opacity: 1, scale: 1 }}
                exit={
                  reduceMotion
                    ? undefined
                    : { opacity: 0, scale: 0.992 }
                }
                transition={{
                  duration: reduceMotion ? 0 : deviceFadeDuration,
                  ease: deviceFadeEase,
                }}
              >
                <motion.div
                  className={styles.phoneMediaPan}
                  initial={false}
                  animate={
                    reduceMotion
                      ? { y: "0%" }
                      : { y: ["0%", "0%", "-16%"] }
                  }
                  transition={{
                    duration: reduceMotion ? 0 : 4.4,
                    times: [0, 0.3, 1],
                    ease: deviceFadeEase,
                  }}
                >
                  <Image
                    src={activeProject.image}
                    alt={`${activeProject.title} mobile app view`}
                    fill
                    sizes="(max-width: 760px) 25vw, 13vw"
                    className={styles.phoneImage}
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
            <span className={styles.pwaBadge}>PWA</span>
          </div>
          <span className={styles.homeIndicator} aria-hidden="true" />
        </div>

        <div className={styles.projectIdentity}>
          <span aria-hidden="true" />
          <strong>{activeProject.title}</strong>
          <small>{activeProject.eyebrow}</small>
        </div>

        <div className={styles.controls} aria-label="Choose a featured project">
          {featuredProjects.map((project, index) => (
            <button
              key={project.slug}
              type="button"
              className={index === activeIndex ? styles.activeControl : undefined}
              aria-pressed={index === activeIndex}
              aria-label={`Show ${project.title}`}
              onClick={() => setActiveIndex(index)}
            >
              {String(index + 1).padStart(2, "0")}
            </button>
          ))}
          <button
            type="button"
            className={styles.rotationControl}
            aria-label={
              reduceMotion
                ? "Automatic rotation disabled by reduced-motion preference"
                : isRotationPaused
                  ? "Resume automatic project rotation"
                  : "Pause automatic project rotation"
            }
            disabled={Boolean(reduceMotion)}
            onClick={() => setIsRotationPaused((paused) => !paused)}
          >
            {isRotationPaused ? (
              <Play aria-hidden="true" />
            ) : (
              <Pause aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <figcaption className={styles.promise}>
        <span>Designed to earn attention</span>
        <i aria-hidden="true" />
        <span>Built to generate action</span>
        <i aria-hidden="true" />
        <span>Installable like an app</span>
      </figcaption>
    </figure>
  );
}
