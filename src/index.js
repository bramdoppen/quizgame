import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './css/main.css';
import './css/Navbar.css';


ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
