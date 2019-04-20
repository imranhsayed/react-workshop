import React from 'react';

class Home extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			age: ''
		}
	}

	handleOnclick = () => {
		this.setState({ age: 28 });
	};

	getSnapshotBeforeUpdate( prevProps, prevState ) {
		console.warn( 'getSnapShot called' );
		// console.warn( 'prevProps', prevProps );
		// console.warn( 'prevState', prevState );

		return 'xyz';

	}

	componentDidUpdate( prevProps, prevState, snapshot ) {
		console.warn( 'didUpdate called' );
		console.warn( 'snapshot', snapshot );
	}

	render() {
		console.warn( 'render called' );
		return(
			<div>
				<button onClick={this.handleOnclick}>Click me</button>
			</div>
		);
	}
}

export default Home
