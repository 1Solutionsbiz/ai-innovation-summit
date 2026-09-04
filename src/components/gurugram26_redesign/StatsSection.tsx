import React from "react";

const stats = [
  {
    number: "700+",
    title: "Delhi Edition",
    subtitle: "Attendees",
  },
  {
    number: "45+",
    title: "CXO Speakers &",
    subtitle: "Moderators",
  },
  {
    number: "12+",
    title: "Sessions",
    subtitle: "",
  },
  {
    number: "10+",
    title: "Industry Sectors",
    subtitle: "",
  },
  {
    number: "3+",
    title: "Parallel Tracks",
    subtitle: "",
  },
  {
    number: "1",
    title: "Day That Redefines",
    subtitle: "Enterprise AI",
  },
];

const StatsSection = () => {
  return (
    <section
      className="
        relative
        z-20
        -mt-[67px]
        bg-transparent
        pb-10
      "
    >
      <div
        className="
          mx-auto
          max-w-[1088px]
          px-5
          md:px-8
        "
      >

        {/* Stats Cards */}
        <div
          className="
            grid
            grid-cols-2
            gap-3

            sm:grid-cols-3

            lg:flex
            lg:justify-center
          "
        >

          {stats.map((stat, index) => (
            <div
              key={stat.title}
              className="
                flex
                h-[134px]
                w-full
                flex-col
                items-center
                justify-center

                rounded-[16px]
                border
                border-white/80

                bg-[#062861]

                px-2
                text-center
                text-white

                shadow-[0_12px_35px_rgba(0,0,0,0.18)]

                transition-all
                duration-500

                hover:-translate-y-3
                hover:scale-[1.03]
                hover:shadow-2xl

                lg:min-w-[120px]
                lg:max-w-[160px]
                lg:flex-1
              "
              style={{
                transitionDelay: `${index * 80}ms`,
              }}
            >

              {/* Number */}
              <div
                className="
                  text-[38px]
                  font-extrabold
                  leading-none
                  tracking-tight

                  sm:text-[41px]
                  lg:text-[43px]
                "
              >
                {stat.number}
              </div>

              {/* Label */}
              <div
                className="
                  mt-4
                  text-[11px]
                  font-medium
                  leading-[15px]

                  sm:text-[12px]
                "
              >
                {stat.title}

                {stat.subtitle && (
                  <>
                    <br />
                    {stat.subtitle}
                  </>
                )}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default StatsSection;