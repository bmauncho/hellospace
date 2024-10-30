import React, { PropsWithChildren } from "react";
import Image from "next/image"; // Import the Next.js Image component
import classNames from "classnames";
import useFonts from "@/app/hooks/useFonts";

interface CardProps {
  imageSrc: string;
  imageAlt: string; // Added alt for better accessibility
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<PropsWithChildren<CardProps>> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  link,
  children,
}) => {
  const { poppins } = useFonts();
  return (
    <div className="max-w-sm bg-white rounded-lg shadow dark:bg-gray-800">
      <a href={link}>
        <Image
          className="rounded-t-lg"
          src={imageSrc}
          alt={imageAlt}
          width={400} // You can adjust width and height based on design
          height={250}
          layout="responsive" // Ensures the image maintains its aspect ratio
          objectFit="cover" // Ensures the image fits nicely within its container
        />
      </a>
      <div className="p-5">
        <a href={link}>
          <h5
            className={classNames(
              poppins.className,
              "mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
            )}
          >
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        {children}
      </div>
    </div>
  );
};

export default Card;
