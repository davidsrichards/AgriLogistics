import { Link } from "react-router-dom";

function ProduceFruits({ image, title, content }) {
  return (
    <div className="produce-fruits flex flex-col items-center justify-center gap-4 mx-auto  p-12 hover:ring-1 ring-primary">
      <img src={image} alt="" />
      <h2 className="text-[1.8rem] font-semibold">{title}</h2>
      <p className="text-center text-[14px] text-slate-600">{content}</p>
      <Link className="text-primary font-semibold text-[1.1rem]">
        Read more
      </Link>
    </div>
  );
}

export default ProduceFruits;
