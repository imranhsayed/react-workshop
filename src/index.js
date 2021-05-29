import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import registerServiceWorker from './serviceWorkerRegistration';

ReactDOM.render( <App/>, document.getElementById('root') );

registerServiceWorker();
