import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { TiltWidget } from "./TiltWidget";
import { GlassCard } from "./GlassCard";

export function ImpactHero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden">

            {/* Content */}
            <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 pt-28 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                    className="max-w-6xl w-full"
                >
                    {/* Glass Card */}
                    <div className="relative backdrop-blur-2xl bg-white/[0.03] border border-white/10 rounded-3xl p-6 sm:p-8 md:p-16 shadow-2xl">
                        {/* Subtle gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-3xl" />

                        {/* Content */}
                        <div className="relative z-10">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.3 }}
                            >
                                <p className="text-primary tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-4 sm:mb-6" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                                    Digital Authority
                                </p>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.2, delay: 0.5, type: "spring" }}
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 md:mb-8"
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontWeight: 700,
                                    lineHeight: 1.1,
                                    letterSpacing: '-0.03em'
                                }}
                            >
                                <motion.span
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    className="inline-block"
                                >
                                    Stop Losing
                                </motion.span>
                                <br />
                                <motion.span
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#ff9d00] via-[#beae60] to-[#d7cbc6] animate-pulse shadow-primary/20"
                                >
                                    High-Ticket Clients.
                                </motion.span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.7 }}
                                className="text-slate-300 text-lg md:text-2xl mb-8 md:mb-12 max-w-2xl leading-relaxed"
                                style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
                            >
                                Your digital presence is either generating revenue or actively costing you deals.
                                We build authoritative websites, elite infrastructure, and custom AI systems that convert traffic into high-value equity.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.9 }}
                                className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                            >
                                <button
                                    onClick={() => {
                                        const servicesSection = document.getElementById('services');
                                        servicesSection?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-primary hover:bg-amber-400 text-[#0a0a0f] rounded-2xl transition-all duration-500 overflow-hidden"
                                    style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
                                >
                                    <span className="relative z-10 flex items-center gap-3 justify-center text-sm md:text-base">
                                        View Solutions
                                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-500" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </button>

                                <button
                                    onClick={() => {
                                        const pricingSection = document.getElementById('pricing');
                                        pricingSection?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="group px-8 sm:px-10 py-4 sm:py-5 glass-panel hover:bg-white/[0.1] text-white rounded-2xl transition-all duration-500"
                                    style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
                                >
                                    <span className="flex items-center gap-3 justify-center text-sm md:text-base">
                                        See Pricing
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
