import React from 'react';
import ReactDOM from 'react-dom';
import App from './homescreen/App';
import registerServiceWorker from './registerServiceWorker';
import './css/main.css';

ReactDOM.render(
    <App ondertitel="Wauw zo mooi"/>,
    document.getElementById('root'));
registerServiceWorker();

