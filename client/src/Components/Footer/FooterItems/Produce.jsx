import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiTimer2Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

function Produce() {
  return (
    <div className="text-white flex flex-col gap-2 self-start">
      <h1 className="font-bold text-[1.3rem] pb-4">Contact us</h1>
      <p className="footer-item flex items-center gap-2">
        <div className="text-white text-[1.2rem]">
          <FaLocationDot />
        </div>
        6087 Richmond hwy, Alexandria, VA
      </p>
      <p className="footer-p flex items-center gap-2">
        <div className="text-white">
          <BsFillTelephoneFill />
        </div>
        (123) 456-7890
      </p>
      <p className="footer-p flex items-center gap-2">
        <div className="text-white">
          <RiTimer2Fill />
        </div>
        Mo-Fr 11:00-00:00, Sa-Sa 15:00-00:00
      </p>
      <p className="footer-p  flex items-center gap-2">
        <div>
          <MdEmail />
        </div>{" "}
        support@agrilogistics.com
      </p>
    </div>
  );
}

export default Produce;
