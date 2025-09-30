import Footer from '@/react-app/components/Footer';

/**
 * The upcoming page of the application.
 * It is a placeholder for a future page.
 */
export default function Upcoming() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-steel-navy text-arctic-white">
      {/* Main content of the page */}
      <main className="text-center p-8">
        <div className="relative w-64 mx-auto mb-8">
          <img 
            src="https://mocha-cdn.com/0199154f-3e6d-7595-b23c-85f864415d25/Triad-Academy-Logo-Only-Transparent.png" 
            alt="TRIAD Academy Logo" 
            className="w-full h-auto [filter:drop-shadow(0_0_35px_rgba(0,207,255,0.8))]" 
          />
        </div>
        <h1 className="text-5xl font-bold mb-4">Coming Soon!</h1>
        <p className="text-xl mb-8">We're working hard to bring you something amazing. Stay tuned!</p>
      </main>
      {/* Footer, which is a shared component */}
      <Footer />
    </div>
  );
}
