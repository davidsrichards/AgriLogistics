import ThemeImages from "./AboutThemes/ThemeImages";
import "./About.css";

function ThemeImage() {
  return (
    <div className="bg-[#f1f3f5] gap-4 p-4 about-image-container w-full">
      <div className="flex gap-4">
        <ThemeImages
          image={
            "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/09/mt-0994-about-img1.jpg"
          }
          name={"Jerry Robinson"}
          position={"President"}
          about={
            "Jerry is a president and a global chief compliance officer at our Company. He leads our Office of Compliance and oversees the company global compliance policies and…"
          }
        />
        {/*  */}
        <ThemeImages
          image={
            "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/09/mt-0994-about-img2.jpg"
          }
          name={"Joseph Wade"}
          position={"Manager"}
          about={
            "Joseph Wade is our senior vice president and a member of the company Executive Council. He also serves as a company chief risk officer, managing our aggregate commodity risk and…"
          }
        />
        {/*  */}
        <ThemeImages
          image={
            "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/09/mt-0994-about-img3.jpg"
          }
          name={"Mike Long"}
          position={"Manager"}
          about={
            "Mike Long is a senior vice president and president of our Oilseeds processing business department, and a member of the company Executive Council. Mr. Long is responsible for all commercial activities, operations …"
          }
        />
        {/*  */}
        <ThemeImages
          image={
            "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/09/mt-0994-about-img4.jpg"
          }
          name={"Brian Benson"}
          position={"Manager"}
          about={
            "Mr. Benson is a president, Southeast Asia, Australia and New Zealand and Global Destination Marketing at our Company, and a member of the company Executive Council. He leads our business and growth."
          }
        />
      </div>
      <div className="flex gap-4">
        <ThemeImages
          image={
            "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/09/mt-0994-about-img1.jpg"
          }
          name={"Jerry Robinson"}
          position={"President"}
          about={
            "Jerry is a president and a global chief compliance officer at our Company. He leads our Office of Compliance and oversees the company global compliance policies and…"
          }
        />
        {/*  */}
        <ThemeImages
          image={
            "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/09/mt-0994-about-img2.jpg"
          }
          name={"Joseph Wade"}
          position={"Manager"}
          about={
            "Joseph Wade is our senior vice president and a member of the company Executive Council. He also serves as a company chief risk officer, managing our aggregate commodity risk and…"
          }
        />
        {/*  */}
        <ThemeImages
          image={
            "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/09/mt-0994-about-img3.jpg"
          }
          name={"Mike Long"}
          position={"Manager"}
          about={
            "Mike Long is a senior vice president and president of our Oilseeds processing business department, and a member of the company Executive Council. Mr. Long is responsible for all commercial activities, operations …"
          }
        />
        {/*  */}
        <ThemeImages
          image={
            "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/09/mt-0994-about-img4.jpg"
          }
          name={"Brian Benson"}
          position={"Manager"}
          about={
            "Mr. Benson is a president, Southeast Asia, Australia and New Zealand and Global Destination Marketing at our Company, and a member of the company Executive Council. He leads our business and growth."
          }
        />
      </div>
    </div>
  );
}

export default ThemeImage;
