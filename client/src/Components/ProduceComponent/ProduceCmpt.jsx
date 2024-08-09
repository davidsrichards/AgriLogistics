import Footer from "../Footer/Footer";
import FirstComponent from "./FirstComponent/FirstComponent";
import SecondComponent from "./SecondComponent/SecondComponent";
import ThirdComponent from "./ThirdComponent/ThirdComponent";

function ProduceCmpt() {
  return (
    <div>
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <Footer />
    </div>
  );
}

export default ProduceCmpt;
