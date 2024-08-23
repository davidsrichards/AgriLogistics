import { Link } from "react-router-dom";
import ArrowRight from "./ArrowRight";
import { motion } from "framer-motion";

function FirstCard() {
  return (
    <div className="first-card flex items-start justify-center flex-col w-full">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }}
        className="space-y-4 mt-24 py-14 px-14 flex flex-col gap-4 "
      >
        <div className="mt-12 tracking-tighter flex flex-col md:-space-y-6 -space-y-2">
          <h1 className="lg:text-[5rem] md:text-[3.5rem] text-[2rem] text-white headers">
            Nigeria Agribusiness...
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
      </motion.div>
    </div>
  );
}

export default FirstCard;
