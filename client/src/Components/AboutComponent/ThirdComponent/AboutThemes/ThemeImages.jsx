import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function ThemeImages({ image, name, position, about }) {
  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-10 trans second-card-fruit p-12 about-inne">
      <img src={image} alt="" className="rounded-full object-cover" />
      <div className="flex flex-col items-center justify-center tracking-tight">
        <h1 className="text-[1.5rem] font-bold">{name}</h1>
        <h4 className="font-normal">{position}</h4>
      </div>
      <p className="overflow-hidden text-center theme-text">{about}</p>
      <div className="flex items-start justify-center w-full gap-4 text-primary">
        <FaFacebookF className="trans hover:text-secondary" />
        <FaTwitter className="trans hover:text-secondary" />
        <FaGooglePlusG className="trans hover:text-secondary" />
        <FaLinkedinIn className="trans hover:text-secondary" />
      </div>
    </div>
  );
}

export default ThemeImages;
