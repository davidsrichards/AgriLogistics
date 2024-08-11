import "./FourthComponent.css";

function FourthCard() {
  return (
    <div className="grid md:grid-cols-2 ">
      <div className="fade-in bg-[url(https://images.pexels.com/photos/2135677/pexels-photo-2135677.jpeg?auto=compress&cs=tinysrgb&w=600)] bg-center bg-cover object-cover h-screen"></div>
      <div className="fade-in bg-[url(https://images.pexels.com/photos/95215/pexels-photo-95215.jpeg?auto=compress&cs=tinysrgb&w=600)] bg-center bg-cover object-cover"></div>
      <div className=" flex  justify-center md:col-span-2 flex-col gap-2  bg-slate-300 p-12">
        <h1 className="text-[1.8rem] font-bold font-serif self-center">
          Welcome to AgroLogistics
        </h1>
        <p>
          Your trust partner in Crops and Grains At Agrolistics we understand
          the imortance of delivering fresh, high quality crops and grains to
          your doorsteps.
        </p>
        <p>
          Our commitment to excellence ensure to weather you are a farmer
          looking to distribute your produce or a customer seeking premium
          grains, you can rely on us to meet your needs efficiently and
          reliably.
        </p>
      </div>
    </div>
  );
}

export default FourthCard;
