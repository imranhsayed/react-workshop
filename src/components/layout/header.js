import React from 'react';
import { Link } from "@reach/router";

import NetflixLogo from '../icons/NetflixLogo';
import Nav from './nav';

const Header = () => {
  return (
    <header className="Header">
      <div id="logo" className="Logo">
        <Link to="/">
          <NetflixLogo/>
        </Link>
      </div>
      <Nav/>
      <form id="search" className="Search" data-reactid=".0.0.2">
        <input type="search" placeholder="Search for a title..."/>
      </form>
      <div className="UserProfile" >
        <div className="User">
          <div className="name">Stephen Onoja</div>
          <div className="image"><img src="
https://s3-us-west-2.amazonaws.com/bullseyeafrica/IMG_20160423_152328.jpg" data-reactid=".0.0.3.0.1.0"/></div>
        </div>
        <div className="UserProfile-menu" data-reactid=".0.0.3.1">
          <div className="UserProfileSwitch" data-reactid=".0.0.3.1.0">
            <ul data-reactid=".0.0.3.1.0.0">
              <li data-reactid=".0.0.3.1.0.0.0">
                <div className="UserProfile-image" data-reactid=".0.0.3.1.0.0.0.0"><img
                  src="http://lorempixel.com/96/96" data-reactid=".0.0.3.1.0.0.0.0.0"/></div>
                <div className="UserProfile-name" data-reactid=".0.0.3.1.0.0.0.1">Alexander</div>
              </li>
              <li data-reactid=".0.0.3.1.0.0.1">
                <div className="UserProfile-image" data-reactid=".0.0.3.1.0.0.1.0"><img
                  src="http://lorempixel.com/96/96" data-reactid=".0.0.3.1.0.0.1.0.0"/></div>
                <div className="UserProfile-name" data-reactid=".0.0.3.1.0.0.1.1">Mattias</div>
              </li>
            </ul>
          </div>
          <div className="UserNavigation" data-reactid=".0.0.3.1.1">
            <ul data-reactid=".0.0.3.1.1.0">
              <li data-reactid=".0.0.3.1.1.0.0">Your Account</li>
              <li data-reactid=".0.0.3.1.1.0.1">Help Center</li>
              <li data-reactid=".0.0.3.1.1.0.2">Sign out of Netflix</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
