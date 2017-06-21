import React, { Component } from 'react';
import Tijdlijn from "./Tijdlijn";
import NotesList from "./NotesList";

class Switcher extends Component {

    switch(){
        const timeline = document.querySelector('.Tijdlijn');
        const notities = document.querySelector('.Notes');
        if (timeline.style.display === 'none') {
            timeline.style.display = 'block';
            notities.style.display = 'none';
        }
        else{
            timeline.style.display = 'none';
            notities.style.display = 'block';
        }
    }

    render() {
        return (
            <div className="notesTimelineSwitch">
                <div className="tabjes">
                    <div className="TijdlijnBtn" onClick={this.switch}> History</div>
                    <div className="NotesBtn" onClick={this.switch}> Notes</div>
                </div>

                <Tijdlijn PopupData={this.props.PopupData}/>
                <NotesList />
            </div>
        );
    }
}

export default Switcher;