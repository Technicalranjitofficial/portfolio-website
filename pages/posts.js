import React from 'react'
import NavBar from '@/Components/NavBar'
import { createClient } from 'next-sanity';
import Info from '@/Components/Info'
import NewsLetter from '@/Components/NewsLetter'
import Copyright from '@/Components/Copyright'
import Post from '@/Components/Post'

const client = createClient({
  projectId: "helkh138",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false
});
const Posts = ({blogs}) => {
    console.log(blogs)
  return (
    <>
    <div className='bg-slate-900'>
      <div className='mx-auto max-w-screen-lg px-3 py-6'>
  <NavBar/>
  <Post client={client} blogs={blogs}/>
  <NewsLetter/>
  <div className='border-t mt-7 border-gray-600 '></div>
  <Copyright/>
      </div>
    </div>
      </>
  )
}

export default Posts



export async function getServerSideProps(){
    
    const blogs = await client.fetch(`*[_type == "blog"]`);
    console.log(blogs)
  
    return{
      props:{
        blogs
      }
    }
  
  }