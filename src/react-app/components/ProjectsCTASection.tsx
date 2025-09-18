import { Link } from 'react-router';
import PyramidIcon from './PyramidIcon';
import { Rocket, Users, Star } from 'lucide-react';

export default function ProjectsCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-steel-navy via-steel-navy to-blue-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-cyan/10 via-transparent to-sky-cyan/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-cyan/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Animated Pyramid */}
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

        {/* Success Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 fade-in">
          <div className="text-center group">
            <div className="w-20 h-20 bg-sky-cyan/20 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-sky-cyan/30 transition-colors duration-300">
              <Rocket className="w-10 h-10 text-sky-cyan" />
            </div>
            <h3 className="font-montserrat font-bold text-3xl text-sky-cyan mb-2">1000+</h3>
            <p className="font-inter text-arctic-white/80">Projects Built</p>
            <p className="font-inter text-sm text-arctic-white/60">By our students</p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 bg-sky-cyan/20 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-sky-cyan/30 transition-colors duration-300">
              <Users className="w-10 h-10 text-sky-cyan" />
            </div>
            <h3 className="font-montserrat font-bold text-3xl text-sky-cyan mb-2">85%</h3>
            <p className="font-inter text-arctic-white/80">Job Placement Rate</p>
            <p className="font-inter text-sm text-arctic-white/60">Within 6 months</p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 bg-sky-cyan/20 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-sky-cyan/30 transition-colors duration-300">
              <Star className="w-10 h-10 text-sky-cyan" />
            </div>
            <h3 className="font-montserrat font-bold text-3xl text-sky-cyan mb-2">50+</h3>
            <p className="font-inter text-arctic-white/80">Industry Awards</p>
            <p className="font-inter text-sm text-arctic-white/60">Won by student projects</p>
          </div>
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
          
          {/* Trust indicators */}
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
      
      {/* Floating code elements */}
      <div className="absolute top-20 left-10 text-sky-cyan/20 font-mono text-sm animate-pulse">
        {'function buildProject() { return success; }'}
      </div>
      <div className="absolute bottom-20 right-10 text-sky-cyan/20 font-mono text-sm animate-pulse">
        {'const career = await learn();'}
      </div>
    </section>
  );
}
