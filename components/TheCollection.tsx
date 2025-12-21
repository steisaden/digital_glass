import { motion } from "motion/react";
import NextImage from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { GlassCard } from "./GlassCard";

const projects = [
    {
        title: "Goddess Hair Sanctuary",
        category: "Premium E-Commerce",
        location: "Global Digital",
        image: "https://images.unsplash.com/photo-1639751787355-bbc3ed1fd639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjYxOTk5Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        value: "$2.4M",
        description: "Headless commerce platform with immersive 3D product visualization",
    },
    {
        title: "Philadelphia Property Group",
        category: "Real Estate Platform",
        location: "Philadelphia, PA",
        image: "https://images.unsplash.com/photo-1760372058247-0067beeeef70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZWFsJTIwZXN0YXRlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY2MTk5OTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        value: "$8.7M",
        description: "Geospatial intelligence dashboard with 3D property mapping",
    },
    {
        title: "Metropolitan Towers",
        category: "Digital Sales Center",
        location: "New York, NY",
        image: "https://images.unsplash.com/photo-1640109229792-a26a0ee366ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcmNoaXRlY3R1cmUlMjBtb2Rlcm58ZW58MXx8fHwxNzY2MTY5MTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        value: "$15.3M",
        description: "Virtual reality sales experience with real-time customization",
    },
];

interface TheCollectionProps {
    onProjectSelect: (project: typeof projects[0]) => void;
    onContactClick: () => void;
}

export function TheCollection({ onProjectSelect, onContactClick }: TheCollectionProps) {
    return (
        <section id="portfolio" className="relative py-32 px-6 md:px-12">
            {/* Transparent Overlay (Controlled via globals.css) */}
            <div className="absolute inset-0 section-overlay" />

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(245, 158, 11, 0.15) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
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
                    className="mb-20"
                >
                    <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
                        The Collection
                    </p>
                    <h2
                        className="text-5xl md:text-7xl mb-6"
                        style={{
                            fontFamily: 'var(--font-serif)',
                            fontWeight: 700,
                            letterSpacing: '-0.02em'
                        }}
                    >
                        High-Value
                        <br />
                        Digital Assets
                    </h2>
                    <p className="text-slate-400 text-xl max-w-2xl" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                        Each project represents a fusion of cutting-edge technology
                        and timeless design principles.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <div className="group relative h-full cursor-pointer" onClick={() => onProjectSelect(project)}>
                                <GlassCard className="h-full !p-0 overflow-hidden relative">
                                    {/* Hover Overlay Layer - Performance Optimization: Animate opacity instead of container properties */}
                                    <div className="absolute inset-0 bg-white/[0.04] border border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out will-change-opacity pointer-events-none z-10" />

                                    {/* Image Container */}
                                    <div className="relative h-80 overflow-hidden">
                                        <NextImage
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110 will-change-transform"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />

                                        {/* Category Badge */}
                                        <div className="absolute top-6 left-6 backdrop-blur-xl bg-white/[0.1] border border-white/20 rounded-full px-5 py-2">
                                            <p className="text-xs tracking-wider uppercase text-white" style={{ fontFamily: 'var(--font-sans)' }}>
                                                {project.category}
                                            </p>
                                        </div>

                                        {/* Value Badge */}
                                        <div className="absolute top-6 right-6 backdrop-blur-xl bg-primary/20 border border-primary/30 rounded-full px-5 py-2">
                                            <p className="text-xs tracking-wider uppercase text-amber-300" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                                                {project.value}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1">
                                                <h3
                                                    className="text-3xl mb-2 group-hover:text-primary transition-colors duration-500"
                                                    style={{
                                                        fontFamily: 'var(--font-serif)',
                                                        fontWeight: 600
                                                    }}
                                                >
                                                    {project.title}
                                                </h3>
                                                <div className="flex items-center gap-2 text-slate-400">
                                                    <MapPin className="w-4 h-4" />
                                                    <p className="text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                                                        {project.location}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Arrow Icon */}
                                            <div className="flex-shrink-0 w-12 h-12 rounded-full backdrop-blur-xl bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" />
                                            </div>
                                        </div>

                                        <p className="text-slate-300 leading-relaxed mb-6" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                                            {project.description}
                                        </p>

                                        {/* Tech Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {["3D Visualization", "Geospatial", "Real-time"].map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-4 py-1.5 backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-full text-xs text-slate-400"
                                                    style={{ fontFamily: 'var(--font-sans)' }}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Neumorphic Press Effect Shadow */}
                                    <div className="absolute inset-0 rounded-3xl shadow-inner opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />
                                </GlassCard>
                            </div>
                        </motion.div>
                    ))}

                    {/* Call to Action Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="lg:col-span-2"
                    >
                        <GlassCard className="relative overflow-hidden text-center">
                            <div className="relative z-10">
                                <h3
                                    className="text-4xl md:text-5xl mb-6"
                                    style={{
                                        fontFamily: 'var(--font-serif)',
                                        fontWeight: 600
                                    }}
                                >
                                    Start Your Next Project
                                </h3>
                                <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                                    Transform your vision into an immersive digital experience that drives results
                                </p>
                                <button
                                    onClick={onContactClick}
                                    className="px-10 py-5 bg-primary hover:bg-amber-400 text-[#0a0a0f] rounded-2xl transition-all duration-500 inline-flex items-center gap-3"
                                    style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
                                >
                                    Schedule Consultation
                                    <ArrowUpRight className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
