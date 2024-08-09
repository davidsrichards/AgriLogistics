import FirstComponent from "./FirstComponent/FirstComponent";
import SecondComponent from "./SecondComponent/SecondComponent";

function ContactCmpt() {
  return (
    <div className="mt-[8rem] border-4 p-12">
      <FirstComponent />
      <SecondComponent />
    </div>
  );
}

export default ContactCmpt;
