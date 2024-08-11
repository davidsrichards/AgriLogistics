import { useRef } from "react";
import About from "./NavigationItems/AboutUs";
import Blogs from "./NavigationItems/Blogs";
import Contact from "./NavigationItems/ContactUs";
import Home from "./NavigationItems/Home";
import Pricing from "./NavigationItems/Pricing";
import Produce from "./NavigationItems/Produce";
import { useLocation } from "react-router-dom";

function NavigationItems() {
  return (
    <>
      <div className="flex items-center gap-2">
        <Home />
        <About />
        <Produce />
        <Contact />
        {/*  <Pricing /> */}
        {/* <Pricing />
        <Blogs />
        <Contact /> */}
      </div>
    </>
  );
}

export default NavigationItems;
