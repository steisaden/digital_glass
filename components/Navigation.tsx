import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
    onContactClick: () => void;
}

export function Navigation({ onContactClick }: NavigationProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const lastScrollY = useRef(0);
    const scrollFrame = useRef<number | null>(null);
    const visibleRef = useRef(true);
    const scrolledRef = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollFrame.current !== null) return;

            scrollFrame.current = window.requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;
                const nextScrolled = currentScrollY > 50;
                const nextVisible =
                    currentScrollY < 50 || currentScrollY < lastScrollY.current
                        ? true
                        : currentScrollY > lastScrollY.current + 5
                          ? false
                          : visibleRef.current;

                if (nextScrolled !== scrolledRef.current) {
                    scrolledRef.current = nextScrolled;
                    setIsScrolled(nextScrolled);
                }

                if (nextVisible !== visibleRef.current) {
                    visibleRef.current = nextVisible;
                    setIsVisible(nextVisible);
                    if (!nextVisible) {
                        setIsMobileMenuOpen(false);
                    }
                }

                lastScrollY.current = currentScrollY;
                scrollFrame.current = null;
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (scrollFrame.current !== null) {
                window.cancelAnimationFrame(scrollFrame.current);
            }
        };
    }, []);

    const navItems = [
        { label: "Selected work", href: "#work" },
        { label: "What we build", href: "#what-we-build" },
        { label: "How it works", href: "#how-it-works" },
    ];

    return (
        <motion.nav
            initial={false}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 transition-all duration-500 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
        >
            <div
                className={`
                mx-4 w-full max-w-5xl rounded-[2rem] transition-all duration-500
                ${isScrolled ? "glass-panel-luxury py-3 px-6" : "bg-transparent py-4 px-6"}
            `}
            >
                <div className="flex items-center justify-between">
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.05 }}
                        className="text-lg sm:text-xl md:text-2xl"
                        style={{
                            fontFamily: "var(--font-serif)",
                            fontWeight: 700,
                        }}
                    >
                        <span className="text-white">Stephen</span>
                        <span className="text-primary">.Tech</span>
                    </motion.a>

                    <div className="hidden md:flex items-center gap-8 bg-black/20 rounded-full px-6 py-2 border border-white/10">
                        {navItems.map((item) => (
                            <motion.a
                                key={item.label}
                                href={item.href}
                                whileHover={{ y: -2 }}
                                className="text-slate-200 hover:text-white transition-colors duration-300 text-sm tracking-wide"
                                style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}
                            >
                                {item.label}
                            </motion.a>
                        ))}
                    </div>

                    <div className="hidden md:block">
                        <motion.button
                            onClick={onContactClick}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2.5 bg-primary text-[#0a0a0f] rounded-full transition-all duration-300 shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02]"
                            style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
                        >
                            Get Started
                        </motion.button>
                    </div>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-navigation"
                        className="md:hidden w-10 h-10 rounded-full glass-panel flex items-center justify-center transition-transform hover:scale-105"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-5 h-5 text-white" />
                        ) : (
                            <Menu className="w-5 h-5 text-white" />
                        )}
                    </button>
                </div>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            className="md:hidden overflow-hidden"
                        >
                            <div id="mobile-navigation" className="flex flex-col gap-2 p-4 glass-panel rounded-2xl bg-[#08080c]/95 border border-white/10 shadow-2xl backdrop-blur-xl">
                                {navItems.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className="text-slate-200 hover:text-white hover:bg-white/10 rounded-xl px-4 py-3 transition-colors duration-300"
                                        style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                                <button
                                    className="px-6 py-3 mt-2 bg-primary text-[#0a0a0f] rounded-xl transition-all duration-300 active:scale-95"
                                    style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        onContactClick();
                                    }}
                                >
                                    Get Started
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}
