import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const NavBar = () => {
  return (
   <nav className='bg-slate-900 flex justify-between '>
   <motion.div drag>
    <span className='text-cyan-500 font-bold text-3xl font-Roboto '>Ranjit Das</span>
   </motion.div>
   <div className='items-center  hidden sm:flex'>
    <Link href="/ind" className='mx-2 text-slate-300 items-center hover:text-slate-400 font-semibold font-xl font-Alegreya '>Home</Link>
    <a href="" className='mx-2 text-slate-300 items-center hover:text-slate-400 font-semibold font-xl font-Alegreya'>About</a>
    <a href="" className='mx-2 text-slate-300 items-center hover:text-slate-400 font-semibold font-xl font-Alegreya'>CV</a>
   </div>
   </nav>
  
  )
}

export default NavBar
