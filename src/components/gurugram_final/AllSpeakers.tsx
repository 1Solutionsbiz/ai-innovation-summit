
import { useMemo, useState } from "react";
import { Search, MapPin, CalendarDays, Users } from "lucide-react";
import { EVENTS } from "@/components/gurugram_final/eventSpeakersData";


import ScrollToHash from "@/components/ScrollToHash";
import Navigation from "@/components/gurugram_final/RedesignNavigationStatic";
import Footer from "@/components/gurugram_final/Footer";
import "@/styles/gurugram_final.css";





const AllSpeakers = () => {
  const [search, setSearch] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");

  const locations = useMemo(
    () => [...new Set(EVENTS.map((event) => event.location))],
    []
  );

  const years = useMemo(
    () =>
      [...new Set(EVENTS.map((event) => event.year))].sort(
        (a, b) => Number(b) - Number(a)
      ),
    []
  );

  const filteredEvents = useMemo(() => {
    const query = search.trim().toLowerCase();

    return EVENTS.map((event) => ({
      ...event,
      speakers: event.speakers.filter((speaker) => {
        const matchesSearch =
          !query ||
          speaker.name.toLowerCase().includes(query) ||
          speaker.role.toLowerCase().includes(query) ||
          speaker.company.toLowerCase().includes(query);

        return matchesSearch;
      }),
    })).filter(
      (event) =>
        event.speakers.length > 0 &&
        (selectedLocation === "All" ||
          event.location === selectedLocation) &&
        (selectedYear === "All" || event.year === selectedYear)
    );
  }, [search, selectedLocation, selectedYear]);

  const totalSpeakers = filteredEvents.reduce(
    (total, event) => total + event.speakers.length,
    0
  );

  return (
    <main className="min-h-screen bg-white text-[#022158]">
      {/* PAGE HERO */}

<ScrollToHash />
<Navigation />


      <section className="relative zindex2 overflow-hidden bg-[#022158] mt-[5.6rem] px-5 py-16 text-white sm:py-24">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#EF3340]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#EF3340] sm:text-base">
            AI Innovation Summit
          </p>

          <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
            All Speakers
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
            Meet the industry leaders, technology experts and innovators
            who have shared their insights at our events across India.
          </p>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/90">
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              {locations.length} Locations
            </div>

            <div className="flex items-center gap-2">
              <CalendarDays size={18} />
              {years.length} Event Years
            </div>

            <div className="flex items-center gap-2">
              <Users size={18} />
              {totalSpeakers} Speakers
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH AND FILTERS */}
      <section className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 px-4 py-4 backdrop-blur-md sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row">
          <div className="relative min-w-0 flex-1">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by speaker, designation or company..."
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#022158] focus:ring-2 focus:ring-[#022158]/10"
            />
          </div>

          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#022158]"
            aria-label="Filter by location"
          >
            <option value="All">All Locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>

          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#022158]"
            aria-label="Filter by year"
          >
            <option value="All">All Years</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* EVENT-WISE SPEAKERS */}
      <div className="mx-auto zindex2 bg-[#fff] max-w-[1600px] px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
        {filteredEvents.length === 0 ? (
          <div className="py-20 text-center">
            <Users className="mx-auto mb-4 text-slate-300" size={44} />

            <h2 className="text-2xl font-bold">
              No speakers found
            </h2>

            <p className="mt-2 text-slate-500">
              Try another search term, location or year.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setSelectedLocation("All");
                setSelectedYear("All");
              }}
              className="mt-5 rounded-lg bg-[#022158] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#EF3340]"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="space-y-16 sm:space-y-20">
            {filteredEvents.map((event, index) => (
              <section
                key={`${event.location}-${event.year}-${index}`}
                id={`event-${event.location}-${event.year}-${index}`}
              >
                {/* EVENT HEADING */}
                <div className="mb-7 flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-5">
                  <div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#EF3340]">
                      AI Innovation Summit
                    </p>

                    <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl">
                      {event.location} {event.year}
                    </h2>
                  </div>

                  <span className="rounded-full bg-[#022158]/5 px-4 py-2 text-sm font-semibold text-[#022158]">
                    {event.speakers.length}{" "}
                    {event.speakers.length === 1
                      ? "Speaker"
                      : "Speakers"}
                  </span>
                </div>

                {/* SPEAKER GRID */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">
                  {event.speakers.map((speaker, speakerIndex) => (
                    <article
                      key={`${speaker.name}-${speakerIndex}`}
                      className="group allspecsecmain min-w-0 overflow-hidden rounded-2xl bg-[#022158] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div className="relative allspecsectwo aspect-[3/4] overflow-hidden bg-slate-100">
                        <img
                          src={speaker.image}
                          alt={speaker.name}
                          loading="lazy"
                          className="h-full allspeakerssec w-full object-cover transition duration-500 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.style.visibility = "hidden";
                          }}
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#022158] via-transparent to-transparent opacity-90" />

                        <div className="absolute allspeakerssectextsec inset-x-0 bottom-0 p-3 sm:p-4">
                          <h3 className="text-base font-bold leading-snug text-white sm:text-lg">
                            {speaker.name}
                          </h3>

                          <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-white/80 sm:text-sm">
                            {speaker.role}
                          </p>

                          <p className="mt-1 line-clamp-2 text-xs font-semibold leading-relaxed text-white sm:text-sm">
                            {speaker.company}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>


<Footer />


    </main>
  );
};

export default AllSpeakers;
