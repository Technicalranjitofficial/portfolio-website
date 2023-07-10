import { PortableText } from "@portabletext/react";
import React, {  useState } from "react";

import SyntaxHighlighter from 'react-syntax-highlighter';
import Header from "../Header";

import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { GoCopy } from 'react-icons/go';
import { BsCheck2 } from 'react-icons/bs';



// import  docco  from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';

// const serializers = {
//   types: {
//     code: (props) => (
//       <pre data-language={props.node.language}>
//         <code>{props.node.code}</code>
//       </pre>
//     ),
//   },
// };

const Post = ({ blogs }) => {
  // const builder = imageUrlBuilder(client);
  const [copid,setCopied] = useState(true);

  // const code = useRef(null);

const handleOnCopy =async(code)=>{


  navigator.clipboard.writeText(code);
  setCopied(false);
  setTimeout(() => {
    setCopied(true);
  }, 1000);
}
  
 
  const SampleImageComponent = () => {
   
    return (
      <div className="justify-center flex rounded-md">
        <img className="rounded-md"
          // src={urlFor(value)
          //   .image(value)
          //   .width('800')
          //   .fit("max")
          //   .auto("format")
          //   .url()}

          src={blogs.poster.asset.url}
          // alt={value.alt || "hellow"}
          loading="lazy"
          // style={{
          //   // Avoid jumping around with aspect-ratio CSS property
          //   // aspectRatio: width / height,
          // }}
        />
      </div>
    );
  };

  return (
    <div className="mt-8 ">
      {/* <div className="text-center text-white font-bold font-Montserrat text-2xl ">
        Post
      </div> */}

      <div className="">
        <Header   value={blogs.poster} info={{
      createdAt:blogs.createdAt&&blogs.createdAt,
      postedBy:blogs.user.title,
      poster:blogs.poster.asset.url
  
    }}/>
      </div>
      <div className='border-t mt-7 border-gray-600 '></div>
      <div className="md:px-2 md:border-l-2 border-slate-500 md:border-r-2 md:border-b-2" >
      <PortableText

      value={blogs.contentRaw}
      components={{
        types: {
          image: (props) => SampleImageComponent(props.value),
          code: (props) => (
             <div className="relative group">
              <button onClick={()=>handleOnCopy(props.value.code)} className="absolute right-5 top-2 border group-hover:opacity-100 border-slate-400 p-2 rounded-md opacity-0 transition-opacity duration-100 hover:bg-gray-600 text-white">{copid?<GoCopy size={20}/>:<BsCheck2 className="text-green-300" size={20}/>}</button>
              <div >
              <SyntaxHighlighter showLineNumbers   style={atomOneDark} id="code" className="rounded-md bg-red-400 mt-2 mb-2"language="javascript" >
              {props.value.code}
              {console.log(props)}
            </SyntaxHighlighter>
              </div>
             </div>

          ),

         
        },
        listItem: {
          // Ex. 1: customizing common list types
          bullet: ({children}) => <div className="ml-12 mt-1">
              <li className="font-Lato"  style={{listStyleType: 'circle'}}>{children}</li>
          </div>,
          number: ({children}) => <li style={{listStyleType: 'number'}} className="mt-lg ml-10 mb-1 text-white">{children}</li>,

          // Ex. 2: rendering custom list items
          checkmarks: ({children}) => <li>✅ {children}</li>,
        },
        list: {
          // Ex. 1: customizing common list types
          bullet: ({children}) => <ul  className="mt-xl text-white">{children}</ul>,
          number: ({children}) => <ol className="mt-lg text-white">{children}</ol>,
      
          // Ex. 2: rendering custom lists
          // checkmarks: ({children}) => <ol className="m-auto text-lg">{children}</ol>,
        },

        marks: {
          link: ({children, value}) => {
            
            // const rel = value.url && !value.url.startsWith('/') ? 'noreferrer noopener' : undefined
            return (
              <a className="text-blue-500" href={value.url} rel="noreferrer">
                {children}
              </a>
            )
          },
          color:(props)=>(
          //  props
          // console.log("present",props)
        <span style={{color:`${props.value.hex}`}}>{props.text}</span>
          )
        },

        
        block: {
          // Customize block types with ease
          h1: ({ children }) => (
            <h1 className="text-2xl md:text-3xl font-semibold mb-6 mt-6 font-Roboto text-slate-200">{children}</h1>
          ), 
          h2: ({ children }) => (
            <h1 className="text-xl md:text-2xl font-semibold mb-6 mt-6 font-Roboto text-slate-200">{children}</h1>
          ),

          h3: ({ children }) => (
              <h3 className="text-lg md:text-xl font-semibold mb-5 mt-5 font-Roboto text-slate-200">{children}</h3>
            ),
           
            
          
          normal: ({ children }) => <p className="text-white mt-3 text-sm md:text-base font-OpenSans">{children}</p>,

          // Same applies to custom styles
          customHeading: ({ children }) => (
            <h2 className="text-lg text-primary text-purple-700">
              {children}
            </h2>
          ),
        },
      }}
    />
      </div>

      

     
    </div>
  );
};

export default Post;
