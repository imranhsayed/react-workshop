import React from 'react';

/**
 * Because we are wrapping our ChildComponent with React.memo(),
 * now the ChildComponent will only be rendered if the value of props.countVal changes
 * @type {{compare, $$typeof, type}}
 */
export const ChildComponent = React.memo( ( props ) => {
	console.log( 'Value is: ', props.countVal)

	return ( <div>{ props.countVal }</div>)
});
