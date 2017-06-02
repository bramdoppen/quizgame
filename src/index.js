import React from 'react';
import ReactDOM from 'react-dom';
import App from './homescreen/App';
import Vraag from './CharlottesComponentje'
import registerServiceWorker from './registerServiceWorker';
import './css/main.css';

ReactDOM.render(<App />,document.getElementById('root'));

ReactDOM.render(<Vraag />, document.getElementById('charly'));



registerServiceWorker();
