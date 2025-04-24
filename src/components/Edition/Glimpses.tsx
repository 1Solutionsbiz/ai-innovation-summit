import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface GlimpseImageProps {
  src: string;
  alt: string;
}

const Glimpses: React.FC = () => {
  const images: GlimpseImageProps[] = [
    { src: "/edition/glim/1-min.png", alt: "Edition 1" },
    { src: "/edition/glim/2-min.png", alt: "Edition 2" },
    { src: "/edition/glim/3-min.png", alt: "Edition 3" },
    { src: "/edition/glim/4-min.png", alt: "Edition 4" },
    { src: "/edition/glim/5-min.png", alt: "Edition 5" },
    { src: "/edition/glim/6-min.png", alt: "Edition 6" },
    { src: "/edition/glim/7-min.png", alt: "Edition 7" },
    { src: "/edition/glim/8-min.png", alt: "Edition 8" },
    { src: "/edition/glim/9-min.png", alt: "Edition 9" },
    { src: "/edition/glim/10-min.png", alt: "Edition 10" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-black text-white py-12 px-4">
      <div className="container mx-auto my-10">
        <h2 className="lg:text-5xl md:text-3xl sm:text-2xl font-bold text-center mb-10 font-orbitron">
          Glimpses from our Previous Editions
        </h2>
        <Slider {...settings}>
          {images.map((image, idx) => (
            <div key={idx} className="px-4">
              <img
                src={image.src}
                alt={image.alt}
                className="rounded-lg w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Glimpses;
