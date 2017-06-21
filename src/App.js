import React, { Component } from 'react';
import './css/main.css';

import Navbar from "./Navbar";
import QuestionsWrapper from "./QuestionsWrapper.js";
import EndScreen from "./EndScreen";
import Welcome from "./WelcomeComponent";
// import SortableComponent from './Reorder';

//json
import questionsData from './quiz/quiz-data.json';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {background: "hallo"}
    }

  render() {
    return (
      <div className="App">
        {/*<Welcome />*/}
        {/*<EndScreen />*/}
        <div className="container">
            <QuestionsWrapper data={questionsData} />
        </div>
      </div>
    );
  }
}

export default App;
