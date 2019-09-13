import React from 'react'
// import { Link } from 'gatsby'
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image'; 

// import Donut from './donut.inline';
// import Bag from '../images/icons/bag.inline.svg';

import "../styles/omnes.css"
import "../components/styles.scss"

const NavBar = props => (

    <header>
    <nav className="mobile-nav-wrap" role="navigation">
        <ul className="mobile-header-nav">
            <li><Link to = "/dones2drinks">Dones 2 Drinks</Link></li>
            <li><Link to = "/about">About</Link></li>
            <li><Link to = "/locations">Locations</Link></li>
            <li><Link to = "/catering">Catering</Link></li>
            <li><Link to = "/merch">Merch</Link></li>
            <li id="account"> <Link to = "/account">Account</Link></li>
        </ul>
     </nav>

    <div className="mobile-nav-left">
        <a href="/">
        <Img fluid={props.data.imageOne.childImageSharp.fluid} />
        <p>Menu</p>
        </a>
    </div>
    </header>
);
export default NavBar;

export const pageQuery = graphql`
  site {
    imageOne: file(relativePath: { eq: "../images/icons/home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `;
