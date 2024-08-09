import About from "./NavigationItems/AboutUs";
import Blogs from "./NavigationItems/Blogs";
import Contact from "./NavigationItems/ContactUs";
import Home from "./NavigationItems/Home";
import Pricing from "./NavigationItems/Pricing";
import Produce from "./NavigationItems/Produce";

function NavigationItems() {
  return (
    <>
      <div className="flex items-center">
        <Home />
        <About />
        <Produce />
        <Pricing />
        <Blogs />
        <Contact />
      </div>
    </>
  );
}

export default NavigationItems;
