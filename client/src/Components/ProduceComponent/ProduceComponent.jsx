import React from "react";
import GlobalNavigation from "../GlobalComponent/GlobalNavigationBar";
import Scroller from "../GlobalComponent/Scroller/Scroller";
import NavigationItems from "../NavigationBar/NavigationItems";
import ProduceCmpt from "./ProduceCmpt";

const ProduceComponents = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <ProduceCmpt />
    </div>
  );
});

export default ProduceComponents;
