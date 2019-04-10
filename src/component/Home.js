// Home.js
import React from 'react';
import Personal from "./Personal";
import Employment from "./Employment";

class Home extends React.Component {

	render() {

		return(
			<React.Fragment>
				<Personal/>
				<Employment/>
			</React.Fragment>
		);
	}
}

export default Home;
