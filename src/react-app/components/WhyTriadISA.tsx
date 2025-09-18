import { Link } from 'react-router-dom';
import { Check, Shield } from 'lucide-react';

export default function WhyTriadISA() {
  return (
    <section className="py-20 bg-arctic-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image/Illustration */}
          <div className="relative flex justify-center items-center fade-in">
            <div className="w-80 h-80 bg-gradient-to-br from-sky-cyan/20 to-steel-navy/20 rounded-full flex items-center justify-center">
              <Shield className="w-32 h-32 text-steel-navy" />
            </div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-sky-cyan/30 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-steel-navy/20 rounded-full blur-xl"></div>
          </div>

          {/* Text Content */}
          <div className="fade-in">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-steel-navy mb-8">
              Invest in Your Future, Not Just Your Education
            </h2>
            <p className="font-inter text-lg text-charcoal-gray leading-relaxed mb-6">
              With our <span className="font-bold text-sky-cyan">Income Share Agreement (ISA)</span>, we invest in you. You only pay us back when you've secured a high-paying job. Your success is our success.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Check className="w-6 h-6 text-sky-cyan mr-4 flex-shrink-0" />
                <span className="font-inter text-charcoal-gray">Zero upfront tuition fees for eligible courses.</span>
              </li>
              <li className="flex items-center">
                <Check className="w-6 h-6 text-sky-cyan mr-4 flex-shrink-0" />
                <span className="font-inter text-charcoal-gray">Fixed percentage of your income after you get a job.</span>
              </li>
              <li className="flex items-center">
                <Check className="w-6 h-6 text-sky-cyan mr-4 flex-shrink-0" />
                <span className="font-inter text-charcoal-gray">Dedicated career support until you're hired.</span>
              </li>
            </ul>
            <div className="mt-12">
              <Link to="/isa" className="bg-steel-navy text-arctic-white font-montserrat font-semibold px-8 py-4 rounded-2xl text-lg hover:bg-sky-cyan hover:text-steel-navy transition-all duration-300">
                Learn More About ISA
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}