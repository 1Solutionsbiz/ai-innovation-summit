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
    <section className="relative min-h-screen pt-16 flex items-center overflow-hidden">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover object-left"
      />

      {/* Optional Overlay */}
      {/* {overlay && <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0" />} */}

      {/* Content */}
      <div
        className={`container p-0 relative z-10 text-white flex  ${
          isRight ? "justify-end" : "justify-start"
        }`}
      >
        <div
          className="w-[50%] p-10 pl-0 bg-black/0 rounded-xl"  // Changed max-w-4xl to w-[70%]
          style={{
            height: "100vh",
            backgroundImage: `url('${contentBackgroundImage}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: `${contentPosition} center`,
            backgroundSize: "cover",
            textAlign: isRight ? "right" : "left",
          }}
        >
          {/* Inner Content */}
          <div
            className={` pl-0 p-5 mt-20 flex flex-col ${
              isRight ? "items-end text-right" : "items-start text-left"
            }`}
          >
            <img
              src={heroImage}
              alt="Past Event"
              className="max-w-100 h-auto mb-6"
            />
           <p className="text-xl md:text-2xl mb-4 opacity-90 font-light px-[60px]">{subheading}</p>
           <p className="text-lg md:text-xl mb-10 font-medium px-[60px]">{date}</p>
          </div>
        </div>
      </div>
    </section>
  );
};