import React, { PropTypes, Component } from 'react';
import ReactPaginate from 'react-paginate';
import _ from 'lodash';

import MovieCard from '../MovieCard';
import MovieListItem from '../MovieListItem';

import './MoviesCollection.css';
import './MovieGrid.css';
import './MovieList.css';

export default class MoviesCollection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      pageNum: 0,
      data: []
    };
    this.props = props;
    this.moviesToShow = [];
  }

  filterMovies = (props) => {
    let movies = [];
    if (props.favorites === true) {
      movies = _.filter(props.movies, ['favorite', true]);
    } else {
      movies = props.movies;
    }
    if (props.order === 'asc') {
      movies = _.sortBy(movies, ['added']);
    } else {
      movies = _.chain(movies).sortBy('added').reverse().value();
    }
    return movies;
  }

  loadMovies = (source = this.props) => {
    const movies = this.filterMovies(source);
    const pageNum = Math.ceil(movies.length / source.itemsCount );
    const paginatedMovies = _.chunk(movies, source.itemsCount);
    const selected = (this.state.selected >= pageNum) ? 0 : this.state.selected;
    this.setState({ data: paginatedMovies[selected], pageNum: pageNum, selected: selected });
  }

  componentWillReceiveProps = newProps => {
    this.loadMovies(newProps);
  }

  componentWillMount = () => {
    this.loadMovies();
  }

  handlePageClick = (data) => {
    this.setState({ selected: data.selected }, () => this.loadMovies());
  }

  render() {
    let mclass = 'MovieGrid';
    if (!this.state.data || this.state.data.length === 0) {
      return false;
    }
    const movieList = this.state.data.map(m => {
      if (this.props.layout === 'list') {
        mclass = 'MovieList';
        return <MovieListItem movie={m} key={m.id} {...this.props} />
      } else {
        return <MovieCard movie={m} key={m.id} {...this.props} />
      }
    });

    return (
      <div className="MoviesCollection">
        <div className={mclass}>
          { movieList }
        </div>
        <ReactPaginate previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={<a href="">...</a>}
          breakClassName={"break-me"}
          pageNum={this.state.pageNum}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          clickCallback={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          forceSelected={this.state.selected}
          activeClassName={"active"} />
      </div>
    );
  }
}
