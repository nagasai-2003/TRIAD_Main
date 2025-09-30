import { Youtube, Github, BookOpen } from 'lucide-react';
import { Series, Episode } from '@/react-app/data/seriesData';

interface SeriesHeroProps {
  title: string;
  description: string;
  imageUrl: string;
}

/**
 * A component that displays the hero section for a series.
 * @param {SeriesHeroProps} props - The component's properties.
 */
function SeriesHero({ title, description, imageUrl }: SeriesHeroProps) {
  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${imageUrl})` }}
      aria-labelledby="series-title"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
      <div className="relative max-w-6xl mx-auto px-6 py-24 text-center text-white">
        <h1 
          id="series-title"
          className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg"
        >
          {title}
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
          {description}
        </p>
      </div>
    </section>
  );
}

interface SeriesEpisodesProps {
  episodes: Episode[];
}

/**
 * A component that displays a list of episodes for a series.
 * @param {SeriesEpisodesProps} props - The component's properties.
 */
function SeriesEpisodes({ episodes }: SeriesEpisodesProps) {
    return (
        <section className="py-12 bg-gray-50" aria-label="Series Episodes">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {episodes.map((episode, index) => (
                        <div key={index} role="article" className="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 border border-transparent hover:border-sky-cyan hover:shadow-lg">
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-steel-navy">{episode.title}</h3>
                                <p className="mt-3 text-sm text-charcoal-gray h-20">{episode.description}</p>
                                <div className="mt-4 flex justify-start items-center space-x-6">
                                    <a 
                                      href={episode.youtubeLink} 
                                      aria-label={`Watch ${episode.title} on YouTube`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-gray-500 hover:text-red-600 transition-colors duration-300 flex items-center space-x-1"
                                    >
                                        <Youtube size={20} />
                                        <span className="font-semibold text-sm">Watch</span>
                                    </a>
                                    <a 
                                      href={episode.githubLink} 
                                      aria-label={`View code for ${episode.title} on GitHub`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-gray-500 hover:text-gray-900 transition-colors duration-300 flex items-center space-x-1"
                                    >
                                        <Github size={20} />
                                        <span className="font-semibold text-sm">Code</span>
                                    </a>
                                    <a 
                                      href={episode.articleLink} 
                                      aria-label={`Read article for ${episode.title}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-gray-500 hover:text-indigo-600 transition-colors duration-300 flex items-center space-x-1"
                                    >
                                        <BookOpen size={20} />
                                        <span className="font-semibold text-sm">Read</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

interface SeriesDetailProps {
  series: Series;
}

/**
 * A component that displays the details of a series, including a hero section and a list of episodes.
 * @param {SeriesDetailProps} props - The component's properties.
 */
export default function SeriesDetail({ series }: SeriesDetailProps) {
  return (
    <div className="flex-grow">
      <SeriesHero title={series.title} description={series.description} imageUrl={series.imageUrl} />
      <SeriesEpisodes episodes={series.episodes} />
    </div>
  );
}
