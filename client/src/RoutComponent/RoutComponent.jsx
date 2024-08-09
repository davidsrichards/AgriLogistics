import Component from "../Components/Component";
import { Routes, Route } from "react-router-dom";
import AboutUsComponent from "../Components/AboutComponent/Component/AboutUsComponent";
import ProduceComponents from "../Components/ProduceComponent/ProduceComponent";
import PricingComponent from "../Components/PricingComponent/PricingComponent";
import BlogsComponent from "../Components/BlogsComponent/BlogsComponent";
import ContactComponent from "../Components/ContactComponent/ContactComponent";
import Scroller from "../Components/GlobalComponent/Scroller/Scroller";

function RoutComponent() {
  return (
    <Routes>
      <Route path="/" element={<Component />} />
      <Route path="/about" element={<AboutUsComponent />} />
      <Route path="/produce" element={<ProduceComponents />} />
      <Route path="/pricing" element={<PricingComponent />} />
      <Route path="/blogs" element={<BlogsComponent />} />
      <Route path="/contact" element={<ContactComponent />} />
    </Routes>
  );
}

export default RoutComponent;
