import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { startSliceAction } from "../../../Redux/Features/Slice";

function Contact() {
  const dispatch = useDispatch();
  const { control } = useSelector((state) => state.navigation);
  return (
    <>
      <div className={`nav-a ${control === "contact" ? "activ" : ""}`}>
        <NavLink
          to={"#contact"}
          onClick={() => dispatch(startSliceAction("contact"))}
        >
          Contact Us
        </NavLink>
      </div>
    </>
  );
}

export default Contact;
