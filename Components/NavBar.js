import React from 'react'

const NavBar = () => {
  return (
   <nav className='bg-slate-900 flex justify-between '>
   <div>
    <span className='text-white font-bold text-3xl'>Ranjit Das</span>
   </div>
   <div className='items-center  hidden sm:flex'>
    <a href="" className='mx-2 text-slate-300 items-center hover:text-slate-400 font-semibold font-xl'>Home</a>
    <a href="" className='mx-2 text-slate-300 items-center hover:text-slate-400 font-semibold font-xl'>About</a>
    <a href="" className='mx-2 text-slate-300 items-center hover:text-slate-400 font-semibold font-xl'>CV</a>
   </div>
   </nav>
  
  )
}

export default NavBar
