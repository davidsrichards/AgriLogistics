import Footer from "../Footer/Footer";
import GlobalNavigation from "../GlobalComponent/GlobalNavigationBar";
import Scroller from "../GlobalComponent/Scroller/Scroller";
import NavigationItems from "../NavigationBar/NavigationItems";
import BlogsCmpt from "./BlogsCmpt/BlogsCmpt";

function BlogsComponent() {
  return (
    <div>
      <GlobalNavigation
        backgroundColor={"#1f1f26"}
        position={"fixed"}
        items={<NavigationItems />}
      />
      <BlogsCmpt />
      <Scroller />
      <Footer />
    </div>
  );
}

export default BlogsComponent;
