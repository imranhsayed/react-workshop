import React from 'react';
import { Link } from '@reach/router';

export default () => {
	return(
		<div>
			<Link
				style={{
				margin: '16px',
				padding: '16px 20px',
					border: '1px solid black',
					display: 'inline-block',
					textDecoration: 'none',
					color: '#555'
				}}
				to="/about"
			>
				About
			</Link>
			<Link
				style={{
					margin: '20px',
					padding: '16px 20px',
					border: '1px solid black',
					display: 'inline-block',
					textDecoration: 'none',
					color: '#555'
				}}
				to="/contact-us"
			>
				Contact Us
			</Link>
		</div>
	)
}
