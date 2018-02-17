/* eslint-disable no-undef, react/prop-types, react/no-danger */
import React from 'react';
import styled, { css } from 'react-emotion';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

const Box = styled.div`
  position: relative;
  overflow: hidden;
  text-align: center;
  margin: 3.5rem auto 3.5rem auto;
`;

const blogTheme = css`
  max-width: 900px;
  margin: 4.5rem auto 4.5rem auto;
  a {
    text-decoration: underline;
    text-decoration-skip: ink;
  }
`;

const svgStyles = css`
  opacity: 0.5;
  transition: opacity 0.15s ease-in;
  &:hover {
    text-decoration: none;
    box-shadow: none;
    opacity: 1;
    transition: opacity 0.15s ease-in;
  }
`;

const Styledp = styled.p`
  margin: 0;
  font-size: 0.8em;
`;

const Template = ({ data, pathContext }) => {
  const { markdownRemark: post } = data;
  const { next, prev, slug } = pathContext;
  const { frontmatter } = post;
  let keywords = 'treks, expeditions, garhwal, uttarakhand, himalayas';
  return (
    <div>
      <div className={blogTheme}>
        <Box css="margin: auto 16px auto 16px;">
          <Helmet>
            <title> {frontmatter.title} </title>
            <meta name="description" content={post.excerpt} />
            <meta name="Keywords" content={keywords} />
            <meta property="og:title" content={frontmatter.title} />
            <meta
              property="og:description"
              content={post.excerpt}
            />
            <meta
              name="twitter:description"
              content={post.excerpt}
            />
            {data.imageSharp.resize.src && (
              <meta
                name="og:image"
                content={`https://mountainadvice.com${
                  data.imageSharp.resize.src
                }`}
              />
            )}
            {data.imageSharp.resize.src && (
              <meta
                name="twitter:image"
                content={`https://mountainadvice.com${
                  data.imageSharp.resize.src
                }`}
              />
            )}
            <meta name="og:type" content="article" />
            <meta name="twitter:label1" content="Reading time" />
            <meta
              name="twitter:data1"
              content={`${post.timeToRead} min read`}
            />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={post.frontmatter.title} />
          </Helmet>
          <h1>{post.frontmatter.title}</h1>
          {post.frontmatter.author ? (
            <Styledp>Written by {post.frontmatter.author.id}</Styledp>
          ) : null}
          <Styledp>{post.timeToRead} min read &middot;</Styledp>
          {data.imageSharp ? <Img sizes={data.imageSharp.sizes} /> : null}
          <div
            css="text-align: left;"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <div css="display: flex; flex: flex-grow; align-items: center;">
            {prev && (
              <Link
                to={prev.fields.slug}
                css="display: flex; flex-grow: 1; font-size: 0.8em;"
              >
                {prev.frontmatter.title}
              </Link>
            )}
            {next && (
              <Link
                to={next.fields.slug}
                css="display: flex; align-self: flex-end; font-size: 0.8em;"
              >
                {next.frontmatter.title}
              </Link>
            )}
          </div>
        </Box>
      </div>
    </div>
  );
};

export const blogPostQuery = graphql`
  query TrekByPath($slug: String!, $imageregex: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      timeToRead
      tableOfContents
      frontmatter {
        title
      }
    }
    imageSharp(id: { regex: $imageregex }) {
      id
      sizes(maxWidth: 900) {
        ...GatsbyImageSharpSizes
      }
      resize(width: 1500, height: 1500) {
        src
      }
    }
  }
`;

export default Template;
