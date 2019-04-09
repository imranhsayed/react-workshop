import React from 'react';

class Home extends React.Component {

	constructor( props ) {
		super(props);
		this.state = {
			name: '',
			age: '',
		}
	}

	handleFormSubmit = ( event ) => {
		event.preventDefault();
		console.log( 'onsubmit', this.state );
	}

	handleOnChange = ( event ) => {
		this.setState( { [event.target.name]: event.target.value } );
	}
	
	componentDidMount() {
		console.log( 'component mounted' );
	}

	render() {
		return(
			<div>
				<form onSubmit={ this.handleFormSubmit }>
					<label>Name:
						<input type="text" onChange={ this.handleOnChange } name="name" value={this.state.name}/>
					</label>
					<label>Age:
						<input type="number" onChange={ this.handleOnChange } name="age" value={this.state.age}/>
					</label>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default Home;
