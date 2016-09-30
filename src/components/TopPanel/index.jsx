import React, { PropTypes, Component } from 'react';
import MovieAddInput from '../MovieAddInput';
import LoadMoviesButton from '../LoadMoviesButton';
import ClearMoviesButton from '../ClearMoviesButton';

import './TopPanel.css';


export default function TopPanel(props) {
  return (
    <div className="TopPanel">
      <MovieAddInput addMovieQuery={props.addMovieQuery}/>
      <LoadMoviesButton setMovies={props.setMovies} />
      <ClearMoviesButton clearMovies={props.clearMovies} />
    </div>
  );
}
