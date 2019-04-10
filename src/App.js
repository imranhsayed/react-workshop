import React, { Component } from 'react';
import { Provider } from "./component/DataContext";
import Home from "./component/Home";

class App extends Component {

	constructor( props ) {
		super( props );
		this.state = {
			hobby: '',
			employer: '',
			handleHobbyChange: this.handleHobbyChange,
			handleEmploymentChange: this.handleEmploymentChange,
		}
	}

	handleHobbyChange = ( event ) => {
		this.setState({
			hobby: event.target.value
		});
	};

	handleEmploymentChange = ( event ) => {
		this.setState({
			employer: event.target.value
		});
	};

	render() {
		return (
			<div className="App">
				<Provider value={this.state}>
					<Home/>
				</Provider>
			</div>
		);
	}
}

export default App;
