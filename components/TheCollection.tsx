"use client";
import React, { useEffect, useRef } from "react";
import NextImage from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const projects = [
    {
        title: "Goddess Hair Sanctuary",
        category: "Premium E-Commerce",
        location: "Global Digital",
        image: "https://images.unsplash.com/photo-1639751787355-bbc3ed1fd639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjYxOTk5Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        value: "$2.4M",
        description: "AI-powered commerce experience that cuts development costs without sacrificing luxury.",
        tags: ["3D Visualization", "AI Architecture", "Headless Commerce"],
        link: "https://goddesscareco.info/"
    },
    {
        title: "Philadelphia Property Group",
        category: "Real Estate Platform",
        location: "Philadelphia, PA",
        image: "https://images.unsplash.com/photo-1760372058247-0067beeeef70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZWFsJTIwZXN0YXRlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY2MTk5OTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        value: "$8.7M",
        description: "Geospatial intelligence dashboard with 3D property mapping.",
        tags: ["WebGL", "Geospatial Data", "Interactive Map"],
    },
    {
        title: "Metropolitan Towers",
        category: "Digital Sales Center",
        location: "New York, NY",
        image: "https://images.unsplash.com/photo-1640109229792-a26a0ee366ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcmNoaXRlY3R1cmUlMjBtb2Rlcm58ZW58MXx8fHwxNzY2MTY5MTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        value: "$15.3M",
        description: "Virtual reality sales experience with real-time customization.",
        tags: ["Unreal Engine", "React 3D", "WebXR"],
    },
];

interface TheCollectionProps {
    onProjectSelect: (project: typeof projects[0]) => void;
    onContactClick: () => void;
}

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export function TheCollection({ onProjectSelect, onContactClick }: TheCollectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current || !scrollContainerRef.current) return;

        const ctx = gsap.context(() => {
            const container = scrollContainerRef.current;
            if (!container) return;

            gsap.to(container, {
                x: () => -(container.scrollWidth - window.innerWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: true,
                    scrub: 1,
                    end: () => "+=" + container.scrollWidth,
                    invalidateOnRefresh: true
                }
            });

            // Image parallax
            gsap.utils.toArray('.card-image-wrapper img').forEach((img: unknown) => {
                gsap.to(img as Element, {
                    scale: 1.15,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        scrub: 1,
                        start: "top top",
                        end: () => "+=" + container.scrollWidth
                    }
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="portfolio" className="relative h-screen bg-[#0D0E15]">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 225, 217, 0.15) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                <div className="px-12 md:px-24 mb-16 shrink-0 relative z-10">
                    <p className="text-[#FF007F] tracking-[0.3em] uppercase text-sm mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
                        The Collection
                    </p>
                    <h2
                        className="text-5xl md:text-7xl mb-6 text-white"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 700,
                            letterSpacing: '-0.02em'
                        }}
                    >
                        High-Value
                        <br />
                        Digital Assets
                    </h2>
                </div>

                <div ref={scrollContainerRef} className="flex gap-16 px-12 md:px-24 w-max items-center h-[60vh]">
                    {projects.map((project, index) => (
                        <div key={index} className="w-[85vw] md:w-[60vw] lg:w-[45vw] h-full cursor-pointer relative group" onClick={() => onProjectSelect(project)}>
                            {/* Glass background layer */}
                            <div className="absolute inset-0 rounded-[2.5rem] glass-panel-luxury transition-transform duration-700 group-hover:bg-white/[0.08]" />

                            <div className="relative h-full flex flex-col">
                                {/* Break-out image container */}
                                <div className="card-image-wrapper relative flex-1 mx-8 mt-8 rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.03] group-hover:-translate-y-4">
                                    <NextImage
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E15]/90 via-transparent to-transparent opacity-80" />

                                    <div className="absolute top-6 right-6 backdrop-blur-xl bg-white/[0.1] border border-white/20 rounded-full px-5 py-2">
                                        <p className="text-xs tracking-wider uppercase text-white font-semibold">
                                            {project.category}
                                        </p>
                                    </div>
                                </div>

                                {/* Content area */}
                                <div className="p-8 pb-10 flex flex-col gap-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-3xl lg:text-4xl font-semibold mb-2 group-hover:text-[#00E1D9] transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                                                {project.title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-slate-400">
                                                <MapPin className="w-4 h-4" />
                                                <p className="text-sm font-medium tracking-wide">
                                                    {project.location}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 w-14 h-14 rounded-full glass-panel flex items-center justify-center transition-transform duration-500 group-hover:bg-white/[0.1] group-hover:scale-110">
                                            <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                                        </div>
                                    </div>

                                    <p className="text-slate-300 text-lg font-light line-clamp-2 pr-12">
                                        {project.description}
                                    </p>

                                    {/* Neumorphic Tags */}
                                    <div className="flex flex-wrap gap-3 mt-2">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-5 py-2 rounded-full text-xs font-semibold text-slate-300 neumorphic-button !px-6 !py-2 !text-[11px] uppercase tracking-wider"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Final CTA Card inline with horizontal scroll */}
                    <div className="w-[85vw] md:w-[60vw] lg:w-[45vw] h-full flex items-center justify-center relative">
                        <div className="absolute inset-4 rounded-[3rem] neumorphic-well flex flex-col items-center justify-center text-center p-12 overflow-hidden group">
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#4A00E0_0%,_transparent_50%)] group-hover:opacity-20 transition-opacity duration-1000" />
                            <h3 className="text-4xl md:text-5xl font-bold mb-6 relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>Ready for your <br /><span className="text-[#FF007F]">Digital Twin?</span></h3>
                            <button
                                onClick={onContactClick}
                                className="px-10 py-5 glass-panel text-white hover:bg-white/[0.1] rounded-full transition-all duration-500 inline-flex items-center gap-3 relative z-10"
                            >
                                <span className="font-semibold tracking-wide uppercase text-sm">Schedule Consultation</span>
                                <ArrowUpRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
