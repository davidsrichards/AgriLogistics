import GlobalNavigation from "../GlobalComponent/GlobalNavigationBar";
import Scroller from "../GlobalComponent/Scroller/Scroller";
import NavigationItems from "../NavigationBar/NavigationItems";
import PricingCmpt from "./PricingCmpt/PricingCmpt";

function PricingComponent() {
  return (
    <div>
      <GlobalNavigation
        backgroundColor={"#1f1f26"}
        items={<NavigationItems />}
        position={"fixed"}
      />
      <PricingCmpt />
      <Scroller />
    </div>
  );
}

export default PricingComponent;
