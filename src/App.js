import React from 'react';

class App extends React.Component {

	constructor( props ) {
		super( props );
		this.inputRef = React.createRef();
		this.inputRefTwo = React.createRef()
		console.log( 'refs not available during initial render', this.inputRef );
	}

	onChange = () => {
		console.log( 'inputValue: ', this.inputRef.current.value );
		console.log( 'inputValue2: ', this.inputRefTwo.current.value );
	}

	componentDidMount() {
		console.log( 'inputElement: ', this.inputRef );
	}

	render() {
		return (
			<div>
				<input type="text" ref={ this.inputRef } onChange={ this.onChange }/>
				<input type="text" ref={ this.inputRefTwo } onChange={ this.onChange }/>
			</div>
		);
	}
}

export default App;
