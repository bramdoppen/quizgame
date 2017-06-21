import React, { Component } from 'react';

class DockItem extends Component {
    render() {
        return (
            <div className={"dock__item " + this.props.statusStyle }>
                <p>{this.props.name}</p>
                <p>
                    <span>Status</span>
                    <span>{this.props.status}</span>
                </p>
            </div>
        );
    }
}

export default DockItem;
