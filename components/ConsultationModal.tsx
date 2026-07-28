import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, Mail, MessageCircle } from "lucide-react";
import { useEffect } from "react";
import { GlassCard } from "./GlassCard";

interface ConsultationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
    useEffect(() => {
        if (isOpen) {
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollBarWidth}px`;
        } else {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
            document.body.style.paddingRight = "";
        }
        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
            document.body.style.paddingRight = "";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-[#0a0a0f]/94"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.97, y: 12 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.97, y: 12 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-full max-w-lg"
                        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
                    >
                        <GlassCard className="relative overflow-hidden border border-white/20 !bg-[#0a0a0f]/90 !p-10">
                            <button
                                onClick={onClose}
                                aria-label="Close contact options"
                                className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="mb-10">
                                <p className="text-primary text-xs font-semibold mb-3">Start a project</p>
                                <h2 className="text-4xl font-bold tracking-[-0.04em] text-white mb-4">Choose how you want to talk.</h2>
                                <p className="text-slate-300 font-light leading-relaxed">
                                    Share what you are building, what is not working yet, and what a successful launch should make possible.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <a
                                    href="mailto:stephen.tech139@gmail.com?subject=Stephen.Tech%20project%20inquiry"
                                    className="group flex min-h-20 items-center gap-4 rounded-2xl bg-primary px-5 py-4 font-semibold text-[#0a0a0f] transition hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                                >
                                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black/10">
                                        <Mail className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                    <span className="flex-1">
                                        <strong className="block">Email Stephen</strong>
                                        <small className="mt-1 block font-normal opacity-70">Best for a detailed project brief</small>
                                    </span>
                                    <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" aria-hidden="true" />
                                </a>
                                <a
                                    href="https://wa.me/19713579090?text=Hi%20Stephen%2C%20I%27d%20like%20to%20discuss%20a%20project."
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex min-h-20 items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-4 font-semibold text-white transition hover:bg-white/[0.11] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                                >
                                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                                        <MessageCircle className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                    <span className="flex-1">
                                        <strong className="block">Message on WhatsApp</strong>
                                        <small className="mt-1 block font-normal text-slate-400">Best for a quick first conversation</small>
                                    </span>
                                    <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" aria-hidden="true" />
                                </a>
                            </div>

                            <p className="mt-6 text-xs leading-relaxed text-slate-500">
                                These links open your email or WhatsApp. Nothing is sent automatically.
                            </p>
                        </GlassCard>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
