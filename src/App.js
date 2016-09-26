import React, { Component } from 'react';
import './App.css';

// material
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// local components

import TopPanel from './components/TopPanel';
import ControlPanel from './components/ControlPanel';
import MovieCard from './components/MovieCard';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App" id="root">
          <TopPanel />
          <ControlPanel />
          <MovieCard />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
