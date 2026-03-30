import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface ImpactHeroProps {
    onContactClick: () => void;
}

export function ImpactHero({ onContactClick }: ImpactHeroProps) {
    return (
        <section className="relative min-h-screen w-full overflow-hidden">
            <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 pt-28 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                    className="max-w-6xl w-full"
                >
                    <div className="relative backdrop-blur-2xl bg-white/[0.03] border border-white/10 rounded-3xl p-6 sm:p-8 md:p-16 shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-3xl" />

                        <div className="relative z-10">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.3 }}
                            >
                                <p className="text-primary tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-4 sm:mb-6" style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}>
                                    Revenue Systems For Growth-Focused Businesses
                                </p>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.2, delay: 0.5, type: "spring" }}
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 md:mb-8"
                                style={{
                                    fontFamily: "var(--font-heading)",
                                    fontWeight: 700,
                                    lineHeight: 1.06,
                                    letterSpacing: "-0.03em",
                                }}
                            >
                                <motion.span
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    className="inline-block"
                                >
                                    AI systems, conversion websites, and automation infrastructure
                                </motion.span>
                                <br />
                                <motion.span
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#ff9d00] via-[#beae60] to-[#d7cbc6]"
                                >
                                    that help service businesses and operators generate more leads and reduce manual work.
                                </motion.span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.7 }}
                                className="text-slate-300 text-lg md:text-2xl mb-8 md:mb-12 max-w-3xl leading-relaxed"
                                style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
                            >
                                We build lead generation websites, AI follow-up systems, and custom automations that turn traffic into booked calls, keep prospects engaged, and remove repetitive operational work from your team.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.8 }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 md:mb-12"
                            >
                                {[
                                    "Capture more qualified leads from mobile and desktop traffic.",
                                    "Automate follow-up so prospects do not go cold after first contact.",
                                    "Replace admin-heavy workflows with custom systems your team can actually use.",
                                ].map((item) => (
                                    <div key={item} className="glass-panel rounded-2xl px-5 py-4 text-sm text-slate-200">
                                        {item}
                                    </div>
                                ))}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.9 }}
                                className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                            >
                                <button
                                    onClick={() => {
                                        const servicesSection = document.getElementById("what-we-build");
                                        servicesSection?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                    className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-primary hover:bg-amber-400 text-[#0a0a0f] rounded-2xl transition-all duration-500 overflow-hidden"
                                    style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
                                >
                                    <span className="relative z-10 flex items-center gap-3 justify-center text-sm md:text-base">
                                        Get Your AI System Now
                                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-500" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </button>

                                <button
                                    onClick={onContactClick}
                                    className="group px-8 sm:px-10 py-4 sm:py-5 glass-panel hover:bg-white/[0.1] text-white rounded-2xl transition-all duration-500"
                                    style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
                                >
                                    <span className="flex items-center gap-3 justify-center text-sm md:text-base">
                                        Book a Consultation
                                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-500" />
                                    </span>
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
