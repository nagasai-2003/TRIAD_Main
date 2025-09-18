import { Mail, Phone, MapPin } from 'lucide-react';

const contactDetails = [
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Address",
    details: "TRIAD Academy",
    subDetails: "Guntur District, Andhra Pradesh"
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: "Phone",
    details: "+91 79189 47059",
    subDetails: "Mon-Sat 9AM-6PM IST"
  },
  {
    icon: <Mail className="w-8 h-8" />,
    title: "Email",
    details: "hello@triadacademy.in",
    subDetails: "We respond within 24 hours"
  }
];

export default function ContactDetails() {
  return (
    <section className="py-20 bg-frost-gray">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-steel-navy mb-6">
            Quick Access Info
          </h2>
          <p className="font-inter text-lg text-charcoal-gray">
            Multiple ways to connect with our team
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {contactDetails.map((detail, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 text-center shadow-lg border-2 border-frost-gray hover:border-sky-cyan hover:shadow-xl glow-cyan-hover transition-all duration-300 fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-sky-cyan/10 rounded-2xl flex items-center justify-center text-steel-navy group-hover:bg-sky-cyan/20 group-hover:text-sky-cyan transition-all duration-300">
                  {detail.icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="font-montserrat font-bold text-xl text-steel-navy mb-4 group-hover:text-sky-cyan transition-colors duration-300">
                {detail.title}
              </h3>
              
              {/* Details */}
              <p className="font-inter font-semibold text-charcoal-gray mb-2">
                {detail.details}
              </p>
              <p className="font-inter text-sm text-charcoal-gray/60">
                {detail.subDetails}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
