interface PyramidIconProps {
  className?: string;
  animated?: boolean;
}

/**
 * A component that renders the TRIAD Academy pyramid logo.
 * It can be displayed as a static icon or with a subtle animation.
 * 
 * @param {object} props - The component props.
 * @param {string} [props.className] - Optional CSS classes to apply to the container.
 * @param {boolean} [props.animated] - If true, applies a stacking animation to the icon.
 */
export default function PyramidIcon({ className = "", animated = false }: PyramidIconProps) {
  return (
    <div 
      className={`${className} ${animated ? 'pyramid-stack' : ''}`}
      // When animated, the icon is purely decorative, so hide it from screen readers.
      aria-hidden={animated ? 'true' : 'false'}
    >
      <img 
        src="https://mocha-cdn.com/0199154f-3e6d-7595-b23c-85f864415d25/Triad-Academy-Logo-Only-Transparent.png"
        alt="TRIAD Academy Logo"
        className="w-full h-full object-contain pyramid-glow"
      />
    </div>
  );
}
