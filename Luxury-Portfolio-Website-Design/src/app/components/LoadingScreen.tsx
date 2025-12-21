import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] bg-[#0a0a0f] flex items-center justify-center"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Logo and Loading Animation */}
      <div className="relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 
            className="text-5xl md:text-6xl mb-8"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontWeight: 700
            }}
          >
            <span className="text-amber-500">Digital</span>
            <span className="text-white">Glass</span>
          </h1>

          {/* Loading Bar */}
          <div className="w-64 h-1 mx-auto bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-full w-1/3 bg-gradient-to-r from-transparent via-amber-500 to-transparent"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 text-slate-400 text-sm tracking-wider"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            CRAFTING YOUR EXPERIENCE
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}
