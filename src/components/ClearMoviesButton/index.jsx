import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import LocalStorage from '../../core/LocalStorage';

export default function ClearMoviesButton(props) {

  const clearMovies = () => {
    const LS = new LocalStorage();
    props.clearMovies();
    LS.save('movies', []);
  }

  return (
    <RaisedButton label="Clear Movies" secondary={true} onClick={clearMovies}/>
  );
}

ClearMoviesButton.propTypes = {
  clearMovies: PropTypes.func
};
