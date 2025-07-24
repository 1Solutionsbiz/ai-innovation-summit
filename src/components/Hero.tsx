import { Button } from "./ui/button";

export const Hero = ({
  backgroundImage = "/hero-banner.png",
  overlay = true,
  contentPosition = "right", // "left" or "right"
  contentBackgroundImage = "/hero-banner-image.svg",
  heading = "Shaping the Future with AI",
  subheading = "From prompt to impact",
  body = "Join the brightest minds in Artificial Intelligence and Innovation at the most impactful AI Summit mastering AI and securing the future.",
  date = "July 9, 2025 | Taj Santacruz, Mumbai, India",
  stats = [
    { value: "25+", label: "Speakers" },
    { value: "8+", label: "Hrs" },
    { value: "200+", label: "Attendees" },
  ],
}) => {
  return (
    <section className="relative min-h-[60vh] sm:min-h-screen pt-16 flex items-center overflow-hidden">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover object-center sm:object-left"
        style={{
          borderRadius: "inherit",
          objectFit: "cover",
        }}
      />

      {/* Optional Overlay */}
      {overlay && <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0" />}

      {/* Content */}
      <div
        className={`container px-4 sm:px-6 lg:px-8 relative z-10 text-white flex ${
          contentPosition === "right" ? "justify-end" : "justify-start"
        }`}
      >
        <div
          className="w-full max-w-full sm:max-w-2xl lg:max-w-4xl p-6 sm:p-8 lg:p-10 bg-black/0 rounded-xl"
          style={{
            backgroundImage: `url('${contentBackgroundImage}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: `${contentPosition} center`,
            backgroundSize: "cover",
            textAlign: contentPosition === "right" ? "right" : "left",
            minHeight: "50vh",
            height: "auto",
          }}
        >
          {/* Heading & Subheading */}
          <div className="bg-dark/80 p-4 sm:p-6 mt-10 sm:mt-16 text-center">
            <h1 className="font-orbitron text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              {heading.split("with")[0]}
              <span className="text-gradient"> with{heading.split("with")[1]}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 opacity-90 font-light">
              {subheading}
            </p>
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 font-light">
              {body}
            </p>
            <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 font-medium">
              {date}
            </p>
          </div>

          {/* Stats Section */}
          <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-6 text-center bg-dark/80 p-4 sm:p-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="animate-float"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 font-orbitron">
                  {item.value}
                </h3>
                <p className="text-sm sm:text-base opacity-90">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};