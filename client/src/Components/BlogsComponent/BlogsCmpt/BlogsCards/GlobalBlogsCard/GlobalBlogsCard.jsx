import { FaCalendarAlt } from "react-icons/fa";

function GlobalBlogsCard({ name, image, content }) {
  return (
    <div className="flex flex-col gap-4 justify-center items-start border-b-2 pb-4">
      <h1 className="  text-[1.6rem] font-bold">{name}</h1>
      <div className="flex items-center gap-2 text-[14px] text-primary">
        <FaCalendarAlt />
        <h4 className="my-element"> 17.09.2017</h4>
      </div>

      <img src={image} alt="" />
      <div className="">
        <p className="text-[13px] text-[#1f1f26]">{content}</p>
      </div>
      <button className="bg-primary p-3 px-6 rounded-md text-white hover:text-primary hover:bg-transparent ring-2 ring-primary">
        More
      </button>
    </div>
  );
}

export default GlobalBlogsCard;
