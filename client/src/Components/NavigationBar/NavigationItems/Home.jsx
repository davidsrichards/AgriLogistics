import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { startSliceAction } from "../../../Redux/Features/Slice";

function Home() {
  const dispatch = useDispatch();
  const { control } = useSelector((state) => state.navigation);

  return (
    <>
      <div className={`nav-a ${control === "home" ? "activ" : ""}`}>
        <NavLink
          to={"#home"}
          onClick={() => dispatch(startSliceAction("home"))}
        >
          Home
        </NavLink>
      </div>
    </>
  );
}

export default Home;
