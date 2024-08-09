import Fruits from "./Fruits";

function Fruit() {
  return (
    <>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 transition-all duration-300 ease-in-out mt-14">
        <Fruits
          image={
            "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/07/mt-0994-home-img1.png"
          }
          name={"Vegitables"}
        />
        <Fruits
          image={
            "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/07/mt-0994-home-img2.png"
          }
          name={"Grain and Oilseed"}
        />
        <Fruits
          image={
            "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/07/mt-0994-home-img3.png"
          }
          name={"Fruits and Nuts"}
        />
        <Fruits
          image={
            "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/07/mt-0994-home-img4.png"
          }
          name={"Tobacco"}
        />
      </div>
    </>
  );
}

export default Fruit;
