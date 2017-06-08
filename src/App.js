import React, { Component } from 'react';
import './css/App.css';
import Navbar from "./Navbar";

import BodyWrapper from "./BodyWrapper.js";
// import SortableComponent from './Reorder';

//json
import questionsData from './quiz/quiz-data.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="App-container">
          {/*<h1>Welcome to Quiz Game!</h1>*/}
          <BodyWrapper data={questionsData}/>
        </div>
      </div>
    );
  }
}

export default App;
