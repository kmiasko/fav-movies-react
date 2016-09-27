import React, { Component } from 'react';
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FavoritesSelect from '../FavoritesSelect';
import './MovieCard.css';

export default class MovieCard extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.movie = this.props.movie;
    this.subtitle = `Added: ${this.movie.added} Views: ${this.movie.views} Likes: ${this.movie.likes}`
  }

  render() {
    return (
      <div className="MovieCard">
        <Card>
          <CardMedia>
            <img src={this.movie.thumbnail}/>
          </CardMedia>
          <CardTitle title={this.movie.title} subtitle={this.subtitle} />
          <CardActions className="MovieCard__Actions">
            <FavoritesSelect />
            <FlatButton label="Play" />
            <FlatButton label="Delete" />
          </CardActions>
        </Card>
      </div>
    );
  }
}
