import React from 'react';
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <div id="navigation" className="Navigation">
      <nav>
        <ul >
          <li>Browse</li>
          <li>My list</li>
          <li>
            <Link to="top-picks">Top picks</Link>
          </li>
          <li>Recent</li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
