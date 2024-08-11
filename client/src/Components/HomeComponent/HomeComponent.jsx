import FirstCard from "./FirstCard/FirstCard";
import FourthCard from "./FourthCard/FourthCard";
import SecondCard from "./SecondCard/SecondCard";
import ThirdCard from "./ThirdCard/ThirdCard";
import React, { useEffect } from "react";

const HomeComponent = React.forwardRef((props, ref) => {
  return (
    <div className="home w-full py-24" ref={ref}>
      <FirstCard />
      <SecondCard />
      <ThirdCard />
      <FourthCard />
    </div>
  );
});

export default HomeComponent;
