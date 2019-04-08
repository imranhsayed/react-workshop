import React from 'react';

class App extends React.Component {

	formatName( user ) {
		return `Super ${user}`;
	}

	render() {

		// Example One: Assign result to a const
		const element = <h1>Hello World!</h1>;

		// Example Two: Use {} for variables
		const name = 'Josh Perez'
		const elementTwo = <h1>Hello, {name}</h1>;

		// Example Three: Call functions inside {}
		const elementThree = (
			<h1>
				Hello, { this.formatName( 'rtUser' ) }
			</h1>
		);

		// Example Four: Use of Object properties
		const user = {
			avatarUrl: 'https://via.placeholder.com/150'
		};
		const elementFour = <img src={ user.avatarUrl } />;

		return (
			<div>
				My App Component
				{ element }
				{ elementTwo }
				{ elementThree }
				{ elementFour }
			</div>
		);
	}
}

export default App;
