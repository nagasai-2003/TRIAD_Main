import { useState } from 'react';

const categories = [
  'All Courses',
  'Foundations', 
  'Computer Science',
  'AI & Future Tech'
];

export default function CategoryFilters() {
  const [activeFilter, setActiveFilter] = useState('All Courses');

  return (
    <section className="bg-arctic-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-8 py-3 rounded-full font-montserrat font-semibold text-lg transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-sky-cyan text-steel-navy glow-cyan transform scale-105'
                  : 'bg-frost-gray text-charcoal-gray hover:bg-sky-cyan/20 hover:text-sky-cyan'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
