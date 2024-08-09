function Item({ image, title, content }) {
  return (
    <div className=" flex flex-col items-center justify-center gap-4  p-4">
      <img src={image} alt="" className="pb-4" />
      <h2 className="font-bold text-[1.5rem]">{title}</h2>
      <p className="tracking-tight text-[14px] font-normal text-slate-600 text-center">
        {content}
      </p>
    </div>
  );
}

export default Item;
