import { Mail, Phone, MapPin } from 'lucide-react';

const infoItems = [
  {
    icon: <Mail className="w-8 h-8 text-sky-cyan" />,
    title: 'Email',
    content: 'support@triad.com',
    link: 'mailto:support@triad.com'
  },
  {
    icon: <Phone className="w-8 h-8 text-sky-cyan" />,
    title: 'Phone',
    content: '+1 (555) 123-4567',
    link: 'tel:+15551234567'
  },
  {
    icon: <MapPin className="w-8 h-8 text-sky-cyan" />,
    title: 'Address',
    content: '123 Innovation Drive, Tech City, 10101',
  }
];

export default function ContactInfo() {
  return (
    <section className="py-20 bg-frost-gray">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {infoItems.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-frost-gray">
              <div className="flex justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="font-montserrat font-bold text-xl text-steel-navy mb-3">{item.title}</h3>
              {item.link ? (
                <a href={item.link} className="font-inter text-charcoal-gray hover:text-sky-cyan transition-colors">
                  {item.content}
                </a>
              ) : (
                <p className="font-inter text-charcoal-gray">{item.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
