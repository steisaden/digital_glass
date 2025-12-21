import { motion } from "motion/react";
import { Layers, Globe, Zap } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Headless Commerce",
    description: "Decoupled architecture enabling seamless omnichannel experiences with blazing performance and infinite scalability.",
    features: ["API-First Design", "Multi-Channel Ready", "Enterprise Scale"],
  },
  {
    icon: Globe,
    title: "Geospatial Intelligence",
    description: "Advanced mapping and location analytics transforming property data into actionable insights with real-time visualization.",
    features: ["3D Mapping", "Live Analytics", "Property Insights"],
  },
  {
    icon: Zap,
    title: "Immersive 3D",
    description: "Photorealistic 3D environments and virtual reality experiences that bring architectural visions to life.",
    features: ["Virtual Tours", "Real-time Rendering", "Interactive Models"],
  },
];

export function Infrastructure() {
  return (
    <section className="relative py-32 px-6 md:px-12 bg-gradient-to-b from-[#0f172a] to-[#0a0a0f]">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(245, 158, 11, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 158, 11, 0.1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} 
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="text-amber-500 tracking-[0.3em] uppercase text-sm mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Infrastructure
          </p>
          <h2 
            className="text-5xl md:text-7xl mb-6"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontWeight: 700,
              letterSpacing: '-0.02em'
            }}
          >
            Core Capabilities
          </h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
            Built on cutting-edge technologies that power Fortune 500
            enterprises and high-growth startups alike.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="group relative h-full">
                  {/* Glass Card */}
                  <div className="relative h-full backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-3xl p-8 transition-all duration-700 hover:bg-white/[0.04] hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/10">
                    {/* Icon Orb */}
                    <motion.div
                      whileHover={{ 
                        scale: 1.05,
                        rotate: 5,
                      }}
                      transition={{ duration: 0.5 }}
                      className="relative mb-8"
                    >
                      <div className="w-20 h-20 rounded-full backdrop-blur-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-amber-500/20 transition-all duration-700">
                        <Icon className="w-10 h-10 text-amber-500" />
                        
                        {/* Floating particles around icon */}
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute inset-0 rounded-full border-2 border-amber-500/20"
                        />
                        <motion.div
                          animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.2, 0.4, 0.2],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                          }}
                          className="absolute inset-0 rounded-full border-2 border-amber-500/10"
                        />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <h3 
                      className="text-2xl mb-4 group-hover:text-amber-500 transition-colors duration-500"
                      style={{ 
                        fontFamily: 'Playfair Display, serif',
                        fontWeight: 600
                      }}
                    >
                      {service.title}
                    </h3>

                    <p className="text-slate-300 leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Neumorphic Extrusion */}
                    <div className="absolute inset-0 rounded-3xl shadow-inner opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" />
                    
                    {/* Paper Shader */}
                    <div className="absolute inset-0 opacity-5 mix-blend-overlay rounded-3xl pointer-events-none" 
                      style={{ 
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        backgroundSize: '100px 100px'
                      }} 
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Stack Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-3xl p-12 text-center"
        >
          <p className="text-amber-500 tracking-[0.2em] uppercase text-sm mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            Technology Stack
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            {["React", "Next.js", "TypeScript", "Three.js", "WebGL", "Node.js", "GraphQL", "AWS"].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="px-6 py-3 backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-full hover:border-amber-500/30 hover:bg-white/[0.05] transition-all duration-500"
              >
                <span className="text-slate-300" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
          <p className="text-slate-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            Enterprise-grade technologies trusted by industry leaders
          </p>
        </motion.div>
      </div>
    </section>
  );
}
