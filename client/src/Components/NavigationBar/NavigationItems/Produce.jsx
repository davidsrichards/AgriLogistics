import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { startSliceAction } from "../../../Redux/Features/Slice";

function Produce() {
  const dispatch = useDispatch();
  const { control } = useSelector((state) => state.navigation);
  return (
    <>
      <div className={`nav-a ${control === "produce" ? "activ" : ""}`}>
        <NavLink
          to={"#produce"}
          onClick={() => dispatch(startSliceAction("produce"))}
        >
          Produce
        </NavLink>
      </div>
    </>
  );
}

export default Produce;
