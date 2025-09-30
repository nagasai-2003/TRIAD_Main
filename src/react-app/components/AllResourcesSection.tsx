import { useState } from 'react';
import SeriesDetail from '@/react-app/components/SeriesDetail';
import { seriesData, Series } from '@/react-app/data/seriesData';

/**
 * A component that displays a list of all available resource series.
 * When a series is clicked, it displays the details of that series.
 */
export default function AllResourcesSection() {
  // State to keep track of the currently selected series. `null` means no series is selected.
  const [selectedSeries, setSelectedSeries] = useState<Series | null>(null);

  /**
   * Handles the click event on a series card.
   * @param {Series} series - The series data object that was clicked.
   */
  const handleSeriesClick = (series: Series) => {
    setSelectedSeries(series);
  };

  /**
   * Handles the click event on the "Back" button.
   * Resets the selected series to `null`, showing the list of all series again.
   */
  const handleBackClick = () => {
    setSelectedSeries(null);
  };

  // If a series is selected, render the SeriesDetail component.
  if (selectedSeries) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={handleBackClick}
            aria-label="Back to all series"
            className="mb-8 text-indigo-600 hover:text-indigo-800 font-semibold inline-flex items-center group"
          >
            <span className="transform group-hover:-translate-x-1 transition-transform duration-200">&larr;</span>&nbsp;Back to All Series
          </button>
          <SeriesDetail series={selectedSeries} />
        </div>
      </section>
    );
  }

  // If no series is selected, render the list of all series.
  return (
    <section className="py-12 bg-gray-100" aria-labelledby="all-resources-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="all-resources-heading" className="text-4xl font-extrabold text-gray-900 text-center mb-12">All Resources</h2>
        <div className="grid gap-10 md:grid-cols-2">
          {seriesData.map((series, index) => (
            <div
              key={index}
              role="button"
              tabIndex={0}
              className="relative rounded-xl shadow-lg overflow-hidden group cursor-pointer h-80"
              onClick={() => handleSeriesClick(series)}
              onKeyDown={(e) => e.key === 'Enter' && handleSeriesClick(series)}
              aria-label={`View details for ${series.title}`}
            >
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 transform group-hover:scale-110" style={{ backgroundImage: `url(${series.imageUrl})` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="relative h-full flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white tracking-tight">{series.title}</h3>
                <p className="mt-2 text-lg text-gray-200">{series.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
