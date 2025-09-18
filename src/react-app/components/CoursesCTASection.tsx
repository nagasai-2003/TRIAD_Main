import { Link } from 'react-router-dom';
import { Mail, User } from 'lucide-react';

export default function CoursesCTASection() {
  return (
    <section className="relative bg-gradient-to-br from-steel-navy via-steel-navy to-blue-900 py-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-cyan/10 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-cyan/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Headline */}
        <h2 className="font-montserrat font-bold text-4xl md:text-6xl text-arctic-white mb-6">
          Code. Create. Conquer.
        </h2>
        
        {/* Subheadline */}
        <p className="font-inter text-xl md:text-2xl text-frost-gray mb-12 max-w-3xl mx-auto leading-relaxed">
          Choose your course today and take the first step toward your future.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link to="/contact">
            <button className="flex items-center gap-3 bg-sky-cyan text-steel-navy font-montserrat font-semibold px-10 py-5 rounded-2xl text-xl glow-cyan-hover transition-all duration-300 hover:scale-105">
              <Mail className="w-6 h-6" />
              Get in Touch
            </button>
          </Link>
          <Link to='https://wa.me/+917981947059' target='_blank'>
          <button className="flex items-center gap-3 border-2 border-sky-cyan bg-transparent text-arctic-white font-montserrat font-semibold px-10 py-5 rounded-2xl text-xl hover:bg-sky-cyan hover:text-steel-navy hover:border-sky-cyan transition-all duration-300 hover:scale-105">
            <User className="w-6 h-6" />
            Talk to a Mentor
          </button></Link>
        </div>
      </div>
      
      {/* Floating code elements */}
      <div className="absolute top-20 left-10 text-sky-cyan/30 font-mono text-sm animate-pulse">
        {'const success = learn() + practice();'}
      </div>
      <div className="absolute bottom-32 right-10 text-sky-cyan/30 font-mono text-sm animate-pulse">
        {'if (ready) { conquer(); }'}
      </div>
    </section>
  );
}
