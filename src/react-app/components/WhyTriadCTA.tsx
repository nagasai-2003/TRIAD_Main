import { Link } from 'react-router-dom';

export default function WhyTriadCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-steel-navy to-blue-900 relative">
      <div className="absolute inset-0 opacity-10"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-arctic-white">
        <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 fade-in">
          Ready to Transform Your Career?
        </h2>
        <p className="font-inter text-xl mb-12 fade-in">
          Join a community of innovators and start building the future you want.
        </p>
        <div className="fade-in">
          <Link to="/register" className="bg-sky-cyan text-steel-navy font-montserrat font-bold px-10 py-5 rounded-2xl text-xl glow-cyan-hover transition-all duration-300 hover:scale-105">
            Apply Now and Secure Your Spot
          </Link>
        </div>
      </div>
    </section>
  );
}