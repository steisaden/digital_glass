"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface FooterProps {
    onContactClick?: () => void;
}

export function Footer({ onContactClick }: FooterProps) {
    const footerRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);

            const ctx = gsap.context(() => {
                gsap.fromTo(
                    contentRef.current,
                    { y: 100, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: footerRef.current,
                            start: "top 85%",
                            end: "bottom bottom",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            });

            return () => ctx.revert();
        }
    }, []);

    return (
        <footer ref={footerRef} className="relative z-10 bg-transparent pt-16 md:pt-32 pb-12 border-t border-white/5">
            <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_bottom_center,_var(--tw-gradient-stops))] from-primary/30 via-[#0D0E15] to-[#0D0E15]" />

            <div ref={contentRef} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
                <div className="w-full max-w-5xl md:px-16 md:py-24 py-12 px-4 sm:px-6 neumorphic-well rounded-[2.5rem] md:rounded-[3rem] text-center mb-16 md:mb-32 mt-12 md:mt-0 relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

                    <motion.div
                        animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ff9d00_0%,_transparent_60%)] pointer-events-none mix-blend-screen"
                    />

                    <h3
                        className="text-3xl sm:text-4xl md:text-6xl mb-6 md:mb-8 text-white relative z-10"
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontWeight: 700,
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Ready to install a system that brings in leads and removes manual work?
                    </h3>

                    <p className="text-slate-400 text-base sm:text-lg md:text-xl mb-10 md:mb-12 max-w-2xl mx-auto relative z-10 px-2" style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}>
                        If your team is still relying on slow follow-up, disconnected tools, or a website that does not convert, this is the place to fix it.
                    </p>

                    <button
                        onClick={onContactClick}
                        className="glass-panel-luxury px-12 py-6 rounded-full inline-flex items-center gap-4 group/btn hover:scale-105 transition-all duration-500 relative z-10 bg-white/[0.05] hover:bg-white/[0.1] border border-white/20 hover:border-primary/50 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-primary/30"
                    >
                        <span className="text-white font-bold tracking-widest uppercase text-sm font-sans">
                            Get Started
                        </span>
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover/btn:brightness-125 transition-all duration-500">
                            <ArrowUpRight className="w-5 h-5 text-[#0D0E15]" />
                        </div>
                    </button>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pt-16 border-t border-white/5">
                    <div>
                        <h3 className="text-3xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#ff9d00] to-[#beae60] font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                            Digital Glass
                        </h3>
                        <p className="text-slate-400 mb-8" style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}>
                            AI systems, conversion websites, and automation infrastructure for service businesses, operators, and e-commerce brands.
                        </p>
                        <div className="flex gap-4 hidden">
                            {[Linkedin, Twitter, Github].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary/20 hover:border-primary/50 hover:scale-110 transition-all duration-300"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white mb-6 uppercase tracking-widest text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 700 }}>
                            What We Build
                        </h4>
                        <ul className="space-y-4">
                            {["Lead Engine Websites", "AI Follow-Up Systems", "Custom Automation Builds", "Conversion Strategy", "Operational Workflows"].map((item) => (
                                <li key={item}>
                                    <a href="#what-we-build" className="text-slate-400 hover:text-primary transition-colors duration-300" style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white mb-6 uppercase tracking-widest text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 700 }}>
                            Explore
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { label: "How It Works", href: "#how-it-works" },
                                { label: "Client Results", href: "#client-results" },
                                { label: "Packages", href: "#pricing" },
                                { label: "Book a Consultation", href: "#pricing" },
                            ].map((item) => (
                                <li key={item.label}>
                                    <a href={item.href} className="text-slate-400 hover:text-primary transition-colors duration-300" style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white mb-6 uppercase tracking-widest text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 700 }}>
                            Get in Touch
                        </h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-4 text-slate-400 group cursor-pointer" style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}>
                                <div className="p-2 rounded-full glass-panel group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                                    <Mail className="w-4 h-4 text-slate-300 group-hover:text-primary transition-colors" />
                                </div>
                                <span className="mt-1 group-hover:text-white transition-colors">stephen.tech139@gmail.com</span>
                            </li>
                            <li className="flex items-start gap-4 text-slate-400 group cursor-pointer" style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}>
                                <div className="p-2 rounded-full glass-panel group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                                    <Phone className="w-4 h-4 text-slate-300 group-hover:text-primary transition-colors" />
                                </div>
                                <span className="mt-1 group-hover:text-white transition-colors">+1 (971)357-9090 WhatsApp</span>
                            </li>
                            <li className="flex items-start gap-4 text-slate-400 group cursor-pointer" style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}>
                                <div className="p-2 rounded-full glass-panel group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                                    <MapPin className="w-4 h-4 text-slate-300 group-hover:text-primary transition-colors" />
                                </div>
                                <span className="mt-1 group-hover:text-white transition-colors">Remote</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-full pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm" style={{ fontFamily: "var(--font-sans)" }}>
                        © {new Date().getFullYear()} Digital Glass. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm">
                        <a href="#" className="text-slate-500 hover:text-white transition-colors duration-300 tracking-wide" style={{ fontFamily: "var(--font-sans)" }}>
                            Privacy Policy
                        </a>
                        <a href="#" className="text-slate-500 hover:text-white transition-colors duration-300 tracking-wide" style={{ fontFamily: "var(--font-sans)" }}>
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
