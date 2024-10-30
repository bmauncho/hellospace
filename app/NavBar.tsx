"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import useFonts from "./hooks/useFonts";
import NavBarBtn from "./components/Buttons/NavBarBtn";

const NavBar = () => {
  const currentPath = usePathname();
  const { libreBaskervilleNormal, poppins } = useFonts();
  const links = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Shop", href: "/shop" },
    { label: "Furniture", href: "/furniture" },
    { label: "BOOK A CONSULTATION", href: "/contactUs" },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check if the screen is mobile-sized
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1080);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="sticky top-0 w-full z-150">
      <div className="absolute top-0 left-0 w-full">
        <div
          className={classNames(
            "transition-all duration-500 ease-in-out bg-white",
            {
              "bg-opacity-0":
                (isMobile && !scrolled && !isMobileMenuOpen) ||
                (!isMobile && !scrolled),
              "bg-opacity-100":
                (isMobileMenuOpen && isMobile && isMobileMenuOpen) ||
                (!isMobile && scrolled),
            }
          )}
        >
          <div className="flex justify-between items-center px-4 py-2 custom-740:px-8 custom-915:px-12 custom-932:px-12 lg:px-12  xl:px-24">
            {/* Logo on the left */}
            <div className="flex items-center">
              <Link href="/" className="mr-auto">
                <Image
                  src="/images/logo.png"
                  alt="Thelogo"
                  width={125}
                  height={125}
                  className={classNames({
                    "w-16 h-16 xl:w-64 xl:h-64 2xl:w-125 2xl:w-auto 2xl:h-auto":
                      !isMobileMenuOpen,
                    "w-10 h-10 lg:w-auto lg:h-auto ": isMobileMenuOpen,
                  })} // Responsive logo size for mobile and desktop
                />
              </Link>
            </div>

            {/* Hamburger icon for mobile */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className={`focus:outline-none ${
                  isMobileMenuOpen
                    ? "text-zinc-600"
                    : scrolled
                    ? "text-zinc-600"
                    : "text-white"
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isMobileMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>

            {/* Navigation links */}
            <nav
              className={classNames(
                "lg:flex items-center justify-center",
                {
                  hidden: !isMobileMenuOpen, // Hide links on mobile when menu is closed
                  block: isMobileMenuOpen, // Show links on mobile when menu is open
                },
                "lg:block" // Always show on larger screens
              )}
            >
              <ul className="flex flex-col lg:flex-row lg:space-x-16 items-center space-y-4 lg:space-y-0 text-center z-150">
                {links.map((link) =>
                  link.label === "BOOK A CONSULTATION" ? (
                    <Link key={link.href} href={link.href}>
                      <NavBarBtn isMobileMenuOpen={isMobileMenuOpen}>
                        <i
                          className={classNames(
                            libreBaskervilleNormal.className,
                            {
                              "font-bold text-lg": !isMobileMenuOpen,
                              "font-bold text-xs": isMobileMenuOpen,
                            }
                          )}
                        >
                          {link.label}
                        </i>
                      </NavBarBtn>
                    </Link>
                  ) : (
                    <Link
                      key={link.href}
                      className={classNames(poppins.className, {
                        "text-[rgb(190,123,62)]":
                          scrolled && link.href === currentPath,
                        "text-zinc-600": scrolled && link.href !== currentPath,
                        "text-[rgb(190,123,60)]":
                          !scrolled && link.href === currentPath,
                        "text-zinc-200": !scrolled && link.href !== currentPath,
                        "hover:text-[rgb(190,123,62)] transition-colors ease-out duration-400":
                          true,
                        "text-lg": !isMobileMenuOpen,
                        "text-xs": isMobileMenuOpen,
                      })}
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
