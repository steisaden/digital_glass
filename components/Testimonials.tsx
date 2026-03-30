"use client";

import React, { useState } from "react";
import { motion, PanInfo, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { GlassCard } from "./GlassCard";

const testimonials = [
    {
        quote: "Unified storefront, booking, and admin systems reduced friction across sales, scheduling, and content operations.",
        author: "Goddess Care Co",
        role: "E-Commerce Automation",
        company: "Outcome: more reliable storefront and booking operations",
        result: "100% uptime for sanitized Contentful data streams",
    },
    {
        quote: "Localized service pages, a multi-step lead funnel, and Stripe onboarding created a clearer path from search traffic to qualified demand.",
        author: "Monumentaal",
        role: "Lead Generation Marketplace",
        company: "Outcome: stronger qualification and specialist onboarding",
        result: "SEO-driven service pages plus higher-intent lead capture",
    },
    {
        quote: "Custom dashboards and automation flows centralized visibility while reducing repeated manual handoffs across the operating team.",
        author: "Internal Ops Automation",
        role: "Custom Automation Build",
        company: "Outcome: faster access to workflow and sales data",
        result: "Centralized analytics and lower admin drag",
    },
];

interface TestimonialsProps {
    onContactClick: () => void;
}

export function Testimonials({ onContactClick }: TestimonialsProps) {
    const [currentIndex, setCurrentIndex] = useState(1);

    const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const swipeThreshold = 50;
        if (info.offset.x < -swipeThreshold && currentIndex < testimonials.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        } else if (info.offset.x > swipeThreshold && currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    return (
        <section className="relative py-20 md:py-40 pb-32 md:pb-48 px-6 md:px-12 bg-transparent overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center mb-24"
                >
                    <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4 font-bold" style={{ fontFamily: "var(--font-sans)" }}>
                        Client Outcomes
                    </p>
                    <h2
                        className="text-5xl md:text-7xl mb-6 text-white"
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontWeight: 700,
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Outcome snapshots you can point to
                    </h2>
                    <p className="text-slate-400 text-xl max-w-3xl mx-auto" style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}>
                        This section is structured as proof of execution using concrete outcomes from the systems shown above. Replace these with direct client quotes when you are ready to publish them.
                    </p>
                </motion.div>

                <div className="relative h-[560px] md:h-[600px] w-full flex items-center justify-center [perspective:1200px]">
                    <AnimatePresence initial={false}>
                        {testimonials.map((testimonial, index) => {
                            const offset = index - currentIndex;
                            const isCenter = offset === 0;
                            const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
                            const xOffset = offset * (isMobile ? 250 : 350);
                            const zOffset = Math.abs(offset) * -200;
                            const scale = isCenter ? 1 : 0.85;
                            const opacity = Math.abs(offset) >= 2 ? 0 : isCenter ? 1 : (isMobile ? 0 : 0.4);
                            const rotateY = offset * -15;

                            return (
                                <motion.div
                                    key={testimonial.author + testimonial.company}
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={0.8}
                                    onDragEnd={handleDragEnd}
                                    initial={false}
                                    animate={{
                                        x: xOffset,
                                        z: zOffset,
                                        scale,
                                        opacity,
                                        rotateY,
                                        zIndex: isCenter ? 20 : 10,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 25,
                                        mass: 1.5,
                                    }}
                                    className={`absolute w-full max-w-[90vw] md:max-w-xl ${!isCenter ? "pointer-events-auto cursor-pointer" : "cursor-grab active:cursor-grabbing"}`}
                                    style={{ transformStyle: "preserve-3d" }}
                                    onClick={() => {
                                        if (offset !== 0) setCurrentIndex(index);
                                    }}
                                >
                                    <div>
                                        <GlassCard className={`p-10 md:p-14 transition-all duration-700 ${isCenter ? "bg-white/[0.05] border-white/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]" : "bg-white/[0.02] border-white/5"} !rounded-[2.5rem]`}>
                                            <div className="flex flex-col justify-between min-h-[400px]">
                                                <div>
                                                    <div className="mb-8">
                                                        <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center shadow-inner relative overflow-hidden group">
                                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                            <Quote className="w-8 h-8 text-white z-10" />
                                                        </div>
                                                    </div>

                                                    <p className="text-white text-xl md:text-2xl leading-relaxed mb-8" style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}>
                                                        {testimonial.quote}
                                                    </p>

                                                    <div className="inline-flex px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs uppercase tracking-[0.2em] mb-8">
                                                        {testimonial.result}
                                                    </div>
                                                </div>

                                                <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                                                    <div>
                                                        <p className="text-primary text-lg mb-1" style={{ fontFamily: "var(--font-sans)", fontWeight: 700 }}>
                                                            {testimonial.author}
                                                        </p>
                                                        <p className="text-slate-300 font-medium" style={{ fontFamily: "var(--font-sans)" }}>
                                                            {testimonial.role}
                                                        </p>
                                                        <p className="text-slate-500 text-sm mt-1 uppercase tracking-wide" style={{ fontFamily: "var(--font-sans)" }}>
                                                            {testimonial.company}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </GlassCard>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>

                    <div className="absolute -bottom-16 md:-bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-4 md:gap-6 z-30">
                        <button
                            onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                            disabled={currentIndex === 0}
                            className={`w-10 h-10 md:w-12 md:h-12 rounded-full glass-panel flex items-center justify-center transition-all duration-300 ${currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-white/[0.1] hover:scale-110"}`}
                        >
                            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </button>

                        <div className="flex gap-2">
                            {testimonials.map((testimonial, i) => (
                                <button
                                    key={testimonial.author + i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${i === currentIndex ? "bg-primary w-8" : "bg-white/30 hover:bg-white/50"}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={() => setCurrentIndex((prev) => Math.min(testimonials.length - 1, prev + 1))}
                            disabled={currentIndex === testimonials.length - 1}
                            className={`w-10 h-10 md:w-12 md:h-12 rounded-full glass-panel flex items-center justify-center transition-all duration-300 ${currentIndex === testimonials.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-white/[0.1] hover:scale-110"}`}
                        >
                            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </button>
                    </div>
                </div>

                <div className="mt-32 md:mt-40 flex justify-center">
                    <button
                        onClick={onContactClick}
                        className="px-8 py-4 bg-primary hover:bg-amber-400 text-[#0a0a0f] rounded-2xl transition-all duration-300 font-semibold"
                        style={{ fontFamily: "var(--font-sans)" }}
                    >
                        Book a Consultation
                    </button>
                </div>
            </div>
        </section>
    );
}
