import { useState } from 'react';

// An array of course categories used for filtering
const categories = [
  'All Courses',
  'Foundations', 
  'Computer Science',
  'AI & Future Tech'
];

/**
 * A component that displays a set of category filters as buttons.
 * It allows users to select a category and updates the active filter state.
 */
export default function CategoryFilters() {
  // State to keep track of the currently active filter
  const [activeFilter, setActiveFilter] = useState('All Courses');

  return (
    <section 
      className="bg-arctic-white py-12"
      aria-label="Course category filters"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4" role="navigation">
          {/* Mapping through the categories to create a button for each one */}
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              aria-pressed={activeFilter === category}
              className={`px-8 py-3 rounded-full font-montserrat font-semibold text-lg transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-sky-cyan text-steel-navy glow-cyan transform scale-105' // Style for the active filter
                  : 'bg-frost-gray text-charcoal-gray hover:bg-sky-cyan/20 hover:text-sky-cyan' // Style for inactive filters
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
