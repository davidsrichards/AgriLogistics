import { Link } from "react-router-dom";

function FirstComponent() {
  return (
    <div className="flex flex-col gap-4  font-normal contact justify-center items-center p-2">
      <div className="flex flex-col gap-6">
        <h1 className="text-[#52514c] text-[45px] ">Contacts</h1>
        <h2 className="text-[22px] text-[#52514c]">
          Have questions or need assistance? Reach out to our dedicated support
          team anytime.
        </h2>
        <p>Address: 123 Agri Lane, Farmville, USA</p>
        <p>We are open: Mon - Sun, 24/7</p>
        <p>Phone: (123) 456-7890</p>
        <p>
          E-mail:&nbsp;
          <Link to={"#"} className="text-primary font-bold">
            support@agrilogistics.com
          </Link>
        </p>
        <p>Stay Connected</p>
      </div>
    </div>
  );
}

export default FirstComponent;
