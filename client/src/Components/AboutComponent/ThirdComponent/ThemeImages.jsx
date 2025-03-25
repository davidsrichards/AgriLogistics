import ThemeImages from "./AboutThemes/ThemeImages";
import "./About.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import user from "../../../assets/images/user.jpg";

function ThemeImage() {
  const { trace } = useSelector((state) => state.navigation);

  const image1 = [
    <ThemeImages
      image={user}
      name={"Aliyu Abdullahi"}
      position={"President"}
      about={
        "Jerry is a president and a global chief compliance officer at our Company. He leads our Office of Compliance and oversees the company global compliance policies and…"
      }
    />,
    <ThemeImages
      image={user}
      name={"Kabiru Yakasai"}
      position={"Manager"}
      about={
        "Kabiru Yakasai is our senior vice president and a member of the company Executive Council. He also serves as a company chief risk officer, managing our aggregate commodity risk and…"
      }
    />,
  ];

  const image2 = [
    <ThemeImages
      image={user}
      name={"Kabiru Yakasai"}
      position={"Manager"}
      about={
        "Kabiru Yakasai is our senior vice president and a member of the company Executive Council. He also serves as a company chief risk officer, managing our aggregate commodity risk and…"
      }
    />,
    <ThemeImages
      image={user}
      name={"Aliyu Abdullahi"}
      position={"President"}
      about={
        "Jerry is a president and a global chief compliance officer at our Company. He leads our Office of Compliance and oversees the company global compliance policies and…"
      }
    />,
  ];

  const [images, setImage] = useState([image1, image2]);

  return (
    <div className="bg-[#f1f3f5] gap-4 p-4 about-image-containe w-full">
      <div className="md:flex gap-4 hidden" key={Math.random()}>
        {images[trace]}
      </div>

      <div className="md:hidden grid  gap-4" aria-hidden="true">
        <ThemeImages
          image={user}
          name={"Kabiru Yakasai"}
          position={"Manager"}
          about={
            "Kabiru Yakasai is our senior vice president and a member of the company Executive Council. He also serves as a company chief risk officer, managing our aggregate commodity risk and…"
          }
        />
        <ThemeImages
          image={user}
          name={"Aliyu Abdullahi"}
          position={"President"}
          about={
            "Jerry is a president and a global chief compliance officer at our Company. He leads our Office of Compliance and oversees the company global compliance policies and…"
          }
        />
      </div>
    </div>
  );
}

export default ThemeImage;
