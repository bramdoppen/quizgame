import React, { Component } from 'react';
import nurseimg from './img/icons/nurse.svg';

class EndScreen extends Component {

    render() {
        return (
            <div>
                <div id="WelcomeComponent" className="WelcomeComponent">
                    <div className="WelcomeComponent__inner">
                        <h1>Lets wrap up your day</h1>
                        <h3>Who lived and who died?</h3>
                        <div className="wrapup">
                            <div>
                               <p>Baby</p>
                               <p className="patientStatus lives">Lives</p>
                            </div>
                            <div>
                                <p>Old lady</p>
                                <p className="patientStatus lives">Lives</p>
                            </div>
                            <div>
                                <p>Kid</p>
                                <p className="patientStatus died">Died</p>
                            </div>
                        </div>
                        <div className="nurse-image"><img src={nurseimg}/></div>
                    </div>
                </div>;
            </div>
        )
    }
}
export default EndScreen;