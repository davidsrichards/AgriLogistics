function GlobalServices({ image, title, content }) {
  return (
    <div className="flex flex-col justify-center flex-grow second-card-fruit p-4">
      <img src={image} alt="" className=" object-cover" />
      <h2 className="text-[1.8rem] font-normal">{title}</h2>
      <p className=" tracking-tight text-[1.2rem] text-slate-600">{content}</p>
    </div>
  );
}

export default GlobalServices;
