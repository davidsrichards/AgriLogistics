import { Link, NavLink } from "react-router-dom";

function Pricing() {
  return (
    <>
      <div className="nav-a">
        <NavLink to={"/pricing"}>Pricing</NavLink>
      </div>
    </>
  );
}

export default Pricing;
