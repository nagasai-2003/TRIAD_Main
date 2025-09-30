import { Twitter, Linkedin, Youtube, Instagram, Phone, Mail } from 'lucide-react'; // Imported Phone and Mail icons
import PyramidIcon from './PyramidIcon';
import { Link } from 'react-router-dom';

/**
 * A comprehensive footer component for the application.
 * It includes the company logo, social media links, navigation links, and a copyright notice.
 */
export default function Footer() {
  // An array of social media links with their icons, URLs, and accessible labels.
  const socialLinks = [
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/company/triadacademy/', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: 'https://x.com/triad_academy', label: 'Twitter' },
    { icon: <Youtube size={20} />, href: 'https://www.youtube.com/@Triad_Academy', label: 'YouTube' },
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/triadacademy/', label: 'Instagram' },
  ];

  // Global Contact Information - Place your actual details here
  const contactInfo = {
    phone: '+91 79819 47059', // Placeholder
    email: 'contact@triadacademy.in', // Placeholder
  };

  // An object containing categorized lists of footer navigation links.
  const footerLinks = {
    product: [
      {label:'Home', href:'/'},
      { label: 'Courses', href: '/courses' },
      // { label: 'Projects', href: '/projects' },
      { label: 'Resources', href: '/resources' },
      { label: 'Why TRIAD?', href: '/whytriad' },
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' }, // Added careers as a professional touch
    ],
    // Note: Legal links should be updated with actual URLs.
    legal: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
      // { label: 'Cookie Policy', href: '#' }, // Added cookie policy
    ],
  };

  return (
    <footer className="bg-steel-navy text-arctic-white font-inter">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Section 1: Logo, branding, and social media links (4/12 columns) */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <Link to="/" className="mb-6">
              <PyramidIcon className="w-28 h-28 pyramid-glow" animated={false} />
            </Link>
            <p className="font-montserrat text-xl font-bold mb-2">TRIAD Academy</p>
            <p className="text-sky-cyan text-sm mb-6 text-center lg:text-left">Think. Train. Transform.</p>
            <div className="flex space-x-5 mt-4">
              {socialLinks.map(link => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={link.label} 
                  className="text-arctic-white/70 hover:text-sky-cyan transition-colors duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Section 2: Organized navigation links and NEW Contact Column (8/12 columns) */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8"> {/* Changed to 4 columns */}
            
            {/* Product Links */}
            <div role="navigation" aria-labelledby="product-links-heading">
              <h3 id="product-links-heading" className="font-montserrat font-semibold text-sky-cyan mb-6">Product</h3>
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
            
            {/* Company Links */}
            <div role="navigation" aria-labelledby="company-links-heading">
              <h3 id="company-links-heading" className="font-montserrat font-semibold text-sky-cyan mb-6">Company</h3>
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
            
            {/* Legal Links */}
            <div role="navigation" aria-labelledby="legal-links-heading">
              <h3 id="legal-links-heading" className="font-montserrat font-semibold text-sky-cyan mb-6">Legal</h3>
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
            
            {/* --- NEW: Contact Information Column --- */}
            <div role="contentinfo" aria-labelledby="contact-heading">
              <h3 id="contact-heading" className="font-montserrat font-semibold text-sky-cyan mb-6">Get In Touch</h3>
              <ul className="space-y-4">
                {/* Phone Contact */}
                <li>
                  <a 
                    href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} 
                    className="flex items-center text-arctic-white/70 hover:text-arctic-white transition-colors duration-300 group"
                  >
                    <Phone size={18} className="mr-3 text-sky-cyan/80 group-hover:text-sky-cyan" />
                    {contactInfo.phone}
                  </a>
                </li>
                {/* Email Contact */}
                <li>
                  <a 
                    href={`mailto:${contactInfo.email}`} 
                    className="flex items-center text-arctic-white/70 hover:text-arctic-white transition-colors duration-300 group"
                  >
                    <Mail size={18} className="mr-3 text-sky-cyan/80 group-hover:text-sky-cyan" />
                    {contactInfo.email}
                  </a>
                </li>
                {/* You can add an address line here if needed */}
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3: Copyright and closing statement */}
        <div className="mt-16 pt-8 border-t border-sky-cyan/20 text-center">
          <p className="text-sm text-arctic-white/60">
            &copy; {new Date().getFullYear()} TRIAD Academy. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}