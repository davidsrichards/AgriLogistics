import GlobalNavigation from "../GlobalComponent/GlobalNavigationBar";
import NavigationItems from "../NavigationBar/NavigationItems";
import PricingCmpt from "./PricingCmpt/PricingCmpt";

function PricingComponent() {
  return (
    <div>
      <GlobalNavigation
        backgroundColor={"#1f1f26"}
        items={<NavigationItems />}
      />
      <PricingCmpt />
    </div>
  );
}

export default PricingComponent;
