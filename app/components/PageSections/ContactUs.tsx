import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { PiMapPinLineFill } from "react-icons/pi";
import classNames from "classnames";
import ContactUsForm from "./ContactUsForm";
import useFonts from "@/app/hooks/useFonts";

interface ContactUsDetails {
  id: number;
  icon: React.ReactElement;
  title: string;
  text: string;
}

const ContactUs = () => {
  const { poppins, baskervville } = useFonts();
  const contactUsDetails: ContactUsDetails[] = [
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

  const getHref = (detail: ContactUsDetails) => {
    if (detail.id === 1) {
      return `mailto:${detail.text}`;
    } else if (detail.id === 2) {
      return `tel:${detail.text}`;
    } else {
      return undefined; // No href for Location (id 3)
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start min-h-screen mb-0">
      <div className="w-full md:w-3/4 lg:w-1/2 p-5 lg:p-10 flex flex-col justify-start md:justify-centre md:items-center">
        {/* Contact Details Section */}
        <h1
          className={classNames(
            baskervville.className,
            "text-3xl lg:text-4xl contact-title mb-8 text-left text-gray-600"
          )}
        >
          Contact Details
        </h1>
        <div
          className={classNames(
            poppins.className,
            "lg:mb-12 flex flex-col space-y-8 lg:space-y-12"
          )}
        >
          {contactUsDetails.map((detail) => (
            <div key={detail.id} className="flex flex-row items-center">
              <div className="mr-4 bg-[#e6cac4] h-12 w-12 rounded-full flex justify-center items-center group transition-all delay-150 hover:scale-110">
                {/* Only wrap in <a> if there's an href */}
                {getHref(detail) ? (
                  <a href={getHref(detail)} className="text-zinc-600">
                    {detail.icon}
                  </a>
                ) : (
                  <span className="text-zinc-600">{detail.icon}</span>
                )}
              </div>
              <div>
                <h2 className="text-base lg:text-lg tracking-[.25rem] text-zinc-600">
                  {detail.title}
                </h2>
                <p className="text-sm lg:text-base text-gray-400">
                  {detail.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full lg:w-1/2 p-5 lg:p-10">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactUs;
