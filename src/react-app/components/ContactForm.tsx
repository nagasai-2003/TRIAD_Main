import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact-form" className="py-20 bg-arctic-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-frost-gray/30 rounded-2xl p-8 md:p-12 shadow-xl border border-frost-gray">
          {/* Form Header */}
          <div className="text-center mb-12 fade-in">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-steel-navy mb-6">
              Get in Touch
            </h2>
            <p className="font-inter text-lg text-charcoal-gray">
              Share your goals with us and let's create a personalized learning path for your success.
            </p>
          </div>
          
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block font-montserrat font-semibold text-steel-navy mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 rounded-2xl bg-white border border-frost-gray text-charcoal-gray font-inter focus:outline-none focus:border-sky-cyan focus:ring-2 focus:ring-sky-cyan/20 transition-all duration-300"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-montserrat font-semibold text-steel-navy mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 rounded-2xl bg-white border border-frost-gray text-charcoal-gray font-inter focus:outline-none focus:border-sky-cyan focus:ring-2 focus:ring-sky-cyan/20 transition-all duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>
            
            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block font-montserrat font-semibold text-steel-navy mb-3">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-4 rounded-2xl bg-white border border-frost-gray text-charcoal-gray font-inter focus:outline-none focus:border-sky-cyan focus:ring-2 focus:ring-sky-cyan/20 transition-all duration-300"
                placeholder="+91 79819 47059"
              />
            </div>
            
            {/* Message */}
            <div>
              <label htmlFor="message" className="block font-montserrat font-semibold text-steel-navy mb-3">
                Message / Query
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-4 rounded-2xl bg-white border border-frost-gray text-charcoal-gray font-inter focus:outline-none focus:border-sky-cyan focus:ring-2 focus:ring-sky-cyan/20 transition-all duration-300 resize-none"
                placeholder="Tell us about your goals, questions, or how we can help you on your coding journey..."
                required
              ></textarea>
            </div>
            
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-sky-cyan text-steel-navy font-montserrat font-semibold px-10 py-4 rounded-2xl text-lg glow-cyan-hover transition-all duration-300 hover:scale-105 inline-flex items-center space-x-3 shadow-xl"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
              
              {/* Microcopy */}
              <p className="font-inter text-sm text-charcoal-gray/60 mt-4">
                We'll get back to you within 24 hours.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
