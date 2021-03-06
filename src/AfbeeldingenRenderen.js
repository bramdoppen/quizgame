import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AfbeeldingenRenderen extends Component {

    static get propTypes() {
        return {
            number: PropTypes.number.isRequired,
            answerClicked: PropTypes.func,
        };
    }

    handleClick(event) {
        this.props.answerClicked(this.props.number , this.props.currentQuestion)
    }

    render() {

        const handleClick = this.handleClick.bind(this);

        return (
            <img
                className= "AfbeeldingenRenderen"
                src= {this.props.plaatje}
                onClick={handleClick}
                alt="Afbeeldingen"
            />
        );
    }
}


export default AfbeeldingenRenderen;
