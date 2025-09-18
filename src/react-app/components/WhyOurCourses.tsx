import { Briefcase, Zap, UserCheck } from 'lucide-react';

const features = [
  {
    icon: <Briefcase className="w-12 h-12 text-sky-cyan" />,
    title: 'Hands-On Projects',
    description: 'Learn by building real applications that solve actual problems. Every course includes portfolio-worthy projects.'
  },
  {
    icon: <Zap className="w-12 h-12 text-sky-cyan" />,
    title: 'Future-Focused Content',
    description: 'Stay ahead with AI, Quantum Computing, and emerging technologies that define tomorrow\'s tech landscape.'
  },
  {
    icon: <UserCheck className="w-12 h-12 text-sky-cyan" />,
    title: 'Mentor-Led Guidance',
    description: 'Expert trainers who guide your growth with personalized feedback and industry insights.'
  }
];

function FeatureCard({ feature }: { feature: typeof features[0] }) {
  return (
    <div className="bg-arctic-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl hover:shadow-sky-cyan/10 transition-all duration-300 hover:scale-105 group">
      {/* Icon */}
      <div className="flex justify-center items-center h-24 mb-6 group-hover:scale-110 transition-transform duration-300">
        {feature.icon}
      </div>
      
      {/* Title */}
      <h3 className="font-montserrat font-bold text-2xl text-steel-navy mb-4">
        {feature.title}
      </h3>
      
      {/* Description */}
      <p className="font-inter text-charcoal-gray leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}

export default function WhyOurCourses() {
  return (
    <section className="bg-frost-gray py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-steel-navy mb-6">
            What Makes TRIAD Courses Different?
          </h2>
          <p className="font-inter text-xl text-charcoal-gray max-w-3xl mx-auto">
            We don't just teach code — we transform learners into innovators ready for the future.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
