import { PortableText } from "@portabletext/react";
import React, { useEffect } from "react";
import { getImageDimensions } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";
import imageUrlBuilder from "@sanity/image-url";
// import PortableText from 'react-portable-text';
const BlockContent = require("@sanity/block-content-to-react");
import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/';

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};

const Post = ({ blogs, client }) => {
  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }
  const SampleImageComponent = (value) => {
    console.log("val", value);
    const { width, height } = getImageDimensions(value);

    console.log("url", urlFor(value).url());
    return (
      <div className="justify-center flex">
        <img
          src={urlFor(value)
            .image(value)
            
            .fit("max")
            .auto("format")
            .url()}
          alt={value.alt || "hellow"}
          loading="lazy"
          style={{
            // Avoid jumping around with aspect-ratio CSS property
            aspectRatio: width / height,
          }}
        />
      </div>
    );
  };

  return (
    <div className="mt-8">
      <div className="text-center text-white font-bold font-Montserrat text-2xl">
        Post
      </div>

      <PortableText
        value={blogs[1].content}
        components={{
          types: {
            image: (props) => SampleImageComponent(props.value),
            code: (props) => (
                <SyntaxHighlighter language="javascript" >
                {props.value.code}
              </SyntaxHighlighter>
            ),
          },
          list: {
            // Ex. 1: customizing common list types
            bullet: ({children}) => <ul  className="mt-xl text-white">{children}</ul>,
            number: ({children}) => <ol className="mt-lg text-white">{children}</ol>,
        
            // Ex. 2: rendering custom lists
            checkmarks: ({children}) => <ol className="m-auto text-lg">{children}</ol>,
          },
          block: {
            // Customize block types with ease
            h1: ({ children }) => (
              <h1 className="text-4xl mb-6 font-Roboto text-white">{children}</h1>
            ),

            h3: ({ children }) => (
                <h3 className="text-2xl mb-6 font-Roboto text-white">{children}</h3>
              ),
             
              
            
            normal: ({ children }) => <p className="text-white">{children}</p>,

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
  );
};

export default Post;
