import React, { PropTypes, Component } from 'react';
import ReactPaginate from 'react-paginate';
import _ from 'lodash';

import MovieCard from '../MovieCard';
import MovieListItem from '../MovieListItem';
import PagerPanel from '../PagerPanel';

import './MoviesCollection.css';

export default class MoviesCollection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      movies: [],
      selected: 0,
      pageSize: 10,
      pageNum: 0
    };
    this.props = props;
  }

  componentWillReceiveProps(newProps) {
    let data = _.chunk(newProps.movies, newProps.pageSize) || [];
    let selected = 0;
    let pageNum = Math.ceil(newProps.movies.length / newProps.pageSize);
    (this.state.selected > pageNum - 1) ? selected = 0 : selected = this.state.selected;
    this.setState({data: data[selected] || [], pageNum: pageNum, movies: newProps.movies, pageSize: newProps.pageSize, selected: selected });
  }

  loadComments() {
    let data = _.chunk(this.state.movies, this.state.pageSize);
    let selected = 0;
    let pageNum = Math.ceil(this.state.movies.length / this.state.pageSize);
    (this.state.selected > this.state.pageNum - 1) ? selected = 0 : selected = this.state.selected;
    this.setState({data: data[selected] || [], pageNum: pageNum});
  }

  componentDidMount() {
    this.loadComments();
  }

  handlePageClick = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.props.pageSize);

    this.setState({selected: selected}, () => {
      this.loadComments();
    });
  };

  render() {
    const self = this;
    const movieList = this.state.data.map(m => {
      if (this.props.layout === 'list') {
        return <MovieListItem movie={m} key={m.id} playMovie={this.props.playMovie} deleteMovie={this.props.deleteMovie} toggleFavorite={this.props.toggleFavorite} favoriteMovie={m} />
      } else {
        return <MovieCard movie={m} key={m.id} playMovie={this.props.playMovie} deleteMovie={this.props.deleteMovie} toggleFavorite={this.props.toggleFavorite} favoriteMovie={m} />
      }
    });

    return (
      <div className="MoviesCollection">
        { movieList }
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
          activeClassName={"active"} />
      </div>
    );
  }
}
