"use client";
import React, { useState } from "react";
import { motion, PanInfo, AnimatePresence } from "motion/react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { GlassCard } from "./GlassCard";

const testimonials = [
    {
        quote: "Digital Glass transformed our vision into an immersive digital experience that exceeded all expectations. The attention to detail and technical excellence is unmatched.",
        author: "Sarah Chen",
        role: "VP of Digital Strategy",
        company: "Metropolitan Towers",
        rating: 5,
    },
    {
        quote: "Working with their team was seamless. They delivered a geospatial platform that revolutionized how we present properties to high-net-worth clients.",
        author: "Michael Rodriguez",
        role: "Chief Technology Officer",
        company: "Philadelphia Property Group",
        rating: 5,
    },
    {
        quote: "The ROI speaks for itself. Our digital sales center has become the cornerstone of our luxury real estate marketing strategy.",
        author: "Emily Thompson",
        role: "Managing Director",
        company: "Goddess Hair Sanctuary",
        rating: 5,
    },
];

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(1);

    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        // swipe threshold roughly 50px
        const swipeThreshold = 50;
        if (info.offset.x < -swipeThreshold && currentIndex < testimonials.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        } else if (info.offset.x > swipeThreshold && currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    return (
        <section className="relative py-40 px-6 md:px-12 bg-transparent overflow-hidden">
            {/* Background Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center mb-24"
                >
                    <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4 font-bold" style={{ fontFamily: 'var(--font-sans)' }}>
                        Client Testimonials
                    </p>
                    <h2
                        className="text-5xl md:text-7xl mb-6 text-white"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 700,
                            letterSpacing: '-0.02em'
                        }}
                    >
                        Trusted by Leaders
                    </h2>
                    <p className="text-slate-400 text-xl max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                        Hear from the visionaries who&apos;ve partnered with us to create
                        extraordinary digital experiences.
                    </p>
                </motion.div>

                {/* Cover Flow Slider */}
                <div className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center [perspective:1200px]">
                    <AnimatePresence initial={false}>
                        {testimonials.map((testimonial, index) => {
                            const offset = index - currentIndex;
                            const isCenter = offset === 0;
                            // Layout calculations for the cover flow
                            const xOffset = offset * (typeof window !== 'undefined' && window.innerWidth < 768 ? 200 : 350);
                            const zOffset = Math.abs(offset) * -200;
                            const scale = isCenter ? 1 : 0.85;
                            const opacity = Math.abs(offset) >= 2 ? 0 : isCenter ? 1 : 0.4;
                            const rotateY = offset * -15; // Angled inward towards the center

                            return (
                                <motion.div
                                    key={index}
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
                                        mass: 1.5 // Adds heavy friction physics feel
                                    }}
                                    className={`absolute w-full max-w-[90vw] md:max-w-xl ${!isCenter ? 'pointer-events-auto cursor-pointer' : 'cursor-grab active:cursor-grabbing'}`}
                                    style={{ transformStyle: "preserve-3d" }}
                                    onClick={() => {
                                        if (offset !== 0) setCurrentIndex(index);
                                    }}
                                >
                                    {/* The Testimonial Card */}
                                    <div className="h-full">
                                        <GlassCard className={`h-full p-10 md:p-14 transition-all duration-700 ${isCenter ? 'bg-white/[0.05] border-white/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]' : 'bg-white/[0.02] border-white/5'} !rounded-[2.5rem]`}>
                                            <div className="flex flex-col h-full justify-between">
                                                <div>
                                                    {/* Quote Icon */}
                                                    <div className="mb-8">
                                                        <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center shadow-inner relative overflow-hidden group">
                                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                            <Quote className="w-8 h-8 text-white z-10" />
                                                        </div>
                                                    </div>

                                                    {/* Stars */}
                                                    <div className="flex gap-1.5 mb-8">
                                                        {[...Array(testimonial.rating)].map((_, i) => (
                                                            <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                                                        ))}
                                                    </div>

                                                    {/* Quote Typography */}
                                                    <p className="text-white text-xl md:text-2xl leading-relaxed mb-10" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                                                        &quot;{testimonial.quote}&quot;
                                                    </p>
                                                </div>

                                                {/* Author */}
                                                <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                                                    <div>
                                                        <p className="text-primary text-lg mb-1" style={{ fontFamily: 'var(--font-sans)', fontWeight: 700 }}>
                                                            {testimonial.author}
                                                        </p>
                                                        <p className="text-slate-300 font-medium" style={{ fontFamily: 'var(--font-sans)' }}>
                                                            {testimonial.role}
                                                        </p>
                                                        <p className="text-slate-500 text-sm mt-1 uppercase tracking-wide" style={{ fontFamily: 'var(--font-sans)' }}>
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

                    {/* Pagination / Controls */}
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6">
                        <button
                            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                            disabled={currentIndex === 0}
                            className={`w-12 h-12 rounded-full glass-panel flex items-center justify-center transition-all duration-300 ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/[0.1] hover:scale-110'}`}
                        >
                            <ChevronLeft className="w-6 h-6 text-white" />
                        </button>

                        <div className="flex gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'bg-primary w-8' : 'bg-white/30 hover:bg-white/50'}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={() => setCurrentIndex(prev => Math.min(testimonials.length - 1, prev + 1))}
                            disabled={currentIndex === testimonials.length - 1}
                            className={`w-12 h-12 rounded-full glass-panel flex items-center justify-center transition-all duration-300 ${currentIndex === testimonials.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/[0.1] hover:scale-110'}`}
                        >
                            <ChevronRight className="w-6 h-6 text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
