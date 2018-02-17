import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';
import BlogCard from '../components/blog-cards';


const IndexPage = (props) => {
  const { location, data, pathContext } = props
  const { data: apiData } = pathContext;
  const { edges : images } = data.allImageSharp
  const heading = location.pathname == "/expedition/"
    ? 'Contact us to check your eligibility to join our expeditions'
    : 'We would love to host you on one of our himalayan treks';

  const title = location.pathname == "/expedition/"
    ? 'Mountain Advice Expeditions'
    : 'Mountain Advice Treks';
  return (
   <div>
      <Helmet>
        <title> {title} </title>
        <meta name="description" content={heading} />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={heading}
        />
        <meta
          name="twitter:description"
          content={heading}
        />
        {data.bgImage.resize.src && (
          <meta
            name="og:image"
            content={`https://mountainadvice.com${
              data.bgImage.resize.src
            }`}
          />
        )}
        {data.bgImage.resize.src && (
          <meta
            name="twitter:image"
            content={`https://mountainadvice.com${
              data.bgImage.resize.src
            }`}
          />
        )}
        <meta name="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
      </Helmet>
     <div css={`
            margin: 32px;
            text-align: center;
          `}
     >
       <h3> {heading} </h3>
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
    bgImage: imageSharp(id: { regex: "/cover/" }) {
      resize(width: 1200, height: 630, cropFocus: CENTER) {
        # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
        src
      }
    }
    ...trekCard
  }
`;

export default IndexPage
