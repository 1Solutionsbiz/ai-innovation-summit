// src/components/ScrollManager.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return null;
};

export default ScrollManager;
