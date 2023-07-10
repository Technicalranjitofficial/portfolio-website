import React from 'react'



import NavBar from '@/Components/NavBar';
import Post from '@/Components/post/Post';
import NewsLetter from '@/Components/NewsLetter';
import Copyright from '@/Components/Copyright';
import { useQuery } from '@apollo/client';
import { SINGLE_POST } from '@/Services/graphql/query';
import { useRouter } from 'next/router';

const Posts = () => {

  const router = useRouter();
  const {slug} = router.query;

  const {data,error,loading} = useQuery(SINGLE_POST,{variables:{slug:slug}})

  if(loading){
    return <h1>Loading</h1>
  }

  return (
    <>
    <div className='bg-slate-900'>
      <div className='mx-auto max-w-screen-lg px-3 py-6 '>
  <NavBar/>
  {data && <Post  blogs={data.allBlog[0]}/>}

  {/* {data && console.log(data.allBlog[0])} */}
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



// export async function getServerSideProps(context){
//   const {slug} = context.query;
    
//     const blogs = await client.fetch(`*[_type=="blog" && slug.current=='${slug}']`);
//     const user = await client.fetch(`*[_id == '${blogs[0].User.Admin._ref}']`)

//     console.log("bl",user) 

//     return{
//       props:{
//         blogs:blogs[0],user:user[0]
//       }
//     }
  
//   }