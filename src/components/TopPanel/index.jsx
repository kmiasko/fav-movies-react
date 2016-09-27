import React, { PropTypes, Component } from 'react';
import MovieAddInput from '../MovieAddInput';
import LoadMoviesButton from '../LoadMoviesButton';
import ClearMoviesButton from '../ClearMoviesButton';

import './TopPanel.css';


export default class ClassComponent extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="TopPanel">
        <MovieAddInput addMovieQuery={this.props.addMovieQuery}/>
        <LoadMoviesButton setMovies={this.props.setMovies} />
        <ClearMoviesButton clearMovies={this.props.clearMovies} />
      </div>
    );
  }
}
