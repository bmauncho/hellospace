"use client";
// components/Background.tsx
import React, { PropsWithChildren } from "react";
import useBackgroundSettings from "./hooks/useBackgroundSettings";
import { usePathname } from "next/navigation";
import Hero from "./components/PageSections/Hero";

const Background = ({ children }: PropsWithChildren) => {
  const {
    backgroundImage,
    backgroundHeight,
    backgroundHeightPercentage,
    setBackgroundImage,
  } = useBackgroundSettings();

  const currentPath = usePathname(); // Call usePathname once at the top

  const handleMouseEnter = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 768 && currentPath === "/") {
      setBackgroundImage("/images/background.png");
    } else if (screenWidth < 768 && currentPath === "/") {
      setBackgroundImage("/images/phone-background.png");
    }
  };

  const handleMouseLeave = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 768 && currentPath === "/") {
      setBackgroundImage("/images/idle_bg.png");
    } else if (screenWidth < 768 && currentPath === "/") {
      setBackgroundImage("/images/phone-background_2.png");
    }
  };

  return (
    <div style={{ position: "relative", top: 0, left: 0 }}>
      <div
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          height: backgroundHeight, // Default height
          width: "100%",
          transition: "background-image 0.5s ease, opacity 0.5s ease",
          opacity: 1,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Responsive Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: backgroundHeightPercentage,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 0,
          }}
        ></div>
        <Hero />
        {children}
      </div>
    </div>
  );
};

export default Background;
