import React from 'react';

/**
 * React.PureComponent implements shouldComponentUpdate with a shallow prop and state comparison.
 * When you setState, then it does not rerender if the nextState === preState
 */
class About extends React.PureComponent {

	constructor( props ){
		super( props );
		this.state = {
			count: 1,
			interval: ''
		};
	}

	componentDidMount() {
		this.interval = setInterval( () => {
			this.setState( { count: 1 } )
		}, 2000 )
	}

	/**
	 * Please note that you can get warnings if you don't clear the interval
	 * Because the event listener may be triggered when the component unmounted.
	 * https://www.robinwieruch.de/react-warning-cant-call-setstate-on-an-unmounted-component/
	 */
	componentWillUnmount() {
		clearInterval( this.interval );
	}

	render() {
		console.log( 'Updated', this.state );
		return(
			<div>
				Home
			</div>
		);
	}
}

export default About;
