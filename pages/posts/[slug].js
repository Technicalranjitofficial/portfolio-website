import React from 'react'

import { createClient } from 'next-sanity';

import { useRouter } from 'next/router';
import NavBar from '@/Components/NavBar';
import Post from '@/Components/post/Post';
import NewsLetter from '@/Components/NewsLetter';
import Copyright from '@/Components/Copyright';

require("dotenv").config();

const client = createClient({
  projectId: process.env.PROJECT_ID,
  dataset: process.env.DATASET,
  apiVersion: "2022-03-25",
  useCdn: false
});
const Posts = ({blogs,user}) => {
  
    const router = useRouter();
    const {slug} = router.query;
    console.log("slug",slug);
  return (
    <>
    <div className='bg-slate-900'>
      <div className='mx-auto max-w-screen-lg px-3 py-6 '>
  <NavBar/>
  <Post user={user && user} client={client} blogs={blogs}/>
  <div className='border-t mt-7 border-gray-600 '></div>
  <NewsLetter/>
  <div className='border-t mt-7 border-gray-600 '></div>
  <Copyright/>
      </div>
    </div>
      </>
  )
}

export default Posts



export async function getServerSideProps(context){
  const {slug} = context.query;
    
    const blogs = await client.fetch(`*[_type=="blog" && slug.current=='${slug}']`);
    const user = await client.fetch(`*[_id == '${blogs[0].User.Admin._ref}']`)
    console.log("bl",user) 

    return{
      props:{
        blogs:blogs[0],user:user[0]
      }
    }
  
  }