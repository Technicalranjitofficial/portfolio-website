import React from "react";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from 'next-sanity';
const client = createClient({
  projectId: process.env.PROJECT_ID,
  dataset: process.env.DATASET,
  apiVersion: "2022-03-25",
  useCdn: true
});
const builder = imageUrlBuilder(client);
// const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);

}
const RecentPosts = ({ blogs }) => {
  return (
    <div className="flex justify-center mt-6">
      <div className="">
        <div className="flex justify-between">
          <span className="text-white font-bold text-xl md:text-2xl font-Alegreya">
            Recent <span className="text-cyan-400">Posts</span>
          </span>
          <span className="text-white font-semibold text-xl">Next</span>
        </div>

        <div className="grid mt-3 grid-cols-1  md:grid-cols-3 gap-5">
         {blogs && blogs.map((val,index)=>{
          return  <Link key={val.slug.current}
           href={`/posts/${val.slug.current}`} className="hover:translate-y-1">
          <div className="overflow-hidden rounded-md min-h-full bg-slate-800 justify-center">
            <div className=" aspect-w-3 aspect-h-2">
              <img
                className="object-cover md:max-h-52 h-full w-full object-center"
                // src={urlFor(val.poster)
                //   .image(val.poster)
                //   .width('800')
                //   .fit("max")
                //   .auto("format")
                //   .url()}
                src={val.poster.asset.url}
                alt="img"
              />
            </div>
            <h1 className="text-center font-semibold text-slate-300 text-md md:text-xl line-clamp-2 font-Roboto">
              {val.title}
            </h1>
            <span className="items-center flex justify-center text mt-1 text-xs text-slate-400 font-Lato">
             {val.createdAt}
            </span>
            <p className="mt-1 text-center px-2 text-xs md:text-sm text-gray-300  line-clamp-3 font-RobotoSlab">
              {val.description}
            </p>
            <div className="mb-4"></div>
          </div>
        </Link>
         })}
          {/* <a href="" className="hover:translate-y-1">
            <div className="overflow-hidden rounded-md bg-slate-800 justify-center">
              <div className=" aspect-w-3 aspect-h-2">
                <img
                  className="object-cover md:max-h-52 h-full w-full object-center"
                  src="https://creativedesignsguru.com/demo/astro-boilerplate/assets/images/image-post2.jpeg"
                  alt="img"
                />
              </div>
              <h1 className="text-center font-semibold text-slate-200 text-xl">
                Typography Example
              </h1>
              <span className="items-center flex justify-center text mt-1 text-xs text-slate-400">
                Feb 6,2020
              </span>
              <p className="mt-1 text-center px-2  text-sm text-slate-200 font-mono line-clamp-3 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
                aperiam corporiscorporiscorporiscorporiscorporis, corrupti, ex
                ea quam qui, assumenda dolore cum . aperiam corporis, corrupti,
                ex ea quam qui, assumenda dolore cum . aperiam corporis,
                corrupti, ex ea quam qui, assumenda dolore cum . aperiam
                corporis, corrupti, ex ea quam qui, assumenda dolore cum .
                aperiam corporis, corrupti, ex ea quam qui, assumenda dolore cum
                .
              </p>
              <div className="mb-4"></div>
            </div>
          </a>
          <a href="" className="hover:translate-y-1">
            <div className="overflow-hidden rounded-md bg-slate-800 justify-center">
              <div className=" aspect-w-3 aspect-h-2">
                <img
                  className="object-cover md:max-h-52 h-full w-full object-center"
                  src="https://creativedesignsguru.com/demo/astro-boilerplate/assets/images/image-post2.jpeg"
                  alt="img"
                />
              </div>
              <h1 className="text-center font-semibold text-slate-200 text-xl">
                Typography Example
              </h1>
              <span className="items-center flex justify-center text mt-1 text-xs text-slate-400">
                Feb 6,2020
              </span>
              <p className="mt-1 text-center px-2  text-sm text-slate-200 font- line-clamp-3 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
                aperiam corporiscorporiscorporiscorporiscorporis, corrupti, ex
                ea quam qui, assumenda dolore cum . aperiam corporis, corrupti,
                ex ea quam qui, assumenda dolore cum . aperiam corporis,
                corrupti, ex ea quam qui, assumenda dolore cum . aperiam
                corporis, corrupti, ex ea quam qui, assumenda dolore cum .
                aperiam corporis, corrupti, ex ea quam qui, assumenda dolore cum
                .
              </p>
              <div className="mb-4"></div>
            </div>
          </a>
          <a href="" className="hover:translate-y-1">
            <div className="overflow-hidden rounded-md bg-slate-800 justify-center">
              <div className=" aspect-w-3 aspect-h-2">
                <img
                  className="object-cover md:max-h-52 h-full w-full object-center"
                  src="https://creativedesignsguru.com/demo/astro-boilerplate/assets/images/image-post2.jpeg"
                  alt="img"
                />
              </div>
              <h1 className="text-center font-semibold text-slate-200 text-xl">
                Typography Example
              </h1>
              <span className="items-center flex justify-center text mt-1 text-xs text-slate-400">
                Feb 6,2020
              </span>
              <p className="mt-1 text-center px-2  text-sm text-slate-200 font-mono line-clamp-3 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
                aperiam corporiscorporiscorporiscorporiscorporis, corrupti, ex
                ea quam qui, assumenda dolore cum . aperiam corporis, corrupti,
                ex ea quam qui, assumenda dolore cum . aperiam corporis,
                corrupti, ex ea quam qui, assumenda dolore cum . aperiam
                corporis, corrupti, ex ea quam qui, assumenda dolore cum .
                aperiam corporis, corrupti, ex ea quam qui, assumenda dolore cum
                .
              </p>
              <div className="mb-4"></div>
            </div>
          </a>
          <a href="" className="hover:translate-y-1">
            <div className="overflow-hidden rounded-md bg-slate-800 justify-center">
              <div className=" aspect-w-3 aspect-h-2">
                <img
                  className="object-cover md:max-h-52 h-full w-full object-center"
                  src="https://creativedesignsguru.com/demo/astro-boilerplate/assets/images/image-post2.jpeg"
                  alt="img"
                />
              </div>
              <h1 className="text-center font-semibold text-slate-200 text-xl">
                Typography Example
              </h1>
              <span className="items-center flex justify-center text mt-1 text-xs text-slate-400">
                Feb 6,2020
              </span>
              <p className="mt-1 text-center px-2  text-sm text-slate-200 font-mono line-clamp-3 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
                aperiam corporiscorporiscorporiscorporiscorporis, corrupti, ex
                ea quam qui, assumenda dolore cum . aperiam corporis, corrupti,
                ex ea quam qui, assumenda dolore cum . aperiam corporis,
                corrupti, ex ea quam qui, assumenda dolore cum . aperiam
                corporis, corrupti, ex ea quam qui, assumenda dolore cum .
                aperiam corporis, corrupti, ex ea quam qui, assumenda dolore cum
                .
              </p>
              <div className="mb-4"></div>
            </div>
          </a>{" "}
          <a href="" className="hover:translate-y-1">
            <div className="overflow-hidden rounded-md bg-slate-800 justify-center">
              <div className=" aspect-w-3 aspect-h-2">
                <img
                  className="object-cover md:max-h-52 h-full w-full object-center"
                  src="https://creativedesignsguru.com/demo/astro-boilerplate/assets/images/image-post2.jpeg"
                  alt="img"
                />
              </div>
              <h1 className="text-center font-semibold text-slate-200 text-xl">
                Typography Example
              </h1>
              <span className="items-center flex justify-center text mt-1 text-xs text-slate-400">
                Feb 6,2020
              </span>
              <p className="mt-1 text-center px-2  text-sm text-slate-200 font-mono line-clamp-3 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
                aperiam corporiscorporiscorporiscorporiscorporis, corrupti, ex
                ea quam qui, assumenda dolore cum . aperiam corporis, corrupti,
                ex ea quam qui, assumenda dolore cum . aperiam corporis,
                corrupti, ex ea quam qui, assumenda dolore cum . aperiam
                corporis, corrupti, ex ea quam qui, assumenda dolore cum .
                aperiam corporis, corrupti, ex ea quam qui, assumenda dolore cum
                .
              </p>
              <div className="mb-4"></div>
            </div>
          </a>{" "}
          <a href="" className="hover:translate-y-1">
            <div className="overflow-hidden rounded-md bg-slate-800 justify-center">
              <div className=" aspect-w-3 aspect-h-2">
                <img
                  className="object-cover md:max-h-52 h-full w-full object-center"
                  src="https://creativedesignsguru.com/demo/astro-boilerplate/assets/images/image-post2.jpeg"
                  alt="img"
                />
              </div>
              <h1 className="text-center font-semibold text-slate-200 text-xl">
                Typography Example
              </h1>
              <span className="items-center flex justify-center text mt-1 text-xs text-slate-400">
                Feb 6,2020
              </span>
              <p className="mt-1 text-center px-2  text-sm text-slate-200 font-mono line-clamp-3 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
                aperiam corporiscorporiscorporiscorporiscorporis, corrupti, ex
                ea quam qui, assumenda dolore cum . aperiam corporis, corrupti,
                ex ea quam qui, assumenda dolore cum . aperiam corporis,
                corrupti, ex ea quam qui, assumenda dolore cum . aperiam
                corporis, corrupti, ex ea quam qui, assumenda dolore cum .
                aperiam corporis, corrupti, ex ea quam qui, assumenda dolore cum
                .
              </p>
              <div className="mb-4"></div>
            </div>
          </a>{" "}
          <a href="" className="hover:translate-y-1">
            <div className="overflow-hidden rounded-md bg-slate-800 justify-center">
              <div className=" aspect-w-3 aspect-h-2">
                <img
                  className="object-cover md:max-h-52 h-full w-full object-center"
                  src="https://creativedesignsguru.com/demo/astro-boilerplate/assets/images/image-post2.jpeg"
                  alt="img"
                />
              </div>
              <h1 className="text-center font-semibold text-slate-200 text-xl">
                Typography Example
              </h1>
              <span className="items-center flex justify-center text mt-1 text-xs text-slate-400">
                Feb 6,2020
              </span>
              <p className="mt-1 text-center px-2  text-sm text-slate-200 font-mono line-clamp-3 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
                aperiam corporiscorporiscorporiscorporiscorporis, corrupti, ex
                ea quam qui, assumenda dolore cum . aperiam corporis, corrupti,
                ex ea quam qui, assumenda dolore cum . aperiam corporis,
                corrupti, ex ea quam qui, assumenda dolore cum . aperiam
                corporis, corrupti, ex ea quam qui, assumenda dolore cum .
                aperiam corporis, corrupti, ex ea quam qui, assumenda dolore cum
                .
              </p>
              <div className="mb-4"></div>
            </div>
          </a>{" "}
          <a href="" className="hover:translate-y-1">
            <div className="overflow-hidden rounded-md bg-slate-800 justify-center">
              <div className=" aspect-w-3 aspect-h-2">
                <img
                  className="object-cover md:max-h-52 h-full w-full object-center"
                  src="https://creativedesignsguru.com/demo/astro-boilerplate/assets/images/image-post2.jpeg"
                  alt="img"
                />
              </div>
              <h1 className="text-center font-semibold text-slate-200 text-xl">
                Typography Example
              </h1>
              <span className="items-center flex justify-center text mt-1 text-xs text-slate-400">
                Feb 6,2020
              </span>
              <p className="mt-1 text-center px-2  text-sm text-slate-200 font-mono line-clamp-3 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
                aperiam corporiscorporiscorporiscorporiscorporis, corrupti, ex
                ea quam qui, assumenda dolore cum . aperiam corporis, corrupti,
                ex ea quam qui, assumenda dolore cum . aperiam corporis,
                corrupti, ex ea quam qui, assumenda dolore cum . aperiam
                corporis, corrupti, ex ea quam qui, assumenda dolore cum .
                aperiam corporis, corrupti, ex ea quam qui, assumenda dolore cum
                .
              </p>
              <div className="mb-4"></div>
            </div>
          </a>{" "}
          <a href="" className="hover:translate-y-1">
            <div className="overflow-hidden rounded-md bg-slate-800 justify-center">
              <div className=" aspect-w-3 aspect-h-2">
                <img
                  className="object-cover md:max-h-52 h-full w-full object-center"
                  src="https://creativedesignsguru.com/demo/astro-boilerplate/assets/images/image-post2.jpeg"
                  alt="img"
                />
              </div>
              <h1 className="text-center font-semibold text-slate-200 text-xl">
                Typography Example
              </h1>
              <span className="items-center flex justify-center text mt-1 text-xs text-slate-400">
                Feb 6,2020
              </span>
              <p className="mt-1 text-center px-2  text-sm text-slate-200 font-mono line-clamp-3 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
                aperiam corporiscorporiscorporiscorporiscorporis, corrupti, ex
                ea quam qui, assumenda dolore cum . aperiam corporis, corrupti,
                ex ea quam qui, assumenda dolore cum . aperiam corporis,
                corrupti, ex ea quam qui, assumenda dolore cum . aperiam
                corporis, corrupti, ex ea quam qui, assumenda dolore cum .
                aperiam corporis, corrupti, ex ea quam qui, assumenda dolore cum
                .
              </p>
              <div className="mb-4"></div>
            </div>
          </a>{" "}
          <a href="" className="hover:translate-y-1">
            <div className="overflow-hidden rounded-md bg-slate-800 justify-center">
              <div className=" aspect-w-3 aspect-h-2">
                <img
                  className="object-cover md:max-h-52 h-full w-full object-center"
                  src="https://creativedesignsguru.com/demo/astro-boilerplate/assets/images/image-post2.jpeg"
                  alt="img"
                />
              </div>
              <h1 className="text-center font-semibold text-slate-200 text-xl">
                Typography Example
              </h1>
              <span className="items-center flex justify-center text mt-1 text-xs text-slate-400">
                Feb 6,2020
              </span>
              <p className="mt-1 text-center px-2  text-sm text-slate-200 font-mono line-clamp-3 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
                aperiam corporiscorporiscorporiscorporiscorporis, corrupti, ex
                ea quam qui, assumenda dolore cum . aperiam corporis, corrupti,
                ex ea quam qui, assumenda dolore cum . aperiam corporis,
                corrupti, ex ea quam qui, assumenda dolore cum . aperiam
                corporis, corrupti, ex ea quam qui, assumenda dolore cum .
                aperiam corporis, corrupti, ex ea quam qui, assumenda dolore cum
                .
              </p>
              <div className="mb-4"></div>
            </div>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
