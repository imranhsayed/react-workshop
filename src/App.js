import React from 'react';
import Home from "./components/Home";
import Nav from "./components/Nav";

class App extends React.Component {
	render() {
		const myName = 'Imran';
		const data = {
			url: 'https://google.com'
		};

		return (
			<div>
				<Home name={myName} myData={data}/>
				<Nav name="Shawn"/>
			</div>
		);
	}
}

export default App;
