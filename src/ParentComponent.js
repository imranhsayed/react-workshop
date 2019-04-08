import React from 'react';
import {ChildComponent} from "./ChildComponent";

class ParentComponent extends React.Component {

	/**
	 * Overriding parent Constructor
	 * @param props
	 */
	constructor( props ) {
		/**
		 * Super is a way to call the Parent Constructor.
		 * Pass props to super, When you want to access this.props in constructor, else this will be undefined
		 * Passing or not passing props to super has no effect on later uses of this.props outside constructor.
		 */
		super( props );
		this.state = {
			name: 'Parent'
		}
	}

	render() {
		return (
			<div>
				This is { this.state.name }
				<ChildComponent name={this.state.name}/>
			</div>
		);
	}
}

export default ParentComponent;
