import { useState, useEffect } from "react";

const SMALL_SCREEN_WIDTH = 768;

const useDeviceSize = (): boolean | undefined => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean | undefined>(
    undefined
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < SMALL_SCREEN_WIDTH);
    };

    // Set initial size on client load
    handleResize();

    // Listen for resize events on the client
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isSmallScreen;
};

export default useDeviceSize;
