import { useState } from 'react';
import { Quote, ExternalLink, Github } from 'lucide-react';

export default function StudentShowcaseTestimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Software Engineer at Google",
      studentImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      quote: "TRIAD didn't just teach me coding — it helped me launch my first AI project. The hands-on approach and mentorship transformed my understanding of machine learning from theory to real-world application.",
      longQuote: "When I started at TRIAD, I could barely write a simple Python script. Now I'm building AI systems that serve millions of users at Google. The project-based learning approach made all the difference.",
      projectTitle: "AI Customer Support Chatbot",
      projectImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      projectDescription: "Built an intelligent chatbot that reduced customer service response time by 80% and handles 10,000+ inquiries daily with 95% accuracy.",
      techStack: ["Python", "TensorFlow", "NLP", "FastAPI", "React"],
      github: "#",
      demo: "#",
      outcome: "Hired by Google as ML Engineer"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Startup Founder & CTO",
      studentImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "TRIAD's curriculum prepared me not just for coding, but for leading tech teams. The systems thinking and project management skills I learned here are invaluable in running my startup.",
      longQuote: "Starting as a complete beginner, TRIAD's comprehensive approach gave me the confidence to not just join the tech industry, but to create my own company. We've raised $2M in seed funding.",
      projectTitle: "Smart City Traffic Optimization",
      projectImage: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=500&h=300&fit=crop",
      projectDescription: "IoT-powered traffic management system that reduced urban congestion by 35% in pilot cities, now being scaled nationwide.",
      techStack: ["Java", "IoT", "Computer Vision", "AWS", "React Native"],
      github: "#",
      demo: "#",
      outcome: "Founded UrbanFlow ($2M seed funding)"
    },
    {
      id: 3,
      name: "Aisha Patel",
      role: "Quantum Research Scientist",
      studentImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "The quantum computing module at TRIAD opened my eyes to possibilities I never imagined. Now I'm researching the next generation of computing that will revolutionize technology.",
      longQuote: "TRIAD's future-tech focus gave me early exposure to quantum computing. That foundation led to my PhD and current research position at IBM Quantum.",
      projectTitle: "Quantum Algorithm Visualizer",
      projectImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=300&fit=crop",
      projectDescription: "Educational platform that makes quantum computing concepts accessible through interactive visualizations, used by 50+ universities.",
      techStack: ["Qiskit", "Python", "WebGL", "D3.js", "Vue.js"],
      github: "#",
      demo: "#",
      outcome: "PhD at MIT, Research Scientist at IBM"
    }
  ];

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section className="py-20 bg-frost-gray">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-steel-navy mb-6">
            What Our Students Built & Said
          </h2>
          <p className="font-inter text-lg text-charcoal-gray max-w-2xl mx-auto">
            Real projects, real outcomes, real transformations - hear from students who turned their ideas into industry-changing innovations.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Student Testimonial */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-frost-gray glow-cyan fade-in">
            {/* Quote Icon */}
            <div className="mb-6">
              <Quote className="w-12 h-12 text-sky-cyan" />
            </div>

            {/* Quote */}
            <blockquote className="font-inter text-lg text-charcoal-gray leading-relaxed mb-8 italic">
              "{currentTestimonial.quote}"
            </blockquote>

            {/* Extended Quote */}
            <p className="font-inter text-charcoal-gray/70 mb-8 leading-relaxed">
              {currentTestimonial.longQuote}
            </p>

            {/* Student Info */}
            <div className="flex items-center mb-6">
              <img 
                src={currentTestimonial.studentImage}
                alt={currentTestimonial.name}
                className="w-16 h-16 rounded-full object-cover border-4 border-sky-cyan mr-4"
              />
              <div>
                <h4 className="font-montserrat font-bold text-xl text-steel-navy">
                  {currentTestimonial.name}
                </h4>
                <p className="font-inter text-sky-cyan">
                  {currentTestimonial.role}
                </p>
              </div>
            </div>

            {/* Outcome Badge */}
            <div className="bg-sky-cyan/10 border border-sky-cyan/30 rounded-xl p-4">
              <p className="font-inter text-sm text-steel-navy">
                <span className="font-semibold">Outcome:</span> {currentTestimonial.outcome}
              </p>
            </div>
          </div>

          {/* Right: Project Showcase */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-frost-gray glow-cyan fade-in">
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src={currentTestimonial.projectImage}
                alt={currentTestimonial.projectTitle}
                className="w-full h-full object-cover"
              />
              
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-steel-navy/70 via-transparent to-transparent"></div>
              
              {/* Project Actions */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <a 
                  href={currentTestimonial.github}
                  className="w-10 h-10 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-sky-cyan hover:text-steel-navy transition-colors duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href={currentTestimonial.demo}
                  className="w-10 h-10 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-sky-cyan hover:text-steel-navy transition-colors duration-300"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-6">
              {/* Project Title */}
              <h3 className="font-montserrat font-bold text-xl text-steel-navy mb-3">
                {currentTestimonial.projectTitle}
              </h3>

              {/* Project Description */}
              <p className="font-inter text-charcoal-gray mb-4 leading-relaxed">
                {currentTestimonial.projectDescription}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {currentTestimonial.techStack.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-sky-cyan/10 text-sky-cyan border border-sky-cyan/20 text-xs px-3 py-1 rounded-full font-inter"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center mt-12 space-x-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setActiveTestimonial(index)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                activeTestimonial === index 
                  ? 'bg-sky-cyan text-steel-navy glow-cyan' 
                  : 'bg-white text-charcoal-gray border border-frost-gray hover:border-sky-cyan hover:text-sky-cyan'
              }`}
            >
              <img 
                src={testimonial.studentImage}
                alt={testimonial.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="font-montserrat font-semibold text-sm">
                {testimonial.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
