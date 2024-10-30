import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { PiMapPinLineFill } from "react-icons/pi";
import classNames from "classnames";
import useFonts from "@/app/hooks/useFonts";

interface ContactDetail {
  id: number;
  icon: React.ReactElement;
  title: string;
  text: string;
}

const containerClass =
  "flex flex-col items-center justify-center min-h-screen bg-[#e6cac4] p-4 sm:p-8"; // Added padding for small screens
const headerClass = "text-3xl sm:text-4xl text-black mb-8 sm:mb-12"; // Adjusted font size for smaller screens
const contactDetailsClass =
  "flex flex-col space-y-8 sm:flex-row sm:space-x-8 sm:space-y-0 md:flex-col md:space-x-0 md:space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8"; // Stack vertically on small screens
const contactItemClass =
  "bg-white p-6 sm:p-8 rounded-lg shadow-md flex flex-col items-center transition-all delay-150 hover:scale-105"; // Reduced padding for smaller screens
const contactItemContentClass = "flex flex-col items-center space-y-4";
const contactItemIconClass = "text-3xl sm:text-4xl mb-2 text-zinc-500"; // Smaller icons on small screens
const contactItemTittle =
  "text-lg sm:text-xl text-[rgba(190,124,62,1)] mb-2 text-center w-64";
const contactItemLine = "border-gray-300 mb-2 w-12";
const contactItemText =
  "text-[rgba(190,124,62,1)] text-center hover:text-zinc-600";

const ContactDetails = () => {
  const { baskervville } = useFonts();
  const contactDetails: ContactDetail[] = [
    {
      id: 1,
      icon: <MdOutlineMailOutline />,
      title: "Email",
      text: "spacehello43@gmail.com",
    },
    {
      id: 2,
      icon: <FaPhoneAlt />,
      title: "Phone",
      text: "+254 745 270 260",
    },
    {
      id: 3,
      icon: <PiMapPinLineFill />,
      title: "Location",
      text: "Nairobi, Kenya",
    },
  ];

  return (
    <div className={containerClass}>
      <h1 className={classNames(baskervville.className, headerClass)}>
        Contact Details
      </h1>
      <div className={contactDetailsClass}>
        {contactDetails.map((detail) => {
          let textBeforeAt = "";
          let textAfterAt = "";

          // Split the text if the id is 1
          if (detail.id === 1) {
            const [beforeAt, afterAt] = detail.text.split("@");
            textBeforeAt = beforeAt;
            textAfterAt = `@${afterAt}`;
          }

          return (
            <div
              key={detail.id}
              className={classNames(baskervville.className, contactItemClass)}
            >
              <div className={contactItemContentClass}>
                <i
                  className={classNames(
                    contactItemIconClass,
                    "flex justify-center"
                  )}
                >
                  {detail.icon}
                </i>
                <h2
                  className={classNames(
                    baskervville.className,
                    contactItemTittle
                  )}
                >
                  {detail.title}
                </h2>
                <hr className={contactItemLine} />
                <a
                  href={
                    detail.id === 1
                      ? `mailto:${detail.text}`
                      : detail.id === 2
                      ? `tel:${detail.text}`
                      : undefined
                  }
                  className={classNames(baskervville.className, {
                    [contactItemText]: detail.id !== 3,
                    "text-zinc-600": detail.id === 3,
                  })}
                >
                  {detail.id === 1 ? (
                    <>
                      <span className="text-zinc-600">{textBeforeAt}</span>
                      <span>{textAfterAt}</span>
                    </>
                  ) : (
                    detail.text
                  )}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactDetails;
