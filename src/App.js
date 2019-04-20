import React from 'react';
import { Router } from '@reach/router';
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import './Footer.css';
import AddPost from "./components/AddPost";

class App extends React.Component {
	render() {
		return (
			<Router>
				<Home path="/"/>
				<About path="/about"/>
				<ContactUs path="contact-us"/>
				<AddPost path="add-post"/>
			</Router>
		);
	}
}

export default App;
