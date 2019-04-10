import React from 'react';
import {Consumer} from "./DataContext";

class Personal extends React.Component {

	render() {
		return(
			<Consumer>
				{ context => (
					<div>
						<h2 style={{ color: 'blue' }}>Personal Component</h2>
						<label htmlFor="hobby">
							Hobby:
							<input type="text" name="hobby" id="hobby" onChange={context.handleHobbyChange}/>
							<h5>{ context.hobby }</h5>
						</label>
					</div>
				) }
			</Consumer>

		);
	}
}

export default Personal;
