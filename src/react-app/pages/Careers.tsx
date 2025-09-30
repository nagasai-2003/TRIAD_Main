import CareerCard from "../components/shared/CareerCard";
import { allCareers } from "../data/careers";
import Footer from "../components/Footer";

export default function Careers() {
  return (
    <div className="bg-gray-50">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Join Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCareers.map((career) => (
            <CareerCard key={career.title} career={career} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
