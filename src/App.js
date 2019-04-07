import React from 'react';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';

class App extends React.Component {
	render() {
		return (
			<div>
				My App Component
				<ClassComponent/>
				<FunctionalComponent/>
			</div>
		);
	}
}

export default App;
