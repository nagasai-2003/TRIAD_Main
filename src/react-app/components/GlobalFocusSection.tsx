import { Users, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GlobalFocusSection() {
  return (
    <section className="py-20 bg-arctic-white relative overflow-hidden">
      {/* World map watermark */}
      <div className="absolute inset-0 opacity-5">
        <svg viewBox="0 0 1200 600" className="w-full h-full">
          <path d="M200 200 Q300 150 400 180 Q500 170 600 190 Q700 200 800 195 Q900 190 1000 200" 
                stroke="#1F3C5B" strokeWidth="3" fill="none" />
          <path d="M250 300 Q350 280 450 290 Q550 285 650 295 Q750 300 850 295" 
                stroke="#1F3C5B" strokeWidth="3" fill="none" />
        </svg>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-steel-navy mb-6">
            Shaping Global Tech Leaders.
          </h2>
          <p className="font-inter text-xl text-charcoal-gray max-w-3xl mx-auto leading-relaxed">
            TRIAD is more than an academy — it's a launchpad for innovators, creators, 
            and problem-solvers worldwide.
          </p>
        </div>
        
        {/* Futuristic glowing map */}
        <div className="relative bg-steel-navy rounded-2xl p-12 mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-cyan/5 via-transparent to-sky-cyan/5"></div>
          
          <div className="relative z-10 grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="w-16 h-16 bg-sky-cyan/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-sky-cyan/40 transition-colors duration-300">
                <Users className="w-8 h-8 text-sky-cyan" />
              </div>
              <h3 className="font-montserrat font-bold text-2xl text-sky-cyan mb-2">1000+</h3>
              <p className="font-inter text-arctic-white">National Wide Students</p>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 bg-sky-cyan/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-sky-cyan/40 transition-colors duration-300">
                <Globe className="w-8 h-8 text-sky-cyan" />
              </div>
              <h3 className="font-montserrat font-bold text-2xl text-sky-cyan mb-2">5+</h3>
              <p className="font-inter text-arctic-white">States Reached</p>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 bg-sky-cyan/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-sky-cyan/40 transition-colors duration-300">
                <Award className="w-8 h-8 text-sky-cyan" />
              </div>
              <h3 className="font-montserrat font-bold text-2xl text-sky-cyan mb-2">95%</h3>
              <p className="font-inter text-arctic-white">Success Rate</p>
            </div>
          </div>
        </div>
        
        <div className="text-center fade-in">
          <Link to="/contact">
            <button className="bg-sky-cyan text-steel-navy font-montserrat font-semibold px-10 py-5 rounded-2xl text-xl glow-cyan-hover transition-all duration-300 hover:scale-105">
              Join the Movement
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}