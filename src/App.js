import React, { Component } from 'react';
import './App.css';

// material
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// local components

import TopPanel from './components/TopPanel';
import ControlPanel from './components/ControlPanel';
import MoviesCollection from './components/MoviesCollection';

// core functionality
import VideoDownloader from './core/VideoDownloader';
import YoutubeProvider from './core/YoutubeProvider';
import VimeoProvider from './core/VimeoProvider';
import LocalStorage from './core/LocalStorage';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      movies: []
    };

    this.VD = new VideoDownloader();
    this.YP = new YoutubeProvider();
    this.VP = new VimeoProvider();
    this.LS = new LocalStorage();

    this.setMovies = this.setMovies.bind(this);
    this.clearMovies = this.clearMovies.bind(this);
    this.addMovieQuery = this.addMovieQuery.bind(this);
  }

  setMovies(movies) {
    this.setState({movies: movies});
  }

  clearMovies() {
    this.setState({movies: []});
  }

  addMovie(query, provider) {
    const self = this;
    this.VD.setProviderFunc(provider);
    this.VD.download(query)
      .then(function(d) {
        if (d === undefined) return;
        self.setState({movies: [].concat(self.state.movies, d)});
        self.LS.save('movies', self.state.movies);
      });
  }

  addMovieQuery(query) {
    if (query.search(/([A-Za-z0-9_\-]{11})/) > -1) {
      this.addMovie(query, this.YP);
    } else if (query.search(/([0-9]{5,})/) > -1) {
      this.addMovie(query, this.VP);
    }
  }

  componentDidMount() {
    this.setState({movies: this.LS.load('movies')});
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App" id="root">
          <TopPanel setMovies={this.setMovies} clearMovies={this.clearMovies} addMovieQuery={this.addMovieQuery}/>
          <ControlPanel />
          <MoviesCollection layout="list" movies={this.state.movies}/>
        </div>
      </MuiThemeProvider>
    );
  }
}
