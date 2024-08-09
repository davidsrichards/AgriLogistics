import { IoMenu } from "react-icons/io5";
import NavigationItems from "./NavigationItems";
import GlobalNavigation from "../GlobalComponent/GlobalNavigationBar";

function NavigationBar() {
  return (
    <GlobalNavigation
      backgroundColor={""}
      items={<NavigationItems />}
      position={"absolute"}
    />
  );
}

export default NavigationBar;
