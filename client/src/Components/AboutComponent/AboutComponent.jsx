import Footer from "../Footer/Footer";
import FirstComponent from "./FirstComponent/FirstComponent";
import FourthComponent from "./FourthComponent/FourthComponent";
import SecondComponent from "./SecondComponent/SecondComponent";
import ThirdComponent from "./ThirdComponent/ThirdComponent";

function AboutComponent({ ref }) {
  return (
    <div className="about mt-12" ref={ref}>
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
    </div>
  );
}

export default AboutComponent;
