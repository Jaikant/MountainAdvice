import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { css } from 'react-emotion';
import { colors } from "../utils/presets";

const linkStyle = {
      letterSpacing: `0.0075rem`,
      lineHeight: 1,
      padding: `16px 16px`,
      textDecoration: `none`,
      textAlign: `center`,
      border: `1px solid lightgrey`,
    };
const linkClass = css(linkStyle);

export default function Footer(props) {
  return (
    <section id="footer">

     <div css={`
            display: flex;
            justify-content: center;
            margin: 16px;
         `}
         className="actions"
      >
       <Link
         to={"/"}
         className="button"
       >
         <div>
          About Us
        </div>
       </Link>
     </div>

      <p>
       Village Didsari, Post Office Maneri, District Uttarkashi < br/>
       Uttarakhand, India, Pin Code - 249193 <br />
       Email: infomountainadvice@gmail.com </p>

      <ul className="icons">
        <li><a href="https://twitter.com/RajeshT59035636" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
        <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
        <li><a href="" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
        <li><a href="mailto:infomountainadvice@gmail.com?Subject=Query for mountainadvice.com" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
      </ul>
      <ul className="copyright">
        <li>&copy; Mountain Advice 2017</li><li>Design: <a href="https://tech47.in">Tech47: Building for India</a></li>
      </ul>
    </section>
  )
}
