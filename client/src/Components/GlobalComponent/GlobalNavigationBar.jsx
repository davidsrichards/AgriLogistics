import "./GlobalComponent.css";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaRegTimesCircle } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import GlobalInformation from "./GlobalInformation";

function GlobalNavigation({ backgroundColor, items, position }) {
  const [inVisible, setIsVisible] = useState(false);
  const [arrowChecked, setArrowChecked] = useState(false);
  return (
    <nav
      className={
        "top-0 w-full p-2 md:block flex items-center justify-center transition-all duration-300 ease-in-out mx-auto z-10 gobal-main-nav"
      }
      style={{ backgroundColor: backgroundColor, position: position }}
    >
      {/*    <GlobalInformation /> */}
      <div className="mx-auto px-2 sm:px-6 lg:px-8 py-12 flex items-center justify-between md:h-16 h-[10rem] w-full">
        <div className="flex items-center md:justify-start justify-center w-full">
          <img
            className="lg:h-24 md:w-24 md:h-24 md:relative md:left-0 absolute left-4 w-18 h-18  transition-all duration-300 ease-in-out"
            src="https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/08/mt-0994-logo.png"
            alt="Logo"
          />
          <div className="text-white ml-6 md:flex hidden flex-col items-start justify-center gap-6">
            <div className=" tracking-tight">
              <h2 className="font-bold lg:text-[1.5rem] md:text-[1.7rem] text-[1.3rem] fourth-h text-primary uppercase">
                Grain Plus
              </h2>
              <h3 className="font-normal fourth-p text-[#328d4a]">
                logistics Limited
              </h3>
            </div>
          </div>
          {/* small screen */}
          <div className="text-white ml-6 md:hidden flex flex-col items-start justify-center gap-6 absolute right-8">
            <div className=" tracking-tight">
              <h2 className="font-bold lg:text-[1.5rem] md:text-[1.7rem] text-[1.3rem] fourth-h text-primary uppercase">
                Grain Plus
              </h2>
              <h3 className="font-normal fourth-p text-[#328d4a]">
                logistics Limited
              </h3>
            </div>
            <div className="bg-white text-primary flex items-center justify-center px-3 md:hidden w-12 h-10 rounded-md mx-auto">
              {!inVisible && (
                <IoMenu
                  className="md:text-[0rem] text-[2rem] cursor-pointer"
                  onClick={() => setIsVisible((prev) => !prev)}
                />
              )}
              {inVisible && (
                <FaRegTimesCircle
                  className="md:text-[0rem] text-[2rem] cursor-pointer"
                  onClick={() => setIsVisible((prev) => !prev)}
                />
              )}
            </div>
          </div>
          {/*  */}
        </div>
        <div className="md:block hidden  ">{items}</div>
      </div>
      {inVisible && (
        <ul
          role="list"
          className="bg-gray-400 bg-opacity-75 absolute top-[11rem] p-4 w-full divide-y-2 divide-slate-500 flex flex-col md:hidden"
        >
          <Link
            to={"#home"}
            className="p-2 hover:bg-gray-400 cursor-pointer  font-semibold hover:text-neutral-200"
          >
            Home
          </Link>
          <div className="flex items-center justify-between">
            <Link
              to={"#about"}
              className="p-2 hover:bg-gray-400 cursor-pointer  font-semibold hover:text-neutral-200"
            >
              About
            </Link>
            <MdKeyboardArrowDown
              className={`text-primary  text-[1.8rem] cursor-pointer ${
                arrowChecked ? "rotate-180" : "rotate-0"
              }`}
              onClick={() => setArrowChecked((prev) => !prev)}
            />
          </div>
          <Link
            to={"#produce"}
            className="p-2 hover:bg-gray-400 cursor-pointer  font-semibold hover:text-neutral-200"
          >
            Produce
          </Link>
          <Link
            to={"#contact"}
            className="p-2 hover:bg-gray-400 cursor-pointer  font-semibold hover:text-neutral-200"
          >
            Contact Us
          </Link>
          {arrowChecked && (
            <div className="flex flex-col">
              <Link
                to={"#services"}
                className="p-2 hover:bg-gray-400 cursor-pointer  font-semibold hover:text-neutral-200"
              >
                Services
              </Link>
              <Link
                to={"#reviews"}
                className="p-2 hover:bg-gray-400 cursor-pointer  font-semibold hover:text-neutral-200"
              >
                Customers
              </Link>
            </div>
          )}
        </ul>
      )}
    </nav>
  );
}

export default GlobalNavigation;

/* "#1f1f26" */
