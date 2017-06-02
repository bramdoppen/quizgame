import React from 'react';
import ReactDOM from 'react-dom';
import App from './homescreen/App';
import registerServiceWorker from './registerServiceWorker';
import './css/main.css';

ReactDOM.render(
    <App ondertitel="Dit is nog eens makkelijk starten"/>,
    document.getElementById('root')
);

registerServiceWorker();

console.log("Charly Test 2");
