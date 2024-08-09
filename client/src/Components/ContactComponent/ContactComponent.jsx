import GlobalNavigation from "../GlobalComponent/GlobalNavigationBar";
import Scroller from "../GlobalComponent/Scroller/Scroller";
import NavigationItems from "../NavigationBar/NavigationItems";
import ContactCmpt from "./ContactCmpt/ContactCmpt";

function ContactComponent() {
  return (
    <div>
      <GlobalNavigation
        backgroundColor={"#1f1f26"}
        items={<NavigationItems />}
        position={"fixed"}
      />
      <ContactCmpt />
      <Scroller />
    </div>
  );
}

export default ContactComponent;
