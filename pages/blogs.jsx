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
import BlogHead from "@/Components/post/BlogHead";
import BlogList from "@/Components/post/BlogList";

import {AiOutlineSearch} from "react-icons/ai"

export default function Blogs() {
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

  const a =[1,2,3,4,5,7,8,9,10,11,23,3,4,55]
  return (
    <>
      <div className="bg-slate-900 min-h-screen">
        <div className="mx-auto max-w-screen-xl px-3 md:px-0 s ">
          <div className="w-full bg-slate-900 rounded-md fixed max-w-screen-xl mx-auto px-1 py-6 z-50">
            <NavBar />
          </div>

     <div className=" pt-28">
        <BlogHead/>
     </div>

     <div className="mt-28 text-white">
        <div className="w-full justify-between flex flex-row">
            <div>
                Posts
            </div>
           <div className="border-slate-700 border flex justify-center items-center pr-5 rounded-lg">
           <input className="bg-transparent  text-white outline-none py-2 px-3
            text-center" type="text" />
           <AiOutlineSearch className="text-slate-500" size={30}/>
           </div>
        </div>

        <br />
        <BlogList blogs={a} img="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"/>
     </div>

   <div className="w-full flex justify-center items-center mt-14 pb-28">
   <button className="text-white border-slate-700 hover:border-slate-600
   hover:bg-slate-800 font-bold border px-8 py-3 rounded-lg" onClick={()=>{
    a.push(2);
   }}>Load More</button>
   </div>

        </div>
      </div>
     
    </>
  );
}
