"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { demoProjects } from "./concepts/projects";

export function DesignDemos() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="work" className="relative overflow-hidden px-4 py-24 sm:px-6 md:px-12 md:py-36">
      <div className="mx-auto max-w-[90rem]">
        <div className="mb-14 grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-semibold text-primary">
              Selected design demonstrations
            </p>
            <h2 className="max-w-[12ch] text-5xl font-bold leading-[0.96] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl">
              Five worlds. One practice.
            </h2>
          </div>
          <div className="max-w-xl lg:justify-self-end">
            <p className="text-base leading-7 text-white/64 md:text-lg">
              Interiors, music, product, service, and fashion—each project uses
              a different visual language while keeping the experience clear
              and buildable.
            </p>
            <Link
              href="/concepts"
              className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/16 bg-white/[0.06] px-5 py-3 text-xs font-semibold tracking-[0.12em] text-white transition hover:border-white/30 hover:bg-white/[0.11] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              REVIEW 4 PORTFOLIO DIRECTIONS
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="grid auto-rows-[18rem] gap-4 md:grid-cols-12 md:auto-rows-[22rem]">
          {demoProjects.map((project, index) => {
            const gridClass =
              index === 0
                ? "md:col-span-7 md:row-span-2"
                : index === 1
                  ? "md:col-span-5"
                  : index === 2
                    ? "md:col-span-5"
                    : "md:col-span-6";

            return (
              <motion.article
                key={project.slug}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden rounded-2xl border border-white/12 bg-[#0D0E15] ${gridClass}`}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} website preview`}
                  fill
                  sizes={
                    index === 0
                      ? "(max-width: 768px) 100vw, 58vw"
                      : "(max-width: 768px) 100vw, 45vw"
                  }
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/12 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-5 sm:p-7">
                  <div>
                    <p className="mb-2 text-xs font-semibold tracking-[0.12em] text-white/64">
                      {project.category.toUpperCase()}
                    </p>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      {project.title}
                    </h3>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title} live website`}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-[#0a0a0f] transition hover:-translate-y-1 hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
