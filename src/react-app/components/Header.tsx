import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PyramidIcon from './PyramidIcon';
import { AlignJustify, X } from 'lucide-react';

/**
 * The main header component for the application.
 * It includes the logo, navigation links, a CTA button, and a mobile menu.
 */
export default function Header() {
  // State to manage the mobile menu's open/closed status.
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State to track if the header should have a shadow, based on scroll position.
  const [hasShadow, setHasShadow] = useState(false);

  // An array of navigation links.
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '/courses' },
    // { label: 'Projects', href: '/projects' },
    { label: 'Resources', href: '/resources' },
    { label: 'About', href: '/about' },
    { label: 'Why TRIAD?', href: '/whytriad' },
    { label: 'Contact', href: '/contact' },
  ];

  // An effect to add a shadow to the header when the user scrolls down.
  useEffect(() => {
    const handleScroll = () => {
      // Set hasShadow to true if the user has scrolled more than 10 pixels.
      setHasShadow(window.scrollY > 10);
    };
    // Add the scroll event listener.
    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener when the component unmounts.
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // An effect to handle the mobile menu behavior.
  useEffect(() => {
    // A function to close the mobile menu if the window is resized to a larger screen.
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    // Add the resize event listener.
    window.addEventListener('resize', handleResize);
    // Clean up the event listener when the component unmounts.
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // A function to toggle the mobile menu.
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-300 ${hasShadow ? 'shadow-lg' : ''}`}>
      <div className="bg-steel-navy/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-24">
            {/* Logo and Branding */}
            <Link to="/" className="flex items-center space-x-3">
              <PyramidIcon className="w-16 h-16" animated={false} />
              <span className="font-montserrat font-bold text-2xl text-arctic-white">TRIAD ACADEMY</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
              {navLinks.map(link => (
                <Link key={link.label} to={link.href} className="font-inter text-arctic-white/80 hover:text-sky-cyan transition-colors duration-300">
                  {link.label}
                </Link>
              ))}
            </nav>
            
            {/* CTA Button and Mobile Menu Toggle */}
            <div className="flex items-center space-x-6">
              <Link 
                to='/courses'
                className="hidden md:block bg-sky-cyan text-steel-navy font-montserrat font-semibold px-6 py-3 rounded-xl glow-cyan-hover transition-all duration-300 hover:scale-105"
              >
                Explore Courses
              </Link>
              <button 
                onClick={toggleMenu} 
                className="md:hidden text-arctic-white"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X size={28} /> : <AlignJustify size={28} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden bg-steel-navy pb-6">
            <nav className="flex flex-col items-center space-y-6" aria-label="Mobile navigation">
              {navLinks.map(link => (
                <Link key={link.label} to={link.href} className="font-inter text-lg text-arctic-white/90 hover:text-sky-cyan transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <Link 
                to='/courses'
                className="bg-sky-cyan text-steel-navy font-montserrat font-semibold px-8 py-4 rounded-xl glow-cyan-hover transition-all duration-300"
              >
                Explore Courses
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
