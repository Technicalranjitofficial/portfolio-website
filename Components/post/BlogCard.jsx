import Link from "next/link";
import React from "react";

const BlogCard = ({ img }) => {
  return (
    <Link
      href={`/`}
      // href={`/posts/${val.slug.current}`}
      className="hover:translate-y-1 "
    >
      <div className="overflow-hidden rounded-md min-h-full  bg-slate-900 justify-center">
        <div className=" md:h-52 h-64 ">
          <img
            className="object-cover md:max-h-52  h-full w-full object-center"
            src={img}
            alt="img"
          />
        </div>
        <h1 className=" text-slate-300 text-lg md:text-2xl line-clamp-2  font-bold pt-2 font-Roboto">
          Microsoft PowerPoint 2021 For Free
        </h1>
        <h1 className="items-center  mt-1 text-sm text-slate-400 font-bold">
          Ranjit Das
        </h1>
        <span className="items-center  mt-1 text-xs text-slate-400 font-bold">
          jun 2 2020 At 08:20 PM
        </span>
        {/* <p className="mt-2 text-center px-2 text-xs md:text-sm text-gray-300  line-clamp-3 font-medium">
       {val.description}
     </p> */}
        <div className="mb-4"></div>
      </div>
    </Link>
  );
};

export default BlogCard;
