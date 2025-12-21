import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
    onContactClick: () => void;
}

export function Navigation({ onContactClick }: NavigationProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { label: "Portfolio", href: "#portfolio" },
        { label: "Services", href: "#services" },
        { label: "About", href: "#about" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? "backdrop-blur-xl bg-[#0a0a0f]/80 border-b border-white/10"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.05 }}
                        className="text-2xl"
                        style={{
                            fontFamily: 'var(--font-serif)',
                            fontWeight: 700
                        }}
                    >
                        <span className="text-primary">Digital</span>
                        <span className="text-white">Glass</span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                whileHover={{ y: -2 }}
                                className="text-slate-300 hover:text-primary transition-colors duration-300"
                                style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                            >
                                {item.label}
                            </motion.a>
                        ))}
                        <motion.button
                            onClick={onContactClick}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-primary hover:bg-amber-400 text-[#0a0a0f] rounded-xl transition-all duration-300"
                            style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
                        >
                            Let's Talk
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden w-10 h-10 rounded-xl backdrop-blur-xl bg-white/[0.05] border border-white/10 flex items-center justify-center"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-white" />
                        ) : (
                            <Menu className="w-6 h-6 text-white" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden py-6 border-t border-white/10"
                    >
                        <div className="flex flex-col gap-4">
                            {navItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="text-slate-300 hover:text-primary transition-colors duration-300 py-2"
                                    style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <button
                                className="px-6 py-3 bg-primary hover:bg-amber-400 text-[#0a0a0f] rounded-xl transition-all duration-300 mt-2"
                                style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    onContactClick();
                                }}
                            >
                                Let's Talk
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
}
