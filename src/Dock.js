import React, { Component } from 'react';
import DockItem from './DockItem';

class Dock extends Component {
    render() {
        return (
            <div className="dock">
                <DockItem name="Patient Room 1"  status="Ok"         statusStyle="status_ok" />
                <DockItem name="Patient Room 2"  status="Empty"      statusStyle="status_empty" />
                <DockItem name="Patient Room 3"  status="Empty"      statusStyle="status_empty flatline" />
                <DockItem name="MRI Scanner"     status="6 waiting"  statusStyle="status_warning" />
            </div>
        );
    }
}

export default Dock;
