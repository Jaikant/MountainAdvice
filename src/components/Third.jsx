import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import image_1 from '../images/pic02.jpg';
import image_2 from '../images/pic03.jpg';
import image_3 from '../images/pic04.jpg';


export default function Third(props) {
  return (
    <section id="three" className="main style1 special">
      <div className="container">
        <header className="major">
          <h2>Expeditions we organise</h2>
        </header>
        <p>We are experts in the Indian Himalayas and have pleased many clients, Indian and International. Expeditions need prior experience, please contact us to know your eligibility.</p>
        <div className="row 150%">
          <div className="4u 12u$(medium) custom-medium">
            <span className="image fit"><img src={image_1} alt="" /></span>
            <h3>Jogin I & II Expedition</h3>
            <p>Jogin peak is famous in the Garhwal Himalayas, it is in the Gangotri region. It is considered a very beautiful peak. This expedition needs technical knowledge. The prominent view points on this expedition are of the Khatling Glacier, Audens col, Gangorit I & II </p>
            <ul className="actions">
              <li><a href="/expedition/jogin-i-ii-expedition/" className="button">More</a></li>
            </ul>
          </div>
          <div className="4u 12u$(medium) custom-medium">
            <span className="image fit"><img src={image_2} alt="" /></span>
            <h3>Bhagirathi III Expedition</h3>
            <p>Bhagirathi-II is very popular peak in the Gangotri region. Almost every year many Indians and Foreigners climb this peak. From the top of this peack you can see the Shivlinga peak, the Thalaysagar peak, Chaukhamba range, and all massifs of the Bhagirathi, Chaturangi, Glacier, Kalandi pass, Satopanth, Gaumukh Glacier. All of the Gangotri valley can be see on this expedition. Bhagirathi-II is a technical peak and a challenging peak for Mountaineers.</p>
            <ul className="actions">
              <li><a href="/expedition/bhagirathi-iii-expedition/" className="button">More</a></li>
            </ul>
          </div>
          <div className="4u 12u$(medium) custom-medium">
            <span className="image fit"><img src={image_3} alt="" /></span>
            <h3>Kang Yatse Expedition</h3>
            <p>The Kang Yatze is in the Markha Valley region. The peak has 2 summits. The peak can be approached from two sides. The Western approach leads to Kangyatse II which is at 6250m. This peak is good for people who like to climb their first 6000-er. On this expedition you can get views of the Nun Kun & Zanskar ranges in the West & the K2, Broad Peak & Gasherbrum Massif in the far North.</p>
            <ul className="actions">
              <li><a href="/expedition/kang-yangtse-expedition/" className="button">More</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
