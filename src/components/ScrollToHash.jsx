import { useEffect } from "react";

const ScrollToHash = () => {
  useEffect(() => {
    const scrollToElement = () => {
      const hash = window.location.hash;

      if (hash) {
        const element = document.querySelector(hash);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    setTimeout(scrollToElement, 500);
  }, []);

  return null;
};

export default ScrollToHash;