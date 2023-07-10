// import ApolloClient from "apollo-client";
import {ApolloClient, InMemoryCache} from "@apollo/client"
// require("dotenv").config();

export const client = new ApolloClient({
  uri:"https://helkh138.api.sanity.io/v1/graphql/production/experiment",
  cache:new InMemoryCache(),

})