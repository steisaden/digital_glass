import React from 'react';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
}

export const GlassCard = ({ children, className = '' }: GlassCardProps) => {
    return (
        <div className={`relative backdrop-blur-md bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-12 shadow-lg ${className}`}>
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-3xl" />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};
