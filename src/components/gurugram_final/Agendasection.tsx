import { useState } from "react";

// ---------- Types ----------
type Speaker = {
  name: string;
  role: string; // can include \n for multi-line via array below instead
  roleLines?: string[]; // optional multi-line role/company breakup
  image: string;
};

type AgendaItem = {
  time: string;
  title: string;
  description?: string;
  speakers?: Speaker[];
};

type Track = {
  id: string;
  label: string;
  items: AgendaItem[];
};

type DayData = {
  id: string;
  label: string;
  tracks: Track[];
};

// ---------- Sample data (swap with real data) ----------
const AGENDA_DATA: DayData[] = [
  {
    id: "day1",
    label: "Day 1",
    tracks: [
      {
        id: "fashion-xp",
        label: "Detailed Agenda",
        items: [
          {
            time: "08:30 AM - 09:15 AM",
            title: "Registration & Networking Breakfast ",
            description: "Delegates arrive and collect registration kits. Lucky Draw QR codes active. Engagement Zone open in pre-function area. Sponsor booths open. ",
            // speakers: [
            //   {
            //     name: "Charu Lamba",
            //     role: "Deputy Editor",
            //     roleLines: ["Deputy", "Editor", "ETRetail"],
            //     image: "/speakers/charu-lamba.jpg",
            //   },
            // ],
          },
          {
            time: "09:15 AM - 09:20 AM",
            title: "Welcome Address",
            description: "Welcome note by The Guild and Guild Live. Context setting for the day. ",
            // speakers: [
            //   {
            //     name: "Amisha Jain",
            //     role: "MD & CEO",
            //     roleLines: ["MD & CEO", "Arvind Fashions", "(Conference Chairperson)"],
            //     image: "/speakers/amisha-jain.jpg",
            //   },
            // ],
          },
          {
            time: "Soon",
            title: "Pending",
          },
        ],
      },
      {
        id: "Detailed Agenda 2",
        label: "Leadership Roundtable In Association With DHL",
        items: [
          {
            time: "Time",
            title: "Soon",
          },
        ],
      },
    ],
  },
  // {
  //   id: "day2",
  //   label: "Day 2",
  //   tracks: [
  //     {
  //       id: "day2-track",
  //       label: "Main Stage",
  //       items: [
  //         {
  //           time: "10:00 AM - 10:15 AM",
  //           title: "Day 2 Welcome",
  //         },
  //       ],
  //     },
  //   ],
  // },
];

// ---------- Component ----------
const AgendaSection = () => {
  const [activeDayId, setActiveDayId] = useState(AGENDA_DATA[0].id);
  const activeDay = AGENDA_DATA.find((d) => d.id === activeDayId) ?? AGENDA_DATA[0];

  const [activeTrackId, setActiveTrackId] = useState(activeDay.tracks[0].id);
  const activeTrack =
    activeDay.tracks.find((t) => t.id === activeTrackId) ?? activeDay.tracks[0];

  const handleDayChange = (dayId: string) => {
    setActiveDayId(dayId);
    const newDay = AGENDA_DATA.find((d) => d.id === dayId);
    if (newDay) setActiveTrackId(newDay.tracks[0].id);
  };

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-[1080px] mx-auto">
        {/* Heading */}
        <h2 className="text-center font-black text-5xl md:text-6xl tracking-tight uppercase">
          <span className="agendatitle">Agenda</span>
        </h2>

        {/* Day tabs */}
        <div className="mt-10 flex justify-center gap-10">
          {AGENDA_DATA.map((day) => (
            <button
              key={day.id}
              onClick={() => handleDayChange(day.id)}
              className={`pb-2 text-lg font-semibold transition-colors border-b-2 ${
                activeDayId === day.id
                  ? "text-fuchsia-500 border-fuchsia-500"
                  : "text-white/30 border-transparent hover:text-white/50"
              }`}
            >
              {day.label}
            </button>
          ))}
        </div>

        {/* Track pills */}
        <div className="mt-10 flex justify-center">
          <div className="flex bg-white/10 rounded-full p-1 max-w-full overflow-x-auto">
            {activeDay.tracks.map((track) => (
              <button
                key={track.id}
                onClick={() => setActiveTrackId(track.id)}
                className={`whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                  activeTrackId === track.id
                    ? "bg-color text-white"
                    : "text-white/60 hover:text-white/80"
                }`}
              >
                {track.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-14">
          {activeTrack.items.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-[auto_1fr] gap-x-6 md:gap-x-10 border-t border-white/15 py-8 first:border-t-0"
            >
              {/* Time column */}
              <div className="text-white text-sm md:text-base font-semibold w-[110px] md:w-[190px] pt-1">
                {item.time}
              </div>

              {/* Content column */}
              <div className="flex gap-5 md:gap-8 border-l-2 border-fuchsia-600 pl-5 md:pl-8">
                <div>
                  <h3 className="text-white font-bold text-base md:text-lg">
                    {item.title}
                  </h3>

                  {item.description && (
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/65">
                      {item.description}
                    </p>
                  )}

                  {item.speakers && item.speakers.length > 0 && (
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
                      {item.speakers.map((speaker, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-3">
                          <img
                            src={speaker.image}
                            alt={speaker.name}
                            className="w-12 h-12 rounded-md object-cover flex-shrink-0 bg-white/10"
                          />
                          <div className="text-sm">
                            <p className="text-white font-semibold">{speaker.name}</p>
                            {(speaker.roleLines ?? [speaker.role]).map((line, lIdx) => (
                              <p key={lIdx} className="text-white/60 leading-tight">
                                {line}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;