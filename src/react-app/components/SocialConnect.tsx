import { Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: <Linkedin className="w-6 h-6" />, href: 'https://www.linkedin.com/company/triadacademy/', label: 'LinkedIn', color: 'hover:text-blue-600' },
  { icon: <Twitter className="w-6 h-6" />, href: 'https://x.com/triad_academy', label: 'Twitter', color: 'hover:text-blue-400' },
  { icon: <Youtube className="w-6 h-6" />, href: 'https://www.youtube.com/@Triad_Academy', label: 'YouTube', color: 'hover:text-red-600' },
  { icon: <Instagram className="w-6 h-6" />, href: 'https://www.instagram.com/triadacademy/', label: 'Instagram', color: 'hover:text-pink-500' }
];

export default function SocialConnect() {
  return (
    <section className="py-20 bg-frost-gray">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="fade-in">
          <h3 className="font-montserrat font-bold text-4xl text-steel-navy mb-6">
            Connect With Us
          </h3>
          <p className="font-inter text-lg text-charcoal-gray mb-12">
            Join our community of innovators across all platforms
          </p>
          
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className={`group w-16 h-16 bg-white rounded-2xl border-2 border-frost-gray flex items-center justify-center text-steel-navy hover:border-sky-cyan glow-cyan-hover transition-all duration-300 hover:scale-110 ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
