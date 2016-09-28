import React, { PropTypes, Component } from 'react';
import MovieCard from '../MovieCard';
import MovieListItem from '../MovieListItem';
import PagerPanel from '../PagerPanel';

import './MoviesCollection.css';

export default class MoviesCollection extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = { currentPage: 1 };
  }

  setPage = (page) => this.setState({ currentPage: page });

  render() {
    const self = this;
    const movieList = this.props.movies.map(m => {
      if (this.props.layout === 'list') {
        return <MovieListItem movie={m} key={m.id} playMovie={this.props.playMovie} deleteMovie={this.props.deleteMovie} toggleFavorite={this.props.toggleFavorite} favoriteMovie={m} />
      } else {
        return <MovieCard movie={m} key={m.id} playMovie={this.props.playMovie} deleteMovie={this.props.deleteMovie} toggleFavorite={this.props.toggleFavorite} favoriteMovie={m} />
      }
    });
    return (
      <div className="MoviesCollection">
        { movieList }
        {/* <PagerPanel moviesLength={movieList.length} currentPage={this.state.currentPage} setPage={this.setPage} pageSize={this.props.pageSize} /> */}
      </div>
    );
  }
}
