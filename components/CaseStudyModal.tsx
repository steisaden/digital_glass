import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight, Calendar } from "lucide-react";
import NextImage from "next/image";
import { useEffect } from "react";
import { MarqueeCarousel } from "./MarqueeCarousel";
import { Project } from "@/app/page";

interface CaseStudyModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project | null;
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
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-[#0a0a0f]/90 backdrop-blur-xl"
                    />

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
                            <button
                                onClick={onClose}
                                className="fixed md:absolute top-6 right-6 z-50 p-2 rounded-full bg-black/20 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <X className="w-6 h-6 text-white" />
                            </button>

                            <div className="relative w-full h-[40vh] md:h-[50vh] flex-shrink-0">
                                {project.previewVideo ? (
                                    <video
                                        src={project.previewVideo}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <NextImage
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                            </div>

                            <div className="p-8 md:p-12 space-y-12">
                                <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                                    <div>
                                        <div className="flex flex-wrap items-center gap-3 mb-4">
                                            <span className="px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs tracking-wider uppercase">
                                                {project.category}
                                            </span>
                                            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-300 text-xs tracking-wider uppercase">
                                                {project.industry}
                                            </span>
                                            <span className="flex items-center gap-2 text-slate-400 text-sm">
                                                <Calendar className="w-3 h-3" />
                                                {project.year || "2024"}
                                            </span>
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 leading-tight">
                                            {project.title}
                                        </h2>
                                        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl font-light">
                                            {project.description}
                                        </p>
                                        <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/10 px-5 py-4 max-w-2xl">
                                            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-2">Outcome</p>
                                            <p className="text-white leading-relaxed">{project.outcomeHeadline}</p>
                                        </div>
                                    </div>

                                    {project.link ? (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-slate-200 transition-colors flex items-center gap-2 flex-shrink-0">
                                            View Live <ArrowUpRight className="w-4 h-4" />
                                        </a>
                                    ) : null}
                                </div>

                                <hr className="border-white/10" />

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div>
                                        <p className="text-sm text-slate-500 uppercase tracking-widest mb-2">Problem</p>
                                        <p className="text-lg text-white leading-relaxed">{project.problem}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 uppercase tracking-widest mb-2">Solution</p>
                                        <p className="text-lg text-white leading-relaxed">{project.solution}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 uppercase tracking-widest mb-2">Results</p>
                                        <p className="text-lg text-white leading-relaxed">{project.results}</p>
                                    </div>
                                </div>

                                <hr className="border-white/10" />

                                <div>
                                    <h3 className="text-2xl font-serif mb-6 text-white">Measured Results</h3>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        {project.metrics.map((metric) => (
                                            <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                                                <p className="text-3xl text-white mb-2" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                                                    {metric.value}
                                                </p>
                                                <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">{metric.label}</p>
                                                <p className="text-slate-300 leading-relaxed">{metric.detail}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <hr className="border-white/10" />

                                <div>
                                    <h3 className="text-2xl font-serif mb-6 text-white">Outcome Highlights</h3>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        {project.resultMetrics.map((metric) => (
                                            <div key={metric} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                                                <p className="text-slate-200 leading-relaxed">{metric}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <h3 className="text-2xl font-serif text-white px-4 md:px-0">Build Walkthrough</h3>
                                    {project.gallery ? (
                                        <MarqueeCarousel items={project.gallery} speed={60} />
                                    ) : (
                                        <div className="grid grid-cols-1">
                                            <div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/5 h-96">
                                                <NextImage src={project.image} alt={project.title} fill className="object-cover opacity-70" />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="flex justify-center">
                                    <button
                                        onClick={onClose}
                                        className="px-8 py-4 bg-primary hover:bg-amber-400 text-[#0a0a0f] rounded-xl font-semibold transition-colors"
                                    >
                                        {project.cta}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
