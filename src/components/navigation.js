import React from 'react'
import { Link } from 'gatsby';
import imageList from "../images/imageList"

import "../components/omnes.css"
import "../components/styles.scss"

class Navigation extends React.Component {
    constructor(props) {
      super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
          collapsed: true,
        };
    }

    toggleNavbar() {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    }
    render() {
      const classDropdownMenu = 'navbar-collapse' + (this.state.collapsed ? ' collapse' : '')

      return (
        <header className="navWrap">
        <button onClick={this.toggleNavbar}>
          <span className="navbar-toggler-icon">
          <div className="mobile-nav-left">
                <a href="/">
                <img
                    src={imageList.home}
                    alt="Blue donut"
                />
                <p>Menu</p>
            </a>
        </div> </span>
        </button>
        <div className={classDropdownMenu} id="navbarSupportedContent">
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
        </header>
      ); 
    }
  }

  export default Navigation