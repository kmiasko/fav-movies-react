import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

// tools

import _ from 'lodash';

// material
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// local components
import TopPanel from './components/TopPanel';
import ControlPanel from './components/ControlPanel';
import MoviesCollection from './components/MoviesCollection';
import MovieDialog from './components/MovieDialog';

// core functionality
import VideoDownloader from './core/VideoDownloader';
import YoutubeProvider from './core/YoutubeProvider';
import VimeoProvider from './core/VimeoProvider';
import LocalStorage from './core/LocalStorage';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      itemsCount: 10,
      favorites: false,
      order: 'desc',
      layout: 'grid',
    };

    this.VD = new VideoDownloader();
    this.YP = new YoutubeProvider();
    this.VP = new VimeoProvider();
    this.LS = new LocalStorage();
  }

  setMovies = movies => this.setState({movies: movies});
  clearMovies = () => this.setState({movies: []});

  addMovie = (query, provider) => {
    const self = this;
    this.VD.setProviderFunc(provider);
    this.VD.download(query)
      .then(function(d) {
        if (d === undefined) return;
        self.setState({movies: [].concat(self.state.movies, d)}, () =>  {
          self.LS.save('movies', self.state.movies);
        });
      });
  }

  addMovieQuery = query =>  {
    if (query.search(/([A-Za-z0-9_\-]{11})/) > -1) {
      this.addMovie(query, this.YP);
    } else if (query.search(/([0-9]{5,})/) > -1) {
      this.addMovie(query, this.VP);
    }
  }

  setLayout = layout => this.setState({ layout: layout });
  setOrder = order => this.setState({ order: order });
  setFavorites = value => this.setState({ favorites: value });
  setItemsCount = count => this.setState({ itemsCount: count });

  toggleFavorite = (movie, value) => {
    const idx = _.findIndex(this.state.movies, {'id': movie.id});
    const state = _.extend({}, this.state);
    state.movies[idx].favorite = value;
    this.setState(state, () => this.LS.save('movies', this.state.movies));
  }

  deleteMovie = movie => {
    const movies = _.reject(this.state.movies, { 'id': movie.id });
    this.setState({movies: movies}, () => this.LS.save('movies', this.state.movies));
  }

  playMovie = movie => {
    ReactDOM.render((
      <MovieDialog movie={movie} dialogOpen={true} />
    ), document.querySelector('#dialog'));
  }

  componentWillMount = () => this.setState({movies: this.LS.load('movies')});

  render() {
    return (
      <MuiThemeProvider>
        <div className="App" id="root">
          <div id="dialog"></div>
          <TopPanel setMovies={this.setMovies} clearMovies={this.clearMovies} addMovieQuery={this.addMovieQuery}/>
          <ControlPanel setLayout={this.setLayout} setOrder={this.setOrder} setItemsCount={this.setItemsCount} setFavorites={this.setFavorites} />
          <MoviesCollection {...this.state} toggleFavorite={this.toggleFavorite} playMovie={this.playMovie} deleteMovie={this.deleteMovie} />
        </div>
      </MuiThemeProvider>
    );
  }
}
