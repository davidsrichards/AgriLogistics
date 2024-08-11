import React from "react";
import GlobalNavigation from "../GlobalComponent/GlobalNavigationBar";
import Scroller from "../GlobalComponent/Scroller/Scroller";
import NavigationItems from "../NavigationBar/NavigationItems";
import ContactCmpt from "./ContactCmpt/ContactCmpt";

const ContactComponent = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <ContactCmpt />
    </div>
  );
});
export default ContactComponent;
