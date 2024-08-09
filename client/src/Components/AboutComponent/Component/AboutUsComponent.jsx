import GlobalNavigation from "../../GlobalComponent/GlobalNavigationBar";
import NavigationBar from "../../NavigationBar/NavigationBar";
import NavigationItems from "../../NavigationBar/NavigationItems";
import AboutComponent from "../AboutComponent";

function AboutUsComponent() {
  return (
    <div>
      <AboutComponent />
      <GlobalNavigation
        backgroundColor={"#1f1f26"}
        items={<NavigationItems />}
        position={"fixed"}
      />
    </div>
  );
}

export default AboutUsComponent;
/* "#1f1f26" */
