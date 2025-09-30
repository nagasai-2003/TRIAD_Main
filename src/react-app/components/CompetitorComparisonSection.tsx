import { useState, useEffect } from 'react';
import { Check, Minus, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router';

/**
 * A section that compares TRIAD Academy with traditional institutes and free online learning.
 * It features a comparison table and a set of key differentiators.
 */
export default function CompetitorComparisonSection() {
  const [visibleRows, setVisibleRows] = useState<number[]>([]);

  // Data for the comparison table
  const comparisonData = [
    {
      feature: "Future Tech (AI, Quantum, ML)",
      triad: true,
      traditional: false,
      youtube: false
    },
    {
      feature: "Project-Based Learning",
      triad: true,
      traditional: "partial",
      youtube: false
    },
    {
      feature: "Global-Ready Curriculum",
      triad: true,
      traditional: false,
      youtube: false
    },
    {
      feature: "Transparent (No Placement Lies)",
      triad: true,
      traditional: false,
      youtube: true
    },
    {
      feature: "Mentorship + Guidance",
      triad: true,
      traditional: false,
      youtube: false
    },
    {
      feature: "Industry-Ready Skills",
      triad: true,
      traditional: "partial",
      youtube: false
    },
    {
      feature: "Structured Learning Path",
      triad: true,
      traditional: true,
      youtube: false
    }
  ];

  // An effect to animate the table rows as they become visible
  useEffect(() => {
    // Create an IntersectionObserver to track when the table rows enter the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Get the index of the intersecting row from the data attribute
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            // Add the index to the visibleRows state to trigger the animation
            setVisibleRows(prev => [...prev, index]);
          }
        });
      },
      // Trigger the animation when 50% of the element is visible
      { threshold: 0.5 }
    );

    // Get all the table row elements
    const rowElements = document.querySelectorAll('.comparison-row');
    // Observe each row element
    rowElements.forEach((el) => observer.observe(el));

    // Disconnect the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  // A function to render the appropriate icon based on the value
  const renderIcon = (value: boolean | string) => {
    if (value === true) {
      return <Check className="w-6 h-6 text-sky-cyan" />;
    } 
    if (value === "partial") {
      return <div className="w-6 h-6 flex items-center justify-center text-amber-500 font-bold">~</div>;
    } 
    return <Minus className="w-6 h-6 text-gray-400" />;
  };

  return (
    <section className="py-20 bg-frost-gray">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header with a title and a brief description */}
        <div className="text-center mb-16 fade-in">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-steel-navy mb-6">
            Why TRIAD vs Others
          </h2>
          <p className="font-inter text-lg text-charcoal-gray max-w-3xl mx-auto">
            See how TRIAD Academy stands apart from traditional institutes and free online learning
          </p>
        </div>
        
        {/* The main comparison table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-frost-gray">
          {/* Table header */}
          <div className="bg-steel-navy text-arctic-white p-6">
            <div className="grid grid-cols-4 gap-6 items-center">
              <div className="font-montserrat font-bold text-lg">Features</div>
              <div className="text-center">
                <div className="font-montserrat font-bold text-sky-cyan text-lg">TRIAD</div>
                <div className="font-inter text-sm text-arctic-white/80">Academy</div>
              </div>
              <div className="text-center">
                <div className="font-montserrat font-semibold text-lg">Traditional</div>
                <div className="font-inter text-sm text-arctic-white/80">Institutes</div>
              </div>
              <div className="text-center">
                <div className="font-montserrat font-semibold text-lg">Free YouTube</div>
                <div className="font-inter text-sm text-arctic-white/80">Learning</div>
              </div>
            </div>
          </div>
          
          {/* Table body with animated rows */}
          <div>
            {comparisonData.map((row, index) => (
              <div 
                key={index}
                className={`comparison-row grid grid-cols-4 gap-6 items-center p-6 border-b border-frost-gray/50 hover:bg-sky-cyan/5 transition-all duration-300 ${
                  visibleRows.includes(index) 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8'
                }`}
                data-index={index}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="font-inter font-semibold text-steel-navy">
                  {row.feature}
                </div>
                <div className="flex justify-center">
                  {renderIcon(row.triad)}
                </div>
                <div className="flex justify-center">
                  {renderIcon(row.traditional)}
                </div>
                <div className="flex justify-center">
                  {renderIcon(row.youtube)}
                </div>
              </div>
            ))}
          </div>
          
          {/* Table footer with a CTA button */}
          <div className="bg-sky-cyan/10 p-6">
            <div className="text-center">
              <p className="font-inter text-charcoal-gray mb-4">
                Ready to experience the TRIAD difference?
              </p>
              <Link 
                to="/courses"
                className="inline-flex items-center space-x-2 bg-sky-cyan text-steel-navy font-montserrat font-semibold px-8 py-3 rounded-xl glow-cyan-hover transition-all duration-300 hover:scale-105"
              >
                <LinkIcon className="w-5 h-5" />
                <span>Explore Our Courses</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Additional information cards highlighting key benefits */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-xl p-6 border-l-4 border-sky-cyan shadow-lg fade-in">
            <h4 className="font-montserrat font-bold text-steel-navy mb-2">Future-Ready</h4>
            <p className="font-inter text-sm text-charcoal-gray">Learn technologies that will matter in 2030 and beyond</p>
          </div>
          <div className="bg-white rounded-xl p-6 border-l-4 border-sky-cyan shadow-lg fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-montserrat font-bold text-steel-navy mb-2">No False Promises</h4>
            <p className="font-inter text-sm text-charcoal-gray">Transparent about career outcomes and skill development</p>
          </div>
          <div className="bg-white rounded-xl p-6 border-l-4 border-sky-cyan shadow-lg fade-in" style={{ animationDelay: '0.4s' }}>
            <h4 className="font-montserrat font-bold text-steel-navy mb-2">Global Standards</h4>
            <p className="font-inter text-sm text-charcoal-gray">Curriculum designed for international tech opportunities</p>
          </div>
        </div>
      </div>
    </section>
  );
}
