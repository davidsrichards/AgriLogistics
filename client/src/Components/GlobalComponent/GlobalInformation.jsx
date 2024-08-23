import "./GlobalComponent.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiTimer2Fill } from "react-icons/ri";

function GlobalInformation() {
  return (
    <div className="lg:block hidden">
      <nav className="top-0 w-full  flex items-center justify-between transition-all duration-300 ease-in-out  absolute bg-[#2e2e35] hide-nav text-slate-300 overflow-hidden z-50 p-3">
        <div className="flex items-center justify-around  w-2/3">
          <div className="nav-address flex items-center justify-center gap-2 ">
            <FaLocationDot className="text-white" /> 6087 Richmond hwy,
            Alexandria, VA
          </div>
          <div className="nav-contact flex items-center justify-center gap-2 hover:text-primary cursor-pointer">
            <BsFillTelephoneFill className="text-white text-[0.7rem]" /> (123)
            456-7890
          </div>
          <div className="nav-date flex items-center justify-center gap-2">
            <RiTimer2Fill
              className="
          text-white"
            />{" "}
            Mo-Fr 11:00-00:00, Sa-Sa 15:00-00:00
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 text-[0.8rem] mr-12">
          <FaTwitter className=" cursor-pointer hover:text-primary" />
          <FaFacebookF className=" cursor-pointer hover:text-primary" />
          <FaPinterestP className=" cursor-pointer hover:text-primary" />
          <FaLinkedinIn className=" cursor-pointer hover:text-primary" />
        </div>
      </nav>
    </div>
  );
}

export default GlobalInformation;
