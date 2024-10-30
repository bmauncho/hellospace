"use client";
import classNames from "classnames";
import React, { PropsWithChildren } from "react";

interface NavBarBtnProps extends PropsWithChildren {
  isMobileMenuOpen: boolean;
}

const NavBarBtn = ({ children, isMobileMenuOpen }: NavBarBtnProps) => {
  return (
    <button
      className={classNames(
        " rounded-lg border-2 border-solid border-[rgb(190,123,62)] text-[rgb(190,123,62)]  transition-colors duration-300 ",
        {
          "h-12 w-72 bg-transparent hover:bg-[rgb(190,123,62)] hover:text-white":
            !isMobileMenuOpen,
          "h-9 w-48 bg-[rgb(190,123,62)] text-white": isMobileMenuOpen, // Example of changing hover style when mobile menu is open
        }
      )}
    >
      {children}
    </button>
  );
};

export default NavBarBtn;
