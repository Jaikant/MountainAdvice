import React from 'react';
import Link from 'gatsby-link';
import mountain from '../mountain.svg';

export default function Header(props) {
 return (
   <section id="header">
     <div className="inner">
       <img src={mountain} alt="mountain advice logo" width="50" height="50" />
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
