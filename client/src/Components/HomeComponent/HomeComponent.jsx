import Footer from "../Footer/Footer";
import FirstCard from "./FirstCard/FirstCard";
import FourthCard from "./FourthCard/FourthCard";
import SecondCard from "./SecondCard/SecondCard";
import ThirdCard from "./ThirdCard/ThirdCard";

function HomeComponent() {
  return (
    <div className="home w-full">
      <FirstCard />
      <SecondCard />
      <ThirdCard />
      <FourthCard />
      <Footer />
    </div>
  );
}

export default HomeComponent;
