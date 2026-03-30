import { motion } from "motion/react";
import { ArrowRight, Search, Cog, Rocket } from "lucide-react";
import { GlassCard } from "./GlassCard";

const steps = [
    {
        icon: Search,
        title: "1. Audit the bottleneck",
        description: "We map where leads are leaking, where follow-up breaks down, and which manual tasks are slowing your team.",
    },
    {
        icon: Cog,
        title: "2. Build the system",
        description: "We design the website, AI follow-up, and automation layer around booked calls, cleaner handoffs, and less admin.",
    },
    {
        icon: Rocket,
        title: "3. Launch and optimize",
        description: "Once live, we refine the system around lead quality, response speed, and workflow efficiency so it keeps compounding.",
    },
];

interface HowItWorksProps {
    onContactClick: () => void;
}

export function HowItWorks({ onContactClick }: HowItWorksProps) {
    return (
        <section id="how-it-works" className="relative py-28 px-6 md:px-12">
            <div className="absolute inset-0 section-overlay" />

            <div className="relative max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    className="text-center mb-16"
                >
                    <p className="text-primary tracking-[0.25em] uppercase text-sm mb-4 font-bold" style={{ fontFamily: "var(--font-sans)" }}>
                        How It Works
                    </p>
                    <h2
                        className="text-4xl md:text-6xl mb-6 text-white"
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontWeight: 700,
                            letterSpacing: "-0.02em",
                        }}
                    >
                        A simple path from manual work to repeatable growth
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto" style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}>
                        Every engagement is structured to remove friction, speed up follow-up, and turn your website into a working acquisition asset.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: index * 0.12 }}
                            >
                                <GlassCard className="h-full p-8 hover:bg-white/[0.05] transition-all duration-500">
                                    <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl text-white mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed" style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}>
                                        {step.description}
                                    </p>
                                </GlassCard>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="flex justify-center">
                    <button
                        onClick={onContactClick}
                        className="group px-8 py-4 bg-primary hover:bg-amber-400 text-[#0a0a0f] rounded-2xl transition-all duration-300 inline-flex items-center gap-3"
                        style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
                    >
                        Book a Consultation
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
}
