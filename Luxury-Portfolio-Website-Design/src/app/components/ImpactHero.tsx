import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function ImpactHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1718498576061-0ffb3db0a528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMDNkJTIwbWFwfGVufDF8fHx8MTc2NjE5OTkzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Abstract Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0a0a0f]/50 to-[#0a0a0f]" />
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-500/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-6xl w-full"
        >
          {/* Glass Card */}
          <div className="relative backdrop-blur-2xl bg-white/[0.03] border border-white/10 rounded-3xl p-12 md:p-16 shadow-2xl">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent rounded-3xl" />
            
            {/* Content */}
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <p className="text-amber-500 tracking-[0.3em] uppercase text-sm mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Digital Sales Center
                </p>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-6xl md:text-7xl lg:text-8xl mb-8"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em'
                }}
              >
                Immersive Digital
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500">
                  Experiences
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="text-slate-300 text-xl md:text-2xl mb-12 max-w-2xl"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
              >
                Crafting luxury digital environments for high-end real estate developers
                and asset managers. Where technology meets elegance.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <button
                  className="group relative px-10 py-5 bg-amber-500 hover:bg-amber-400 text-[#0a0a0f] rounded-2xl transition-all duration-500 overflow-hidden"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                >
                  <span className="relative z-10 flex items-center gap-3 justify-center">
                    Explore Portfolio
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>

                <button
                  className="group px-10 py-5 backdrop-blur-xl bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 hover:border-amber-500/30 text-white rounded-2xl transition-all duration-500"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                >
                  <span className="flex items-center gap-3 justify-center">
                    View Services
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500" />
                  </span>
                </button>
              </motion.div>
            </div>

            {/* Paper Shader Effect (subtle noise texture) */}
            <div className="absolute inset-0 opacity-5 mix-blend-overlay rounded-3xl pointer-events-none" 
              style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundSize: '100px 100px'
              }} 
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-amber-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}