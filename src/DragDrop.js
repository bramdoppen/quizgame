import React, { Component } from 'react';
import { Draggable, Droppable } from 'react-drag-and-drop'
import questionsData from './quiz/quiz-data.json';
import './css/components/draggable.css';

// Everyone: in order for this file to work, do: npm install react-drag-and-drop

class DragDrop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            draggable : questionsData[this.props.whichArray].answers,
            correctAnswer: questionsData[this.props.whichArray].answers[questionsData[this.props.whichArray].correct] ,
            question  : questionsData[this.props.whichArray].question,
            dropped   : '',
            hovering  : false
        }
    }
    render() {
        let draggable = this.state.draggable.map((title, index) => {
            return (
                <li key={title}>
                    <Draggable  type="answer" data={title}>{title}</Draggable>
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
        )
    }
    onDragEnter() {
        this.setState({ hovering : true })
    }
    onDragLeave() {
        this.setState({ hovering : false })
    }
    onDrop(e) {
        this.setState({ hovering : false, dropped : e.answer });
        clearTimeout(this.dropTimeout);
        console.log(e.answer);
        if(e.answer == this.state.correctAnswer) {
            console.log("Goed beantwoord");
        }

    }
}

export default DragDrop;