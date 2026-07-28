"use client";
import React, { useEffect, useRef } from 'react';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    interactive?: boolean;
}

export const GlassCard = ({ children, className = '', interactive = false }: GlassCardProps) => {
    const divRef = useRef<HTMLDivElement>(null);
    const boundsRef = useRef<DOMRect | null>(null);
    const pointerRef = useRef({ x: 0, y: 0 });
    const frameRef = useRef<number | null>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = boundsRef.current ?? divRef.current.getBoundingClientRect();
        boundsRef.current = rect;
        pointerRef.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };

        if (frameRef.current !== null) return;
        frameRef.current = window.requestAnimationFrame(() => {
            divRef.current?.style.setProperty('--spot-x', `${pointerRef.current.x}px`);
            divRef.current?.style.setProperty('--spot-y', `${pointerRef.current.y}px`);
            frameRef.current = null;
        });
    };

    useEffect(() => () => {
        if (frameRef.current !== null) {
            window.cancelAnimationFrame(frameRef.current);
        }
    }, []);

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => {
                boundsRef.current = divRef.current?.getBoundingClientRect() ?? null;
            }}
            onMouseLeave={() => {
                boundsRef.current = null;
            }}
            className={`group relative overflow-hidden glass-panel rounded-[2rem] p-8 md:p-12 transition-transform duration-500 ${interactive ? 'glass-card-hover hover:scale-[1.01]' : ''} ${className}`}
        >
            <div
                className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
                style={{
                    background: 'radial-gradient(600px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(255,255,255,.12), transparent 40%)',
                }}
            />
            {/* Content */}
            <div className="relative z-10 h-full w-full">
                {children}
            </div>
        </div>
    );
};
