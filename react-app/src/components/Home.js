import React from 'react';

class Home extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			name: ''
		}
	}

	handleOnClick = () => {
		this.setState( { name: 'Richa' } );
	};

	render() {
		console.warn( 'rendered', this.props );
		return(
			<div>
				<button onClick={this.handleOnClick}>Click me</button>
			</div>
		);
	}
}

export default Home
