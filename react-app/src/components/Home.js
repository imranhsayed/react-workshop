import React from 'react';

class Home extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			data: '',
			loading: true
		};

		console.warn( 'constructor called' );
	}

	componentDidMount() {
		console.warn( 'didMount called' );
		fetch('https://jsonplaceholder.typicode.com/todos/1')
			.then(response => response.json())
			.then(json => {
				this.setState( { data: json, loading: false } );
			})
	}

	componentWillUnmount() {
		console.warn( 'Component unmounted' );
	}

	renderData = () => {
		const mydata = this.state.data;
		if ( mydata.id ) {
			return (
				<div>
					<h1>Title : { mydata.title }</h1>
					<p>With the id : { mydata.id } </p>
				</div>
			);
		}
	};

	render() {
		return(
			<div>
				{ this.renderData() }
				{ this.state.loading && <p>Loading...</p> }
			</div>
		);
	}
}

export default Home
