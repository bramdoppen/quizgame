import React, {Component} from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';



// in order to work: npm install react-sortable-hoc --save

const SortableItem = SortableElement(({value}) =>
    <li className="Answer">{value}</li>
);

const SortableList = SortableContainer(({items}) => {
    return (
        <div className="Sortable">
            <ul>
                {items.map((value, index) => (
                    <SortableItem key={`item-${index}`} index={index} value={value.choice} />
                ))}
            </ul>
        </div>
    );
});

class SortableComponent extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    };

    state = {
        items: this.props.data.answers,
    };

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState({
            items: arrayMove(this.state.items, oldIndex, newIndex),
        });

    };

    handleClick(){
        this.props.handleUserAnswer(this.state.items.toString());
    };

    render() {
        return (
            <div>
                <h1>{this.props.data.question}</h1>
                <SortableList items={this.state.items} lockAxis="y" onSortEnd={this.onSortEnd} />
                <button onClick={this.handleClick}>Submit</button>
            </div>
        );
    }
}

export default SortableComponent;
