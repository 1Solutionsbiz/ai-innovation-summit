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
    { value: "8+", label: "Hrs"  },
    { value: "200+", label: "Attendees"  },
  ],
}) => {
  return (
    <section className="relative min-h-screen pt-16 flex items-center overflow-hidden">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover object-left"
        style={{
          display: "block",
          borderRadius: "inherit",
          objectPosition: "left center",
          objectFit: "cover",
        }}
      />

      {/* Optional Overlay */}
      {overlay && <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0" />}

      {/* Content */}
      <div
        className={`container p-0 relative z-10 text-white flex ${
          contentPosition === "right" ? "justify-end" : "justify-start"
        }`}
      >
        <div
          className="max-w-4xl w-full text-right p-10 bg-black/0 rounded-xl"
          style={{
            display: "block",
            width: "100%",
            height: "100vh",
            borderRadius: "inherit",
            backgroundImage: `url('${contentBackgroundImage}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: `${contentPosition} center`,
            backgroundSize: "cover",
            textAlign: contentPosition === "right" ? "right" : "left",
          }}
        >
          {/* Heading & Subheading */}
          <div className="bg-dark/80 p-3 mt-20 text-center items-center">
            <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {heading.split("with")[0]}
              <span className="text-gradient"> with{heading.split("with")[1]}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 opacity-90 font-light">
              {subheading}
            </p>

            <p className="text-lg md:text-xl mb-4 font-light">{body}</p>

            <p className="text-lg md:text-xl mb-10 font-medium">{date}</p>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-dark/80 p-3">
            {stats.map((item, index) => (
              <div
                key={index}
                className="animate-float"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <h3 className="text-2xl font-bold mb-2 font-orbitron">{item.value}</h3>
                <p className="opacity-90">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
