import React from 'react';
import renderHTML from 'react-render-html';

class App extends React.Component {

	constructor( props ) {
		super( props );
		this.state = {
			content: 'Hello world',
			query: 'world',
		};
	}

	wrapInTag = ( options ) => {
		const tag = options.tag || 'strong',
		    words = options.words || [],
		    regex = RegExp(words.join('|'), 'gi'),
		    replacement = '<'+ tag +'>$&</'+ tag +'>',
		      content = this.state.content;

		const modifiedContent = content.replace( regex, replacement );
		this.setState( { content: modifiedContent } );
	};

	componentDidMount() {
		this.wrapInTag({
			tag: 'strong',
			words: [ this.state.query ]
		})
	}

	render() {

		const { content } = this.state;

		return (
			<div>
				<p>{ renderHTML( content ) }</p>
			</div>
		);
	}
}

export default App;
