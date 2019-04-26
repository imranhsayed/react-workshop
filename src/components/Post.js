import React from 'react';
import Nav from "./Nav";
import Footer from "./Footer";
import queryString from 'qs';
import { Link } from "@reach/router";

class Post extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			post: {},
		}
	}

	componentDidMount() {
		const queryStringValues = queryString.parse( this.props.location.search.slice(1) );
		const postId = queryStringValues.postId;

		if ( postId ) {
			fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
				.then(response => response.json())
				.then(post => {
					this.setState( { post: post } );
				})
		}
	}

	render() {
		console.warn( this.state );
		const postData = ( Object.keys( this.state.post ).length ) ? this.state.post : '';
		console.warn( postData );
		return(
			<div>
				<Nav/>
					<div className="page-wrap">
						<h4>Single Post</h4>
						{ postData  && (
							<div className="card border-primary mb-3">
								<div className="card-header">{postData.id}</div>
								<div className="card-body">
									<h5 className="card-title">{postData.title}</h5>
									<p className="card-text">{postData.body}</p>
								</div>
							</div>
						) }
					</div>
				<Footer/>
			</div>
		);
	}
}

export default Post;
