import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
      {
        name: "Anjali Reddy",
        role: "Student → Software Engineer at Google",
        content: "TRIAD Academy helped me turn coding confusion into clarity. The project-based learning made advanced topics approachable, and now I’m contributing to AI solutions at a global tech leader.",
        rating: 5,
        image: "https://img.freepik.com/free-photo/indian-woman-posing-cute-stylish-outfit-camera-smiling_482257-122351.jpg?w=60&h=60&fit=crop&crop=face"
      },
      {
        name: "Ramesh Naidu",
        role: "Parent of TRIAD Graduate",
        content: "Seeing my daughter transform from a hobby coder into a confident developer has been amazing. TRIAD’s mentors didn’t just teach programming—they nurtured problem-solving skills and perseverance.",
        rating: 5,
        image: "https://macmillan.yale.edu/sites/default/files/styles/optimized_360/public/2025-08/Shiva%20Sai%20Ram%20Urella.jpg??w=100&h=100&fit=crop&crop=face"
      },
      {
        name: "Sreeja Venkatesh",
        role: "Student → AI Research Intern",
        content: "The quantum computing module introduced me to cutting-edge technologies I hadn’t explored before. TRIAD prepares students not just for today’s jobs, but for tomorrow’s innovations.",
        rating: 5,
        image: "https://img.freepik.com/premium-photo/cheerful-indian-male-student-portrait-educational-promotional-use_895561-37712.jpg?w=100&h=100&fit=crop&crop=face"
      },
      {
        name: "Karthik Varma",
        role: "Career Changer → ML Engineer",
        content: "At 34, I never thought I could switch careers. TRIAD’s hands-on projects and mentorship gave me the confidence to transition from finance to machine learning, and I’m thriving in my new role.",
        rating: 5,
        image: "https://img.freepik.com/free-photo/front-view-smiley-man-holding-book_23-2149915900.jpg?w=100&h=100&fit=crop&crop=face"
      }
    ];    

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  return (
    <section className="py-20 bg-frost-gray">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-steel-navy mb-6">
            Success Stories
          </h2>
          <p className="font-inter text-lg text-charcoal-gray">
            Hear from our community of innovators and change-makers
          </p>
        </div>
        
        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 glow-cyan border border-frost-gray fade-in">
            {/* Testimonial Content */}
            <div className="text-center">
              {/* Profile Image */}
              <div className="mb-6">
                <img 
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-sky-cyan"
                />
              </div>
              
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-sky-cyan fill-current" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="font-inter text-lg md:text-xl text-charcoal-gray leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].content}"
              </blockquote>
              
              {/* Attribution */}
              <div>
                <h4 className="font-montserrat font-bold text-xl text-steel-navy">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="font-inter text-sky-cyan">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
            
            {/* Accent Line */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-sky-cyan rounded-b"></div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-frost-gray flex items-center justify-center text-steel-navy hover:text-sky-cyan hover:border-sky-cyan transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-frost-gray flex items-center justify-center text-steel-navy hover:text-sky-cyan hover:border-sky-cyan transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-sky-cyan scale-125' 
                  : 'bg-frost-gray hover:bg-sky-cyan/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
