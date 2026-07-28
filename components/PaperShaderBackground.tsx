"use client";

import React, { useEffect, useRef, useState } from 'react';
import { GrainGradient } from '@paper-design/shaders-react';

export const PaperShaderBackground = React.memo(() => {
    const [isScrolling, setIsScrolling] = useState(false);
    const [maxPixelCount, setMaxPixelCount] = useState(900_000);
    const [reduceMotion, setReduceMotion] = useState(false);
    const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const scrollingRef = useRef(false);

    useEffect(() => {
        const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const compactViewportQuery = window.matchMedia('(max-width: 768px)');

        const syncPreferences = () => {
            setReduceMotion(reducedMotionQuery.matches);
            setMaxPixelCount(compactViewportQuery.matches ? 450_000 : 900_000);
        };

        const handleScroll = () => {
            if (!scrollingRef.current) {
                scrollingRef.current = true;
                setIsScrolling(true);
            }

            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }

            scrollTimeoutRef.current = setTimeout(() => {
                scrollingRef.current = false;
                setIsScrolling(false);
            }, 160);
        };

        syncPreferences();
        reducedMotionQuery.addEventListener('change', syncPreferences);
        compactViewportQuery.addEventListener('change', syncPreferences);
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            reducedMotionQuery.removeEventListener('change', syncPreferences);
            compactViewportQuery.removeEventListener('change', syncPreferences);
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, []);

    return (
        <div className="shader-background fixed inset-0 w-full h-full z-0 pointer-events-none" style={{ contain: 'paint' }}>
            <GrainGradient
                width="100%"
                height="100%"
                colors={["#ff9d00", "#beae60", "#d7cbc6"]}
                colorBack="#2a2f32a8"
                softness={0.54}
                intensity={0.19}
                noise={0.14}
                shape="wave"
                speed={reduceMotion || isScrolling ? 0 : 0.08}
                scale={1.6}
                offsetY={0.62}
                fit="cover"
                minPixelRatio={1}
                maxPixelCount={maxPixelCount}
            />
        </div>
    );
});

PaperShaderBackground.displayName = 'PaperShaderBackground';
