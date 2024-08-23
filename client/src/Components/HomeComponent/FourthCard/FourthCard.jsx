import "./FourthComponent.css";

function FourthCard() {
  return (
    <div className="grid md:grid-cols-2 ">
      <div className="flex  justify-center flex-col gap-5 bg-[#edecda] p-6">
        <h1 className="fourth-h text-[1.8rem]">
          WELCOME TO
          <span className="font-bold  text-primary">AGROLOGISTICS</span>
        </h1>
        <img
          src="https://template66538.motopreview.com/mt-demo/66500/66538/mt-content/uploads/2018/04/mt-0826-title-img.png"
          alt=""
          className="object-cover bg-cover w-[7rem]"
        />
        <p className="fourth-p">
          Our Grains has been founded with one strong influence in mind – the
          French culture of Grain production and cultivation…
        </p>
        <p className="fourth-p2">
          Your Trusted Partner in Crops and Grains At AgriLogistics, we
          understand the importance of delivering fresh, high-quality crops and
          grains to your doorstep. Our commitment to excellence ensures that
          whether you are a farmer looking to distribute your produce or a
          customer seeking premium grains, you can rely on us to meet your needs
          efficiently and reliably.
        </p>
      </div>
      <div className="fade-in bg-[url(https://images.pexels.com/photos/2135677/pexels-photo-2135677.jpeg?auto=compress&cs=tinysrgb&w=600)] bg-center bg-cover object-cover h-screen"></div>
      <div className="fade-in bg-[url(https://images.pexels.com/photos/95215/pexels-photo-95215.jpeg?auto=compress&cs=tinysrgb&w=600)] bg-center bg-cover object-cover h-screen"></div>
      <div className="flex  justify-center flex-col gap-5 bg-gold p-6">
        <h1 className="fourth-h text-[1.8rem]">INTERIOR</h1>
        <img
          src="https://template66538.motopreview.com/mt-demo/66500/66538/mt-content/uploads/2018/04/mt-0826-title-img.png"
          alt=""
          className="object-cover bg-cover w-[7rem]"
        />
        <p className="fourth-p">
          Grain is inherently French by its nature… Because of that, we decided,
          that the French spirit and culture of making, tasting and celebrating
          the Grain will be the best choice of all…
        </p>
        <p className="fourth-p2">
          While we have Grains from all over the world, including the US, our
          Grainy & restaurant exhibits a pure Parisian glare and extravaganza!
        </p>
      </div>
      {/*  */}
      <div className="flex  justify-center flex-col gap-5 bg-[#edecda] p-6">
        <h1 className="fourth-h text-[1.8rem]">JEROME GIGNAC, SOMMELIER</h1>
        <img
          src="https://template66538.motopreview.com/mt-demo/66500/66538/mt-content/uploads/2018/04/mt-0826-title-img.png"
          alt=""
          className="object-cover bg-cover w-[7rem]"
        />
        <p className="fourth-p">
          As a person with an own vineyard in the Californian valley of Napa and
          now an owner and a head sommelier at this Wisconsin-based Grainy &
          Farming, I promise you an absolutely exquisite experience if you come
          here!
        </p>
        <p className="fourth-p2">
          Our range of red, white and rose Grains selection goes beyond any
          state-level comparison and our team of Grain-tasting sommeliers will
          always get you a perfect pick!
        </p>
      </div>
      <div className="fade-in bg-[url(https://images.pexels.com/photos/2135677/pexels-photo-2135677.jpeg?auto=compress&cs=tinysrgb&w=600)] bg-center bg-cover object-cover h-screen"></div>
    </div>
  );
}

export default FourthCard;

/* https://template66538.motopreview.com/mt-demo/6650…mt-content/uploads/2017/03/mt-0826-home-img01.jpg */
