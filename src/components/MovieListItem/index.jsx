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

  render() {
    return (
      <div className="MovieListItem">
        <img src={this.movie.thumbnail} alt="Thumbnail" />
        <ListItem primaryText={this.movie.title} secondaryText={this.subtitle} />
        <FavoritesSelect />
        <IconButton>
          <NavigationClose />
        </IconButton>
      </div>
    );
  }
}
