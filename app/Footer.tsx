"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { IoLogoTwitter } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import { BsInstagram } from "react-icons/bs";
import { BiLogoTiktok } from "react-icons/bi";
import classNames from "classnames";
import useFonts from "./hooks/useFonts";

const containerClass = "flex flex-col space-y-12 px-4 md:px-32 lg:px-64";
const logoIconClass = "flex flex-col justify-center items-center";
const iconClass =
  "h-10 w-10 md:h-12 md:w-12 bg-zinc-300 rounded-full flex justify-center items-center group hover:bg-[rgba(190,124,62,0.45)] transition-all delay-150 duration-300 hover:scale-125";
const icon =
  "text-lg md:text-xl text-[rgba(190,124,62,1)] group-hover:text-white transition-colors duration-300";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const { poppins } = useFonts();
  return (
    <div className="p-5 bg-white">
      <div className={containerClass}>
        <div className={logoIconClass}>
          <div className="transition-all delay-150 hover:scale-110">
            <button onClick={scrollToTop}>
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  width={100} // Responsive adjustment for logo size
                  height={100} // Responsive adjustment for logo size
                  alt="The logo"
                  className="w-20 h-20 md:w-32 md:h-32"
                />
              </Link>
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-8 md:mt-12 ">
          <div className="flex flex-row space-x-6 md:space-x-8 mt-8 mb-8 md:mt-12 md:mb-12">
            <div className={iconClass}>
              <button>
                <Link href="">
                  <IoLogoTwitter className={icon} />
                </Link>
              </button>
            </div>
            <div className={iconClass}>
              <button>
                <Link href="">
                  <TiSocialFacebook className={icon} />
                </Link>
              </button>
            </div>
            <div className={iconClass}>
              <button>
                <Link href="">
                  <BsInstagram className={icon} />
                </Link>
              </button>
            </div>
            <div className={iconClass}>
              <button>
                <Link href="">
                  <BiLogoTiktok className={icon} />
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div
          className={classNames(
            poppins.className,
            "flex justify-center items-center border-t-2 border-[rgba(190,124,62,0.25)] mt-8 md:mt-12 "
          )}
        >
          <p className="flex justify-center items-center mt-2 md:mt-3 text-[rgba(190,124,62,1)] text-xs  md:text-xs">
            Copyright ©
            <span className="px-1 justify-center items-center text-zinc-500 transition-all hover:text-[rgba(190,124,62,1)]">
              HelloSpace.
            </span>
            All rights reserved...
          </p>
          <div className="flex justify-center transition-all delay-150 hover:scale-110">
            <Link href="https://bmauncho.github.io/BradleyMauncho.github.io/">
              <button className="mt-2 md:mt-3 text-base md:text-lg">🚀</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
