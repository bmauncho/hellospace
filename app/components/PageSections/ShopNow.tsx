import classNames from "classnames";
import Link from "next/link";
import React from "react";
import ShopNowBtn from "../Buttons/ShopNowBtn";
import useFonts from "@/app/hooks/useFonts";

const buttonClass =
  "mt-6 md:mt-12 font-bold h-10 w-24 md:h-12 md:w-28 rounded-lg text-center text-white bg-[rgb(190,123,62)] transition-all delay-150 hover:bg-[rgb(155,106,61)] z-[1] hover:scale-125";

const ShopNow = () => {
  const { libreBaskervilleBold, libreBaskervilleNormal } = useFonts();
  const BackgroundImage = "/images/ShopNow_Bg.png";
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="relative bg-cover bg-center bg-no-repeat min-h-screen w-full"
        style={{
          backgroundImage: `url('${BackgroundImage}')`,
        }}
      >
        <div className="flex justify-start items-start w-full h-full">
          <div className="flex flex-col justify-center items-start space-y-6 p-4 md:p-6 lg:p-12 ml-4 sm:ml-8 lg:ml-64 min-h-screen">
            <div>
              <i
                className={classNames(
                  libreBaskervilleNormal.className,
                  "text-lg sm:text-xl lg:text-xl text-left text-white"
                )}
              >
                Home & Office
              </i>
            </div>
            <div>
              <h1
                className={classNames(
                  libreBaskervilleBold.className,
                  "text-2xl sm:text-4xl lg:text-6xl font-normal text-left text-white"
                )}
              >
                Professional
                <br /> Pinstripe
                <br /> Timeless Collections
              </h1>
            </div>
            <div>
              <i
                className={classNames(
                  libreBaskervilleNormal.className,
                  "text-sm sm:text-lg lg:text-xl text-left text-white"
                )}
              >
                Elevate your interiors with our Professional
                <br /> Pinstripe Collection, where tailored <br />
                sophistication meets modern design, bringing
                <br /> a polished, confident ambiance to your workspace.
              </i>
            </div>
            <div className="flex">
              <div
                className={classNames(
                  libreBaskervilleNormal.className,
                  buttonClass,
                  "flex justify-center items-center text-xs lg:text-base"
                )}
              >
                <Link href={"/shop"}>
                  <ShopNowBtn>
                    <i>Shop Now</i>
                  </ShopNowBtn>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopNow;
