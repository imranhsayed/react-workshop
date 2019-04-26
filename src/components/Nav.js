import React from 'react';

import { Link } from "@reach/router";
import NavLink from './NavLink';
import '../Nav.css';


const Nav = () => (
		<nav className="navbar my-navbar navbar-expand-lg navbar-dark bg-dark">
			<Link className="navbar-brand" to="/">Home</Link>
			<div >
				<ul className="navbar-nav my-navbar-nav mr-auto">
					<li className="nav-item">
						<NavLink to="/about">About</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/contact-us">Contact Us</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/add-post">Add Post</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);

export default Nav
