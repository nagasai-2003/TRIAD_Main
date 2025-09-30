import type { Career } from '../../data/careers';

/**
 * Props for the CareerCard component.
 */
interface CareerCardProps {
  /**
   * The career object to display.
   */
  career: Career;
}

const CareerCard = ({ career }: CareerCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,207,255,0.4)]">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 font-montserrat mb-2">{career.title}</h3>
        <p className="text-sm text-gray-500 font-inter mb-4">{career.location} - {career.type}</p>
        <p className="text-base text-gray-700 font-inter mb-6">{career.description}</p>
        <div className="text-center">
          <a 
            href={career.applyLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-white text-sky-cyan font-semibold py-2 px-6 border-2 border-sky-cyan rounded-full hover:bg-sky-cyan hover:text-white transition-colors duration-300"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default CareerCard;
