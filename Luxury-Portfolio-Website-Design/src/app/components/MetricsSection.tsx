import { motion } from "motion/react";
import { TrendingUp, Users, Award, Sparkles } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: "340%",
    label: "Average ROI",
    description: "Across all client projects",
  },
  {
    icon: Users,
    value: "8",
    label: "Fortune 500",
    description: "Enterprise partnerships",
  },
  {
    icon: Award,
    value: "24+",
    label: "Projects",
    description: "Successfully delivered",
  },
  {
    icon: Sparkles,
    value: "100%",
    label: "Satisfaction",
    description: "Client retention rate",
  },
];

export function MetricsSection() {
  return (
    <section className="relative py-20 px-6 md:px-12">
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-2xl p-6 text-center hover:bg-white/[0.04] hover:border-amber-500/30 transition-all duration-500">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-amber-500" />
                    </div>
                  </div>

                  {/* Value */}
                  <p 
                    className="text-3xl md:text-4xl mb-2 text-amber-500"
                    style={{ 
                      fontFamily: 'Playfair Display, serif',
                      fontWeight: 700
                    }}
                  >
                    {metric.value}
                  </p>

                  {/* Label */}
                  <p 
                    className="text-white mb-1"
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600
                    }}
                  >
                    {metric.label}
                  </p>

                  {/* Description */}
                  <p 
                    className="text-slate-400 text-xs"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {metric.description}
                  </p>

                  {/* Paper Shader */}
                  <div className="absolute inset-0 opacity-5 mix-blend-overlay rounded-2xl pointer-events-none" 
                    style={{ 
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                      backgroundSize: '100px 100px'
                    }} 
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
