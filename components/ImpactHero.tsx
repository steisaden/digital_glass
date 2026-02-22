import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import ThreeDBackground from "./ThreeDBg";
import { TiltWidget } from "./TiltWidget";
import { GlassCard } from "./GlassCard";

export function ImpactHero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <ThreeDBackground />
                <div className="absolute inset-0 bg-[#0D0E15]/70 backdrop-blur-[2px]" />
            </div>

            {/* Floating Particles Effect */}
            <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary/20 rounded-full"
                        initial={{
                            x: (i * 137) % (typeof window !== 'undefined' ? window.innerWidth : 1000),
                            y: (i * 271) % (typeof window !== 'undefined' ? window.innerHeight : 1000),
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: 3 + ((i * 17) % 20) / 10,
                            repeat: Infinity,
                            delay: ((i * 11) % 20) / 10,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                    className="max-w-6xl w-full"
                >
                    {/* Glass Card */}
                    <div className="relative backdrop-blur-2xl bg-white/[0.03] border border-white/10 rounded-3xl p-12 md:p-16 shadow-2xl">
                        {/* Subtle gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-3xl" />

                        {/* Content */}
                        <div className="relative z-10">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.3 }}
                            >
                                <p className="text-primary tracking-[0.3em] uppercase text-sm mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
                                    Digital Sales Center
                                </p>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.2, delay: 0.5, type: "spring" }}
                                className="text-5xl md:text-6xl lg:text-7xl mb-8"
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
                                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00E1D9] via-[#4A00E0] to-[#FF007F] animate-pulse shadow-primary/20"
                                >
                                    Immersive
                                </motion.span>
                                <br />
                                <motion.span
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                    className="inline-block"
                                >
                                    Digital Experiences
                                </motion.span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.7 }}
                                className="text-slate-300 text-xl md:text-2xl mb-12 max-w-2xl"
                                style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
                            >
                                Crafting luxury digital environments for high-end real estate developers
                                and asset managers. Where technology meets elegance.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.9 }}
                                className="flex flex-col sm:flex-row gap-6"
                            >
                                <button
                                    className="group relative px-10 py-5 bg-primary hover:bg-amber-400 text-[#0a0a0f] rounded-2xl transition-all duration-500 overflow-hidden"
                                    style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
                                >
                                    <span className="relative z-10 flex items-center gap-3 justify-center">
                                        Explore Portfolio
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </button>

                                <button
                                    className="group px-10 py-5 glass-panel hover:bg-white/[0.1] text-white rounded-2xl transition-all duration-500"
                                    style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
                                >
                                    <span className="flex items-center gap-3 justify-center">
                                        View Services
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500" />
                                    </span>
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Floating Stats Widgets */}
            <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 z-20 pointer-events-auto">
                <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }}>
                    <TiltWidget>
                        <GlassCard className="p-6 md:p-8 border border-[#00E1D9]/30 !rounded-2xl shadow-[0_0_30px_rgba(0,225,217,0.15)]">
                            <h4 className="text-4xl font-bold text-[#00E1D9] mb-1">340%</h4>
                            <p className="text-sm tracking-wider text-slate-300 font-medium uppercase" style={{ fontFamily: 'var(--font-sans)' }}>Avg. ROI</p>
                        </GlassCard>
                    </TiltWidget>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }}>
                    <TiltWidget>
                        <GlassCard className="p-6 md:p-8 border border-[#FF007F]/30 !rounded-2xl shadow-[0_0_30px_rgba(255,0,127,0.15)]">
                            <h4 className="text-4xl font-bold text-[#FF007F] mb-1">8</h4>
                            <p className="text-sm tracking-wider text-slate-300 font-medium uppercase" style={{ fontFamily: 'var(--font-sans)' }}>Fortune 500s</p>
                        </GlassCard>
                    </TiltWidget>
                </motion.div>
            </div>
        </section>
    );
}
