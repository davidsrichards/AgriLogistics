import Item from "./Item";

function Items() {
  return (
    <div className="grid md:grid-cols-4 gap-4 ">
      <Item
        image={
          "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/07/mt-0994-home-img5.png"
        }
        title={"Products Range"}
        content={
          "We are growing a multitude of different vegetables, fruits and grains…"
        }
      />
      <Item
        image={
          "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/07/mt-0994-home-img6.png"
        }
        title={"Smart Logistics"}
        content={
          "Delivering our produce to your place is an easy task for our company!"
        }
      />
      <Item
        image={
          "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/07/mt-0994-home-img7.png"
        }
        title={"Quality Matters"}
        content={
          "We're determined to keep up the quality of all of our farming products as high as possible"
        }
      />
      <Item
        image={
          "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/07/mt-0994-home-img8.png"
        }
        title={"Seasoned Team"}
        content={
          "Our experts spent last few years excelling their skills and expanding their knowledge."
        }
      />
    </div>
  );
}

export default Items;
