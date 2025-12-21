import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Digital Glass transformed our vision into an immersive digital experience that exceeded all expectations. The attention to detail and technical excellence is unmatched.",
    author: "Sarah Chen",
    role: "VP of Digital Strategy",
    company: "Metropolitan Towers",
    rating: 5,
  },
  {
    quote: "Working with their team was seamless. They delivered a geospatial platform that revolutionized how we present properties to high-net-worth clients.",
    author: "Michael Rodriguez",
    role: "Chief Technology Officer",
    company: "Philadelphia Property Group",
    rating: 5,
  },
  {
    quote: "The ROI speaks for itself. Our digital sales center has become the cornerstone of our luxury real estate marketing strategy.",
    author: "Emily Thompson",
    role: "Managing Director",
    company: "Goddess Hair Sanctuary",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="relative py-32 px-6 md:px-12 bg-gradient-to-b from-[#0a0a0f] via-[#0f172a] to-[#0a0a0f]">
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
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
            Client Testimonials
          </p>
          <h2 
            className="text-5xl md:text-7xl mb-6"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontWeight: 700,
              letterSpacing: '-0.02em'
            }}
          >
            Trusted by Leaders
          </h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
            Hear from the visionaries who've partnered with us to create
            extraordinary digital experiences.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="relative h-full backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.04] hover:border-amber-500/30 transition-all duration-700">
                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <Quote className="w-6 h-6 text-amber-500" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-300 leading-relaxed mb-8" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="pt-6 border-t border-white/10">
                  <p className="text-white mb-1" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                    {testimonial.author}
                  </p>
                  <p className="text-slate-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {testimonial.role}
                  </p>
                  <p className="text-amber-500 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {testimonial.company}
                  </p>
                </div>

                {/* Paper Shader */}
                <div className="absolute inset-0 opacity-5 mix-blend-overlay rounded-3xl pointer-events-none" 
                  style={{ 
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundSize: '100px 100px'
                  }} 
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 text-center"
        >
          <div className="backdrop-blur-xl bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10 border border-amber-500/20 rounded-3xl p-12 md:p-16">
            <h3 
              className="text-4xl md:text-5xl mb-6"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                fontWeight: 600
              }}
            >
              Ready to Elevate Your Brand?
            </h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              Join the ranks of industry leaders who trust us to deliver
              exceptional digital experiences.
            </p>
            <button className="px-10 py-5 bg-amber-500 hover:bg-amber-400 text-[#0a0a0f] rounded-2xl transition-all duration-500 inline-flex items-center gap-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
              Schedule Your Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
