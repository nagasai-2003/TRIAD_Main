import { Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';
import PyramidIcon from './PyramidIcon';
import { Link } from 'react-router-dom';

export default function Footer() {
  const socialLinks = [
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/company/triadacademy/', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: 'https://x.com/triad_academy', label: 'Twitter' },
    { icon: <Youtube size={20} />, href: 'https://www.youtube.com/@Triad_Academy', label: 'YouTube' },
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/triadacademy/', label: 'Instagram' },
  ];

  const footerLinks = {
    product: [
      {label:'Home', href:'/'},
      { label: 'Courses', href: '/courses' },
      { label: 'Why TRIAD?', href: '/why-triad' },
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  };

  return (
    <footer className="bg-steel-navy text-arctic-white font-inter">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Logo and Socials */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <Link to="/" className="mb-6">
              <PyramidIcon className="w-28 h-28 pyramid-glow" animated={false} />
            </Link>
            <p className="font-montserrat text-xl font-bold mb-2">TRIAD Academy</p>
            <p className="text-sky-cyan text-sm mb-6 text-center lg:text-left">Code. Create. Conquer.</p>
            <div className="flex space-x-5 mt-4">
              {socialLinks.map(link => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-arctic-white/70 hover:text-sky-cyan transition-colors duration-300">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-montserrat font-semibold text-sky-cyan mb-6">Product</h3>
              <ul className="space-y-4">
                {footerLinks.product.map(link => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-arctic-white/70 hover:text-arctic-white transition-colors duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-sky-cyan mb-6">Company</h3>
              <ul className="space-y-4">
                {footerLinks.company.map(link => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-arctic-white/70 hover:text-arctic-white transition-colors duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-sky-cyan mb-6">Legal</h3>
              <ul className="space-y-4">
                {footerLinks.legal.map(link => (
                  <li key={link.label}>
                    <a href={link.href} className="text-arctic-white/70 hover:text-arctic-white transition-colors duration-300">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-sky-cyan/20 text-center">
          <p className="text-sm text-arctic-white/60">
            &copy; {new Date().getFullYear()} TRIAD Academy. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
