import React, { Component } from 'react';
import './css/main.css';

import Navbar from "./Navbar";
import QuestionsWrapper from "./QuestionsWrapper.js";
import FirebaseGoogleAuth from "./FirebaseAuth";
// import SortableComponent from './Reorder';

//json
import questionsData from './quiz/quiz-data.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          {/*<h1>Welcome to Quiz Game!</h1>*/}
          <QuestionsWrapper data={questionsData} />
            <FirebaseGoogleAuth />

        </div>
      </div>
    );
  }
}

export default App;
