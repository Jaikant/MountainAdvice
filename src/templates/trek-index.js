import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import BlogCard from '../components/blog-cards';


const IndexPage = (props) => {
  const { location, data, pathContext } = props
  const { data: apiData } = pathContext;
  const { edges : images } = data.allImageSharp
  const Heading = location.pathname == "/expedition/"
    ? <h3> Contact us to check your eligibility to join our expeditions </h3> 
    : <h3> We would love to host you on one of our himalayan treks </h3>;
  return (
   <div>
     <div css={`
            margin: 32px;
            text-align: center;
          `}
     >
       {Heading}
     </div>
     <div style={{
           display: 'flex',
           flexWrap: 'wrap',
           justifyContent: 'center'
         }}
     >
      {
        apiData.allMarkdownRemark.edges.map((post, index) => {
          const { node } = post
          return (
            <BlogCard key={node.id} post={node} images={images}/>
          )
        })
      }
      </div>
    </div>
  )
}

export const blogQuery = graphql`
  query BlogQuery {
    bgImage: imageSharp(id: { regex: "/background/" }) {
      resize(width: 1200, height: 630, cropFocus: CENTER) {
        # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
        src
      }
    }
    ...trekCard
  }
`;

export default IndexPage
