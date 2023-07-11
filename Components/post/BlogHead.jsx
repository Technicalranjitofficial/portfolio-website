import React from "react";
import BlogCard from "./BlogCard";

const BlogHead = () => {
  return (
    <div className="flex gap-8 flex-col w-full  md:flex-row ">
      <div className="left flex flex-col w-full md:w-8/12">
        <div className="h-auto md:h-[30rem] rounded-md">
          <img 
            src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
            className="object-cover opacity-90 rounded-md w-full h-full"
            alt=""
          />
        </div>
        <div className="text-white mt-5">
          <h1 className="text-3xl font-bold">Build video chat application with WebRTC</h1>
          <p className="mt-2">
            Hey reader, welcome back to my blog, in this article we would be
            building a real-time video calling application using something known
            as WebRTC. Now, what is webRTC? In simple terms, webRTC refers to as
            web real-time communications. You can use webRT...
          </p>
          <h1 className="items-center  mt-1 text-sm text-slate-400 font-bold">
          Ranjit Das
        </h1>
        <span className="items-center  mt-1 text-xs text-slate-400 font-bold">
          jun 2 2020 At 08:20 PM
        </span>
        </div>
      </div>

      <div className="right gap-8 flex flex-col w-full md:w-4/12 h-[40rem]">
        <BlogCard img="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" />
        <BlogCard img="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" />
      </div>
    </div>
  );
};

export default BlogHead;
