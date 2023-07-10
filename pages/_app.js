import Loader from '@/Components/Loader'
import '@/styles/globals.css'
import { useState } from 'react'
import Router from 'next/router';
import { ApolloProvider } from '@apollo/client';
import { client } from '../Services/graphql';


export default function App({ Component, pageProps }) {
  const [loading,setLoading] = useState(false);
  Router.events.on("routeChangeStart",()=>{
    setLoading(true);
    console.log("changing")
  })



  Router.events.on("routeChangeComplete",()=>{
    setLoading(false);
    console.log("complete")
  })
  return(
    <>
    <ApolloProvider client={client}>
   {loading &&  <Loader/>}
    <Component {...pageProps} />
    </ApolloProvider>
    </>
  )
}
