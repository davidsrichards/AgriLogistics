import style from "./ThirdCard.module.css";

function Slide({ image, date, title, content }) {
  return (
    <div className="flex flex-col justify-center gap-4 p-4">
      <img src={image} alt="" />
      <p className="text-[14px] font-normal">{date}</p>
      <p className={`${style.track}`}>{title}</p>
      <p className="track">{content}</p>
    </div>
  );
}

export default Slide;
