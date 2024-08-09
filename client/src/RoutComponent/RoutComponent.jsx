import Component from "../Components/Component";
import { Routes, Route } from "react-router-dom";
import AboutUsComponent from "../Components/AboutComponent/Component/AboutUsComponent";
import ProduceComponents from "../Components/ProduceComponent/ProduceComponent";
import PricingComponent from "../Components/PricingComponent/PricingComponent";

function RoutComponent() {
  return (
    <Routes>
      <Route path="/" element={<Component />} />
      <Route path="/about" element={<AboutUsComponent />} />
      <Route path="/produce" element={<ProduceComponents />} />
      <Route path="/pricing" element={<PricingComponent />} />
    </Routes>
  );
}

export default RoutComponent;
