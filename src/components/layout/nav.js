import React from 'react';
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <div id="navigation" className="navigation">
      <nav>
        <ul >
          <li>
            <a href="https://www.netflix.com/browse" target="_blank" rel="noopener noreferrer noopener">Browse</a>
          </li>
          <li>
            <Link to="/top-picks">Top picks</Link>
          </li>
          <li>
            <a href="https://www.netflix.com" target="_blank" rel="noopener noreferrer noopener">Recent</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
