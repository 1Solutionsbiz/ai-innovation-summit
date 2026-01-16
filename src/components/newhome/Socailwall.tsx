import { useEffect } from "react";

const Socialwall = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.walls.io/assets/js/wallsio-widget-1.2.js";
    script.async = true;

    script.setAttribute(
      "data-wallurl",
      "https://my.walls.io/sdvhd?nobackground=1&show_header=0&show_post_info=1&accessibility=0"
    );
    script.setAttribute("data-title", "sdvhd");
    script.setAttribute("data-width", "100%");
    script.setAttribute("data-autoheight", "1");
    script.setAttribute("data-height", "800");
    script.setAttribute("data-lazyload", "1");
    script.setAttribute("allow", "camera");

    const container = document.getElementById("socialwall-widget");
    if (container) {
      container.innerHTML = ""; // safety: avoid duplicate script
      container.appendChild(script);
    }
  }, []);

  return (
    <section className="py-20" style={{ backgroundColor: "#0b122c" }}>
      <div className="container mx-auto px-4">
        <div
          id="socialwall-widget"
          className="rounded-2xl overflow-hidden bg-white"
        ></div>
      </div>
    </section>
  );
};

export default Socialwall;
