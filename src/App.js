import React from 'react';
import ParentComponent from "./ParentComponent";

class App extends React.Component {
	render() {
		return (
			<div>
				My App Component
				<ParentComponent/>
			</div>
		);
	}
}

export default App;
