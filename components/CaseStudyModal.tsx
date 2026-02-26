import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight, Share2, Calendar } from "lucide-react";
import NextImage from "next/image";
import { useEffect } from "react";
import { MarqueeCarousel } from "./MarqueeCarousel";

interface CaseStudyModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        title: string;
        tagline?: string;
        category: string;
        location: string;
        image: string;
        value: string;
        description: string;
        challenge?: string;
        approach?: string;
        link?: string;
        gallery?: Array<{
            type: 'image' | 'video';
            src: string;
            alt: string;
        }>;
    } | null;
}

export function CaseStudyModal({ isOpen, onClose, project }: CaseStudyModalProps) {
    useEffect(() => {
        if (isOpen) {
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollBarWidth}px`;
        } else {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
            document.body.style.paddingRight = "";
        }
        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
            document.body.style.paddingRight = "";
        };
    }, [isOpen]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-[#0a0a0f]/90 backdrop-blur-xl"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                        className="relative w-full max-w-5xl h-full md:h-auto max-h-[90vh] bg-[#0a0a0f] border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                        onWheel={(e) => e.stopPropagation()}
                    >
                        <div className="flex-1 overflow-y-auto overscroll-behavior-contain custom-scrollbar">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="fixed md:absolute top-6 right-6 z-50 p-2 rounded-full bg-black/20 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <X className="w-6 h-6 text-white" />
                            </button>

                            {/* Hero Image */}
                            <div className="relative w-full h-[40vh] md:h-[50vh] flex-shrink-0">
                                <NextImage
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-8 md:p-12 space-y-12">
                                {/* Header */}
                                <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs tracking-wider uppercase">
                                                {project.category}
                                            </span>
                                            <span className="flex items-center gap-2 text-slate-400 text-sm">
                                                <Calendar className="w-3 h-3" />
                                                2024
                                            </span>
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 leading-tight">
                                            {project.title}
                                        </h2>
                                        {project.tagline && (
                                            <p className="text-primary/80 font-medium tracking-wide mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
                                                {project.tagline}
                                            </p>
                                        )}
                                        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl font-light">
                                            {project.description}
                                        </p>
                                    </div>

                                    {project.link ? (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-slate-200 transition-colors flex items-center gap-2 flex-shrink-0">
                                            View Live <ArrowUpRight className="w-4 h-4" />
                                        </a>
                                    ) : (
                                        <button className="px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-slate-200 transition-colors flex items-center gap-2 flex-shrink-0">
                                            View Live <ArrowUpRight className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>

                                <hr className="border-white/10" />

                                {/* Stats */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                    <div>
                                        <p className="text-sm text-slate-500 uppercase tracking-widest mb-2">Valuation</p>
                                        <p className="text-3xl font-serif text-white">{project.value}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 uppercase tracking-widest mb-2">Duration</p>
                                        <p className="text-3xl font-serif text-white">4 Months</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 uppercase tracking-widest mb-2">Traffic</p>
                                        <p className="text-3xl font-serif text-white">+145%</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 uppercase tracking-widest mb-2">Conversion</p>
                                        <p className="text-3xl font-serif text-white">3.2%</p>
                                    </div>
                                </div>

                                <hr className="border-white/10" />

                                {/* Deep Dive Content - Simulated */}
                                <div className="grid md:grid-cols-2 gap-12">
                                    <div>
                                        <h3 className="text-2xl font-serif mb-6 text-white">The Challenge</h3>
                                        <p className="text-slate-400 leading-relaxed font-light whitespace-pre-line">
                                            {project.challenge || `The client approached us with a unique problem: their existing digital presence failed to capture the tangible luxury of their physical assets. They needed a platform that wasn't just functional, but emotional—a digital space where users could feel the weight of quality and the precision of design.\n\nPerformance was non-negotiable. With high-fidelity 3D assets and real-time data streams, the architecture needed to be robust enough to handle heavy loads while effectively vanishing into the background of the user experience.`}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-serif mb-6 text-white">The Approach</h3>
                                        <p className="text-slate-400 leading-relaxed font-light whitespace-pre-line">
                                            {project.approach || `We leveraged a headless architecture powered by Next.js to ensure lightning-fast navigation. For visual fidelity, we integrated custom WebGL shaders that react to user interaction, creating a sense of \"aliveness\" without compromising the frame rate.\n\nThe interface follows a \"Glass & Air\" philosophy—translucent layers, generous whitespace, and typography that breathes. Every interaction was micro-calibrated to respond in under 16ms.`}
                                        </p>
                                    </div>
                                </div>

                                {/* Gallery Section with Marquee Carousel */}
                                <div className="space-y-8">
                                    <h3 className="text-2xl font-serif text-white px-4 md:px-0">Gallery & Process</h3>
                                    {project.gallery ? (
                                        <MarqueeCarousel items={project.gallery} speed={60} />
                                    ) : (
                                        <div className="grid grid-cols-2 gap-4 h-96">
                                            <div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/5 group">
                                                <NextImage src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80" alt="Detail 1" fill className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                                            </div>
                                            <div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/5 group">
                                                <NextImage src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80" alt="Detail 2" fill className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                                            </div>
                                        </div>
                                    )}
                                </div>

                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
