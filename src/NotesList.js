import React, { Component } from 'react';
import EditNote from "./EditNote";
import Note from './Note';

class NotesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [
                {
                    id: 0,
                    note: "Grandma's ankles are just huge"
                }
            ],
            style: {
                display: "none"
            },
            styleVisibility: {
                display: "block"
            }
        }
    };

    veranderNotitieState = (newValue) => {
        this.setState({
            notes: newValue
        });
        this.changeStyle();
    };

    addNote = () => {
        // It would also be possible to write this in like `this.state.notes.push` and then
        // `this.setState({notes: this.state.notes})` to commit.

        let noteCounter = this.state.notes.length;

        this.setState({
            notes: this.state.notes.concat([{
                id: noteCounter +1,
                note: 'Click to edit note'
            }])
        });
    };

    deleteNote = (id, e) => {
        // avoid triggering possible other events elsewhere in the structure if we delete a note
        e.stopPropagation();

        this.setState({
            notes: this.state.notes.filter(note => note.id !== id)
        });
    };

    changeStyle = () => {
        if(this.state.style.display === "none"){
            this.setState({
                style: {
                    display: "block"
                },
                styleVisibility: {
                    display: "none"
                }
            });
        }
        if(this.state.style.display === "block"){

            this.setState({
                style: {
                    display: "none"
                },
                styleVisibility: {
                    display: "block"
                }
            });
        }
    };

    render() {
        const allNotes = this.state.notes;
        return (
            <div className="Notes">
                <h2>Your notes</h2>

                <ul>{allNotes.map(({id, note}) =>
                    <li key={id} onClick={this.changeStyle}>
                        <Note
                            note={note}
                            onDelete={this.deleteNote.bind(null, id)}
                            style={this.state.styleVisibility}
                        />
                        <EditNote
                            value={note}
                            id={id}
                            veranderNotitieState={this.veranderNotitieState}
                            currentNotes={allNotes}
                            style={this.state.style}
                        />
                    </li>
                )}
                </ul>

                <button onClick={this.addNote}>Nieuwe notitie</button>

            </div>
        );
    }
}

export default NotesList;
