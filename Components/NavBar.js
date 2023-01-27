import React from 'react'

const NavBar = () => {
  return (
   <nav className='bg-slate-900 flex justify-between '>
   <div>
    <span className='text-cyan-500 font-bold text-3xl font-Roboto '>Ranjit Das</span>
   </div>
   <div className='items-center  hidden sm:flex'>
    <a href="" className='mx-2 text-slate-300 items-center hover:text-slate-400 font-semibold font-xl font-Alegreya'>Home</a>
    <a href="" className='mx-2 text-slate-300 items-center hover:text-slate-400 font-semibold font-xl font-Alegreya'>About</a>
    <a href="" className='mx-2 text-slate-300 items-center hover:text-slate-400 font-semibold font-xl font-Alegreya'>CV</a>
   </div>
   </nav>
  
  )
}

export default NavBar
