import React, { Component } from 'react';
import { Draggable, Droppable } from 'react-drag-and-drop'
import './css/components/draggable.css';

class DragDrop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            draggable : this.props.data.answers,
            correctAnswer: this.props.data.answers[this.props.data.correct],
            question  : this.props.data.question,
            dropped   : '',
            hovering  : false,
        }

        this.translateAnswer = this.translateAnswer.bind(this);
    }
    render() {
        let draggable = this.state.draggable.map((title, index) => {
            return (
                <li key={title}>
                    <Draggable type="answer" data={title.choice}>{title.choice}</Draggable>
                </li>
            );
        });
        let droppableStyle = {};
        if (this.state.hovering) droppableStyle.backgroundColor = 'pink';
        return (
            <div className="DragDrop">
                <h1 className="question">
                    {this.state.question}
                    <Droppable
                        types={['answer']}
                        style={droppableStyle}
                        onDrop={this.onDrop.bind(this)}
                        onDragEnter={this.onDragEnter.bind(this)}
                        onDragLeave={this.onDragLeave.bind(this)}>
                        <div style={{textAlign:'center', lineHeight:'30px'}}>{this.state.dropped}</div>
                    </Droppable>
                </h1>
                <ul className="draggable-list">{draggable}</ul>
            </div>
        );
    }
    onDragEnter() {
        this.setState({ hovering : true });
    }
    onDragLeave() {
        this.setState({ hovering : false });
    }
    onDrop(e) {
        this.setState({ hovering : false, dropped : e.answer });
        clearTimeout(this.dropTimeout);
        this.props.handleUserAnswer(this.translateAnswer(e.answer));
    }
    translateAnswer(answer){
      const antwoorden = this.props.data.answers;
      const hoeveelheidAntwoorden = antwoorden.length;
      let echteAntwoordNummer;

      for (let antwoordTeller = 0; antwoordTeller <= hoeveelheidAntwoorden; antwoordTeller++) {
        if (answer === antwoorden[antwoordTeller]) {
          echteAntwoordNummer = antwoordTeller;
        }
      }

      return echteAntwoordNummer;
    }
}

export default DragDrop;
