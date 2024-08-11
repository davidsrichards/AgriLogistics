import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { startSliceAction } from "../../../Redux/Features/Slice";

function About() {
  const dispatch = useDispatch();
  const { control } = useSelector((state) => state.navigation);
  return (
    <>
      <div
        className={`nav-a ${
          control === "about" ? "activ" : ""
        } relative group/item`}
      >
        <NavLink
          to={"#about"}
          onClick={() => dispatch(startSliceAction("about"))}
        >
          About Us
        </NavLink>
        <ul
          role="list"
          className="group/item
           absolute top-[2.8rem] -right-6 bg-gray-400 text-white
         p-8 flex flex-col gap-4 rounded-md  invisible group-hover/item:opacity-50 group-hover/item:visible"
        >
          <Link
            to={"#services"}
            className="hover:text-secondary cursor-pointer hover:bg-gray-600 p-1 rounded-md"
          >
            Our Services
          </Link>
          <Link
            to={"#reviews"}
            className="hover:text-secondary cursor-pointer hover:bg-gray-600 p-1 rounded-md"
          >
            Customers
          </Link>
        </ul>
      </div>
    </>
  );
}

export default About;
