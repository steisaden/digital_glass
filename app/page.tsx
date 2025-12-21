"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { ImpactHero } from "@/components/ImpactHero";
import { MetricsSection } from "@/components/MetricsSection";
import { TheCollection } from "@/components/TheCollection";
import { Infrastructure } from "@/components/Infrastructure";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import { PaperShaderBackground } from "@/components/PaperShaderBackground";
import { CaseStudyModal } from "@/components/CaseStudyModal";
import { ConsultationModal } from "@/components/ConsultationModal";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <LoadingScreen />
      <PaperShaderBackground />
      <div className="min-h-screen bg-transparent text-white overflow-x-hidden relative z-10" style={{ fontFamily: 'var(--font-sans)' }}>
        <Navigation onContactClick={() => setIsContactOpen(true)} />
        <main className="w-full">
          <ImpactHero />
          <MetricsSection />
          <TheCollection
            onProjectSelect={setSelectedProject}
            onContactClick={() => setIsContactOpen(true)}
          />
          <Infrastructure />
          <Testimonials onContactClick={() => setIsContactOpen(true)} />
        </main>
        <Footer />
      </div>

      {/* Modals */}
      <CaseStudyModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
      <ConsultationModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
