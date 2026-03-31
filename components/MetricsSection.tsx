import { motion } from "motion/react";
import { Bot, Briefcase, MousePointerClick, Workflow } from "lucide-react";
import { GlassCard } from "./GlassCard";

const metrics = [
    {
        icon: Bot,
        value: "3",
        label: "Core Revenue Systems",
        description: "Lead engine websites, AI follow-up, and custom automation",
    },
    {
        icon: MousePointerClick,
        value: "2",
        label: "Detailed Build Case Studies",
        description: "Commerce, booking, marketplace, and operational workflows",
    },
    {
        icon: Briefcase,
        value: "1",
        label: "Connected Acquisition Stack",
        description: "Website, follow-up, and operations designed to work together",
    },
    {
        icon: Workflow,
        value: "24/7",
        label: "Always-On Lead Infrastructure",
        description: "Systems built to capture, route, and nurture demand continuously",
    },
];

export function MetricsSection() {
    return (
        <section className="relative py-20 px-6 md:px-12">
            <div className="absolute inset-0 section-overlay" />

            <div className="relative max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <p className="text-primary tracking-[0.25em] uppercase text-sm mb-4 font-bold" style={{ fontFamily: "var(--font-sans)" }}>
                        Proof Of Execution
                    </p>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto" style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}>
                        Positioned around delivery capacity and operating outcomes instead of abstract luxury claims.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
                    {metrics.map((metric, index) => {
                        const Icon = metric.icon;
                        return (
                            <motion.div
                                key={metric.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <GlassCard className="h-full flex flex-col items-center justify-center text-center hover:bg-white/[0.04] hover:border-primary/30 transition-all duration-500 p-4 sm:p-8 overflow-hidden">
                                    <div className="flex justify-center mb-4 shrink-0">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                                        </div>
                                    </div>

                                    <p
                                        className="text-2xl sm:text-3xl md:text-4xl mb-2 text-primary truncate w-full"
                                        style={{
                                            fontFamily: "var(--font-serif)",
                                            fontWeight: 700,
                                        }}
                                        title={metric.value}
                                    >
                                        {metric.value}
                                    </p>

                                    <p
                                        className="text-sm sm:text-base text-white mb-2 line-clamp-2 leading-tight min-h-[40px] sm:min-h-0 flex items-center justify-center"
                                        style={{
                                            fontFamily: "var(--font-sans)",
                                            fontWeight: 600,
                                        }}
                                        title={metric.label}
                                    >
                                        {metric.label}
                                    </p>

                                    <p
                                        className="text-slate-400 text-[10px] sm:text-xs line-clamp-4 sm:line-clamp-3 leading-snug"
                                        style={{ fontFamily: "var(--font-sans)" }}
                                        title={metric.description}
                                    >
                                        {metric.description}
                                    </p>
                                </GlassCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
