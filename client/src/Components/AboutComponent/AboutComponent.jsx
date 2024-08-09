import Footer from "../Footer/Footer";
import FirstComponent from "./FirstComponent/FirstComponent";
import FourthComponent from "./FourthComponent/FourthComponent";
import SecondComponent from "./SecondComponent/SecondComponent";
import ThirdComponent from "./ThirdComponent/ThirdComponent";

function AboutComponent() {
  return (
    <div className="about mt-12">
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
      <Footer />
    </div>
  );
}

export default AboutComponent;
