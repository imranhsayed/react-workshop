import React from 'react';
import Nav from "./Nav";
import Footer from "./Footer";
import '../Form.css';

class AddPost extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			title: '',
			body: '',
			newPosts: []
		}

	};

	handleOnInputChange = ( event ) => {
		this.setState( { [event.target.name]: event.target.value } );
	};

	onFormSubmit = ( event ) => {
		event.preventDefault();
		console.warn( this.state );

		const formData = {
			title: this.state.title,
			body: this.state.body
		};

		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: "POST", // *GET, POST, PUT, DELETE, etc.
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData), // body data type must match "Content-Type" header
		})
			.then(response => response.json()
				.then( newPostData => this.setState( { newPosts: [ ...this.state.newPosts, newPostData ] } ) )
			);
	};

	render() {
		console.warn( this.state );
		return(
			<React.Fragment>
				<Nav/>
				<form className="my-form page-wrap" onSubmit={this.onFormSubmit}>
					<fieldset>
						<div className="form-group">
							<label htmlFor="title">Title</label>
							<input onChange={this.handleOnInputChange} type="text" name="title" className="form-control" id="title" />
						</div>
						<div className="form-group">
							<label htmlFor="body">Body</label>
							<textarea onChange={this.handleOnInputChange} name="body" className="form-control" id="body" rows="3"/>
						</div>

						<button type="submit" className="btn btn-primary">Submit</button>
					</fieldset>
				</form>
				<Footer/>
			</React.Fragment>
		);
	}
}

export default AddPost
