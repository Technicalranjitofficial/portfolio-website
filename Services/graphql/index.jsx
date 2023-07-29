// import ApolloClient from "apollo-client";
import {ApolloClient, InMemoryCache} from "@apollo/client"
// require("dotenv").config();

export const client = new ApolloClient({
  uri:"",
  cache:new InMemoryCache(),

})
