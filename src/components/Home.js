import React from 'react';
import Nav from "./Nav";
import Posts from "./Post";
import Footer from "./Footer";

class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Nav/>
				Home
				<Posts/>
				<Footer/>
			</React.Fragment>
		)
	}
}

export default Home;
