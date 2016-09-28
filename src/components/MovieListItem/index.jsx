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
    this.movie = this.props.movie;
    this.subtitle = `Added: ${this.movie.added} Views: ${this.movie.views} Likes: ${this.movie.likes}`
  }

  playMovie = () => this.props.playMovie(this.movie);

  deleteMovie = () => this.props.deleteMovie(this.movie);

  render() {
    return (
      <div className="MovieListItem">
        <img src={this.movie.thumbnail} alt="Thumbnail" onClick={this.playMovie} />
        <ListItem primaryText={this.movie.title} secondaryText={this.subtitle} onClick={this.playMovie} />
        <FavoritesSelect toggleFavorite={this.props.toggleFavorite} favoriteMovie={this.movie} />
        <IconButton onClick={this.deleteMovie}>
          <NavigationClose />
        </IconButton>
      </div>
    );
  }
}
