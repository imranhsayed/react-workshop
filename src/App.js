import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './App.scss';
import ReactSVG from './react.svg';

const App = () => {
	return (
		<div>
			<h1>Hello World!!</h1>
			<img src={ ReactSVG } width="200"/>
		</div>
	);
}

ReactDOM.render( <App/>, document.getElementById( 'root' ) );
