import { motion } from "motion/react";
import { Layout, Code, Brain } from "lucide-react";
import { GlassCard } from "./GlassCard";
import TechStack3D from "./TechStack3D";

const services = [
    {
        icon: Layout,
        title: "High-End Web Design",
        description: "Bespoke aesthetics engineered with neuromarketing principles to build immediate trust and maximize conversion rates.",
        features: ["Bespoke UI/UX", "Conversion Optimized", "Premium Aesthetics"],
        colSpan: "md:col-span-7",
        glow: "hover:shadow-[0_0_40px_rgba(255,157,0,0.15)] group-hover:border-[#ff9d00]/40",
    },
    {
        icon: Code,
        title: "Full-Stack Development",
        description: "Next-generation frameworks and scalable architectures that deliver blazing fast, bulletproof digital experiences.",
        features: ["Next.js & React", "Headless Architecture", "Secure & Scalable"],
        colSpan: "md:col-span-5",
        glow: "hover:shadow-[0_0_40px_rgba(190,174,96,0.15)] group-hover:border-[#beae60]/40",
    },
    {
        icon: Brain,
        title: "AI & Automation",
        description: "Custom Large Language Model integrations, intelligent lead nurturing, and autonomous workflows that streamline your elite operations.",
        features: ["Custom LLM Integration", "Automated Workflows", "AI Agents"],
        colSpan: "md:col-span-12",
        glow: "hover:shadow-[0_0_40px_rgba(215,203,198,0.15)] group-hover:border-[#d7cbc6]/40",
    },
];

export function Infrastructure() {
    return (
        <section id="services" className="relative py-32 px-6 md:px-12 bg-transparent">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(rgba(190, 174, 96, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(190, 174, 96, 0.05) 1px, transparent 1px)`,
                        backgroundSize: '80px 80px'
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center mb-20"
                >
                    <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4 font-bold" style={{ fontFamily: 'var(--font-sans)' }}>
                        Elite Solutions
                    </p>
                    <h2
                        className="text-5xl md:text-7xl mb-6 text-white"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 700,
                            letterSpacing: '-0.02em'
                        }}
                    >
                        Core Capabilities
                    </h2>
                    <p className="text-slate-400 text-xl max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                        Engineered for elite businesses that demand flawless execution,
                        unmatched security, and measurable performance.
                    </p>
                </motion.div>

                {/* Bento Box Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-32">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className={service.colSpan}
                            >
                                <div className="group relative h-full">
                                    <GlassCard interactive className={`h-full transition-all duration-700 ${service.glow}`}>
                                        <div className="flex flex-col md:flex-row gap-8 items-start h-full">
                                            {/* Icon Area */}
                                            <div className="w-20 h-20 shrink-0 rounded-full glass-panel flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                                                <Icon className="w-10 h-10 text-white opacity-80 group-hover:opacity-100" />
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 flex flex-col justify-between h-full">
                                                <div>
                                                    <h3
                                                        className="text-3xl mb-4 text-white"
                                                        style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
                                                    >
                                                        {service.title}
                                                    </h3>
                                                    <p className="text-slate-400 leading-relaxed mb-8" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                                                        {service.description}
                                                    </p>
                                                </div>

                                                <div className="flex flex-wrap gap-2">
                                                    {service.features.map((feature, i) => (
                                                        <span key={i} className="px-4 py-1.5 text-xs tracking-wider uppercase font-semibold text-slate-300 glass-panel rounded-full">
                                                            {feature}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </GlassCard>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Tech Stack Marquee (3D Carousel) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="mt-12"
                >
                    <div className="text-center mb-8 relative z-10">
                        <p className="text-primary tracking-[0.2em] uppercase text-sm font-bold" style={{ fontFamily: 'var(--font-sans)' }}>
                            Technology Stack
                        </p>
                        <h3 className="text-3xl text-white mt-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>Enterprise-grade foundations</h3>
                    </div>

                    {/* The immersive 3D R3F Canvas */}
                    <TechStack3D />

                </motion.div>
            </div>
        </section>
    );
}
