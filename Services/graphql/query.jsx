import { gql } from "@apollo/client";

export const GET_POST_MAIN = gql`

query GetPost($limit:Int){
    allBlog(limit:$limit){
          
   title,
   description,
   slug{
     current
   }
   poster{
     asset{
       url
     }
   }
 
   user{
     title
   }
   createdAt
   
   
   
    }

    allProject{
        title,
        description,
     
        tags,
        createdAt,
        githubLink,
        demolink
        projectImage{
          asset{
            url
          }
        }
        
        
        
      }
}

`;


export const SINGLE_POST=gql`
query GetSinglePost($slug:String){
    allBlog(where:{slug:{current:{eq:$slug}}}){

     
        title,
   description,
   slug{
     current
   }
   poster{
     asset{
       url
     }
   }
 
   user{
     title
   }
   createdAt
    contentRaw
  }
}

`