import { Link } from "react-router-dom";
import ArrowRight from "./ArrowRight";

function FirstCard() {
  return (
    <div className="first-card flex items-start justify-center flex-col w-full">
      <div className="space-y-4 mt-24 py-16 px-16 flex flex-col gap-4 ">
        <div className="mt-12 tracking-tighter flex flex-col md:-space-y-6 -space-y-2">
          <h1 className="lg:text-[5rem] md:text-[3.5rem] text-[2rem] text-white headers">
            An American Agribusiness...
          </h1>
          <h1 className="md:text-[5rem] text-white">
            Built for Today's World!
          </h1>
        </div>
        <div className="md:-space-y-4">
          <div className="lg:text-[3rem] text-white normal text-opacity-75 font-extralight">
            {" "}
            Please see our range of
          </div>
          <div>
            <Link className="lg:text-[3rem] text-primary hover:text-secondarytransition-all duration-500 ease-in-out">
              vegetables,{" "}
            </Link>
            <Link className="lg:text-[3rem] text-primary hover:text-secondary transition-all duration-500 ease-in-out">
              fruits,{" "}
            </Link>
            <Link className="lg:text-[3rem] text-primary hover:text-secondary transition-all duration-500 ease-in-out">
              seeds & nuts!
            </Link>
          </div>
        </div>

        <ArrowRight />
      </div>
    </div>
  );
}

export default FirstCard;
