import React from 'react';
import ReactDOM from 'react-dom';
import App from './homescreen/App';
import registerServiceWorker from './registerServiceWorker';
import './css/main.css';
import Navigatiebar from "./Navbar";

registerServiceWorker();

let alleComponenten = (
    <div>
        <Navigatiebar />
        <App />
    </div>
);

ReactDOM.render(alleComponenten, document.getElementById("root"));


