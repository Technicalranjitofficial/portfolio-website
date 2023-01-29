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
const inter = Inter({ subsets: ['latin'] })
require("dotenv").config();

const client = createClient({
  projectId: process.env.PROJECT_ID,
  dataset: process.env.DATASET,
  apiVersion: "2022-03-25",
  useCdn: true
});



export default function Home({blogs,projects}) {
  return (
    <>
  <div className='bg-slate-900 '>
   
    <div className='mx-auto max-w-screen-lg px-3 py-6'>
<NavBar/>
<Info/>
<RecentProjects projects={projects} client={client}/>
{blogs.length>0 && <RecentPosts blogs={blogs}/>}
<NewsLetter/>
<div className='border-t mt-7 border-gray-600 '></div>
<Copyright/>
    </div>
  </div>
    </>
  )
}

export async function getServerSideProps(){
  const blogs = await client.fetch(`*[_type == "blog"]`);
  const projects = await client.fetch(`*[_type == "Project"]`)
  console.log("project",projects);
  return{
    props:{
      blogs,
      projects
    }
  }
}
