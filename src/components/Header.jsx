import React from 'react'
import Link from 'gatsby-link'
import { css } from 'react-emotion'
import mountain from '../MountainAdvice.png'

export default function Header(props) {
 return (
   <section id="header">
     <div className="inner">
       <div css={`
             background-color: white;
             display: inline-block;
             padding: 16px;
            `}
       >
         <img src={mountain} alt="mountain advice logo" height="50" />
       </div>
       <h1> <strong>Mountain Advice</strong><br />
       {` `}Adventure &  Travel</h1>
       <p>We are a bespoke adventure travel company.<br />
       {` `}We organise treks and tours all over Uttarakhand. <br />
       </p>
       <p>
       <span className="icon style1 fa-phone"></span>
       {`   `} +91 8755278296, +91 8126352857, +91 9410522089 <br />
       </p>
       <ul className="actions">
         <li><a href="#one" className="button scrolly">Discover</a></li>
       </ul>
     </div>
   </section>
 )
}
