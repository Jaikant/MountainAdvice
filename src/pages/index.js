import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Photon from '../Photon';
import Header from '../components/Header';
import First from '../components/First';
import Second from '../components/Second';
import Third from '../components/Third';
import Fourth from '../components/Fourth';
import Fifth from '../components/Fifth';
import Footer from '../components/Footer';

import '../styles/main.scss';
import '../styles/custom.scss';

export default function Index(props) {
  const { data } = props;
  const title = 'Mountain Advice Adventure Travel';
  const description = 'Join us for the treks and tours in the Garhwal Indian Himalayas. Dayara Bugayal, Dodital, Audens Col, Kedartal are some of our famous treks.';

  return (
    <Photon>
      <Helmet>
        <title> {title} </title>
        <meta name="description" content={description} />
        <meta name="Keywords" content={'Dayara Bugyal trek, Dodital trek, Kedartal trek'} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={`https://mountainadvice.com`} />
        <meta
          property="og:description"
          content={description}
        />
        <meta
          name="twitter:description"
          content={description}
        />
        {data.bgImage.resize.src && (
          <meta
            property="og:image"
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
      <Header />
      <First />
      <hr />
      <Third />
      <hr />
      <Fourth />
    </Photon>
  );
}

export const homeQuery = graphql`
  query homequery {
    bgImage: imageSharp(id: { regex: "/cover/" }) {
        resize(width: 1200, height: 630, cropFocus: CENTER) {
          # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
          src
        }
      }
  }
`

