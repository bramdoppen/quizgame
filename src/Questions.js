import React, { Component } from 'react';
import './css/Questions.css';
import Answer from './Answer';

class Questions extends Component {
  // constructor(props) {
  //   super(props);
  // },

  handleUserAnswer (answer) {
    console.log(answer);
    if (true){
      alert('is goed')
    }else{
      alert('IS FOUT')
    }
  }

//   render() {
//     console.log(this.props.questions);
//     return (
//       <div className= 'Questions'>
//         <h1>{this.props.questions.question}</h1>
//         <p onClick={this.handleUserAnswer}>{this.props.questions.answers[0]}</p>
//         <p>{this.props.questions.answers[1]}</p>
//         <p>{this.props.questions.answers[2]}</p>
//         <p>{this.props.questions.answers[3]}</p>
//       </div>
//     );
//   }
// }

render() {
    console.log(this.props.questions);
    return (
      <div className= 'Questions'>
        <h1>{this.props.questions.question}</h1>
        <ol className="question-answers">
          {this.props.questions.answers.map(answer => {
            return (
              <Answer
                key={answer}
                answer={answer}
              />
            );
          })}
        </ol>
      </div>
    );
  }
}









export default Questions;

