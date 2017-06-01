import React, { Component } from 'react';
import logo from '../img/logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div>
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Hallo teamgenootjes</h2>
            </div>
            <p className="App-intro">
                {this.props.ondertitel}
            </p>
          </div>
      </div>
    );
  }
}

export default App;
