import React, { useState } from "react";
import { Plus, Minus } from "lucide-react"; // for icons

const AgendaNew = () => {

  const higlitbanner = "/delhi26/highlight.png"; // background image path

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDescription = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const agendaData = [
    {
      time: "08:00 AM – 09:00 AM",
      title: "Registrations",
      description: "",
    },
    {
      time: "09:00 AM – 10:00 AM",
      title: "Welcome Agenda 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      time: "10:01 AM – 11:00 AM",
      title: "Welcome Agenda 2",
      description: "",
    },
    {
      time: "11:01 AM – 12:00 PM",
      title: "Tea Break",
      description: "",
    },
    {
      time: "12:01 PM – 01:00 PM",
      title: "Welcome Agenda 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      time: "01:01 PM – 02:00 PM",
      title: "Lunch Break",
      description: "",
    },
    {
      time: "02:01 PM – 03:00 PM",
      title: "Welcome Agenda 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      time: "03:01 PM – 04:00 PM",
      title: "Welcome Agenda 5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      time: "04:01 PM – 05:00 PM",
      title: "Tea Break",
      description: "",
    },
    {
      time: "05:01 PM – 06:00 PM",
      title: "Welcome Agenda 6",
      description: "",
    },
    {
      time: "06:01 PM",
      title: "Announcement & Closing",
      description: "",
    },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-[#0c1a2a] to-[#203a56]" id="agenda"
    style={{ backgroundImage: `url(${higlitbanner})` }}
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Agenda
          </h2>
        </div>

        {/* Agenda List */}
        <div className="max-w-7xl mx-auto divide-y divide-gray-200 
        backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8
        ">
          {agendaData.map((item, index) => {
            const hasDescription = item.description && item.description.trim() !== "";
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="py-6 cursor-pointer transition-all duration-300"
                onClick={() => hasDescription && toggleDescription(index)}
              >
                <div className="flex justify-between items-start gap-6 flex-col-mobile-reverse">
                  {/* Time */}
                  <div className="w-1/4 mw100p">
                    <p className="text-lg font-semibold text-white whitespace-pre-line">
                      {item.time}
                    </p>
                  </div>

                  {/* Title + Icon */}
                  <div className="w-3/4 mw100p">
                    <div className="flex justify-between items-start flex-col-mobile">
                      <h3 className="text-xl font-bold text-white">
                        {item.title}
                      </h3>

                      {/* + / - Icon only if description exists */}
                      {hasDescription && (
                        <button
                          className="text-white hover:text-white transition"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleDescription(index);
                          }}
                        >
                          {isActive ? (
                            <Minus className="w-5 h-5" />
                          ) : (
                            <Plus className="w-5 h-5" />
                          )}
                        </button>
                      )}
                    </div>

                    {/* Description (toggle) */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        isActive ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-white text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AgendaNew;
