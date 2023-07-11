import Loader from '@/Components/Loader'
import '@/styles/globals.css'
import { useState } from 'react'
import Router from 'next/router';
import { ApolloProvider } from '@apollo/client';
import { client } from '../Services/graphql';
import { Provider } from 'react-redux';
import { store } from '@/Redux/store/store';


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

    <Provider store={store}>
    <ApolloProvider client={client}>
   {loading &&  <Loader/>}
    <Component {...pageProps} />
    </ApolloProvider>
    </Provider>
    </>
  )
}
