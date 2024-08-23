import ProduceFruits from "./ProduceFruits";

function SecondComponent() {
  return (
    <div className="grid md:grid-cols-2 p-4 mx-auto gap-6 py-16">
      <ProduceFruits
        image={
          "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/07/mt-0994-home-img1.png"
        }
        title={"Vegetables"}
        content={
          "Vegetable farming is the growing of vegetables for human consumption. The practice probably started in several parts of the world over ten thousand years ago, with families growing vegetables for their own consumption or to trade locally. At first manual labour was used but in time livestock were domesticated and the ground could…"
        }
      />
      <ProduceFruits
        image={
          "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/07/mt-0994-home-img2.png"
        }
        title={"Grain and Oilseed"}
        content={
          "We are one of the largest owners of productive farmland in Nigeria. We currently own over 127k hectares and lease nearly 50k hectares each year for the production of a wide range of agricultural commodities including soybeans, corn, wheat, sunflower and cotton, among others. In Argentina, our farming activities are mainly…."
        }
      />
      <ProduceFruits
        image={
          "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/07/mt-0994-home-img3.png"
        }
        title={"Fruits and Nuts"}
        content={
          "There is a great difference between the crops grown as starter plants and the greenhouse vegetables. Masses tend to grow vegetables and fruits in their greenhouse where they can control temperature, provide heat,extend the growing season and protect them from frosting. However, if you are new to gardening and planting fruits and…"
        }
      />
      <ProduceFruits
        image={
          "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/07/mt-0994-home-img4.png"
        }
        title={"Tobacco"}
        content={
          "Why We Grow Tobacco? A lot of folks need their daily nicotine. Business gurus will tell you that meeting needs is a great way to profit. Though you can’t legally sell your own homemade cigarettes right now, there may come a day when regulations fly out the window and the free market takes over again. Even if it doesn’t, being the guy that..."
        }
      />
    </div>
  );
}

export default SecondComponent;
