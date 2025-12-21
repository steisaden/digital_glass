import React from 'react';

interface NeumorphButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

export const NeumorphButton = ({ children, className = '', ...props }: NeumorphButtonProps) => {
    return (
        <button
            className={`
                px-8 py-3 rounded-full font-medium tracking-wide transition-all duration-300 ease-out
                bg-slate-900 
                shadow-[-4px_-4px_10px_rgba(255,255,255,0.05),4px_4px_10px_rgba(0,0,0,0.5)]
                hover:shadow-[-2px_-2px_5px_rgba(255,255,255,0.05),2px_2px_5px_rgba(0,0,0,0.5)]
                active:shadow-[inset_-4px_-4px_10px_rgba(255,255,255,0.05),inset_4px_4px_10px_rgba(0,0,0,0.5)]
                text-white/80 hover:text-gold-500
                border border-white/5
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    )
}
