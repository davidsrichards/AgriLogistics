import { FaLongArrowAltRight } from "react-icons/fa";

function ArrowRight() {
  return (
    <>
      <div className="ring-2 ring-primary w-[12rem] h-[3rem] flex items-center justify-around text-white text-center rounded-md hover:bg-primary transition-all duration-500 ease-in-out cursor-pointer">
        <div className="text-nowrap flex items-center justify-center  w-full">
          More info
        </div>
        <FaLongArrowAltRight className="w-[10rem]" />
      </div>
    </>
  );
}

export default ArrowRight;
