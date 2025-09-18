import { Globe } from 'lucide-react';

export default function VisionMissionSection() {
  return (
    <section id="vision-mission" className="py-20 bg-arctic-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="fade-in">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-steel-navy mb-8">
              Our Vision & Mission
            </h2>
            
            <div className="mb-8">
              <h3 className="font-montserrat font-semibold text-2xl text-sky-cyan mb-4">Vision</h3>
              <p className="font-inter text-lg text-charcoal-gray leading-relaxed">
                To become a global leader in tech education, preparing students for future-ready careers 
                through immersive learning and innovation.
              </p>
            </div>
            
            <div>
              <h3 className="font-montserrat font-semibold text-2xl text-sky-cyan mb-4">Mission</h3>
              <p className="font-inter text-lg text-charcoal-gray leading-relaxed">
                Empower students, job seekers, and professionals with coding, AI, and advanced 
                technologies — bridging the gap between education and industry.
              </p>
            </div>
          </div>
          
          {/* Futuristic Illustration */}
          <div className="relative flex justify-center items-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-sky-cyan/20 to-steel-navy/20 rounded-full flex items-center justify-center">
                <div className="w-60 h-60 bg-gradient-to-br from-sky-cyan/30 to-steel-navy/30 rounded-full flex items-center justify-center">
                  <div className="w-40 h-40 bg-sky-cyan/40 rounded-full flex items-center justify-center">
                    <Globe className="w-20 h-20 text-steel-navy" />
                  </div>
                </div>
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 bg-sky-cyan rounded-full animate-pulse"></div>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="w-6 h-6 bg-steel-navy rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
              <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-sky-cyan rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                <div className="w-5 h-5 bg-steel-navy rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}