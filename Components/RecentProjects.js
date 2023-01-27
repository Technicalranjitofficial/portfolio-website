import React from "react";

const RecentProjects = () => {
  return (
    <div className="flex justify-center mt-6">
      <div className="">
        <div className="flex flex-col">
          <span className="text-white font-bold text-xl md:text-2xl font-Alegreya">
            Recent <span className="text-cyan-500">Projects</span>
          </span>
          <div className="mt-3 bg-slate-800 p-3 flex items-center rounded-md md:flex-row sm:flex-col flex-col lg:flex-row ">
            <img
              className="max-h-32 max-w-96 hover:translate-y-1 cursor-pointer"
              src="/assets/images/project-maps.png"
              alt="img"
            />

            <div className="ml-3 rounded-2xl">
              <div className="flex items-center rounded-md md:flex-row sm:flex-col flex-col lg:flex-row md:mt-0 mt-2">
                <span className="text-white font-bold text-center text-xl font-Roboto">
                  Random Chat App Using React Js
                </span>
                <div className="ml-2 md:mt-0 mt-2">
                  <span className="ml-2 bg-fuchsia-400 text-fuchsia-900 rounded px-3 py-1.5 font-semibold text-xs font-Montserrat">
                    Javascript
                  </span>
                  <span className="ml-2 bg-green-500 rounded px-3  text-gray-800  font-semibold text-xs py-1.5 font-Montserrat">
                    Reactjs
                  </span>
                  <span className="ml-2 bg-cyan-500 rounded px-3 text-xs text-gray-800 py-1.5 font-semibold font-Montserrat">
                    Nextjs
                  </span>
                  <span className="ml-2 bg-yellow-500 rounded px-3 text-xs text-gray-800 py-1.5 font-semibold font-Montserrat">
                    tag1
                  </span>
                </div>
              </div>
              <p className="mt-2 text-gray-300 font-RobotoSlab">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur nobis dignissimos pariatur deleniti maiores
                mollitia repellendus ex dolorum, sunt, magnam, in nesciunt sint
                earum doloribus! Eligendi magnam illum eum architecto.
              </p>
            </div>
          </div>  <div className="mt-3 bg-slate-800 p-3 flex items-center rounded-md md:flex-row sm:flex-col flex-col lg:flex-row ">
            <img
              className="max-h-32 max-w-96 hover:translate-y-1 cursor-pointer"
              src="/assets/images/project-fire.png"
              alt="img"
            />

            <div className="ml-3 rounded-2xl">
              <div className="flex items-center rounded-md md:flex-row sm:flex-col flex-col lg:flex-row md:mt-0 mt-2">
                <span className="text-white text-center font-bold text-xl font-Alegreya ">
                  Random Chat App Using React Js
                </span>
                <div className="ml-2 md:mt-0 mt-2">
                  <span className="ml-2 bg-fuchsia-400 text-fuchsia-900 rounded px-3 py-1.5 font-semibold text-xs">
                    Javascript
                  </span>
                  <span className="ml-2 bg-green-500 rounded px-3  text-gray-800  font-semibold text-xs py-1.5">
                    Reactjs
                  </span>
                  <span className="ml-2 bg-cyan-500 rounded px-3 text-xs text-gray-800 py-1.5 font-semibold ">
                    Nextjs
                  </span>
                  <span className="ml-2 bg-yellow-500 rounded px-3 text-xs text-gray-800 py-1.5 font-semibold ">
                    tag1
                  </span>
                </div>
              </div>
              <p className="mt-2 text-gray-300 font-RobotoSlab">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur nobis dignissimos pariatur deleniti maiores
                mollitia repellendus ex dolorum, sunt, magnam, in nesciunt sint
                earum doloribus! Eligendi magnam illum eum architecto.
              </p>
            </div>
          </div>  <div className="mt-3 bg-slate-800 p-3 flex items-center rounded-md md:flex-row sm:flex-col flex-col lg:flex-row ">
            <img
              className="max-h-32 max-w-96 hover:translate-y-1 cursor-pointer"
              src="/assets/images/project-web-design.png"
              alt="img"
            />

            <div className="ml-3 rounded-2xl">
              <div className="flex items-center rounded-md md:flex-row sm:flex-col flex-col lg:flex-row md:mt-0 mt-2">
                <span className="text-white text-center font-bold text-xl ">
                  Sorting Visualizer Using ReactJs
                </span>
                <div className="ml-2 md:mt-0 mt-2">
                  <span className="ml-2 bg-fuchsia-400 text-fuchsia-900 rounded px-3 py-1.5 font-semibold text-xs">
                    Javascript
                  </span>
                  <span className="ml-2 bg-green-500 rounded px-3  text-gray-800  font-semibold text-xs py-1.5">
                    Reactjs
                  </span>
                  <span className="ml-2 bg-cyan-500 rounded px-3 text-xs text-gray-800 py-1.5 font-semibold ">
                    Nextjs
                  </span>
                  <span className="ml-2 bg-yellow-500 rounded px-3 text-xs text-gray-800 py-1.5 font-semibold ">
                    tag1
                  </span>
                </div>
              </div>
              <p className="mt-2 text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur nobis dignissimos pariatur deleniti maiores
                mollitia repellendus ex dolorum, sunt, magnam, in nesciunt sint
                earum doloribus! Eligendi magnam illum eum architecto.
              </p>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
