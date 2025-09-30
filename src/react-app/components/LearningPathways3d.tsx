import { useState, useMemo } from 'react';
import { Code, BrainCircuit, Cpu, Zap, ArrowRight } from 'lucide-react';

// --- Data & Type Definitions ---
interface PathwayData {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: string[];
}

// --- Card Component (Handles the flip animation) ---
const PathwayCard = ({ pathway }: { pathway: PathwayData }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Styling for the deep shadow effect
  const cardShadow = 'shadow-2xl shadow-sky-cyan/20 transition-shadow duration-500';

  // Toggle the flip state
  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div className="w-full h-full flip-card-container">
      <div 
        className={`flip-card-inner relative w-full h-full cursor-pointer ${isFlipped ? 'flipped' : ''}`}
        onClick={handleFlip}
        // Note: The 'flipped' class must rotate the card 180deg in Y (as defined in CSS prerequisites)
      >
        
        {/* --- FRONT SIDE: Overview and Call to Action --- */}
        <div 
          className={`flip-card-front bg-gray-800/80 border border-gray-700/50 rounded-xl p-8 flex flex-col justify-between ${cardShadow}`}
        >
          <div>
            <div className="flex items-center space-x-4 mb-4">
              {pathway.icon}
              <h3 className="font-montserrat font-bold text-3xl text-white">{pathway.title}</h3>
            </div>
            <p className="font-inter text-md text-gray-300 leading-relaxed">{pathway.description}</p>
          </div>
          
          <div className="mt-8 flex items-center text-sky-cyan font-bold transition-all hover:text-white">
            View Key Skills <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        {/* --- BACK SIDE: Skills and Details --- */}
        <div 
          className={`flip-card-back bg-steel-navy/95 border border-sky-cyan rounded-xl p-8 ${cardShadow}`}
        >
          <h3 className="font-montserrat font-bold text-2xl text-sky-cyan mb-4 flex items-center">
            Key Skills <Zap className="w-5 h-5 ml-3" />
          </h3>
          <ul className="space-y-3 font-inter text-gray-200">
            {pathway.skills.map((skill, i) => (
              <li key={i} className="flex items-start">
                <span className="w-1.5 h-1.5 bg-sky-cyan rounded-full mt-2 mr-3 flex-shrink-0" />
                {skill}
              </li>
            ))}
          </ul>
          
          <div className="mt-8 text-sm text-gray-400">
            Click to return to overview
          </div>
        </div>
      </div>
    </div>
  );
};


// --- Main Component: Renders the grid of PathwayCards ---
export default function LearningPathways3DFlip() {
  // Memoized data received from the context
  const pathways: { [key: string]: PathwayData } = useMemo(() => ({
    Software: {
      icon: <Code className="w-10 h-10 text-sky-cyan" />,
      title: "Software Engineering",
      description: "Master the art of software development, from front-end design to back-end architecture. This track covers the entire development lifecycle, preparing you for roles in a fast-paced tech environment.",
      skills: ["Full-Stack Development", "Cloud Computing", "DevOps", "Agile Methodologies"],
    },
    Core: {
      icon: <BrainCircuit className="w-10 h-10 text-sky-cyan" />,
      title: "Core Engineering",
      description: "Build a deep understanding of the fundamental principles of engineering. This track is ideal for those who want to innovate in hardware, embedded systems, and other core technology sectors.",
      skills: ["Embedded Systems", "IoT", "Robotics", "Mechanical & Electrical Principles"],
    },
    Quantum: {
      icon: <Cpu className="w-10 h-10 text-sky-cyan" />,
      title: "Quantum Engineering",
      description: "Step into the future with our Quantum Engineering track. Explore the principles of quantum mechanics and learn how they are applied to create revolutionary computing and communication technologies.",
      skills: ["Quantum Algorithms", "Quantum Machine Learning", "Quantum Cryptography", "Superconducting Circuits"],
    },
  }), []);

  const pathwayArray = Object.values(pathways);

  return (
    <section className="py-24 bg-steel-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-4">
            Forged in Three Disciplines 🌐
          </h2>
          <p className="font-inter text-lg text-gray-300 max-w-3xl mx-auto">
            Our TRIAD approach delivers mastery across core, software, and future engineering. Click a path to reveal its core skills.
          </p>
        </div>

        {/* --- Pathways Grid --- */}
        <div className="grid md:grid-cols-3 gap-8 h-[400px]"> {/* Set a fixed height for the flip effect */}
          {pathwayArray.map((pathway, index) => (
            <div key={index} className="h-full">
              <PathwayCard pathway={pathway} />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
            <button className="bg-sky-cyan text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg shadow-sky-cyan/50 hover:bg-white transition duration-300">
                Explore All Curriculums
            </button>
        </div>
      </div>
    </section>
  );
}