import React from 'react'
import { Link } from 'gatsby';
import imageList from "../images/imageList"

import "../components/omnes.css"
import "../components/styles.scss"


const NavBar = () => {
    return (
        <header className="navWrap">
            <div className="mobile-nav-left button">
                <button onClick={dropDown}>
                <img
                    src={imageList.home}
                    alt="Blue donut"
                />
                <p>Menu</p>
            </button>
        </div>
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
        </header>
    );
};
function dropDown(){
    document.getElementsByClassName("mobile-nav-wrap")
    .classList.add("menu__list--animate");
}
export default NavBar;

// export const query = graphql`
//   query {
//     fileName: file(relativePath: { eq: "icons/home.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 400, maxHeight: 250) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
//`