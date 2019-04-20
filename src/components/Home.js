import React from 'react';

class Home extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			jobTitle: 'Web Developer',
			newData: ''
		};

	}

	handleOnClickButton = () =>  {
		this.setState( ( state, props ) => {
			return {
				newData:  `${props.name} is a ${state.jobTitle}`
			}
		} )
	};

	render() {
		return(
			<div>
				<p>{ this.state.newData } </p>
				<button onClick={ this.handleOnClickButton }>Get the Data</button>
			</div>
		)
	}
}

export default Home;
