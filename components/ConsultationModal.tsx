import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { GlassCard } from "./GlassCard";

interface ConsultationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "unset";
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);
        // Reset after showing success
        setTimeout(() => {
            setIsSuccess(false);
            onClose();
        }, 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-[#0a0a0f]/80 backdrop-blur-md"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                        className="relative w-full max-w-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <GlassCard className="relative overflow-hidden border border-white/20 !bg-[#0a0a0f]/90 !p-10">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {isSuccess ? (
                                <div className="py-20 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-6">
                                        <ArrowRight className="w-8 h-8 rotate-[-45deg]" />
                                    </div>
                                    <h3 className="text-3xl font-serif font-bold text-white mb-2">Received</h3>
                                    <p className="text-slate-400">We&apos;ll be in touch shortly.</p>
                                </div>
                            ) : (
                                <>
                                    <div className="mb-10">
                                        <p className="text-primary tracking-widest text-xs uppercase mb-3">Consultation</p>
                                        <h2 className="text-4xl font-serif font-bold text-white mb-4">Let&apos;s talk.</h2>
                                        <p className="text-slate-400 font-light">
                                            Tell us about your project. We usually respond within 24 hours.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="space-y-2">
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                required
                                                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all duration-300"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                required
                                                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all duration-300"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <select
                                                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all duration-300 appearance-none"
                                            >
                                                <option className="bg-[#0a0a0f]">Project Type...</option>
                                                <option className="bg-[#0a0a0f]">E-Commerce</option>
                                                <option className="bg-[#0a0a0f]">Real Estate</option>
                                                <option className="bg-[#0a0a0f]">Digital Product</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <textarea
                                                rows={4}
                                                placeholder="Tell us a bit about your vision..."
                                                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all duration-300 resize-none"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-4 bg-primary hover:bg-amber-400 text-[#0a0a0f] rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                            ) : (
                                                <>
                                                    Send Request
                                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </>
                            )}
                        </GlassCard>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
