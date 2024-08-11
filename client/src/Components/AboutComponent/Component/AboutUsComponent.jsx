import GlobalNavigation from "../../GlobalComponent/GlobalNavigationBar";
import Scroller from "../../GlobalComponent/Scroller/Scroller";
import NavigationBar from "../../NavigationBar/NavigationBar";
import NavigationItems from "../../NavigationBar/NavigationItems";
import AboutComponent from "../AboutComponent";
import React from "react";

const AboutUsComponent = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <AboutComponent />
    </div>
  );
});

export default AboutUsComponent;
/* "#1f1f26" */
