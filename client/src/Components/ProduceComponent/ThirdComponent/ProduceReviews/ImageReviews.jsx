function ImageReviews({ image, content, name }) {
  return (
    <div className="produce-fruits flex flex-col items-center justify-center gap-4 mx-auto  p-3 bg-primary text-white py-12">
      <img src={image} alt="" className="rounded-full" />
      <p className="text-center font-semibold">{content}</p>
      <h2 className="font-bold text-[1.2rem]">{name}</h2>
    </div>
  );
}

export default ImageReviews;
