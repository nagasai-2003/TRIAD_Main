import { Star, Users, Globe, Award, } from 'lucide-react';

export default function ProofSocialTrustSection() {
  const testimonials = [
  {
    name: "Ramesh Reddy",
    role: "Software Engineer at Infosys",
    content: "TRIAD’s structured learning approach helped me connect academic knowledge with real-world projects. The quantum computing sessions really expanded my understanding of new technologies.",
    image: "https://img.freepik.com/free-photo/indian-man-smiling-cheerful-expression-closeup-portrait_53876-129387.jpg?w=80&h=80&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "Sravya Rani",
    role: "Data Scientist at Swiggy",
    content: "The project-based curriculum gave me practical experience I hadn’t gotten elsewhere. The mentors were very supportive and helped me grasp advanced concepts easily.",
    image: "https://www.shutterstock.com/image-photo/portrait-young-adult-indian-woman-260nw-2387090027.jpg?w=80&h=80&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "Venkatesh Babu",
    role: "Founder at CodeInnovate",
    content: "TRIAD encouraged me to experiment and build applications from scratch. Their mentorship gave me the confidence to start my own tech venture.",
    image: "https://png.pngtree.com/background/20240309/original/pngtree-casual-mature-indian-people-portrait-man-portrait-shirt-photo-picture-image_8014922.jpg?w=80&h=80&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "Lakshmi Priya",
    role: "Machine Learning Engineer at TechMahindra",
    content: "The mentorship program was personalized and engaging. It helped me stay on track, and I learned how to approach problems more effectively in my job.",
    image: "https://www.shutterstock.com/image-photo/young-30s-confident-indian-woman-260nw-2658435749.jpg?w=80&h=80&fit=crop&crop=face",
    rating: 5
  }
];

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "1000+",
      label: "Students Nationwide"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: "5+",
      label: "States Reached"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "95%",
      label: "Success Rate"
    }
  ];

  return (
    <section className="py-20 bg-arctic-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-steel-navy mb-6">
            Trusted by Students. Built for the Future.
          </h2>
          <p className="font-inter text-lg text-charcoal-gray max-w-2xl mx-auto">
            Join thousands learning with TRIAD and transforming their careers with cutting-edge tech education
          </p>
        </div>
        
        {/* Stats Row */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-sky-cyan/10 rounded-2xl flex items-center justify-center text-steel-navy group-hover:bg-sky-cyan/20 group-hover:text-sky-cyan transition-all duration-300">
                  {stat.icon}
                </div>
              </div>
              <h3 className="font-montserrat font-bold text-3xl text-steel-navy mb-2 group-hover:text-sky-cyan transition-colors duration-300">
                {stat.number}
              </h3>
              <p className="font-inter text-charcoal-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg border-2 border-frost-gray hover:border-sky-cyan glow-cyan-hover transition-all duration-300 hover:scale-105 fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Profile */}
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-frost-gray group-hover:border-sky-cyan transition-colors duration-300"
                />
                <div className="ml-3">
                  <h4 className="font-montserrat font-semibold text-steel-navy text-sm group-hover:text-sky-cyan transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="font-inter text-xs text-charcoal-gray/70">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              
              {/* Stars */}
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-sky-cyan fill-current" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="font-inter text-sm text-charcoal-gray leading-relaxed italic">
                "{testimonial.content}"
              </blockquote>
              
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-sky-cyan/0 via-sky-cyan/5 to-sky-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        {/* Trust Badges */}
        <div className="mt-16 text-center fade-in">
          <p className="font-inter text-charcoal-gray/60 mb-6">
            Trusted by top companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center space-x-8 opacity-40">
            <div className="font-montserrat font-bold text-lg text-steel-navy">Google</div>
            <div className="font-montserrat font-bold text-lg text-steel-navy">Meta</div>
            <div className="font-montserrat font-bold text-lg text-steel-navy">Tesla</div>
            <div className="font-montserrat font-bold text-lg text-steel-navy">Microsoft</div>
            <div className="font-montserrat font-bold text-lg text-steel-navy">Apple</div>
          </div>
        </div>
      </div>
    </section>
  );
}
