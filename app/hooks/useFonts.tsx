// src/hooks/useFonts.js
import localFont from "next/font/local";
import { Poppins, Baskervville } from "next/font/google";

// Load Libre Baskerville fonts in TTF format

const libreBaskervilleNormal = localFont({
  src: "../fonts/LibreBaskerville-Regular.ttf", // Adjusted path
  variable: "--font-libre-baskerville-normal",
  weight: "400",
  style: "normal",
});

const libreBaskervilleBold = localFont({
  src: "../fonts/LibreBaskerville-Bold.ttf", // Adjusted path
  variable: "--font-libre-baskerville-bold",
  weight: "700",
  style: "normal",
});

const libreBaskervilleItalic = localFont({
  src: "../fonts/LibreBaskerville-Italic.ttf", // Adjusted path
  variable: "--font-libre-baskerville-italic",
  weight: "400",
  style: "italic",
});

const libreBaskervilleBoldItalic = localFont({
  src: "../fonts/LibreBaskerville-Bold.ttf", // Adjusted path
  variable: "--font-libre-baskerville-bold",
  weight: "700",
  style: "italic",
});

// Load Google Fonts
const poppins = Poppins({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const baskervville = Baskervville({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

// Custom hook to return font configurations
const useFonts = () => ({
  libreBaskervilleItalic,
  libreBaskervilleBoldItalic,
  libreBaskervilleNormal,
  libreBaskervilleBold,
  poppins,
  baskervville,
});

export default useFonts;
