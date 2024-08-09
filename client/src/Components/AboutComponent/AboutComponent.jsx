import Footer from "../Footer/Footer";
import FirstComponent from "./FirstComponent/FirstComponent";
import FourthComponent from "./FourthComponent/FourthComponent";
import SecondComponent from "./SecondComponent/SecondComponent";
import ThirdComponent from "./ThirdComponent/ThirdComponent";

function AboutComponent() {
  return (
    <div className="about">
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
      <Footer />
    </div>
  );
}

export default AboutComponent;
