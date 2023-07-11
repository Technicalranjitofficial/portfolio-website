import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const History = ({scrollRef}) => {
  const history = useSelector((state) => state.TerminalSlice.history);

  useEffect(()=>{
    if(scrollRef.current){
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  },[history])
  return (
    <div>
      {history &&
        history.map((val,index) => {
          return (
            <div key={index}>
              <div>
                <h1 className="text-cyan-400">
                  <span className="text-red-400">root</span>
                  <span className="text-green-300">@</span>{" "}
                  <span className="text-cyan-500">technicalranjit</span>
                  <span className="text-green-300">:$ ~ </span>

                  {val.command}
                </h1>
              </div>
              {/* <p>{val.command}</p> */}
              <div className="text-green-500">
                {/* {ReactHtmlParser(val.output)} */}

                <pre>
                    {ReactHtmlParser(val.output)}
                </pre>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default History;
