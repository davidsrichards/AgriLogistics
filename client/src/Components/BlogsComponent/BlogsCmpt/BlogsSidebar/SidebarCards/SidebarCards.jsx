import GlobalSidebarCards from "./GlobalSidebarCards";

function SidebarCards() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-[1.3rem] ">Recent Posts</h1>
      <GlobalSidebarCards
        image={
          "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/09/mt-0994-blog-img1.jpg"
        }
        content={"The most common mistakes when managing personal finances"}
      />
      <GlobalSidebarCards
        image={
          "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/09/mt-0994-blog-img2.jpg"
        }
        content={"Methods of the recruitment"}
      />
      <GlobalSidebarCards
        image={
          "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/09/mt-0994-blog-img4.jpg"
        }
        content={"Overalls with logo as a method of advertising"}
      />
      <GlobalSidebarCards
        image={
          "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/09/mt-0994-blog-img6.jpg"
        }
        content={"The main objectives of the marketer"}
      />
      <GlobalSidebarCards
        image={
          "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/09/mt-0994-blog-img8.jpg"
        }
        content={
          "Recession is a good opportunity to deal a deathblow to the competitors"
        }
      />
    </div>
  );
}

export default SidebarCards;
