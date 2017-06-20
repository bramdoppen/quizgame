// single note

import React, { Component } from 'react';

class Note extends Component {

    render() {
        return (
             <div style={this.props.style}>
                 <span >{this.props.note}</span>
                 <div className="deleteBtn" onClick={this.props.onDelete}>X</div>
             </div>
        );
    }

}

export default Note;