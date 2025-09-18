interface PyramidIconProps {
  className?: string;
  animated?: boolean;
}

export default function PyramidIcon({ className = "", animated = false }: PyramidIconProps) {
  return (
    <div className={`${className} ${animated ? 'pyramid-stack' : ''}`}>
      <img 
        src="https://mocha-cdn.com/0199154f-3e6d-7595-b23c-85f864415d25/Triad-Academy-Logo-Only-Transparent.png"
        alt="TRIAD Academy Logo"
        className="w-full h-full object-contain pyramid-glow"
      />
    </div>
  );
}
