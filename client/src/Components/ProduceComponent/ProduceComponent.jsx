import GlobalNavigation from "../GlobalComponent/GlobalNavigationBar";
import Scroller from "../GlobalComponent/Scroller/Scroller";
import NavigationItems from "../NavigationBar/NavigationItems";
import ProduceCmpt from "./ProduceCmpt";

function ProduceComponents() {
  return (
    <div>
      <GlobalNavigation
        backgroundColor={"#1f1f26"}
        items={<NavigationItems />}
        position={"fixed"}
      />
      <ProduceCmpt />
      <Scroller />
    </div>
  );
}

export default ProduceComponents;
