import React from 'react';
import './reviews.css';
import sherpafeet from './textLogo.png';

const ReviewBox = (props) => {
   console.log("Props are: ", props);
   const { comment, destination, month, year, rating, usr } = props;
   return (
     <div css={{
            padding: `16px`,
          }}
     >
     <figure className="snip1204">
       <blockquote> 
           <div> {comment} </div>
       </blockquote>
       <div className="author">
         <img src={usr.picture} alt={`Review by ${usr.firstname}`}/>
         <h5>{usr. firstname}{` `}{usr.lastname}</h5>
         <span>{month && `${month} ${year}`}</span>
       </div>
     </figure>
     </div>
   )
} 

export default (props) => {
 const { edges } = props.data.allRatings;
 return (
   <div>
   <div css={{
         marginTop: `32px`,
         marginLeft: `32px`,
         marginRight: `32px`,
         textAlign: `center`,
        }}
   >
   <h3> Reviews for Mountain Advice Adventure Travel </h3>
   </div>
   <div css={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `center`,
        }} 
   >
      {edges.map((rev, index) => {
           const { node } = rev;
           return (
             <ReviewBox key={node.id} {...node} />
           )
        })
      }
   </div>
   <div style={{
          marginRight: `16px`,
          marginLeft: `16px`,
          textAlign: `center`,
          marginBottom: `100px`,
        }}
   >
     <a href="https://sherpafeet.com/guide/RajeshThakur">
       <img src={sherpafeet} width={100} alt="Reviews on sherpafeet"/> 
       <h3> Write a review for  Mountain Advice Adventure Travel </h3>
     </a>
   </div>
   </div>
 )
}

export const pageQuery = graphql`
  query getratings {
  allRatings {
    edges {
      node {
        id
        comment
        destination
        month
        year
        rating
        date
        usr {
          picture
          firstname
          lastname
        }
      }
    }
  }
  }
`

