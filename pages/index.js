import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from '@/Components/NavBar'
import RecentProjects from '@/Components/RecentProjects'
// import RecentPosts from '@/Components/posts/RecentPosts'
import Info from '@/Components/Info'
import NewsLetter from '@/Components/NewsLetter'
import Copyright from '@/Components/Copyright'
// import Navbar from '@/Components/Navbar'

import { createClient } from 'next-sanity';
import RecentPosts from '@/Components/post/RecentPosts'
import Skills from '@/Components/Skills'
import Post from '@/Components/post/Post'
import { useQuery } from '@apollo/client'
import { GET_POST_MAIN } from '@/Services/graphql/query'
const inter = Inter({ subsets: ['latin'] })
// require("dotenv").config();

// const client = createClient({
//   projectId: process.env.PROJECT_ID,
//   dataset: process.env.DATASET,
//   apiVersion: "2022-03-25",
//   useCdn: true
// });



export default function Home({blogs,projects}) {

  const {data,error,loading} = useQuery(GET_POST_MAIN,{variables:{limit:10}});
  if(loading){
    console.log("loading...");
  }

  if(data){
    console.log(data);
  }
  return (
    <>
  <div className='bg-slate-900 '>
   
    <div className='mx-auto max-w-screen-lg px-3 py-6'>
<NavBar/>
<Info/>

<div>
<span className="text-white font-bold text-xl md:text-2xl font-Alegreya">
          Recent <span className="text-cyan-500">Projects</span>
        </span>

{data ? <RecentProjects projects={data.allProject}/> : <h1 className='text-white'>Loading..</h1> }

</div>
{data && <RecentPosts blogs={data.allBlog}/>}
<div className='border-t mt-7 border-gray-600 '></div>
{/* <Skills/> */}

{/* <Post/> */}
<NewsLetter/>
<div className='border-t mt-7 border-gray-600 '></div>
<Copyright/>
    </div>
  </div>
    </>
  )
}

// export async function getServerSideProps(){
 
//   const blogs = await client.fetch(`*[_type == "blog"]`);
//   const projects = await client.fetch(`*[_type == "Project"]`)
//   // console.log("project",projects);

//   console.log(blogs);
//   return{
//     props:{
//       blogs,
//       projects
//     }
//   }
// }
