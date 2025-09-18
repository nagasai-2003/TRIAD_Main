import { Link } from 'react-router-dom';

export default function WhyTriadHero() {
  return (
    <section className="relative bg-gradient-to-br from-steel-navy via-steel-navy to-blue-900 text-arctic-white py-24 md:py-32 flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-cyan/10 to-transparent"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h1 className="font-montserrat font-bold text-5xl md:text-7xl mb-6 fade-in">
          Why Choose TRIAD?
        </h1>
        <p className="font-montserrat font-semibold text-xl md:text-2xl text-sky-cyan mb-12 fade-in">
          Because your future in tech deserves the best launchpad.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in">
          <Link to="/courses" className="bg-sky-cyan text-steel-navy font-montserrat font-bold px-10 py-5 rounded-2xl text-xl glow-cyan-hover transition-all duration-300 hover:scale-105">
            Start Your Journey
          </Link>
          <Link to="/contact" className="border-2 border-sky-cyan bg-transparent text-sky-cyan font-montserrat font-semibold px-10 py-5 rounded-2xl text-xl hover:bg-sky-cyan hover:text-steel-navy transition-all duration-300">
            Speak to an Advisor
          </Link>
        </div>
      </div>
    </section>
  );
}