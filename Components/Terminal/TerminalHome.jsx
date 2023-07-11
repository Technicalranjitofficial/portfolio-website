import React, { useEffect, useRef, useState } from "react";
import CustomInput from "./CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { CommandMap, handleOnTerminalClick } from "@/Redux/helper/TerminalHelper";


import History from "./History";
import { clearHistory, setHistory } from "@/Redux/reducers/TerminalSlice";

const TerminalHome = () => {

  const InputRef = useRef(null);

  const dispatch = useDispatch();
  const ScrollRef = useRef(null);
  

  useEffect(() => {
    
  
    const keyDownHandler = event => {
      // console.log('User pressed: ', event.key);

      if(event.key==="c" && event.ctrlKey){
        dispatch(setHistory({
          command:"^C",
          output:""
        }));

        InputRef.current.value =""
      }

      // if(event.key==="z" && event.ctrlKey){
      //   dispatch(setHistory({
      //     command:"^C",
      //     output:""
      //   }));

      //   InputRef.current.value =""
      // }


      if (event.key === 'Enter') {
       
        event.preventDefault();

        if(InputRef.current.value==="clear"){
          InputRef.current.value =""
          return dispatch(clearHistory());
        }

        // console.log(InputRef.current.value);

        // console.log("message",message)
       if(InputRef.current.value<1){
        dispatch(setHistory({
          command:InputRef.current.value,
          output:""
        }));
       }else{
        dispatch(setHistory({
          command:InputRef.current.value,
          output:CommandMap(InputRef.current.value)
        }));
       }

        InputRef.current.value =""
        // ScrollRef.current.scrollTop = ScrollRef.current.scrollHeight;
        // setMessage("");
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  // console.log(history);
  return (
    <div
      onClick={()=>handleOnTerminalClick(InputRef)}
      className="w-full h-96 bg-slate-900 
      
      border border-cyan-600   p-2
      rounded-md mt-2 mb-10 overflow-y-auto"
      ref={ScrollRef}
    >

      <History scrollRef={ScrollRef}/>
      <CustomInput   inputRef={InputRef} />
    </div>
  );
};

export default TerminalHome;
