import React from 'react';
import { Router } from '@reach/router';

import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';

class App extends React.Component {
	render() {
		return (
			<div>
				<Router>
					<Home path="/"/>
					<About path="/about"/>
					<ContactUs path="/contact-us"/>
				</Router>
			</div>
		);
	}
}

export default App;
