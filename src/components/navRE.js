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
             <div className="mobile-nav-left" onClick={this.toggleMenu}><img
                    src={imageList.home}
                    alt="Blue donut"
                />
                <p>Menu</p></div>
            </div>
          <div className={`menu-${menuVis}`}>
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
          </div>
        </div>
      )
    }
}
export default NavBar;