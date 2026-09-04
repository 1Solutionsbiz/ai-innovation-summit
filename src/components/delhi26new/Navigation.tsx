const Navigation = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
        <a href="#" className="text-lg font-black tracking-tight text-white">
          AI <span className="font-light">Innovation</span><br />
          <span className="text-xs tracking-[0.25em]">SUMMIT</span>
        </a>

        <nav className="hidden items-center gap-6 text-xs font-medium text-white/90 lg:flex">
          <a href="#highlights">Overview</a>
          <a href="#focus-areas">Focus Areas</a>
          <a href="#speakers">Speakers</a>
          <a href="#agenda">Agenda</a>
          <a href="#partners">Partners</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href="#register"
          className="rounded-full border border-white/40 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur transition hover:bg-white hover:text-slate-950"
        >
          Register Now
        </a>
      </div>
    </header>
  );
};

export default Navigation;
