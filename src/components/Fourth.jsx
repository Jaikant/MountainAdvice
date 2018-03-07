import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import image_1 from '../images/dayara.jpg';
import image_2 from '../images/dodital.jpg';
import image_3 from '../images/audens.jpg';


export default function Third(props) {
  return (
    <section id="three" className="main style1 special">
      <div className="container">
        <header className="major">
          <h2>Treks we organise</h2>
        </header>
        <p> We would love to take you one of our treks.</p>
        <div className="row 150%">
          <div className="4u 12u$(medium) custom-medium">
            <span className="image fit"><img src={image_1} alt="" /></span>
            <h3>Dayara Bugyal Trek</h3>
            <p> Dayara Bugyal is a beautiful alpine meadow in the Indian Himalayas. These meadows stretch out to a wide area. We get a breathtaking panoramic view of the Himalayas from here. The dayara bugyal trek passes through dense forests as well. In winters these meadows are covered with snow & look extremely beautiful.</p>
            <ul className="actions">
              <li><Link to="/trek/dayara-bugyal/" className="button">More</Link></li>
            </ul>
          </div>
          <div className="4u 12u$(medium) custom-medium">
            <span className="image fit"><img src={image_2} alt="" /></span>
            <h3>Dodital Hanuman Chatti Trek</h3>
            <p>Dodital is very famous and popular place. It is the birth place of Lord Ganesha. Tal means Lake. On the way to Dodital, we can find different types of flora and fauna and many kinds of birds, animals. We will also be able to see the local high altitude shepherds of the Indian Himalayas. </p>
            <ul className="actions">
              <li><Link to="/trek/dodital-hanuman-chatti-trek/" className="button">More</Link></li>
            </ul>
          </div>
          <div className="4u 12u$(medium) custom-medium">
            <span className="image fit"><img src={image_3} alt="" /></span>
            <h3>Audens Col Trek</h3>
            <p> The Audens col pass is in the Gangotri region, it is a very famous pass in this region. The Audens Col Pass is a technical pass. A difficult trek in the Garhwal Himalayas.</p>
            <ul className="actions">
              <li><Link to="/trek/audens-col-trek/" className="button">More</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
