import AboutUs from "./components/PageSections/AboutUs";
import ContactDetails from "./components/PageSections/ContactDetails";
import Furniture from "./components/PageSections/Furniture";
import Projects from "./components/PageSections/Projects";
import ShopNow from "./components/PageSections/ShopNow";

export default function Home() {
  return (
    <div>
      <div>
        <AboutUs />
        <Projects />
        <ShopNow />
        <Furniture />
        <ContactDetails />
      </div>
    </div>
  );
}
