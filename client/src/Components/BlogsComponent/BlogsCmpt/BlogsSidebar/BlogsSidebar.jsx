import BlogsSearch from "./BlogsSearch/BlogsSearch";
import SidebarCards from "./SidebarCards/SidebarCards";

function BlogsSidebar() {
  return (
    <div className="lg:py-24">
      <BlogsSearch />
      <SidebarCards />
    </div>
  );
}

export default BlogsSidebar;
