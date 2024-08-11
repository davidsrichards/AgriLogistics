// imorting modules
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer/Footer";
import NavigationBar from "./NavigationBar/NavigationBar";
import HomeComponent from "./HomeComponent/HomeComponent";
import Scroller from "./GlobalComponent/Scroller/Scroller";
import AboutUsComponent from "./AboutComponent/Component/AboutUsComponent";
import ProduceComponents from "./ProduceComponent/ProduceComponent";
import React, { useEffect, useRef } from "react";
import Contact from "./NavigationBar/NavigationItems/ContactUs";
import ContactComponent from "./ContactComponent/ContactComponent";
import Services from "./Services/Services";
import { useDispatch, useSelector } from "react-redux";
import { startSliceAction } from "../Redux/Features/Slice";
import CustomersReviews from "./CustomerReviews/CustomersReviews";

function Component() {
  const disatch = useDispatch();
  const HomeRef = React.createRef(null);
  const AboutRef = React.createRef(null);
  const ProduceRef = React.createRef(null);
  const ContactRef = React.createRef(null);
  const ServicesRef = React.createRef(null);
  const CuestomerRevRef = React.createRef(null);
  const scrollToSection = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const location = useLocation();

  useEffect(() => {
    const sectionId = location.hash.replace("#", "");
    if (sectionId) {
      const sectionRef = {
        home: HomeRef,
        about: AboutRef,
        produce: ProduceRef,
        contact: ContactRef,
        services: ServicesRef,
        reviews: CuestomerRevRef,
      }[sectionId];
      scrollToSection(sectionRef);
    } else {
      disatch(startSliceAction("home"));
    }
  }, [location]);

  return (
    <div>
      <NavigationBar />
      <HomeComponent ref={HomeRef} />
      <AboutUsComponent ref={AboutRef} />
      <ProduceComponents ref={ProduceRef} />
      <CustomersReviews ref={CuestomerRevRef} />
      <ContactComponent ref={ContactRef} />
      <Services ref={ServicesRef} />

      <Scroller />
      <Footer />
    </div>
  );
}

export default Component;
