import React from "react";

const Info = () => {
  return (
    <div className="flex lg:flex justify-evenly lg:justify-evenly mt-6">
     <div className="flex flex-col md:flex-row justify-center items-center">
     <div className="flex flex-col ">
        <h1 className="font-bold text-4xl text-yellow-100 font-Montserrat">Hi there, I'm <span className="text-cyan-500">Ranjit</span></h1>
        <p className="my-3 text-sm md:text-xl text-white font-RobotoSlab">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          minus, facere ullam eius placeat harum tenetur doloremque alias ad,
          ipsam rem vero repellat eaque aperiam natus quas beatae distinctio
          odit?
        </p>
        <div className="link flex">
       <a href="" className="hover:translate-y-1"> <img className="w-11" src="/assets/images/linkedin-icon.png" alt="" /></a>
       <a href="" className="hover:translate-y-1"> <img className="w-11" src="/assets/images/facebook-icon.png" alt="" /></a>
       <a href="" className="hover:translate-y-1"> <img className="w-11" src="/assets/images/youtube-icon.png" alt="" /></a>
       <a href="" className="hover:translate-y-1"> <img className="w-11 bg-slate-300 rounded-lg" src="/assets/images/github.png" alt="" /></a>
           
        
        
        </div>
      </div>
      <div className="mt-3">
        <img className="h-auto w-72 max-w-sm mx-auto"  src="https://creativedesignsguru.com/demo/astro-boilerplate/assets/images/avatar.svg" alt="img" />
      </div>

      
     </div>
    </div>
  );
};

export default Info;
