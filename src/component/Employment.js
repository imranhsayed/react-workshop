import React from 'react';
import { Consumer } from "./DataContext";

class Employment extends React.Component {

	render() {
		return(
			<Consumer>
				{ context => (
					<div>
						<h2 style={{ color: 'dark gray' }}>Employment Component</h2>
						<label htmlFor="employer">
							Employer:
							<input type="text" name="employer" id="employer" onChange={context.handleEmploymentChange}/>
							<h5>{context.employer}</h5>
						</label>
					</div>
				) }
			</Consumer>
		);
	}
}

export default Employment;
