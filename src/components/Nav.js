import React from 'react';
import { Link } from '@reach/router';

export default () => {
	return(
		<div>
			<Link to="/about">About</Link>
			<Link to="/contact-us">Contact Us</Link>
		</div>
	)
}
