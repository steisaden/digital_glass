import { motion } from "motion/react";
import { TrendingUp, Users, Award, Sparkles } from "lucide-react";
import { GlassCard } from "./GlassCard";

const metrics = [
    {
        icon: TrendingUp,
        value: "$50M+",
        label: "Revenue Scaled",
        description: "Across elite client portfolios",
    },
    {
        icon: Users,
        value: "10M+",
        label: "Users Handled",
        description: "Via scalable infrastructure",
    },
    {
        icon: Award,
        value: "40+",
        label: "Elite Launches",
        description: "Design & Next.js development",
    },
    {
        icon: Sparkles,
        value: "100%",
        label: "Client Retention",
        description: "Long-term strategic partnerships",
    },
];

export function MetricsSection() {
    return (
        <section id="about" className="relative py-20 px-6 md:px-12">
            {/* Transparent Overlay (Controlled via globals.css) */}
            <div className="absolute inset-0 section-overlay" />

            <div className="relative max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {metrics.map((metric, index) => {
                        const Icon = metric.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <GlassCard className="h-full flex flex-col items-center justify-center text-center hover:bg-white/[0.04] hover:border-primary/30 transition-all duration-500">
                                    {/* Icon */}
                                    <div className="flex justify-center mb-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Icon className="w-6 h-6 text-primary" />
                                        </div>
                                    </div>

                                    {/* Value */}
                                    <p
                                        className="text-3xl md:text-4xl mb-2 text-primary"
                                        style={{
                                            fontFamily: 'var(--font-serif)',
                                            fontWeight: 700
                                        }}
                                    >
                                        {metric.value}
                                    </p>

                                    {/* Label */}
                                    <p
                                        className="text-white mb-1"
                                        style={{
                                            fontFamily: 'var(--font-sans)',
                                            fontWeight: 600
                                        }}
                                    >
                                        {metric.label}
                                    </p>

                                    {/* Description */}
                                    <p
                                        className="text-slate-400 text-xs"
                                        style={{ fontFamily: 'var(--font-sans)' }}
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
