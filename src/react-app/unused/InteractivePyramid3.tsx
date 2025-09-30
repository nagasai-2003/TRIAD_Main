import { useState, useEffect, useMemo, useRef } from 'react';
import PyramidIcon from './PyramidIcon';

// --- Data & Type Definitions ---
interface MethodologyStep {
  title: string;
  description: string;
  position: { top?: string; bottom?: string; left?: string; right?: string; };
}

// --- Main Component ---

/**
 * A highly interactive and visually stunning section featuring a central Pyramid 
 * connected to scrollable steps via an animated 'Plasma Conduit' network.
 */
export default function InteractivePyramidSection() {
  const [activeStep, setActiveStep] = useState(-1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const methodologySteps: MethodologyStep[] = useMemo(() => [
    // Positions are set to create a balanced radial pattern around the center (50% / 50%)
    { title: "Core Engineering", description: "Master the foundational principles of engineering that underpin all technology.", position: { top: '10%', left: '50%' } },
    { title: "AI & Quantum", description: "Dive into the future with cutting-edge knowledge in Artificial Intelligence and Quantum Computing.", position: { top: '30%', left: '10%' } },
    { title: "Mentorship", description: "Receive personalized guidance from industry experts to navigate your career path.", position: { top: '70%', left: '10%' } },
    { title: "Project-Based Learning", description: "Apply your skills to real-world projects, building a portfolio that showcases your abilities.", position: { top: '30%', left: '90%' } },
    { title: "Global Standards", description: "Learn a curriculum designed to meet international standards, preparing you for a global career.", position: { top: '70%', left: '90%' } },
    { title: "Transformation", description: "Emerge as a job-ready engineer, equipped with the skills and confidence to succeed.", position: { bottom: '10%', left: '50%' } },
  ], []);

  // --- IntersectionObserver (remains working) ---
  useEffect(() => {
    const stepElements = document.querySelectorAll('[data-step-index]');
    if (stepElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = -1;
        let mostVisibleIndex = -1;

        entries.forEach(entry => {
          const index = parseInt(entry.target.getAttribute('data-step-index') || '-1');
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleIndex = index;
          }
        });
        
        setActiveStep(mostVisibleIndex !== -1 ? mostVisibleIndex : -1);
      },
      { threshold: [0.0, 0.2, 0.4, 0.6, 0.8, 1.0], rootMargin: "-30% 0px -30% 0px" } 
    );

    stepElements.forEach(el => observer.observe(el));
    return () => stepElements.forEach(el => observer.unobserve(el));
  }, []);

  // --- Scroll Progress Effect (remains working) ---
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const { top, height } = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (viewportHeight - top) / height));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- Dynamic Glow Style for Central Pyramid (remains working) ---
  const isAnyStepActive = activeStep !== -1;

  const coreGlowStyle = {
    filter: isAnyStepActive 
      ? `drop-shadow(0 0 80px hsla(180, 100%, 60%, 1.0)) drop-shadow(0 0 160px hsla(210, 100%, 70%, 0.7))`
      : `drop-shadow(0 0 ${scrollProgress * 60}px hsla(180, 100%, 50%, 0.8)) ` + 
        `drop-shadow(0 0 ${scrollProgress * 120}px hsla(210, 100%, 70%, 0.5))`,
    
    transform: isAnyStepActive 
      ? 'scale(1.2)' 
      : `scale(${1 + scrollProgress * 0.2})`,
      
    transition: 'transform 300ms ease-out, filter 300ms ease-out',
  };

  return (
    <section ref={sectionRef} className="py-24 bg-steel-navy" aria-labelledby="methodology-heading">
      
      {/* --- INLINE CSS FOR ENHANCED PLASMA ANIMATION --- */}
      <style>{`
        @keyframes plasma {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 0%; }
        }
        .animate-plasma {
          background-image: linear-gradient(90deg, 
            rgba(255, 255, 255, 0) 0%, 
            rgba(0, 255, 255, 0.9) 50%, 
            rgba(255, 255, 255, 0) 100%);
          background-size: 250% 100%;
          animation: plasma 1s linear infinite;
        }
      `}</style>

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

          {/* Left Column: The Neural Assembler Visualization (Plasma Conduit) */}
          <div className="sticky top-24 h-[500px] lg:h-[600px]" aria-hidden="true">
            <div className="relative w-full h-full">
              
              {/* Central Core Pyramid (Logo is at the intersection point) */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 flex items-center justify-center z-10"
                style={coreGlowStyle}
              >
                <PyramidIcon className="w-48 h-48 text-sky-cyan" />
              </div>

              {/* Methodology Connectors (Plasma Conduits) */}
              {methodologySteps.map((step, index) => {
                const isActive = activeStep === index;
                
                // Simplified Line EMANATION LOGIC:
                const centerX = 50; 
                const centerY = 50; 
                const targetX = parseFloat(step.position.left || '50%');
                const targetY = parseFloat(step.position.top || '50%');
                
                // Calculate total distance between center and target point
                const totalDistance = Math.sqrt(Math.pow(targetX - centerX, 2) + Math.pow(targetY - centerY, 2));

                // FIXED PIXEL OFFSET: Approximate the radius of the pyramid (w-48 = 192px)
                // We'll use a fixed pixel value for the offset, regardless of container height, 
                // and convert it to a percentage of the total distance for line width calculation.
                const PYRAMID_RADIUS_PX = 96; // Half of w-48 (192px)
                const CONTAINER_HEIGHT_PX = 600; // Assuming lg:h-[600px] is the max height
                const START_OFFSET_PX = 70; // Slightly less than the radius for visual separation

                // Calculate line length in percentage of container size
                // We need to calculate the actual pixel distance, subtract the offset, and convert back to a percentage.
                // This is complex, so let's use a simpler visual approach:

                // Visual Offset: start the line *visually* 15% away from the container center.
                const VISUAL_OFFSET_PERCENT = 15; 
                const lineLength = totalDistance - VISUAL_OFFSET_PERCENT;
                
                // The actual length/width the line element will have
                const lineStyleWidth = `${lineLength}%`;
                
                // The offset to move the line out from the center
                const lineTransformOffset = VISUAL_OFFSET_PERCENT / 2;
                
                // Style for the Target Endpoint (Visual Anchor)
                const targetPointStyle = {
                    ...step.position,
                    width: isActive ? '16px' : '10px', 
                    height: isActive ? '16px' : '10px',
                    backgroundColor: isActive ? '#00FFFF' : 'rgba(0, 255, 255, 0.3)',
                    boxShadow: isActive 
                        ? '0 0 15px #00FFFF, 0 0 30px #00FFFF, 0 0 60px rgba(0, 255, 255, 0.7)' 
                        : 'none',
                    borderRadius: '50%',
                    transition: 'all 500ms ease-out',
                    zIndex: 5
                };

                return (
                  <div key={index}>
                    {/* The Plasma Conduit Line */}
                    <div
                      className={`absolute left-1/2 top-1/2 origin-center transition-opacity duration-500`}
                      style={{
                        height: isActive ? '5px' : '2px',
                        opacity: isActive ? 1 : 0.1,
                        width: lineStyleWidth, // Use the calculated line length
                        
                        // Transform to align with the target point and push out by the offset
                        transform: `translate(-50%, -50%) 
                                    rotate(${Math.atan2(targetY - centerY, targetX - centerX)}rad) 
                                    translateX(${lineTransformOffset}%)`,
                        
                        backgroundColor: isActive ? 'transparent' : 'rgba(135, 206, 250, 0.1)', 
                        boxShadow: isActive 
                            ? '0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.5)' // Increased beam glow
                            : 'none', 
                        zIndex: 0,
                      }}
                    >
                        {/* Inner Animated Plasma Effect */}
                        {isActive && (
                            <div className="h-full w-full animate-plasma" />
                        )}
                    </div>

                    {/* The Target Endpoint (Visual Anchor) */}
                    <div 
                        className="absolute -translate-x-1/2 -translate-y-1/2" 
                        style={targetPointStyle} 
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Scrollable Content Steps (Highlighting) */}
          <div className="flex flex-col space-y-48 relative z-10">
            {methodologySteps.map((step, index) => {
                const isCurrentStep = activeStep === index;
                return (
                  <div
                    key={index}
                    data-step-index={index}
                    className={`min-h-[200px] lg:min-h-[250px] transition-opacity duration-500 ${isCurrentStep ? 'opacity-100' : 'opacity-30'}`}
                  >
                    <div className="transition-transform duration-700 ease-out">
                      <h3 className={`font-montserrat font-bold text-3xl mb-4 transition-colors duration-500 ${isCurrentStep ? 'text-sky-cyan' : 'text-gray-400'}`}>{step.title}</h3>
                      <p className={`font-inter text-lg leading-relaxed transition-colors duration-500 ${isCurrentStep ? 'text-white' : 'text-gray-400'}`}>{step.description}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}