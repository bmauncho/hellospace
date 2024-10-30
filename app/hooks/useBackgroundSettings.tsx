import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const useBackgroundSettings = () => {
  const currentPath = usePathname();

  const [backgroundImage, setBackgroundImage] = useState("/images/idle_bg.png");
  const [backgroundHeight, setBackgroundHeight] = useState("100vh");
  const [backgroundHeightPercentage, setBackgroundHeightPercentage] =
    useState("100%");

  useEffect(() => {
    const updateBackgroundForScreenSize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 768) {
        // For small screens, change the background image and other properties
        switch (currentPath) {
          case "/":
            setBackgroundImage("/images/phone-background.png");
            setBackgroundHeight("100vh");
            setBackgroundHeightPercentage("100%");
            break;
          case "/projects":
          case "/shop":
          case "/furniture":
          case "/contactUs":
            setBackgroundImage("/images/phone-background_2.png");
            setBackgroundImage("/images/background.png");
            setBackgroundHeight("50vh");
            setBackgroundHeightPercentage("100%");
            break;
        }
      } else {
        // For larger screens, use the regular settings based on the path
        switch (currentPath) {
          case "/":
            setBackgroundHeight("100vh");
            setBackgroundHeightPercentage("100%");
            break;
          case "/projects":
          case "/shop":
          case "/furniture":
          case "/contactUs":
            setBackgroundImage("/images/background.png");
            setBackgroundHeight("50vh");
            setBackgroundHeightPercentage("100%");
            break;
        }
      }
    };

    updateBackgroundForScreenSize();

    window.addEventListener("resize", updateBackgroundForScreenSize);

    return () => {
      window.removeEventListener("resize", updateBackgroundForScreenSize);
    };
  }, [currentPath]);

  return {
    backgroundImage,
    backgroundHeight,
    backgroundHeightPercentage,
    setBackgroundImage,
  };
};

export default useBackgroundSettings;
