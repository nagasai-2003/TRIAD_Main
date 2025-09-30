import { useState, useEffect, useMemo, FC, ReactNode } from 'react';
import { Cpu, BrainCircuit, Users, BookCopy, Code2, Rocket } from 'lucide-react';

// --- Data & Type Definitions ---
interface MethodologyStep {
  icon: ReactNode;
  title: string;
  description: string;
  position: { top?: string; bottom?: string; left?: string; right?: string; };
}

// --- Main Component ---

/**
 * A highly interactive and visually stunning section that brings the TRIAD methodology to life
 * through an animated "Neural Assembler" visualization.
 */
export default function InteractivePyramidSection() {
  const [activeStep, setActiveStep] = useState(-1);

  const methodologySteps: MethodologyStep[] = useMemo(() => [
    { icon: <Cpu size={32} />, title: "Core Engineering", description: "Master the foundational principles of engineering that underpin all technology.", position: { top: '5%', left: '42%' } },
    { icon: <BrainCircuit size={32} />, title: "AI & Quantum", description: "Dive into the future with cutting-edge knowledge in Artificial Intelligence and Quantum Computing.", position: { top: '35%', left: '10%' } },
    { icon: <Users size={32} />, title: "Mentorship", description: "Receive personalized guidance from industry experts to navigate your career path.", position: { top: '65%', left: '10%' } },
    { icon: <BookCopy size={32} />, title: "Project-Based Learning", description: "Apply your skills to real-world projects, building a portfolio that showcases your abilities.", position: { top: '35%', right: '10%' } },
    { icon: <Code2 size={32} />, title: "Global Standards", description: "Learn a curriculum designed to meet international standards, preparing you for a global career.", position: { top: '65%', right: '10%' } },
    { icon: <Rocket size={32} />, title: "Transformation", description: "Emerge as a job-ready engineer, equipped with the skills and confidence to succeed.", position: { bottom: '5%', left: '42%' } },
  ], []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-step-index') || '-1');
            setActiveStep(current => Math.max(current, index));
          }
        });
      },
      { threshold: 0.6, rootMargin: "-20% 0px -20% 0px" }
    );

    const elements = document.querySelectorAll('[data-step-index]');
    elements.forEach(el => observer.observe(el));

    // Reset for development hot-reloading
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setActiveStep(-1);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      elements.forEach(el => observer.unobserve(el));
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const coreGlowStyle = {
    boxShadow: `
      0 0 ${10 + activeStep * 8}px hsl(180, 100%, 50%),
      0 0 ${20 + activeStep * 16}px hsl(180, 100%, 50%),
      0 0 ${30 + activeStep * 24}px hsl(210, 100%, 70%)
    `,
    transform: `scale(${1 + activeStep * 0.05})`,
  };

  return (
    <section className="py-24 bg-steel-navy" aria-labelledby="methodology-heading">
      <div className="max-w-8xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 id="methodology-heading" className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-6">
            The TRIAD Methodology
          </h2>
          <p className="font-inter text-lg text-gray-300 max-w-3xl mx-auto">
            Our unique approach forges elite engineers by assembling core principles, future-tech, and expert guidance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left Column: The Neural Assembler Visualization */}
          <div className="sticky top-24 h-[500px] lg:h-[600px]" aria-hidden="true">
            <div className="relative w-full h-full">
              {/* Central Core */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-sky-cyan/20 rounded-full flex items-center justify-center transition-all duration-1000 ease-in-out"
                style={coreGlowStyle}
              >
                <div className="w-16 h-16 bg-steel-navy rounded-full"></div>
              </div>

              {/* Methodology Icons and Connectors */}
              {methodologySteps.map((step, index) => {
                const isActive = activeStep >= index;
                return (
                  <div key={index}>
                    {/* Connector Line */}
                    <div
                      className="absolute left-1/2 top-1/2 origin-left"
                      style={{
                        ...step.position,
                        height: '2px',
                        width: 'calc(50% - 48px)',
                        transform: `rotate(${Math.atan2(
                          (parseFloat(step.position.top || '50%') / 100) * 600 - 300,
                          (parseFloat(step.position.left || '50%') / 100) * 600 - 300
                        )}rad) translateX(48px)`,
                      }}
                    >
                       <div className={`h-full bg-gradient-to-r from-sky-cyan/50 to-sky-cyan/0 transition-transform duration-700 ease-in-out origin-left ${isActive ? 'scale-x-100' : 'scale-x-0'}`} style={{transitionDelay: `${isActive ? 200 : 0}ms`}}/>
                    </div>
                    {/* Icon */}
                    <div
                      className={`absolute flex items-center justify-center w-20 h-20 rounded-full transition-all duration-700 ease-out
                        ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
                      style={{ ...step.position, transform: `translate(-50%, -50%) ${isActive ? 'scale(1)' : 'scale(0.5)'}` }}
                    >
                      <div className="w-16 h-16 bg-steel-navy/80 backdrop-blur-sm border border-sky-cyan/30 rounded-full flex items-center justify-center text-sky-cyan">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Scrollable Content Steps */}
          <div className="flex flex-col space-y-48 relative z-10">
            {methodologySteps.map((step, index) => (
              <div
                key={index}
                data-step-index={index}
                className="min-h-[200px] lg:min-h-[250px] transition-opacity duration-1000"
                style={{ opacity: activeStep >= index ? 1 : 0.2 }}
              >
                <div className={`transition-all duration-700 ease-out ${activeStep === index ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-4'}`}>
                  <h3 className="font-montserrat font-bold text-3xl text-sky-cyan mb-4">{step.title}</h3>
                  <p className="font-inter text-gray-300 leading-relaxed text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
