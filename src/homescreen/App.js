import React, { Component } from 'react';
import logo from '../img/logo.svg';
import Question from '../Questions.js';

import { questions } from '../quiz/quiz-data.js';

const QUESTIONS = questions;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Hallo teamgenootjessssss</h2>
          </div>
          <p className="App-intro">
            {this.props.ondertitel}
          </p>
        </div>
        <Question questions={QUESTIONS[3]} />
      </div>
    );
  }
}

export default App;
