import React from 'react';

class Home extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			number: 0
		}
	}


	componentDidMount() {
		this.myInterval = setInterval(() => {
			this.setState({ number: 1 });
		}, 1000);
	}

	shouldComponentUpdate( nextProps, nextState ) {
		console.warn( 'nextProps', nextProps );

		if ( nextState.number === this.state.number ) {
			return false;
		} else {
			console.warn( 'component was rendered' );
			return true;
		}
	}

	componentWillUnmount() {
		clearInterval( this.myInterval );
	}

	render() {
		console.warn( 'rendered', this.state );
		return(
			<div>
				This is home
			</div>
		)
	}
}

export default Home
