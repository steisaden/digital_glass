import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function PaperShaderBackground() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Warp shader settings from the image with luxury colors
  const shaderParams = new URLSearchParams({
    colorCount: '3',
    color1: '#121212',  // Black
    color2: '#f59e0b',  // Orange (amber-500)
    color3: '#ffffff',  // White
    proportion: '0.61',
    softness: '0.91',
    distortion: '0.00',
    swirl: '0.66',
    swirlIterations: '10.2',
    shape: 'edge',
    shapeScale: '0.27',
    speed: '0.6',
    scale: '0.85',
    rotation: '0'
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        mixBlendMode: 'soft-light',
      }}
    >
      {/* Paper Design Warp Shader - Luxury Colors */}
      <iframe
        src={`https://shaders.paper.design/warp?${shaderParams.toString()}`}
        className="w-full h-full border-0"
        style={{
          filter: 'opacity(0.35) contrast(1.1)',
        }}
        title="Paper Warp Shader Background"
      />
      
      {/* Overlay to maintain dark mode integrity */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(10, 10, 15, 0.5) 100%)',
          pointerEvents: 'none',
        }}
      />
    </motion.div>
  );
}