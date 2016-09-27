import React, { PropTypes, Component } from 'react';
import MovieCard from '../MovieCard';
import MovieListItem from '../MovieListItem';

import './MoviesCollection.css';

export default class MoviesCollection extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.element = null;
    this.layout = this.props.layout || 'grid';
    console.log(this.props.movies);
  }

  render() {
    const self = this;
    const movieList = this.props.movies.map(m => {
      if (self.layout === 'list') {
        return <MovieListItem movie={m} key={m.id} />
      } else {
        return <MovieCard movie={m} key={m.id} />
      }
    });
    return (
      <div className="MoviesCollection">
        { movieList }
      </div>
    );
  }
}
