import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Info = () => {
  return (
    <div className="flex lg:flex justify-evenly lg:justify-evenly mt-6">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col relative ">
          <h1 className="font-bold text-4xl text-yellow-100 md:relative md:mb-3 absolute font-Montserrat">
            Hi there, I'm{" "}
            <span className="text-cyan-500">
              <Typewriter
                words={["Ranjit Das", "a coder", "Developer", "Debugger"]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="mt-24 md:mt-0 md:my-2 text-sm md:text-xl text-white font-RobotoSlab">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            minus, facere ullam eius placeat harum tenetur doloremque alias ad,
            ipsam rem vero repellat eaque aperiam natus quas beatae distinctio
            odit?
          </p>
          <div className="mt-3 flex">
            <a href="" className="hover:translate-y-1 rounded-lg">
              <div className="relative">
                <div className="bg-slate-700/80 opacity-0 hover:opacity-80 hover:animate-ping rounded-lg absolute w-11 h-10"></div>
                <img
                  className="w-11 h-10 "
                  src="/assets/images/linkedin-icon.png"
                  alt=""
                />
              </div>
            </a>
            <a href="" className="hover:translate-y-1 rounded-lg">
              <div className="relative">
                <div className="bg-slate-700/80 opacity-0 hover:opacity-80 hover:animate-ping rounded-lg absolute w-11 h-10"></div>
                <img
                  className="w-11 h-10"
                  src="/assets/images/facebook-icon.png"
                  alt=""
                />
              </div>
            </a>
            <a href="" className="hover:translate-y-1 rounded-lg">
              <div className="relative">
                <div className="bg-slate-700/80 opacity-0 hover:opacity-80 hover:animate-ping rounded-lg absolute w-11 h-10"></div>

                <img
                  className="w-11 h-10"
                  src="/assets/images/youtube-icon.png"
                  alt=""
                />
              </div>
            </a>
            <a href="" className="hover:translate-y-1 rounded-lg">
              <div className="relative">
                <div className="bg-slate-700/80 opacity-0 hover:opacity-80 hover:animate-ping rounded-lg absolute w-11 h-10"></div>

                <img
                  className="w-11 h-10 bg-slate-300 rounded-lg"
                  src="/assets/images/github.png"
                  alt=""
                />
              </div>
            </a>
          </div>
        </div>
        <div className="mt-3">
          <img
            className="h-auto w-72 max-w-sm mx-auto animate-pulse"
            src="https://creativedesignsguru.com/demo/astro-boilerplate/assets/images/avatar.svg"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
