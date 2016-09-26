import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

// material

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App" id="root">
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
