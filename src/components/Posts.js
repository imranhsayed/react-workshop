import React from 'react';
import '../Post.css';
import { Link } from '@reach/router';

class Posts extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			posts: [],
			loading: true
		}
	}

	_isMounted = false;

	componentDidMount() {
		this._isMounted = true;
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(jsonData => {
				if ( this._isMounted ) {
					this.setState( { posts: jsonData, loading: false } );
				}
			})
	}

	renderPostItems() {
		const postData = this.state.posts;
		if ( postData.length ) {
			return postData.map( post => (
				<div className="card border-primary mb-3" key={post.id}>
					<div className="card-header">{post.id}</div>
					<div className="card-body">
						<Link to={`/post?postId=${post.id}`} className="card-title">{post.title}</Link>
						<p className="card-text">{post.body}</p>
					</div>
				</div>
			) );
		}
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	render() {
		return (
			<div className="my-posts page-wrap">
				<h3 className="mb-4">Latest Blog Posts</h3>
				{ this.state.loading && <p>Loading...</p> }
				{ this.renderPostItems() }
			</div>
		)
	}
}

export default Posts
