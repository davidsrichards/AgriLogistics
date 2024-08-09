import { Link } from "react-router-dom";

function FirstComponent() {
  return (
    <div className="text-[1rem] font-semibold flex flex-col gap-4">
      <h1 className="text-[2.3rem] font-bold">Contacts</h1>
      <div>
        <p>Address: 22 St. Black Road Raleigh</p>
        <p>We are open: Mon - Sun, 24/7</p>
        <p>Phone: +1 234 567 7891</p>
        <p>
          E-mail:{" "}
          <Link to={"#"} className="text-primary font-bold">
            farmland@demolink.org
          </Link>
        </p>
      </div>
    </div>
  );
}

export default FirstComponent;
