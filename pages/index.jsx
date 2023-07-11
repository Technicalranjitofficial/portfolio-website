import NavBar from "@/Components/NavBar";
import RecentProjects from "@/Components/RecentProjects";
// import RecentPosts from '@/Components/posts/RecentPosts'
import Info from "@/Components/Info";
import NewsLetter from "@/Components/NewsLetter";
import Copyright from "@/Components/Copyright";
// import Navbar from '@/Components/Navbar'

import RecentPosts from "@/Components/post/RecentPosts";

import { useQuery } from "@apollo/client";
import { GET_POST_MAIN } from "@/Services/graphql/query";
import TerminalHome from "@/Components/Terminal/TerminalHome";
import Post from "@/Components/post/Post";

export default function Home() {
  const { data, error, loading } = useQuery(GET_POST_MAIN, {
    variables: { limit: 10 },
  });
  if (loading) {
    console.log("loading...");
  }
  if (error) {
    console.log(error);
  }

  if (data) {
    console.log(data);
  }
  return (
    <>

    <div className="bg-slate-900 min-h-screen">
    <div className="mx-auto max-w-screen-xl px-3 md:px-0 ">
          <div className="w-full bg-slate-900 rounded-md fixed max-w-screen-xl mx-auto px-1 py-6 z-50">
          <NavBar />
          </div>

         <div className="pt-28">
         <Info />
         </div>

          <div>
            <h1 className="text-green-500 font-bold mt-5 mb-3">__Terminal__</h1>
            <TerminalHome />
          </div>

          <div>
            <span className="text-white font-bold text-xl md:text-2xl font-Alegreya">
              Recent <span className="text-cyan-500">Projects</span>
            </span>

            {data ? (
              <RecentProjects projects={data.allProject} />
            ) : (
              <h1 className="text-white">Loading..</h1>
            )}
          </div>
          <br />
          <div className="mt-6">

          <span className="text-white font-bold text-xl  md:text-2xl font-Alegreya">
            Recent <span className="text-cyan-400">Blogs</span>
          </span>
          {data && <RecentPosts blogs={data.allBlog} />}
          <div className="border-t mt-7 border-gray-600 "></div>
          </div>
          {/* <Skills/>  */}

          {/* <Post/> */}
           <NewsLetter />
          <div className="border-t mt-7 border-gray-600 "></div>
          <Copyright />
    </div>
    </div>
      {/* <div className="bg-slate-900 py-0">
        <div className="mx-auto max-w-screen-lg px-3 ">
          <div className="w-full bg-slate-900 rounded-md fixed max-w-screen-lg mx-auto px-1 py-0 z-50">
          <NavBar />
          </div>

         <div className="mt-20">
         <Info />
         </div>

          <div>
            <h1 className="text-green-500 font-bold mt-5 mb-3">__Terminal__</h1>
            <TerminalHome />
          </div>

          <div>
            <span className="text-white font-bold text-xl md:text-2xl font-Alegreya">
              Recent <span className="text-cyan-500">Projects</span>
            </span>

            {data ? (
              <RecentProjects projects={data.allProject} />
            ) : (
              <h1 className="text-white">Loading..</h1>
            )}
          </div>
          <br />
          <div className="mt-6">

          <span className="text-white font-bold text-xl  md:text-2xl font-Alegreya">
            Recent <span className="text-cyan-400">Posts</span>
          </span>
          {data && <RecentPosts blogs={data.allBlog} />}
          <div className="border-t mt-7 border-gray-600 "></div>
          </div>
          {/* <Skills/> */}

          {/* <Post/> */}
          {/* <NewsLetter />
          <div className="border-t mt-7 border-gray-600 "></div>
          <Copyright /> */}
        {/* </div> */}
      {/* </div> */} 
    </>
  );
}
