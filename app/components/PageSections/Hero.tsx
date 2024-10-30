import React from "react";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import usePageName from "../../hooks/usePageName";
import Link from "next/link";
import useFonts from "@/app/hooks/useFonts";
import HeroBtn from "../Buttons/HeroBtn";

const heroContainerClass_Main =
  "flex-col py-20 md:py-60 mb-2 z-[1] space-y-6 py-24"; // Adjust padding for responsiveness
const heroContainerClass =
  "flex-col space-y-12 px-4 sm:px-16 md:px-32 lg:px-64 py-2 max-sm:py-32 md:py-64 lg:py-24 xl:py-48  mb-12 z-[1]"; // Adjust padding for responsiveness
const headingClass =
  "space-y-6 mt-12 text-4xl md:text-4xl lg:text-6xl leading-10 text-center text-[rgb(190,123,62)] z-[1]"; // Responsive text sizes
const headingClass_2 =
  "space-y-6   max-sm:mt-24 text-4xl md:text-5xl lg:text-7xl text-center text-white z-[1]"; // Responsive text sizes
const paragraphClass =
  "space-y-6 mt-12 text-center text-balance text-white text-sm sm:text-base md:text-base z-[1]"; // Responsive text sizes
const buttonClass =
  "mt-12 font-bold h-10 w-20 md:h-12 md:w-24 rounded-lg text-white bg-[rgb(190,123,62)] transition-all delay-150 hover:bg-[rgb(155,106,61)] z-[1] hover:scale-125";

const Hero = () => {
  const currentPath = usePathname();
  const pageName = usePageName();
  const {
    libreBaskervilleItalic,
    libreBaskervilleBoldItalic,
    libreBaskervilleBold,
    libreBaskervilleNormal,
  } = useFonts();
  // Only return content if the path is the homepage
  if (currentPath !== "/") {
    return (
      <div className={heroContainerClass_Main}>
        <div className="flex flex-col justify-center items-center">
          <h1
            className={classNames(
              headingClass_2,
              libreBaskervilleBold.className
            )}
          >
            {pageName}
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className={heroContainerClass}>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center">
          <p
            className={classNames(
              paragraphClass,
              libreBaskervilleNormal.className
            )}
          >
            Casual & Everyday
          </p>
        </div>
        <div className="z-[1]">
          <h1
            className={classNames(
              headingClass,
              libreBaskervilleBoldItalic.className
            )}
          >
            Effortlessly blend comfort <br />& style!
          </h1>
          <p
            className={classNames(
              paragraphClass,
              libreBaskervilleNormal.className
            )}
          >
            Effortlessly blend comfort and style with our Casual & Everyday
            Collection—cozy textures, versatile designs, and laid-back elegance,
            perfect for your everyday living spaces.
          </p>
        </div>
        <div
          className={classNames(
            libreBaskervilleItalic.className,
            buttonClass,
            "flex justify-center items-center text-xs lg:text-base"
          )}
        >
          <Link href="/shop">
            <HeroBtn>
              <i>Shop Now</i>
            </HeroBtn>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
