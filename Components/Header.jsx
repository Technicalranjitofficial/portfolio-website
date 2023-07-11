import { convertDate } from '@/Redux/helper/Other'
import React from 'react'

const Header = ({info}) => {
    // console.log(info)
  return (
    <div className='flex flex-col w-full border-t-2 border-l-2 border-r-2 border-b-2 md:border-b-0 border-slate-500 mt-4 rounded-t-md'>
        <div className="justify-center items-center w-full flex">
        <img
          // src={urlFor(value)
          //   .image(value)
          //   .fit("max")
          //   .auto("format")
          //   .url()}

          src={info.poster}
          // alt={value.alt || "hellow"}
          loading="lazy"
         
        />
    </div>
    <div className='mt-6 mb-6'>
      <h1 className='text-white ml-1 font-bold text-2xl md:text-3xl font-Alegreya'> Microsoft PowerPoint 2021 For Free </h1>
      <div className='mt-1'>
        <span className='ml-2 font-Montserrat text-xs md:text-sm text-white'>{convertDate(info.createdAt)}</span>
        <span className='ml-2 font-Montserrat text-xs md:text-sm text-white'>Leave A reply</span>
        <span className='ml-2 font-Montserrat text-xs md:text-sm text-white'>Posted by: <span className='text-cyan-500 font-Alegreya font-semibold'>{info.postedBy}</span></span>
        
      </div>
    </div>
    </div>
  )
}

export default Header