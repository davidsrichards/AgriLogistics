import ThemeImage from "./ThemeImages";
import { FaLongArrowAltRight } from "react-icons/fa";
<FaLongArrowAltRight />;
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  handleNextImageChangeAction,
  handlePrevImageChangeAction,
} from "../../../Redux/Features/Slice";
<FaLongArrowAltLeft />;
function ThirdComponent() {
  const dispatch = useDispatch();
  const { trace } = useSelector((state) => state.navigation);
  //
  const handleNext = () => {
    if (trace < 1) {
      dispatch(handleNextImageChangeAction());
    }
  };
  //
  const handlePrev = () => {
    if (trace > 0) {
      dispatch(handlePrevImageChangeAction());
    }
  };
  return (
    <div className="flex items-center justify-center flex-col gap-8 mt-12 ">
      <div className="flex items-center justify-center w-full md:flex-row flex-col space-y-4">
        <h1 className="text-[2.5rem] font-semibold">Meet our Team</h1>
        <div className="flex items-center justify-center gap-4 w-[5rem] md:absolute right-24">
          <div className=" ring-2 ring-primary p-3 rounded-full cursor-pointer md:block hidden">
            <FaLongArrowAltLeft onClick={handlePrev} />
          </div>
          <div className=" ring-2 ring-primary p-3 rounded-full cursor-pointer md:block hidden">
            <FaLongArrowAltRight onClick={handleNext} />
          </div>
        </div>
      </div>

      <ThemeImage />
    </div>
  );
}

export default ThirdComponent;
