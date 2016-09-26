import React from 'react';
import MovieAddInput from '../MovieAddInput';
import LoadMoviesButton from '../LoadMoviesButton';
import ClearMoviesButton from '../ClearMoviesButton';

import './TopPanel.css';

export default function TopPanel() {
  return(
    <div className="TopPanel">
      <MovieAddInput />
      <LoadMoviesButton />
      <ClearMoviesButton />
    </div>
  );
}
