import { useEffect, useState } from "react";

// Custom hook to determine scroll threshold based on window size
const useScrollThreshold = () => {
  const [scrollThreshold, setScrollThreshold] = useState(0);

  useEffect(() => {
    const updateScrollThreshold = () => {
      let newThreshold = 0;

      if (window.innerWidth >= 1536) {
        newThreshold = 2900; // 2xl
      } else if (window.innerWidth >= 1280) {
        newThreshold = 2450; // xl
      } else if (window.innerWidth >= 1024) {
        newThreshold = 2300; // lg
      } else if (window.innerWidth >= 768) {
        newThreshold = 1200; // md
      } else if (window.innerWidth >= 640) {
        newThreshold = 2900; // sm
      } else {
        newThreshold = 2900; // Default for smaller screens
      }

      setScrollThreshold(newThreshold);
    };

    // Update threshold on mount and resize
    updateScrollThreshold();
    window.addEventListener("resize", updateScrollThreshold);

    return () => {
      window.removeEventListener("resize", updateScrollThreshold);
    };
  }, []);

  return scrollThreshold;
};

export default useScrollThreshold;
