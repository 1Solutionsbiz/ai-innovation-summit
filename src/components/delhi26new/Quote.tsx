const Quote = () => (
  <section
    className="relative min-h-[430px] bg-slate-950 bg-cover bg-center"
    style={{ backgroundImage: "linear-gradient(90deg, rgba(0,0,0,.82), rgba(0,0,0,.3)), url('/images/ai-summit/audience.jpg')" }}
  >
    <div className="mx-auto flex min-h-[430px] max-w-7xl items-center px-5 lg:px-8">
      <blockquote className="max-w-2xl text-3xl font-black leading-tight text-white md:text-5xl">
        “Great to see so many minds coming together to discuss how we can collectively shape the future of AI in India.”
        <footer className="mt-5 text-xs font-normal text-white/60">AI Innovation Summit 2026</footer>
      </blockquote>
    </div>
  </section>
);

export default Quote;
