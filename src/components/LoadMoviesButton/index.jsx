import React, { PropTypes } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import LocalStorage from '../../core/LocalStorage';

import movies from '../../movies.json';

export default function LoadMoviesButton(props) {

  const loadMovies = () => {
    const LS = new LocalStorage();
    props.setMovies(movies);
    LS.save('movies', movies);
  }

  return (
    <RaisedButton label="Load Movies" primary={true} onClick={loadMovies}/>
  );
}

LoadMoviesButton.propTypes = {
  setMovies: PropTypes.func
};
