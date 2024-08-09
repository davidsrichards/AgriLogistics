import { Link, NavLink } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="nav-a">
        <NavLink to={"/contact"}>Contact Us</NavLink>
      </div>
    </>
  );
}

export default Contact;
