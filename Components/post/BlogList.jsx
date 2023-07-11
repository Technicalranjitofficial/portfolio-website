import Link from 'next/link'
import React from 'react'

const BlogList = ({blogs,img}) => {
  return (
    <div>
         <div className="grid mt-3 grid-cols-1  md:grid-cols-3 gap-8">
         {blogs && blogs.map((val,index)=>{
          return  <Link 

          
        //    href={`/posts/${val.slug.current}`}
           href="/"
           className="hover:translate-y-1">
          <div className="overflow-hidden rounded-md group min-h-full  bg-slate-900 justify-center">
            <div className=" md:h-52 h-64 ">
              <img
                className="object-cover md:max-h-52 opacity-90 group-hover:opacity-80  h-full w-full object-center"
             
                src={img}
                alt="img"
              />
            </div>
            <h1 className="font-semibold text-slate-300 text-lg md:text-2xl line-clamp-2 pt-2 font-Roboto">
              {/* {val.title} */}
              Build video chat application with WebRTC

            </h1>
            <h1 className="items-center ml-2 mt-1 text-sm text-slate-400 font-bold">
             Ranjit Das
            </h1>
            <span className="items-center ml-2 mt-1 text-xs text-slate-400 font-bold">
             {/* {convertDate(val.createdAt)} */}
             2 jun 2023
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
  )
}

export default BlogList