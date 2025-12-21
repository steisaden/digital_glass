import { Navigation } from "./components/Navigation";
import { ImpactHero } from "./components/ImpactHero";
import { MetricsSection } from "./components/MetricsSection";
import { TheCollection } from "./components/TheCollection";
import { Infrastructure } from "./components/Infrastructure";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";
import { LoadingScreen } from "./components/LoadingScreen";
import { PaperShaderBackground } from "./components/PaperShaderBackground";

export default function App() {
  return (
    <>
      <LoadingScreen />
      <PaperShaderBackground />
      <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden relative z-10" style={{ fontFamily: 'Inter, sans-serif' }}>
        <Navigation />
        <main className="w-full">
          <ImpactHero />
          <MetricsSection />
          <TheCollection />
          <Infrastructure />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </>
  );
}