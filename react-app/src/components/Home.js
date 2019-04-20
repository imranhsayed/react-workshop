import React from 'react';

class Home extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			name: 'Imran'
		}
	}

	static getDerivedStateFromProps( props, state ) {
		console.warn( 'getDerivedStateFromProps is called' );
		console.warn( 'state', state );
		return null;
	}

	handleClickEvent = () => {
		this.forceUpdate( () => {
			console.warn( 'The component is update' );
			this.setState( { name: 'Irene' } );
		} )
	};

	render() {

		console.warn( 'render is called' );
		return (
			<div>
				<button onClick={this.handleClickEvent}>Click me</button>
			</div>
		)
	}
}

export default Home;
