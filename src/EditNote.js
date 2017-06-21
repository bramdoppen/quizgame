import React, { Component } from 'react';

class EditNote extends Component {
    constructor(props) {
        super(props);
    }

    checkEnter = (e) => {
        if(e.key === 'Enter') {
            this.finishEdit(e);
        }
    };

    finishEdit = (e) => {
        const value = e.target.value;
        this.changeValue(this.props.id, value);
    };

    changeValue = (id, value) => {
        let data = this.props.currentNotes.map(note => {
            if (note.id === id) {
                note.note = value;
            }
            return note;
        });
        this.props.veranderNotitieState(data);
    };

    render(){
        return( <input
                type="text"
                autoFocus={true}
                defaultValue={this.props.value}
                onBlur={this.finishEdit}
                onKeyPress={this.checkEnter}
                className="editingNote"
                style={this.props.style}
            />
        )
    }
}

export default EditNote;