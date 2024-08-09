import { Link, NavLink } from "react-router-dom";

function About() {
  return (
    <>
      <div className="nav-a">
        <NavLink to={"/about"}>About Us</NavLink>
      </div>
    </>
  );
}

export default About;
