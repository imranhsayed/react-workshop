import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home";

class App extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			show: false
		}
	}

	handleOnclick = () => {
		this.setState( { show: ! this.state.show } )
	};

	render() {
    return (
      <div>
	      { this.state.show && <Home name="Imran"/> }
	      <button onClick={this.handleOnclick}>Click</button>
      </div>
    );
  }
}

export default App;
