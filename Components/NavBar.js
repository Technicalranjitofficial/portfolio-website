import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <nav className="bg-slate-900 flex justify-between ">
      <motion.div
        
        className="z-50"
        drag
        dragConstraints={{
            top: 0,
            right: 300,
            bottom: 300,
            left: -10,
        }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        dragElastic={0.7}
        whileTap={{ cursor: "grabbing" }}
      >
        <span className="text-cyan-500 font-bold text-3xl font-Roboto ">
          Ranjit Das
        </span>
      </motion.div>
      <div className="items-center  hidden sm:flex">
        <Link
          href="/ind"
          className="mx-2 text-slate-300 items-center hover:text-slate-400 font-semibold font-xl font-Alegreya "
        >
          Home
        </Link>
        <a
          href=""
          className="mx-2 text-slate-300 items-center hover:text-slate-400 font-semibold font-xl font-Alegreya"
        >
          About
        </a>
        <a
          href=""
          className="mx-2 text-slate-300 items-center hover:text-slate-400 font-semibold font-xl font-Alegreya"
        >
          CV
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
