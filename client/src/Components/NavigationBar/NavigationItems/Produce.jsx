import { Link, NavLink } from "react-router-dom";

function Produce() {
  return (
    <>
      <div className="nav-a">
        <NavLink to={"/produce"}>Produce</NavLink>
      </div>
    </>
  );
}

export default Produce;
