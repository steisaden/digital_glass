"use client";
import React, { useMemo } from "react";
import { motion } from "motion/react";
import NextImage from "next/image";

interface MarqueeCarouselProps {
    items: Array<{
        type: 'image' | 'video';
        src: string;
        alt: string;
    }>;
    speed?: number; // Duration of one full loop in seconds
    direction?: 1 | -1;
}

export function MarqueeCarousel({ items, speed = 40, direction = 1 }: MarqueeCarouselProps) {
    // Duplicate items for seamless looping
    const duplicatedItems = useMemo(() => [...items, ...items], [items]);

    return (
        <div className="w-full overflow-hidden py-4">
            <motion.div
                animate={{
                    x: direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"]
                }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }}
                className="flex gap-6 w-max px-3"
            >
                {duplicatedItems.map((item, index) => (
                    <div
                        key={index}
                        className="relative w-[300px] md:w-[450px] aspect-video rounded-2xl overflow-hidden border border-white/10 group shadow-2xl"
                    >
                        {item.type === 'image' ? (
                            <NextImage
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 300px, 450px"
                            />
                        ) : (
                            <video
                                src={item.src}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
