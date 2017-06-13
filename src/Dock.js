import React, { Component } from 'react';
import './css/Dock.css';
import DockItem from './DockItem';

class Dock extends Component {
    render() {
        return (
            <div className="dock">
                <DockItem name="Patient Room 1"  status="Ok"         statusStyle="status_ok" />
                <DockItem name="Patient Room 2"  status="Error"      statusStyle="status_error flatline" />
                <DockItem name="Patient Room 3"  status="Empty"      statusStyle="status_empty" />
                <DockItem name="MRI Scanner"     status="6 waiting"  statusStyle="status_warning" />
            </div>
        );
    }
}

export default Dock;
