function Fruits({ image, name }) {
  return (
    <div className="flex flex-col items-center justify-center second-card-fruit gap-2 py-6 hover:ring-1 hover:scale-95 hover:ring-primary transition-all duration-500 ease-in-out">
      <img src={image} alt="" />
      <p className="first-card-name">{name}</p>
    </div>
  );
}

export default Fruits;
