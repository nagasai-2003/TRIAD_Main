import { useState, useMemo } from 'react';
import { BrainCircuit, Cpu, Code } from 'lucide-react';

/**
 * A section that outlines the different learning pathways offered by TRIAD Academy.
 * It features a tabbed interface to switch between Software, Core, and Quantum engineering tracks.
 */
export default function LearningPathways() {
  // State to manage the currently active learning pathway tab.
  const [activePathway, setActivePathway] = useState('Software');

  // Memoized data for the learning pathways to prevent re-creation on every render.
  // Memoized data for the learning pathways, using professional, specific curriculum language.
  const pathways = useMemo(() => ({
    Software: {
      icon: <Code className="w-10 h-10 text-sky-cyan" />,
      title: "Enterprise Software Development", // Professional title
      description: "Master the foundation of scalable, industrial-grade software. This track focuses on full-stack development using market-leading frameworks and robust back-end systems. You will emerge as an engineer fluent in core industry standards.", 
      // Specific technologies added
      skills: ["Core Java & JVM Ecosystems", "Advanced Python & Frameworks", "Microservices & Distributed Systems", "CI/CD & Cloud Deployment (AWS/Azure)"], 
    },
    // --- UPDATED: AI & Machine Learning Engineering Track ---
    AI: {
      icon: <BrainCircuit className="w-10 h-10 text-sky-cyan" />,
      title: "AI & Agentic Systems Engineering", 
      description: "A focused track on the **end-to-end Machine Learning lifecycle** (MLOps), covering model development, large language models (LLMs), and the emerging field of **Agentic AI**. Prepare to build autonomous, intelligent systems.", 
      // Specific technologies added
      skills: ["Generative AI & LLM Fine-Tuning", "Machine Learning (ML) & Deep Learning", "Agentic AI Frameworks (e.g., LangChain)", "MLOps & Scalable Deployment"], 
    },
    // ---------------------------------------------------
    Quantum: {
      icon: <Cpu className="w-10 h-10 text-sky-cyan" />,
      title: "Quantum & Advanced Computing", 
      description: "Step into the future with Quantum Computing. This pathway delivers the theoretical and practical knowledge needed to develop algorithms for next-generation hardware and tackle computational problems currently deemed impossible.", 
      // Specific technologies added
      skills: ["Quantum Computing Principles", "Quantum Algorithm Design (e.g., Shor's, Grover's)", "Post-Quantum Cryptography (PQC)", "High-Performance Computing (HPC)"], 
    },
  }), []);

  // A utility function to get the keys of the pathways object.
  const pathwayKeys = Object.keys(pathways) as (keyof typeof pathways)[];

  return (
    <section className="py-20 bg-steel-navy">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-arctic-white mb-6">
            Choose Your Pathway to Innovation
          </h2>
          <p className="font-inter text-lg text-frost-gray max-w-3xl mx-auto">
            Whether you're passionate about software, hardware, or the future of computing, we have a pathway designed for your success.
          </p>
        </div>

        {/* Main container for the tabbed interface */}
        <div className="bg-steel-navy-light rounded-2xl shadow-lg fade-in">
          {/* Tab buttons to switch between pathways */}
          <div className="flex justify-center border-b border-sky-cyan/20">
            {pathwayKeys.map((pathway) => (
              <button
                key={pathway}
                onClick={() => setActivePathway(pathway)}
                className={`w-full py-5 font-montserrat font-semibold text-lg transition-colors duration-300 ${
                  activePathway === pathway
                    ? 'text-sky-cyan border-b-2 border-sky-cyan'
                    : 'text-arctic-white/70 hover:text-arctic-white'
                }`}
              >
                {pathway}
              </button>
            ))}
          </div>

          {/* Displaying the content of the active pathway */}
          <div className="p-10 md:p-16">
            {pathwayKeys.map((pathway) => (
              <div
                key={pathway}
                className={`transition-opacity duration-500 ${activePathway === pathway ? 'opacity-100' : 'opacity-0 hidden'}`}>
                <div className="grid md:grid-cols-3 gap-12 items-center">
                  {/* Icon and Title for the active pathway */}
                  <div className="md:col-span-1 flex flex-col items-center text-center">
                    <div className="mb-6 p-5 bg-steel-navy rounded-full">
                      {pathways[pathway].icon}
                    </div>
                    <h3 className="font-montserrat font-bold text-3xl text-arctic-white">{pathways[pathway].title}</h3>
                  </div>
                  
                  {/* Description and Key Skills for the active pathway */}
                  <div className="md:col-span-2">
                    <p className="font-inter text-frost-gray mb-8 leading-relaxed">
                      {pathways[pathway].description}
                    </p>
                    <h4 className="font-montserrat font-semibold text-sky-cyan mb-4 text-xl">Key Skills You'll Master:</h4>
                    <div className="flex flex-wrap gap-3">
                      {pathways[pathway].skills.map(skill => (
                        <span key={skill} className="bg-sky-cyan/10 text-sky-cyan font-inter font-medium px-4 py-2 rounded-lg text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
