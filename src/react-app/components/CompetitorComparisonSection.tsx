import { useState, useEffect } from 'react';
import { Check, Minus, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router';

export default function CompetitorComparisonSection() {
  const [visibleRows, setVisibleRows] = useState<number[]>([]);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleRows(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.5 }
    );

    const rowElements = document.querySelectorAll('.comparison-row');
    rowElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const renderIcon = (value: boolean | string) => {
    if (value === true) {
      return <Check className="w-6 h-6 text-sky-cyan" />;
    } else if (value === "partial") {
      return <div className="w-6 h-6 flex items-center justify-center text-amber-500 font-bold">~</div>;
    } else {
      return <Minus className="w-6 h-6 text-gray-400" />;
    }
  };

  return (
    <section className="py-20 bg-frost-gray">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-steel-navy mb-6">
            Why TRIAD vs Others
          </h2>
          <p className="font-inter text-lg text-charcoal-gray max-w-3xl mx-auto">
            See how TRIAD Academy stands apart from traditional institutes and free online learning
          </p>
        </div>
        
        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-frost-gray">
          {/* Table Header */}
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
          
          {/* Table Body */}
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
          
          {/* Table Footer */}
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
        
        {/* Additional Info Cards */}
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
