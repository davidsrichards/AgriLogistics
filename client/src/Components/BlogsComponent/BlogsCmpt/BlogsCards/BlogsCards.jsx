import GlobalBlogsCard from "./GlobalBlogsCard/GlobalBlogsCard";
import { Link } from "react-router-dom";

function BlogsCards() {
  return (
    <div className="lg:p-12 py-12">
      <h4 className="text-[14px] pb-10">
        <Link to={"/"} className="text-primary hover:text-secondary">
          Home
        </Link>{" "}
        / Blog Main Page
      </h4>
      <GlobalBlogsCard
        name={"The most common mistakes when managing personal finances"}
        image={
          "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/09/mt-0994-blog-img1.jpg"
        }
        content={
          "The ability to manage money competently is especially valuable quality in the conditions of financial crisis, when the purchasing power of the population is shrinking, inflation is rising, and currency exchange rates are completely unpredictable. Below are the common mistakes related to money affairs along with financial planning advice to help manage your own finances properly."
        }
      />
      <GlobalBlogsCard
        name={"Methods of the recruitment"}
        image={
          "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/09/mt-0994-blog-img2.jpg"
        }
        content={
          "Search of staff is not an easy task. According to the departmental heads' of personnel management words, in order to find a personnel who will correspond to the relevant customer needs and requirements, it is necessary to carry out a great job."
        }
      />
      <GlobalBlogsCard
        name={"Overalls with logo as a method of advertising"}
        image={
          "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/09/mt-0994-blog-img4.jpg"
        }
        content={
          "Overalls bearing the company's logo are related to economy and practicality. A preference of corporate style involves a significant increase of costs for development of design solutions, customized tailoring, selection of necessary materials and so on."
        }
      />
    </div>
  );
}

export default BlogsCards;
