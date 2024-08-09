import BlogsCards from "./BlogsCards/BlogsCards";
import BlogsSidebar from "./BlogsSidebar/BlogsSidebar";

function BlogsCmpt() {
  return (
    <div className="grid lg:grid-cols-12 w-full  border-red-300 mt-[9rem] lg:p-4 p-2">
      <div className="lg:col-span-9  p-6">
        <BlogsCards />
      </div>
      <div className="lg:col-span-3 p-4">
        <BlogsSidebar />
      </div>
    </div>
  );
}

export default BlogsCmpt;
