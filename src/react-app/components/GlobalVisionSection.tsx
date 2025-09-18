export default function GlobalVisionSection() {
  return (
    <section className="py-20 bg-arctic-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-steel-navy mb-6">
            From Local Classrooms to National Impact.
          </h2>
          <p className="font-inter text-lg text-charcoal-gray max-w-2xl mx-auto">
            TRIAD is on a mission to empower innovators worldwide, building a network of future leaders across states and continents.
          </p>
        </div>
        
        {/* World Map Visualization */}
        <div className="relative mb-16 fade-in">
          <div className="bg-steel-navy rounded-2xl p-12 relative overflow-hidden">
            {/* Background gradient effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-cyan/5 via-transparent to-sky-cyan/5"></div>
            
            {/* Stylized world map using CSS */}
            <div className="relative z-10">
              <svg viewBox="0 0 800 400" className="w-full h-64 opacity-30">
                {/* Simplified world continents */}
                <path d="M100 150 Q150 100 200 120 Q250 110 300 130 Q350 140 400 135 Q450 130 500 140 Q550 150 600 145 Q650 140 700 150" 
                      stroke="#00CFFF" strokeWidth="2" fill="none" className="animate-pulse" />
                <path d="M150 200 Q200 180 250 190 Q300 185 350 195 Q400 200 450 195 Q500 190 550 200" 
                      stroke="#00CFFF" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '1s' }} />
                <path d="M200 280 Q250 260 300 270 Q350 275 400 270 Q450 265 500 275" 
                      stroke="#00CFFF" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '2s' }} />
              </svg>
              
              {/* Glowing nodes representing global presence */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Node positions representing major cities */}
                  {[
                    { top: '30%', left: '20%', label: 'Andhra Pradesh' },
                    { top: '40%', left: '45%', label: 'Telengana' },
                    { top: '50%', left: '70%', label: 'Tamil Nadu' },
                    { top: '35%', left: '60%', label: 'Karnataka' },
                    { top: '60%', left: '80%', label: 'Maharastra' },
                    { top: '45%', left: '15%', label: 'Assam' }
                  ].map((node, index) => (
                    <div 
                      key={index}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                      style={{ top: node.top, left: node.left }}
                    >
                      <div className="w-4 h-4 bg-sky-cyan rounded-full glow-cyan animate-pulse group-hover:scale-150 transition-transform duration-300" 
                           style={{ animationDelay: `${index * 0.5}s` }}>
                      </div>
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-sky-cyan text-xs font-inter opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        {node.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Stats overlay */}
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="font-montserrat font-bold text-2xl text-sky-cyan mb-1">5+</div>
                  <div className="font-inter text-sm text-arctic-white">States</div>
                </div>
                <div>
                  <div className="font-montserrat font-bold text-2xl text-sky-cyan mb-1">1000+</div>
                  <div className="font-inter text-sm text-arctic-white">Students</div>
                </div>
                <div>
                  <div className="font-montserrat font-bold text-2xl text-sky-cyan mb-1">50+</div>
                  <div className="font-inter text-sm text-arctic-white">Real Time Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mission Statement */}
        <div className="text-center fade-in">
          <p className="font-montserrat font-semibold text-xl text-sky-cyan mb-4">
            Building Tomorrow's Innovators Today
          </p>
          <p className="font-inter text-lg text-charcoal-gray max-w-3xl mx-auto leading-relaxed">
            Every line of code written, every problem solved, every innovation created in our global 
            classrooms contributes to a future where technology serves humanity's greatest challenges.
          </p>
        </div>
      </div>
    </section>
  );
}
