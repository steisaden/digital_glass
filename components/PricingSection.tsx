import { motion } from "motion/react";
import { Check, ArrowRight, Zap, Target, Crown } from "lucide-react";
import { GlassCard } from "./GlassCard";

const plans = [
    {
        name: "Digital Foundation",
        price: "$5,000",
        description: "For visionary brands launching their presence.",
        icon: Target,
        color: "#ff9d00",
        features: [
            "High-End Custom Web Design",
            "Next.js Optimized Performance",
            "Technical SEO Infrastructure",
            "Motion & Micro-interactions",
            "1 Month Post-Launch Support",
        ],
        cta: "Start Foundation",
        popular: false,
    },
    {
        name: "Growth Infrastructure",
        price: "$10,000",
        description: "For elite businesses ready to scale aggressively.",
        icon: Zap,
        color: "#beae60",
        features: [
            "Everything in Foundation",
            "Custom AI Lead Generation",
            "Automated CRM Workflows",
            "Advanced Analytics Dashboard",
            "3 Months Post-Launch Support",
        ],
        cta: "Scale Infrastructure",
        popular: true,
    },
    {
        name: "Enterprise Retainer",
        price: "Custom",
        description: "For market leaders demanding dedicated partnership.",
        icon: Crown,
        color: "#d7cbc6",
        features: [
            "Fractional CTO Services",
            "Dedicated Development Retainer",
            "Ongoing AI Model Training",
            "Priority 24/7 SLA",
            "Infinite Scalability",
        ],
        cta: "Discuss Enterprise",
        popular: false,
    },
];

export function PricingSection() {
    return (
        <section id="pricing" className="relative py-32 px-6 md:px-12 bg-transparent z-10">
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
                        Transparent Investment
                    </p>
                    <h2
                        className="text-5xl md:text-7xl mb-6 text-white"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 700,
                            letterSpacing: '-0.02em'
                        }}
                    >
                        Elite Execution
                    </h2>
                    <p className="text-slate-400 text-xl max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                        Elite execution requires elite investment. We partner with serious businesses that are ready to dominate their market.
                    </p>
                </motion.div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => {
                        const Icon = plan.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className={`relative h-full ${plan.popular ? 'md:-mt-8 md:mb-8 z-10' : 'z-0'}`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-0 right-0 flex justify-center z-20">
                                        <div className="bg-gradient-to-r from-[#ff9d00] to-[#beae60] text-black text-xs font-bold tracking-wider uppercase px-4 py-1 rounded-full shadow-lg">
                                            Most Popular
                                        </div>
                                    </div>
                                )}
                                <GlassCard className={`h-full flex flex-col p-8 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] ${plan.popular ? 'border-primary/30 bg-white/[0.05]' : 'border-white/10'}`}>
                                    <div className="mb-8">
                                        <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center mb-6" style={{ color: plan.color }}>
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl text-white mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>{plan.name}</h3>
                                        <p className="text-slate-400 text-sm h-10" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>{plan.description}</p>
                                    </div>

                                    <div className="mb-8">
                                        <div className="flex flex-col items-start gap-1">
                                            <span className="text-4xl text-white" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                                                {plan.price}
                                            </span>
                                            {plan.price !== "Custom" && (
                                                <span className="text-slate-500 font-bold tracking-widest text-xs uppercase" style={{ fontFamily: 'var(--font-sans)' }}>Starting At</span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <div className="space-y-4 mb-8">
                                            {plan.features.map((feature, i) => (
                                                <div key={i} className="flex items-start gap-3">
                                                    <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: `${plan.color}20`, color: plan.color }}>
                                                        <Check className="w-3 h-3" strokeWidth={3} />
                                                    </div>
                                                    <span className="text-slate-200 text-sm" style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <button
                                        className={`group relative w-full py-4 rounded-xl font-semibold transition-all duration-300 overflow-hidden ${plan.popular ? 'bg-white text-black hover:bg-slate-200' : 'glass-panel hover:bg-white/[0.1] text-white'}`}
                                        style={{ fontFamily: 'var(--font-sans)' }}
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            {plan.cta}
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </button>
                                </GlassCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
