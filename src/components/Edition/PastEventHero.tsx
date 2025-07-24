import { Button } from "../ui/button";

export const PastEventHero = ({
  backgroundImage = "/hero-banner.png",
  overlay = true,
  contentPosition = "right",
  contentBackgroundImage = "/hero-banner-image.svg",
  heroImage = "/past-event-image.png",
  subheading = "Relive the Moments",
  date = "March 15, 2024 | Taj Santacruz, Mumbai, India",
}) => {
  const isRight = contentPosition === "right";

  return (
    <section className="relative min-h-[60vh] sm:min-h-screen pt-12 sm:pt-16 flex items-center overflow-hidden">
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
      {overlay && <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0 lg:hidden md:hidden"  />}

      {/* Content */}
      <div
        className={`container px-4 sm:px-6 lg:px-8 relative z-10 text-white flex ${
          isRight ? "justify-end" : "justify-start"
        }`}
      >
        <div
          className="w-full sm:w-[70%] lg:w-[50%] p-6 sm:p-8 lg:p-10 bg-black/0 rounded-xl"
          style={{
            backgroundImage: `url('${contentBackgroundImage}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: `${contentPosition} center`,
            backgroundSize: "cover",
            textAlign: isRight ? "right" : "left",
            minHeight: "50vh",
            height: "auto",
          }}
        >
          {/* Inner Content */}
          <div
            className={`p-4 sm:p-5 mt-8 sm:mt-12 flex flex-col ${
              isRight ? "items-end text-right" : "items-start text-left"
            }`}
          >
            <img
              src={heroImage}
              alt="Past Event"
              className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] h-auto mb-4 sm:mb-6"
            />
            <p className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 opacity-90 font-light px-0 sm:px-6 lg:px-10">
              {subheading}
            </p>
            <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 font-medium px-0 sm:px-6 lg:px-10">
              {date}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};