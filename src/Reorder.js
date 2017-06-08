import React, {Component} from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import questionsData from './quiz/quiz-data.json';
import './css/components/reorder.css';


// in order to work: npm install react-sortable-hoc --save

const SortableItem = SortableElement(({value}) =>
    <li>{value}</li>
);

const SortableList = SortableContainer(({items}) => {
    return (
        <div className="Sortable">
            <ul>
                {items.map((value, index) => (
                    <SortableItem key={`item-${index}`} index={index} value={value} />
                ))}
            </ul>
        </div>
    );
});

class SortableComponent extends Component {
    state = {
        items: questionsData[this.props.whichArray].answers,
    };
    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState({
            items: arrayMove(this.state.items, oldIndex, newIndex),
        });
    };
    render() {
        return <SortableList items={this.state.items} lockAxis="y" onSortEnd={this.onSortEnd} />;
    }
}

export default SortableComponent;
