import { Code, Layers, Zap } from 'lucide-react';
import PyramidIcon from './PyramidIcon';

export default function LearningPathways() {
  return (
    <section className="relative bg-arctic-white py-20 overflow-hidden">
      {/* Subtle pyramid watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <PyramidIcon className="w-96 h-96" animated={false} />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-steel-navy mb-6">
            Your Journey, Your Path.
          </h2>
          <p className="font-inter text-xl text-charcoal-gray max-w-3xl mx-auto">
            Start small, build skills, and unlock advanced technologies step by step.
          </p>
        </div>
        
        {/* Learning Path Cards */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Foundations Card */}
          <div className="bg-gradient-to-br from-frost-gray/50 to-arctic-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 group max-w-sm">
            <div className="w-20 h-20 mx-auto mb-6 bg-sky-cyan/10 rounded-full flex items-center justify-center group-hover:bg-sky-cyan/20 transition-colors duration-300">
              <Code className="w-10 h-10 text-sky-cyan" />
            </div>
            <h3 className="font-montserrat font-bold text-2xl text-steel-navy mb-4">
              Foundations
            </h3>
            <p className="font-inter text-charcoal-gray">
              Build your coding foundation with Python, Java, and fundamental programming concepts.
            </p>
          </div>
          
          {/* Arrow */}
          <div className="hidden lg:block text-sky-cyan text-4xl animate-pulse">
            →
          </div>
          
          {/* Growth Card */}
          <div className="bg-gradient-to-br from-sky-cyan/10 to-arctic-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 group max-w-sm glow-cyan">
            <div className="w-20 h-20 mx-auto mb-6 bg-sky-cyan/20 rounded-full flex items-center justify-center group-hover:bg-sky-cyan/30 transition-colors duration-300">
              <Layers className="w-10 h-10 text-sky-cyan" />
            </div>
            <h3 className="font-montserrat font-bold text-2xl text-steel-navy mb-4">
              Growth
            </h3>
            <p className="font-inter text-charcoal-gray">
              Master computer science fundamentals, data structures, algorithms, and system design.
            </p>
          </div>
          
          {/* Arrow */}
          <div className="hidden lg:block text-sky-cyan text-4xl animate-pulse">
            →
          </div>
          
          {/* Future Peak Card */}
          <div className="bg-gradient-to-br from-steel-navy/10 to-arctic-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 group max-w-sm">
            <div className="w-20 h-20 mx-auto mb-6 bg-steel-navy/10 rounded-full flex items-center justify-center group-hover:bg-steel-navy/20 transition-colors duration-300">
              <Zap className="w-10 h-10 text-steel-navy" />
            </div>
            <h3 className="font-montserrat font-bold text-2xl text-steel-navy mb-4">
              Future Peak
            </h3>
            <p className="font-inter text-charcoal-gray">
              Explore cutting-edge technologies like AI, machine learning, and quantum computing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
