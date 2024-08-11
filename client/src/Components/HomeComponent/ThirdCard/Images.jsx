import Slide from "./Slide";

function Images() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2  gap-4 transition-all duration-500 ease-in-out ">
      <Slide
        image={
          "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/09/mt-0994-home-img17.jpg"
        }
        date={"August, 21 2017"}
        title={"Best 3 Edible Weeds to Grow in Your Garden"}
        content={
          "Most commonly known as crop dusters, agriculture planes also perform many other functions to assist farmers. Although most crop dusters are used to spray crops with pesticide, some agriculture planes are…"
        }
      />
      <Slide
        image={
          "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/09/mt-0994-home-img14.jpg"
        }
        date={"August, 11 2017"}
        title={"Growing Your Own Lavender Pot Garden"}
        content={
          "Most commonly known as crop dusters, agriculture planes also perform many other functions to assist farmers. Although most crop dusters are used to spray crops with pesticide, some agriculture planes"
        }
      />
      <Slide
        image={
          "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/07/mt-0994-home-img11.jpg"
        }
        date={"August, 1 2021"}
        title={
          "This New Water- Cleaning Technology Harnesses the Power of Wriggly Worms"
        }
        content={
          "Dedicated gardeners and farmers have known about the amazing powers of earthworms for generations. But one Chilean company is trying to harness..."
        }
      />
      <Slide
        image={
          "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/09/mt-0994-home-img16.jpg"
        }
        date={"August, 1 2017"}
        title={"3 Most Damaging Garden Pests You Need to Know"}
        content={
          "Most commonly known as crop dusters, agriculture planes also perform many other functions to assist farmers. Although most crop dusters are used to spray crops with pesticide, some agriculture planes…"
        }
      />
    </div>
  );
}

export default Images;
