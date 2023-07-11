import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <nav className="bg-slate-900 flex justify-between  w-full mx-auto">
      <div
        
      >
        <span className="text-cyan-500 font-bold text-3xl font-Roboto ">
          Ranjit Das
        </span>
      </div>
      <div className="items-center  hidden sm:flex">
        <Link
          href="/"
          className="mx-2 text-slate-300 items-center hover:text-slate-400 font-bold font-xl font-Alegreya "
        >
          Home
        </Link>
        <Link
          href="/about"
          className="mx-2 text-slate-300 items-center hover:text-slate-400 font-semibold font-xl font-Alegreya"
        >
          About
        </Link>
        <Link
          href="/cv"
          className="mx-2 text-slate-300 items-center hover:text-slate-400 font-semibold font-xl font-Alegreya"
        >
          CV
        </Link>
        <Link
          href="/blogs"
          className="mx-2 text-slate-300 items-center hover:text-slate-400 font-semibold font-xl font-Alegreya"
        >
          Blogs
        </Link>        

      </div>
    </nav>
  );
};

export default NavBar;
