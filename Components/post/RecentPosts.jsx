import React from "react";
import Link from "next/link";
import { convertDate } from "@/Redux/helper/Other";


const RecentPosts = ({ blogs }) => {


  // convertDate();
  
  return (
    <div className="flex justify-center mt-5">
      <div className="">
        <div className="flex justify-between">
         
         
        </div>

        <div className="grid mt-3 grid-cols-1  md:grid-cols-3 gap-8">
         {blogs && blogs.map((val,index)=>{
          return  <Link key={val.slug.current}

          
           href={`/posts/${val.slug.current}`} className="hover:translate-y-1">
          <div className="overflow-hidden rounded-md min-h-full border border-slate-600 bg-slate-900 justify-center">
            <div className=" md:h-52 h-64 ">
              <img
                className="object-cover md:max-h-52  h-full w-full object-center"
             
                src={val.poster.asset.url}
                alt="img"
              />
            </div>
            <h1 className="font-semibold text-slate-300 text-lg md:text-2xl line-clamp-2 pl-2 pt-2 font-Roboto">
              {val.title}
            </h1>
            <h1 className="items-center ml-2 mt-1 text-sm text-slate-400 font-bold">
             Ranjit Das
            </h1>
            <span className="items-center ml-2 mt-1 text-xs text-slate-400 font-bold">
             {convertDate(val.createdAt)}
            </span>
            {/* <p className="mt-2 text-center px-2 text-xs md:text-sm text-gray-300  line-clamp-3 font-medium">
              {val.description}
            </p> */}
            <div className="mb-4"></div>
          </div>
        </Link>
         })}
          
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
