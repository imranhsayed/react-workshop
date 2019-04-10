
import React from 'react';
import { ChildComponent } from "./ChildComponent";

class About extends React.Component {

	constructor( props ) {
		super( props );
		this.state = {
			countVal: 1
		};
	}

	componentDidMount() {

		this.interval = setInterval(  () => {
			this.setState( { countVal: 1  } )
		}, 3000 )
	}

	componentWillMount() {
		clearInterval( this.interval );
	}

	render() {

		return(
			<div>
				This is About: Parent Component
				<ChildComponent countVal={this.state.countVal}/>
			</div>
		);
	}
}

export default About;
