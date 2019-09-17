import React from 'react'
import { Link } from 'gatsby';
import imageList from "../images/imageList"

import "../components/omnes.css"
import "../components/styles.scss"

class NavBar extends React.Component {
    state = { showMenu: false }

  
    toggleMenu = () => {
      this.setState({
        showMenu: !this.state.showMenu
      })
    }


    
  
    render() {
      const menuVis = this.state.showMenu ? 'show' : 'hide';
    
    
      return (
       <div className="navWrap">
           <div className="navVisible">
             <a className="mobile-nav-left" onClick={this.toggleMenu}>
                 <img
                    src={imageList.home}
                    alt="Blue donut"
                />
                <p id="statusNav">Menu</p></a>
                <div className="mobile-nav-right">
                <a  id="bag" href="/bag">
                 <img
                    src={imageList.bag}
                    alt="shopping bag"
                /> </a>
                <a id="exit" onClick={this.toggleMenu}>
                 <img
                    src={imageList.exit}
                    alt="exit"
                /> </a>
                </div>
            </div>
          <div className={`menu-${menuVis}`} id="full">
          <nav className="mobile-nav-wrap" role="navigation">
            <ul className="mobile-header-nav">
                <li><Link to = "/dones2drinks">Dones 2 Drinks</Link></li>
                <li><Link to = "/about">About</Link></li>
                <li><Link to = "/locations">Locations</Link></li>
                <li><Link to = "/catering">Catering</Link></li>
                <li><Link to = "/merch">Merch</Link></li>
                <li><span></span></li>
                <li id="account"> <Link to = "/account">Account</Link></li>
            </ul>
        </nav>
          </div>
        </div>
      )
    }
}
export default NavBar;