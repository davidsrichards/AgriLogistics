import { CiSearch } from "react-icons/ci";
<CiSearch />;
import { FaSearch } from "react-icons/fa";
<FaSearch />;

function BlogsSearch() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-1 w-full relative">
        <FaSearch className="text-secondary text-[1.5rem] font-bold absolute left-2" />
        <input
          type="text"
          className="ring-1 ring-slate-500 outline-none p-2 rounded-md flex-grow text-center focus:ring-blue-400"
        />
        <button className="bg-primary p-2 px-4 rounded-md text-white ring-1 ring-primary hover:text-primary hover:bg-transparent">
          Search
        </button>
      </div>
      <h2 className="font-bold text-[1.5rem]">Category</h2>
      <ul role="list" className="divide-y-2 text-[15px]">
        <li className="py-2 hover:text-primary cursor-pointer font-normal text-slate-700">
          Businness Consulting
        </li>
        <li className="py-2 hover:text-primary cursor-pointer font-normal text-slate-700">
          Financial Management
        </li>
        <li className="py-2 hover:text-primary cursor-pointer font-normal text-slate-700">
          Marketing
        </li>
        <li className="py-2 hover:text-primary cursor-pointer font-normal text-slate-700">
          News
        </li>
        <li className="py-2 hover:text-primary cursor-pointer font-normal text-slate-700">
          Small Business
        </li>
      </ul>
    </div>
  );
}

export default BlogsSearch;
