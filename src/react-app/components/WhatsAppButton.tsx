import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-8 right-8 z-50 group">
      <a
        href="https://wa.me/+917981947059" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 glow-green"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
      <div className="absolute bottom-full right-1/2 translate-x-1/2 mb-2 w-max bg-gray-900 text-white text-sm font-semibold px-3 py-1.5 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Whatsapp
        <div className="absolute left-1/2 -bottom-1 w-3 h-3 bg-gray-900 transform -translate-x-1/2 rotate-45"></div>
      </div>
    </div>
  );
}
