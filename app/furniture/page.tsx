"use client";
import React, { useState } from "react";
import Image from "next/image";

const FurniturePage = () => {
  const images = [
    "/images/Furniture_1.png",
    "/images/Furniture_2.png",
    "/images/Furniture_3.png",
    "/images/Furniture_4.png",
    "/images/Furniture_5.png",
  ];

  // State for current image index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true); // State for fading effect

  // Function to change to the next image
  const nextImage = () => {
    setFadeIn(false); // Trigger fade-out
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFadeIn(true); // Trigger fade-in after image changes
    }, 300); // Match this delay to the fade-out duration
  };

  // Function to change to the previous image
  const prevImage = () => {
    setFadeIn(false); // Trigger fade-out
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
      setFadeIn(true); // Trigger fade-in after image changes
    }, 300); // Match this delay to the fade-out duration
  };

  return (
    <div className="relative px-4 md:px-8 lg:px-16 xl:px-32 py-6">
      {/* Main Image */}
      <div className="relative flex justify-center items-center h-full w-full overflow-hidden rounded-lg">
        <div className="h-1/2 w-full md:w-2/3 lg:w-1/2">
          <Image
            className={`rounded-lg transition-all duration-700 ease-in-out opacity-0 ${
              fadeIn ? "opacity-100" : ""
            }`}
            src={images[currentIndex]}
            alt="Main"
            layout="responsive"
            width={150} // Maintain aspect ratio
            height={150} // Maintain aspect ratio
          />
        </div>
        {/* Previous Button */}
        <button
          type="button"
          className="absolute top-1/2 left-0 z-10 flex items-center justify-center h-full px-2 md:px-4 cursor-pointer group focus:outline-none transform -translate-y-1/2"
          onClick={prevImage}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 transition-all delay-150 group-hover:bg-[#d48a45] group-focus:outline-none hover:scale-125">
            <svg
              className="w-4 h-4 text-white rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        {/* Next Button */}
        <button
          type="button"
          className="absolute top-1/2 right-0 z-10 flex items-center justify-center h-full px-2 md:px-4 cursor-pointer group focus:outline-none transform -translate-y-1/2"
          onClick={nextImage}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 transition-all delay-150 group-hover:bg-[#d48a45] group-focus:outline-none hover:scale-125">
            <svg
              className="w-4 h-4 text-white rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
      {/* Thumbnails */}
      <div className="flex justify-between gap-2 mt-4 overflow-x-auto">
        {images.map((image, index) => (
          <div key={index} className="relative w-1/5 flex-shrink-0">
            <Image
              className={`h-auto rounded-lg cursor-pointer transition-transform duration-500 ease-in-out ${
                currentIndex === index ? "border-4 border-[#ca803a]" : ""
              }`}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              layout="responsive"
              width={100} // Maintain aspect ratio
              height={100} // Maintain aspect ratio
              onClick={() => {
                setFadeIn(false); // Trigger fade-out
                setTimeout(() => {
                  setCurrentIndex(index);
                  setFadeIn(true); // Trigger fade-in after image changes
                }, 300); // Match this delay to the fade-out duration
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FurniturePage;
