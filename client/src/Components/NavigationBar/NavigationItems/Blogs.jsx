import { Link, NavLink } from "react-router-dom";

function Blogs() {
  return (
    <>
      <div className="nav-a">
        <NavLink to={"/blogs"}>Blogs</NavLink>
      </div>
    </>
  );
}

export default Blogs;
