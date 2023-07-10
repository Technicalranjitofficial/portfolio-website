import React from "react";

const RecentProjects = ({ projects }) => {


  return (
    <div className="flex justify-center mt-6">
      <div className="flex flex-col w-full">
       
        {projects &&
          projects.map((val, index) => {
            return (
              <motion.div 

              
                key={index}
                className="mt-3 hover:scale-95 md:hover:scale-100 bg-slate-800 relative group   flex items-center rounded-md md:flex-row   flex-col w-full "
              >
                <div className="flex flex-col md:flex-row items-center md:py-2">
                  <div className="absolute -bottom-10 opacity-0  group-hover:bottom-0 group-hover:opacity-100 transition-all duration-100  z-50 bg-slate-900/75 w-full  h-full">
                    <div className="w-full h-full flex items-center gap-4 justify-center">
                     <a href={`${val.demolink}`} target="_blank">
                      <button className=" text-slate-300 font-Alegreya font-semibold bg-green-800  px-4 py-2  hover:bg-green-700 hover:scale-110 rounded-tl-md rounded-br-md">
                        Demo
                      </button>
                      </a> 
                      <a href={`${val.githubLink}`} target="_blank" >
                      <button className=" text-slate-300 font-Alegreya font-semibold hover:bg-cyan-700 bg-cyan-800 px-4 py-2 rounded-tl-md hover:scale-110 rounded-br-md">
                        SourceCode
                      </button>
                      </a>
                    </div>
                  </div>
                  <img
                    className="max-h-32  animate-bounce max-w-96 hover:translate-y-1 cursor-pointer"
                    // src={urlFor(val.projectImage).url()}
                    src={val.projectImage.asset.url}
                    alt="img"
                  />

                  <div className="md:ml-3 rounded-2xl">
                    <div className="flex items-center rounded-md md:flex-row sm:flex-col flex-col lg:flex-row md:mt-0 mt-2">
                      <span className="text-white font-bold text-center text-xl font-Roboto">
                        {val.title}
                      </span>
                      <div className="ml-2 md:mt-0 mt-2 flex">
                        {val.tags && val.tags.map((tg, ind) => {
                          switch (tg) {
                            case "Javascript":
                              return (
                                <img key={ind}
                                  className=" mr-2  animate-pulse w-8 transition-all cursor-pointer"
                                  src="/assets/images/js.svg"
                                  title="Nodejs"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                />
                              );
                            case "ReactJs":
                              return (
                                <img key={ind}
                                  className=" mr-2 animate-spin w-8 transition-all cursor-pointer"
                                  src="/assets/images/react.svg"
                                  title="ReactJs"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                />
                              );

                            case "NextJs":
                              return (
                                <img key={ind}
                                  className=" mr-2 animate-pulse fill-red-600 w-8 transition-all cursor-pointer"
                                  src="/assets/images/next3.png"
                                  title="NextJs"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                />
                              );
                            case "Socket.io":
                              return (
                                <img key={ind}
                                  className=" mr-2 animate-spin w-8 transition-all cursor-pointer"
                                  src="/assets/images/Socketio.svg"
                                  alt="socket"
                                  title="Socket.io"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                />
                              );
                            case "Python":
                              return (
                                <img key={ind}
                                  className=" mr-2 animate-spin w-8 transition-all cursor-pointer"
                                  src="/assets/images/py.svg"
                                  title="Python"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                />
                              );
                            case "Tailwind":
                              return (
                                <img key={ind}
                                  className=" mr-2 animate-pulse w-8 transition-all cursor-pointer"
                                  src="/assets/images/tailwind2.svg"
                                  title="Tailwind"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                />
                              );
                            case "Bootstrap":
                              return (
                                <img key={ind}
                                  className=" mr-2 animate-spin w-8 transition-all cursor-pointer"
                                  src="/assets/images/react.svg"
                                  title="Bootstap"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                />
                              );

                            default:
                              break;
                          }
                        })}
                        {/* <span className="ml-2 bg-green-500 rounded px-3  text-gray-800  font-semibold text-xs py-1.5 font-Montserrat">
                  Reactjs
                  </span>
                  
                  <span className="ml-2 bg-yellow-500 rounded px-3 text-xs text-gray-800 py-1.5 font-semibold font-Montserrat">
                  tag1
                </span> */}
                      </div>
                    </div>
                    <p className="mt-2 p-3 md:p-0 text-gray-300 font-RobotoSlab">
                      {val.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}

        {/* <div className="mt-3 bg-slate-800 p-3 flex items-center rounded-md md:flex-row sm:flex-col flex-col lg:flex-row ">
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
          </div>
            <div className="mt-3 bg-slate-800 p-3 flex items-center rounded-md md:flex-row sm:flex-col flex-col lg:flex-row ">
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
          </div> */}
      </div>
    </div>
    // </div>
  );
};

export default RecentProjects;
