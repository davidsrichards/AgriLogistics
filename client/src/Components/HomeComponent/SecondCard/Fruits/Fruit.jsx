import { useEffect, useRef, useState } from "react";
import Fruits from "./Fruits";
import { motion, useAnimation, useInView } from "framer-motion";

function Fruit() {
  return (
    <div className="stock-ticker gap-4">
      {" "}
      <div className="flex gap-4">
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
      <div className="flex gap-4" aria-hidden="true">
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
    </div>
  );
}

export default Fruit;
