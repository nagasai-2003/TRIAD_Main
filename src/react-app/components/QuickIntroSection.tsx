import { GraduationCap, Code, BrainCircuit, Rocket, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <GraduationCap className="w-12 h-12 text-sky-cyan" />,
    title: "Structured Learning Paths",
    description: "Our curriculum is designed to take you from novice to expert with a clear, step-by-step roadmap.",
  },
  {
    icon: <Code className="w-12 h-12 text-sky-cyan" />,
    title: "Hands-On Projects",
    description: "Apply your skills to real-world projects, building a portfolio that showcases your abilities.",
  },
  {
    icon: <BrainCircuit className="w-12 h-12 text-sky-cyan" />,
    title: "Expert-Led Instruction",
    description: "Learn from industry veterans who bring practical experience and cutting-edge insights.",
  },
  {
    icon: <Rocket className="w-12 h-12 text-sky-cyan" />,
    title: "Career Acceleration",
    description: "We don't just teach you to code. We prepare you for a successful career in tech.",
  },
];

export default function QuickIntroSection() {
  return (
    <section id="quick-intro" className="py-20 bg-arctic-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-4xl text-steel-navy mb-4">
            This is TRIAD Academy
          </h2>
          <p className="font-inter text-lg text-charcoal-gray max-w-3xl mx-auto">
            We're not just another online school. We're a new model for tech education, built on three core pillars: 
            Learn, Build, and Create.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl glow-cyan-hover transition-all duration-300 border border-frost-gray text-center">
              <div className="flex justify-center items-center mb-6">
                {feature.icon}
              </div>
              <h3 className="font-montserrat font-bold text-xl text-steel-navy mb-3">
                {feature.title}
              </h3>
              <p className="font-inter text-charcoal-gray">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/about"
            className="bg-sky-cyan text-steel-navy font-montserrat font-semibold px-8 py-4 rounded-2xl text-lg glow-cyan-hover transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2"
          >
            <Info className="w-5 h-5" />
            <span>Learn More About Us</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
