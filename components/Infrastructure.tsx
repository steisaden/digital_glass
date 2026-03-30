import { motion } from "motion/react";
import { ArrowRight, Bot, Layout, Workflow } from "lucide-react";
import { GlassCard } from "./GlassCard";

const services = [
    {
        icon: Layout,
        title: "Lead Engine Websites",
        description: "Mobile-first, conversion-driven websites that capture qualified leads and move visitors toward a booked call or purchase decision.",
        features: ["Faster lead capture", "Clear offers and CTAs", "Mobile-first conversion paths"],
        colSpan: "md:col-span-7",
        glow: "hover:shadow-[0_0_40px_rgba(255,157,0,0.15)] group-hover:border-[#ff9d00]/40",
        cta: "Book lead engine build",
    },
    {
        icon: Bot,
        title: "AI Follow-Up System",
        description: "AI systems that automatically generate and nurture leads, send timely follow-up, and keep prospects engaged until your team takes over.",
        features: ["Automated nurturing", "Faster response times", "Higher appointment show rates"],
        colSpan: "md:col-span-5",
        glow: "hover:shadow-[0_0_40px_rgba(190,174,96,0.15)] group-hover:border-[#beae60]/40",
        cta: "Book AI follow-up build",
    },
    {
        icon: Workflow,
        title: "Custom Automation Build",
        description: "Full-stack automation for business operations that replaces repetitive manual workflows, connects tools, and gives your team back execution time.",
        features: ["Less admin work", "Connected operations", "Custom internal systems"],
        colSpan: "md:col-span-12",
        glow: "hover:shadow-[0_0_40px_rgba(215,203,198,0.15)] group-hover:border-[#d7cbc6]/40",
        cta: "Book automation consult",
    },
];

interface InfrastructureProps {
    onContactClick: () => void;
}

export function Infrastructure({ onContactClick }: InfrastructureProps) {
    return (
        <section id="what-we-build" className="relative py-32 px-6 md:px-12 bg-transparent">
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "linear-gradient(rgba(190, 174, 96, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(190, 174, 96, 0.05) 1px, transparent 1px)",
                        backgroundSize: "80px 80px",
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center mb-20"
                >
                    <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4 font-bold" style={{ fontFamily: "var(--font-sans)" }}>
                        What We Build
                    </p>
                    <h2
                        className="text-5xl md:text-7xl mb-6 text-white"
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontWeight: 700,
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Systems that produce leads, follow-up, and operational leverage
                    </h2>
                    <p className="text-slate-400 text-xl max-w-3xl mx-auto" style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}>
                        Each offer is designed around client outcomes: more qualified inquiries, faster sales response, and less time wasted on manual tasks.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className={service.colSpan}
                            >
                                <button
                                    type="button"
                                    onClick={onContactClick}
                                    className="group relative h-full w-full text-left"
                                >
                                    <GlassCard interactive className={`h-full transition-all duration-700 ${service.glow}`}>
                                        <div className="flex flex-col md:flex-row gap-8 items-start h-full">
                                            <div className="w-20 h-20 shrink-0 rounded-full glass-panel flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                                                <Icon className="w-10 h-10 text-white opacity-80 group-hover:opacity-100" />
                                            </div>

                                            <div className="flex-1 flex flex-col justify-between h-full">
                                                <div>
                                                    <h3
                                                        className="text-3xl mb-4 text-white"
                                                        style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                                                    >
                                                        {service.title}
                                                    </h3>
                                                    <p className="text-slate-400 leading-relaxed mb-8" style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}>
                                                        {service.description}
                                                    </p>
                                                </div>

                                                <div className="flex flex-col gap-5">
                                                    <div className="flex flex-wrap gap-2">
                                                        {service.features.map((feature) => (
                                                            <span key={feature} className="px-4 py-1.5 text-xs tracking-wider uppercase font-semibold text-slate-300 glass-panel rounded-full">
                                                                {feature}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    <div
                                                        className="inline-flex items-center gap-2 text-primary font-semibold group-hover:text-amber-300 transition-colors"
                                                        style={{ fontFamily: "var(--font-sans)" }}
                                                    >
                                                        {service.cta}
                                                        <ArrowRight className="w-4 h-4" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </GlassCard>
                                </button>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
