import { Link } from 'react-router';

export default function Header() {
  return (
    <header className="relative bg-gradient-to-r from-steel-navy/95 via-steel-navy/90 to-steel-navy/95 backdrop-blur-xl border-b border-sky-cyan/20">
      <div className="max-w-6xl mx-auto px-6 py-6">
        {/* Logo with Enhanced Highlighting */}
        <Link to="/" className="inline-block group">
          <div className="relative">
            {/* Single powerful glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-sky-cyan/40 via-sky-cyan/60 to-sky-cyan/40 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
            
            {/* Logo container */}
            <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-2xl px-8 py-4 border border-sky-cyan/30 shadow-2xl group-hover:border-sky-cyan/50 group-hover:shadow-glow-cyan-hover transition-all duration-300">
              <img 
                src="https://mocha-cdn.com/0199154f-3e6d-7595-b23c-85f864415d25/Triad-academy-Name-.png"
                alt="TRIAD Academy Logo"
                className="h-14 w-auto filter brightness-110 contrast-110 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
}
