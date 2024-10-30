"use client";
import useFonts from "@/app/hooks/useFonts";
import classNames from "classnames";
import React, { PropsWithChildren } from "react";

const CardBtn = ({ children }: PropsWithChildren) => {
  const { libreBaskervilleBoldItalic } = useFonts();
  return (
    <div>
      <button>
        <i
          className={classNames(
            libreBaskervilleBoldItalic.className,
            "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all delay-150 hover:scale-110"
          )}
        >
          Read more
          {children}
        </i>
      </button>
    </div>
  );
};

export default CardBtn;
