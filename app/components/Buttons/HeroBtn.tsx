"use client";
import classNames from "classnames";
import React, { PropsWithChildren } from "react";

// Load font from Google

// Define default button styles
const buttonStyles = "h-12 w-24 ";

const HeroBtn = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <button className={classNames(buttonStyles)}>{children}</button>
    </div>
  );
};

export default HeroBtn;
