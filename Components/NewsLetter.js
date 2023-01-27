import React from 'react'

const NewsLetter = () => {
  return (
   <div className='flex mt-9 flex-col md:flex-row'>
    <div className="">
        <h1 className='font-bold text-2xl text-white'>Subscribe to my Newsletters</h1>
        <p className='text-slate-300 mt-2 text-md font-mono pr-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia labore similique quos ratione vitae, obcaecati nemo natus blanditiis ducimus fuga eos, minus est sint enim? Odit enim quos culpa? Sed!</p>
    </div>
    <div className=" items-center w-full flex mt-2 justify-center  md:justify-end">
      <form action="" className='flex rounded-full bg-slate-800 px-4 py-2 w-full focus-within:ring-2  focus-within:ring-cyan-600 hover:ring-2 hover:ring-cyan-600'>
      <input type="text" className='w-full appearance-none bg-slate-800 focus:outline-none ' />
        <button className='ml-2 shrink-0 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 px-3 py-1 text-sm font-medium hover:from-sky-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/50'>Send</button>
      </form>
    </div>
   </div>
  )
}

export default NewsLetter