import { useState, useEffect, useMemo } from 'react';
import { Flag, Rocket, Trophy, Briefcase, GraduationCap } from 'lucide-react';

/**
 * A section that illustrates the student journey at TRIAD Academy through a vertical timeline.
 * It highlights key milestones from enrollment to career placement.
 */
export default function JourneySection() {
  // State to track which journey steps are currently visible in the viewport.
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  // Memoized data for the journey steps to prevent re-creation on every render.
  const journeySteps = useMemo(() => [
    {
      icon: <Flag className="w-8 h-8" />,
      title: "Enrollment & Orientation",
      description: "Begin your journey with a comprehensive orientation to our curriculum, tools, and community.",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Foundation Building",
      description: "Master core concepts and foundational skills with expert-led instruction and hands-on exercises.",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Real-World Projects",
      description: "Apply your knowledge to build a portfolio of impressive projects that solve real-world problems.",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Skill Specialization",
      description: "Deepen your expertise in a chosen domain, from AI to Quantum, with specialized modules.",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Career Placement",
      description: "Leverage our industry connections and career support to land your dream job.",
    },
  ], []);

  // An effect to observe which journey steps are currently in the viewport.
  useEffect(() => {
    // Create an IntersectionObserver to track when steps become visible.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Get the step index from the data attribute.
            const index = parseInt(entry.target.getAttribute('data-step-index') || '0');
            // Add the step index to the visibleSteps array.
            setVisibleSteps((prev) => [...prev, index]);
          }
        });
      },
      // Trigger when a step is 20% visible in the viewport.
      { threshold: 0.2 }
    );

    // Observe each of the journey step elements.
    const elements = document.querySelectorAll('[data-step-index]');
    elements.forEach((el) => observer.observe(el));

    // Disconnect the observer when the component unmounts.
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-arctic-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 fade-in">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-steel-navy mb-6">
            Your Journey to Excellence
          </h2>
          <p className="font-inter text-lg text-charcoal-gray max-w-2xl mx-auto">
            From the first day of class to your first day on the job, we've designed a path for your success.
          </p>
        </div>

        {/* The main container for the vertical timeline */}
        <div className="relative">
          {/* The vertical line that connects the timeline steps */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-frost-gray/50 rounded-full"></div>

          {/* Mapping over the journey steps to create the timeline */}
          {journeySteps.map((step, index) => (
            <div
              key={index}
              data-step-index={index}
              className={`relative mb-16 flex items-center w-full ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              <div
                className={`relative w-1/2 p-8 bg-frost-gray/20 rounded-2xl shadow-lg border border-frost-gray transition-all duration-700 ease-in-out transform ${
                  index % 2 === 0 ? 'pr-12' : 'pl-12'
                } ${
                  visibleSteps.includes(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-sky-cyan text-steel-navy p-3 rounded-full">
                    {step.icon}
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-steel-navy">{step.title}</h3>
                </div>
                <p className="font-inter text-charcoal-gray">{step.description}</p>
                
                {/* A decorative arrow pointing towards the timeline */}
                <div
                  className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-frost-gray/20 rotate-45 ${
                    index % 2 === 0 ? 'right-[-8px]' : 'left-[-8px]'
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
