import React, { Component } from 'react';
import nurseimg from './img/icons/nurse.svg';

class EndScreen extends Component {



    render() {
        if(this.props.trigger) {

            let baby;
            let babyName;
            let oma;
            let omaName;
            let kameleon;
            let kameleonName;

            if(this.props.eindData.babyOverleden){
                baby = "patientStatus died";
                babyName = "died"
            } else {
              baby = "patientStatus lives";
              babyName = "lives"
            }

          if(this.props.eindData.omaOverleden){
            oma = "patientStatus died";
            omaName = "died"
          } else {
            oma = "patientStatus lives";
            omaName = "lives"
          }

          if(this.props.eindData.kameleonOverleden){
            kameleon = "patientStatus died";
            kameleonName = "died"
          } else {
            kameleon = "patientStatus lives";
            kameleonName = "lives"
          }

          return (
              <div>
                  <div id="WelcomeComponent" className="WelcomeComponent">
                      <div className="WelcomeComponent__inner">
                          <h1>Lets wrap up your day</h1>
                          <h3>Who lived and who died?</h3>
                          <div className="wrapup">
                              <div>
                                  <p>Baby</p>
                                  <p className={baby} >{babyName}</p>
                              </div>
                              <div>
                                  <p>Old lady</p>
                                  <p className={oma}>{omaName}</p>
                              </div>
                              <div>
                                  <p>Kid</p>
                                  <p className={kameleon}>{kameleonName}</p>
                              </div>
                          </div>
                          <div className="nurse-image"><img alt="Nurse" src={nurseimg}/></div>
                      </div>
                  </div>
                  ;
              </div>
          )
        } else{
          return (
              <div></div>
          )
        }
    }
}
export default EndScreen;
