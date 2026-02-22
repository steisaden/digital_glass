import React from 'react';

interface NeumorphButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

export const NeumorphButton = ({ children, className = '', ...props }: NeumorphButtonProps) => {
    return (
        <button
            className={`neumorphic-button px-8 py-3 tracking-wide text-white/90 hover:text-white font-medium ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
