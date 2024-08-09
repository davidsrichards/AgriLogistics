import { IoMenu } from "react-icons/io5";
function GlobalNavigation({ backgroundColor, items, position }) {
  return (
    <nav
      className={
        "top-0 w-full p-2 md:block flex items-center justify-center transition-all duration-300 ease-in-out mx-auto z-10"
      }
      style={{ backgroundColor: backgroundColor, position: position }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-12 flex items-center justify-between md:h-16 h-[10rem]">
        <div className="flex items-center justify-center">
          <img
            className="lg:h-24 md:w-24 md:h-24 md:relative md:left-0 absolute left-4 w-18 h-18  transition-all duration-300 ease-in-out"
            src="https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/08/mt-0994-logo.png"
            alt="Logo"
          />
          <div className="text-white ml-6 flex flex-col items-start justify-center gap-6">
            <div className=" tracking-tight">
              <h2 className="font-bold lg:text-[1.5rem] md:text-[1.7rem] text-[1.3rem]">
                AgriLogistics
              </h2>
              <h3 className="font-normal">largest agricultural</h3>
              <h3 className="font-normal">processors</h3>
            </div>
            <div className="bg-white text-primary flex items-center justify-center px-3 md:hidden w-12 h-10 rounded-md mx-auto">
              <IoMenu className="md:text-[0rem] text-[2rem]" />
            </div>
          </div>
        </div>
        <div className="md:block hidden  ">{items}</div>
      </div>
    </nav>
  );
}

export default GlobalNavigation;

/* "#1f1f26" */
