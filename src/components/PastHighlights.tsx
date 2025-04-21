import { Play } from "lucide-react";

export const PastHighlights = () => {
  const highlights = [
    {
      title: "Dan Makoski | Compassion by Design",
      description: "How to design from a place of empathy to improve the lives of the people we serve.",
      thumbnail: "photo-1573496359142-b8d87734a5a2"
    },
    {
      title: "Venessa Bennett | Embedding a Deeper Understanding",
      description: "Learn how to create a user-centric organisation that permeates from teams through to senior leadership.",
      thumbnail: "photo-1560250097-0b93528c311a"
    },
    {
      title: "Fonz Morris | Designing with Awareness",
      description: "Prepare to be blown away by BIG data and a real 'look behind the curtain' at the magic at Netflix.",
      thumbnail: "photo-1494790108377-be9c29b29330"
    }
  ];

  return (
    <section className="py-20 bg-secondary/10 btn-gradient">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 font-orbitron">Blast from the Past</h2>
        <p className="text-dark mb-12">Take a glimpse of the past three overwhelmingly successful editions of previously titled, “Cloud+Ai Innovation Summit”.</p>

        {/* Local Video */}
        <div className="mb-16">
          <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
            <video
              src="/Post_Event_Montage.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Highlights */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight) => (
            <div key={highlight.title} className="group relative">
              <div className="aspect-video relative overflow-hidden rounded-lg bg-dark">
                <img
                  src={`https://images.unsplash.com/${highlight.thumbnail}?auto=format&fit=crop&w=800&q=80`}
                  alt={highlight.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <button className="bg-white/20 hover:bg-white/30 transition-colors rounded-full p-4">
                    <Play className="h-8 w-8 text-white" />
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-bold mt-4 mb-2">{highlight.title}</h3>
              <p className="text-dark">{highlight.description}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};
