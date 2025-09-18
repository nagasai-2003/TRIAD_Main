import { ChevronDown } from 'lucide-react';

interface ScrollDownArrowProps {
  href: string;
}

export default function ScrollDownArrow({ href }: ScrollDownArrowProps) {
  return (
    <a href={href} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
      <ChevronDown className="w-8 h-8 text-sky-cyan" />
    </a>
  );
}
