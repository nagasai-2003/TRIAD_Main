import { featureHighlights } from '../data/whytriadData';

export default function WhyTriadFeatures() {
  return (
    <section className="py-20 bg-arctic-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {featureHighlights.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-md glow-cyan-hover transition-all duration-300 fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-16 h-16 bg-sky-cyan/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                {feature.icon}
              </div>
              <p className="font-montserrat font-semibold text-lg text-steel-navy">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}