"use client";
import classNames from "classnames";
import React, { PropsWithChildren } from "react";
const buttonStyles = "h-12 w-24 ";
const ShopNowBtn = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <button className={classNames(buttonStyles)}>{children}</button>
    </div>
  );
};

export default ShopNowBtn;
