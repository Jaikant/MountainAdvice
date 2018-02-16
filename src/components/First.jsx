import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import image_0 from '../images/pic01.jpg';

export default function First(props) {
 return (
   <section id="one" className="main style1">
     <div className="container">
       <div className="row 150%">
         <div className="6u 12u$(medium) custom-medium">
           <header className="major">
             <h2> Dayara Bugyal Trek</h2>
           </header>
           <p> The Dayara Bugyal trek is famous for meadows and views. From Dyara Bugyal you can see the Gangotri Range, Shrikanth peak, Jaunli peak, Dropadi Ka Danda. And from the northern side of Dayara Bugyal, you can see the Bunder Poonch peak & black peak. We caught this dog, trying to figure this out :)
           </p>
         </div>
         <div className="6u 12u$(medium) important(medium) custom-medium">
           <span className="image fit"><img src={image_0} alt="" /></span>
         </div>
       </div>
     </div>
   </section>
 )
}
