import React, { Component } from 'react';
import './App.css';

class App extends Component {

	constructor( props ) {
		super( props );
		this.state = {
			name: 'Imran'
		}

	}


	static getDerivedStateFromProps( state, props ) {
		console.warn( props );
		return null;
	}
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
