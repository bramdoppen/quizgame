import React from 'react';
import ReactDOM from 'react-dom';
import App from './homescreen/App';
import Vraag from './CharlottesComponentje'
import registerServiceWorker from './registerServiceWorker';
import './css/main.css';
import Navigatiebar from "./Navbar";

let alleComponenten = (
    <div>
        <App />
        <Vraag />
        <Navigatiebar />
    </div>
);

ReactDOM.render(alleComponenten, document.getElementById("root"));

registerServiceWorker();
