import React from 'react';
import { GlassCard } from './GlassCard';
import Image from 'next/image';

interface PropertyCardProps {
    title: string;
    category: string;
    description: string;
    imageUrl?: string;
    tags: string[];
}

export const PropertyCard = ({ title, category, description, imageUrl, tags }: PropertyCardProps) => {
    return (
        <GlassCard className="group relative p-0 h-full transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_30px_60px_-10px_rgba(245,158,11,0.1)] block bg-[#0a0a0a]/60">
            {/* Image Area */}
            <div className="relative h-72 w-full overflow-hidden border-b border-white/5">
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-[#111] to-black">
                        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                    </div>
                )}

                <div className="absolute top-5 right-5 px-3 py-1 rounded-sm bg-black/80 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-[0.2em] font-light text-white/90">
                    {category}
                </div>
            </div>

            {/* Content Area */}
            <div className="p-8 pb-10 space-y-6">
                <div>
                    <h3 className="text-3xl font-serif text-white/90 group-hover:text-gold-500 transition-colors duration-500">
                        {title}
                    </h3>
                    <div className="w-12 h-[1px] bg-gold-500/50 mt-4 mb-4" />
                    <p className="text-sm font-light text-white/50 leading-relaxed font-sans">
                        {description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                    {tags.map((tag) => (
                        <span key={tag} className="text-[10px] tracking-widest uppercase text-white/30 border-b border-transparent hover:border-gold-500/50 hover:text-gold-500 transition-all cursor-default">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </GlassCard>
    )
}
