import React, { PropTypes, Component } from 'react';
import { ListItem } from 'material-ui/List';
import FavoritesSelect from '../FavoritesSelect';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import './MovieListItem.css';

export default class MovieListItem extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.subtitle = `Added: ${this.createDate(this.props.movie.added)} Views: ${this.props.movie.views} Likes: ${this.props.movie.likes}`;
  }

  createDate = (date) => {
    let tmp_date = new Date(date);
    return `${tmp_date.getDate()}-${tmp_date.getMonth()}-${tmp_date.getFullYear()}`;
  }

  playMovie = () => this.props.playMovie(this.props.movie);

  deleteMovie = () => this.props.deleteMovie(this.props.movie);

  render() {
    return (
      <div className="MovieListItem">
        <img src={this.props.movie.thumbnail} alt="Thumbnail" onClick={this.playMovie} />
        <ListItem primaryText={this.props.movie.title} secondaryText={this.subtitle} onClick={this.playMovie} />
        <FavoritesSelect toggleFavorite={this.props.toggleFavorite} favoriteMovie={this.props.movie} />
        <IconButton onClick={this.deleteMovie}>
          <NavigationClose />
        </IconButton>
      </div>
    );
  }
}
