
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="gradient-bg min-h-screen pt-16 flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Design & Development Conference 2025
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Join us for an inspiring two-day conference featuring industry leaders in design and development.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="w-full md:w-auto">
              Get Your Tickets
            </Button>
            <Button size="lg" variant="outline" className="w-full md:w-auto border-white text-white hover:bg-white/10">
              View Schedule
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">25-26</h3>
              <p className="opacity-90">April 2025</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Newcastle</h3>
              <p className="opacity-90">United Kingdom</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">20+</h3>
              <p className="opacity-90">Amazing Speakers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
