import { Link } from 'react-router-dom';
import PyramidIcon from './PyramidIcon';
import { Rocket, Users, Star } from 'lucide-react';
import { useMemo } from 'react';

/**
 * A Call-to-Action (CTA) section specifically for the projects page.
 * It encourages users to start their learning journey and highlights key success metrics.
 * Optimized for performance by replacing blurred divs with a lightweight SVG grid background.
 */
export default function ProjectsCTASection() {

  // Memoized data for the success statistics to prevent re-creation on every render.
  const stats = useMemo(() => [
    {
      icon: <Rocket className="w-10 h-10 text-sky-cyan" />,
      value: "1000+",
      label: "Projects Built",
      sublabel: "By our students",
    },
    {
      icon: <Users className="w-10 h-10 text-sky-cyan" />,
      value: "85%",
      label: "Job Placement Rate",
      sublabel: "Within 6 months",
    },
    {
      icon: <Star className="w-10 h-10 text-sky-cyan" />,
      value: "50+",
      label: "Industry Awards",
      sublabel: "Won by student projects",
    },
  ], []);

  return (
    <section className="py-20 bg-gradient-to-br from-steel-navy via-steel-navy to-blue-900 relative overflow-hidden">
      {/* Optimized Background: A subtle, performant SVG grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#00CFFF" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Animated Pyramid Icon */}
        <div className="mb-8 flex justify-center">
          <PyramidIcon className="w-32 h-32" animated={true} />
        </div>
        
        {/* Main Headline */}
        <div className="text-center mb-16 fade-in">
          <h2 className="font-montserrat font-bold text-4xl md:text-6xl text-arctic-white mb-6">
            Your Next Project Starts Here.
          </h2>
          <p className="font-montserrat font-semibold text-xl md:text-2xl text-sky-cyan mb-6">
            Join TRIAD and turn your ideas into reality.
          </p>
          <p className="font-inter text-lg text-arctic-white/80 max-w-3xl mx-auto leading-relaxed">
            Every project you've seen was built by someone who started exactly where you are now. 
            Take the first step towards building something extraordinary.
          </p>
        </div>

        {/* Success Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 fade-in">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-sky-cyan/20 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-sky-cyan/30 transition-colors duration-300">
                {stat.icon}
              </div>
              <h3 className="font-montserrat font-bold text-3xl text-sky-cyan mb-2">{stat.value}</h3>
              <p className="font-inter text-arctic-white/80">{stat.label}</p>
              <p className="font-inter text-sm text-arctic-white/60">{stat.sublabel}</p>
            </div>
          ))}
        </div>
        
        {/* CTA Buttons */}
        <div className="text-center fade-in">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link 
              to="/courses"
              className="bg-sky-cyan text-steel-navy font-montserrat font-bold px-10 py-5 rounded-2xl text-xl glow-cyan-hover transition-all duration-300 hover:scale-105 shadow-xl inline-block"
            >
              Explore Courses
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-sky-cyan bg-transparent text-sky-cyan font-montserrat font-semibold px-10 py-5 rounded-2xl text-xl hover:bg-sky-cyan hover:text-steel-navy transition-all duration-300 hover:scale-105 inline-block"
            >
              Start Learning Today
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-arctic-white/60">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-sky-cyan rounded-full"></div>
              <span className="font-inter text-sm">Project-based learning</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-sky-cyan rounded-full"></div>
              <span className="font-inter text-sm">Industry mentorship</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-sky-cyan rounded-full"></div>
              <span className="font-inter text-sm">Portfolio guaranteed</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative floating code snippets */}
      <div className="absolute top-20 left-10 text-sky-cyan/20 font-mono text-sm animate-pulse">
        {'function buildProject() { return success; }'}
      </div>
      <div className="absolute bottom-20 right-10 text-sky-cyan/20 font-mono text-sm animate-pulse">
        {'const career = await learn();'}
      </div>
    </section>
  );
}
