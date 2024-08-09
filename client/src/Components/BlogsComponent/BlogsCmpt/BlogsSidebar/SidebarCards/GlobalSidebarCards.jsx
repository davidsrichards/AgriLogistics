function GlobalSidebarCards({ image, content }) {
  return (
    <div>
      <img src={image} alt="" />
      <h3 className="text-[14px] text-primary">{content}</h3>
    </div>
  );
}

export default GlobalSidebarCards;
