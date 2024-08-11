import { IoMenu } from "react-icons/io5";
import NavigationItems from "./NavigationItems";
import GlobalNavigation from "../GlobalComponent/GlobalNavigationBar";

function NavigationBar() {
  return (
    <GlobalNavigation
      backgroundColor={"#1f1f26"}
      items={<NavigationItems />}
      position={"fixed"}
    />
  );
}

export default NavigationBar;
