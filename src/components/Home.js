import React from 'react';
import Nav from "./Nav";
import Posts from "./Posts";
import Footer from "./Footer";

class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Nav/>
				<Posts/>
				<Footer/>
			</React.Fragment>
		)
	}
}

export default Home;
