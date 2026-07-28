import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { demoProjects } from "@/components/concepts/projects";

interface ImpactHeroProps {
    onContactClick: () => void;
}

export function ImpactHero({ onContactClick }: ImpactHeroProps) {
    const featuredProject = demoProjects[0];

    return (
        <section className="relative min-h-screen w-full overflow-hidden">
            <div className="relative flex min-h-screen items-center px-4 pb-8 pt-24 sm:px-6 md:px-12 md:pb-12 md:pt-28">
                <motion.div
                    initial={false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                    className="mx-auto w-full max-w-[90rem]"
                >
                    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-[#0a0a0f]/58 p-4 shadow-2xl backdrop-blur-2xl sm:p-6 lg:p-8">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.07] via-transparent to-transparent" />

                        <div className="relative z-10 grid items-center gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">
                          <div className="px-2 py-2 sm:px-4 lg:px-6">
                            <motion.div
                                initial={false}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.3 }}
                            >
                                <p className="mb-3 text-xs font-semibold tracking-[0.08em] text-primary sm:mb-5 sm:text-sm" style={{ fontFamily: "var(--font-sans)" }}>
                                    Independent design, development, and automation
                                </p>
                            </motion.div>

                            <motion.h1
                                initial={false}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.2, delay: 0.5, type: "spring" }}
                                className="mb-4 max-w-[12ch] text-[2.65rem] sm:text-5xl md:mb-6 md:text-6xl lg:text-[4.65rem]"
                                style={{
                                    fontFamily: "var(--font-heading)",
                                    fontWeight: 700,
                                    lineHeight: 0.98,
                                    letterSpacing: "-0.04em",
                                }}
                            >
                                <motion.span
                                    initial={false}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    className="block"
                                >
                                    Distinct digital experiences.
                                </motion.span>
                                <motion.span
                                    initial={false}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                    className="mt-1 block text-primary sm:mt-2"
                                >
                                    Built to do real work.
                                </motion.span>
                            </motion.h1>

                            <motion.p
                                initial={false}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.7 }}
                                className="mb-5 max-w-xl text-sm leading-6 text-slate-300 sm:text-base md:mb-7 md:text-lg md:leading-7"
                                style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
                            >
                                Authored websites paired with the lead generation,
                                AI follow-up, and automation systems behind them.
                            </motion.p>

                            <motion.div
                                initial={false}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.9 }}
                                className="flex flex-wrap gap-3 sm:gap-4"
                            >
                                <button
                                    onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
                                    className="group relative min-h-11 overflow-hidden rounded-full bg-primary px-5 py-3 text-[#0a0a0f] transition-all duration-500 hover:bg-amber-400 sm:px-6"
                                    style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2 text-xs tracking-[0.08em] sm:text-sm">
                                        EXPLORE THE WORK
                                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-500" />
                                    </span>
                                </button>

                                <button
                                    onClick={onContactClick}
                                    className="group min-h-11 rounded-full border border-white/16 bg-white/[0.06] px-5 py-3 text-white transition-all duration-500 hover:bg-white/[0.1] sm:px-6"
                                    style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
                                >
                                    <span className="flex items-center justify-center gap-2 text-xs tracking-[0.08em] sm:text-sm">
                                        BOOK A CONSULTATION
                                    </span>
                                </button>
                            </motion.div>
                          </div>

                          <motion.a
                            href={featuredProject.url}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`View ${featuredProject.title} live website`}
                            initial={false}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="group relative min-h-[13.5rem] overflow-hidden rounded-2xl border border-white/14 bg-[#0D0E15] sm:min-h-[20rem] lg:min-h-[34rem]"
                          >
                            <Image
                              src={featuredProject.image}
                              alt={`${featuredProject.title} website preview`}
                              fill
                              priority
                              sizes="(max-width: 1024px) 100vw, 58vw"
                              className="object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-black/10" />
                            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-5 sm:p-7">
                              <div>
                                <p className="mb-2 text-[0.65rem] font-semibold tracking-[0.14em] text-primary">
                                  FEATURED LIVE WORK
                                </p>
                                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                                  {featuredProject.title}
                                </h2>
                                <p className="mt-1 text-xs text-white/64 sm:text-sm">
                                  {featuredProject.category}
                                </p>
                              </div>
                              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-[#0a0a0f] transition group-hover:-translate-y-1 sm:h-12 sm:w-12">
                                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                              </span>
                            </div>
                          </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
