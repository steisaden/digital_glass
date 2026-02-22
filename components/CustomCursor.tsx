"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHoveringGlass, setIsHoveringGlass] = useState(false);
    const [isHoveringMagnetic, setIsHoveringMagnetic] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('.glass-card-hover')) {
                setIsHoveringGlass(true);
            } else {
                setIsHoveringGlass(false);
            }

            if (target.closest('.magnetic-target')) {
                setIsHoveringMagnetic(true);
            } else {
                setIsHoveringMagnetic(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 10,
            y: mousePosition.y - 10,
            height: 20,
            width: 20,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            mixBlendMode: "difference" as const,
        },
        glassHover: {
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            height: 80,
            width: 80,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(4px)",
            border: "1px solid rgba(255,255,255,0.2)",
        },
        magneticHover: {
            x: mousePosition.x - 5,
            y: mousePosition.y - 5,
            height: 10,
            width: 10,
            backgroundColor: "#FF007F",
        }
    };

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 rounded-full pointer-events-none z-50 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 transition-shadow duration-300"
                variants={variants}
                animate={isHoveringGlass ? "glassHover" : isHoveringMagnetic ? "magneticHover" : "default"}
                transition={{
                    type: "spring",
                    stiffness: 800,
                    damping: 25,
                    mass: 0.2,
                }}
            >
                {isHoveringGlass && (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-[10px] tracking-widest font-bold text-white uppercase"
                    >
                        VIEW
                    </motion.span>
                )}
            </motion.div>
        </>
    );
}
