import React from 'react';

/**
 * HOC is a Higher Order Component that we create, which takes Original Component as its param
 * and returns a New Enhanced Component adding the count props and incrementCount() as its
 * enhanced functionality.
 * This count props and incrementCount() can now be used by the Original Component that gets passed
 * to the HOC at the time of importing it.
 * @param OriginalComponent
 * @return {{new(*=): NewEnhancedComponent}}
 * @constructor
 */
const HOC = ( OriginalComponent ) => {
	return class NewEnhancedComponent extends React.Component {

		constructor( props ) {
			super( props );
			this.state = {
				count: 0
			}
		}

		incrementCount = ( event ) => {
			this.setState( prevState => ( { count: prevState.count + 1 } ) );
		};

		render() {
			return(
				<div>
					<OriginalComponent count={ this.state.count } incrementCount={ this.incrementCount }/>
				</div>
			)
		}
	}
};

export default HOC;
