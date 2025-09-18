import { useEffect } from "react";

const SocialWall = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.walls.io/assets/js/wallsio-widget-1.2.js";
    script.async = true;

    script.onload = () => {
      // Script load hone ke baad manually re-init karna
      if ((window as any).WallsIO) {
        (window as any).WallsIO.refreshAll();
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // cleanup on unmount
    };
  }, []);

  return (
    <div className="w-full my-10">
      <div
        id="wallsio-widget"
        data-wallurl="https://my.walls.io/ai-innovation-summit?nobackground=1&show_header=1&show_post_info=1&accessibility=0"
        data-title="ai-innovation-summit"
        data-width="100%"
        data-autoheight="1"
        data-height="800"
        data-lazyload="1"
      ></div>
    </div>
  );
};

export default SocialWall;
