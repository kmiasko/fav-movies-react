import React, { PropTypes, Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import LocalStorage from '../../core/LocalStorage';
import 'whatwg-fetch';

import movies from '../../movies.json';

export default class LoadMoviesButton extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.loadMovies = this.loadMovies.bind(this);
    this.LS = new LocalStorage();
  }

  loadMovies() {
    this.props.setMovies(movies);
    this.LS.save('movies', movies);
  }

  render() {
    return (
      <RaisedButton label="Load Movies" primary={true} onClick={this.loadMovies}/>
    );
  }
}
