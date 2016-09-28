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

  playMovie = () => this.props.playMovie(this.movie);

  deleteMovie = () => this.props.deleteMovie(this.movie);

  render() {
    return (
      <div className="MovieCard">
        <Card>
          <CardMedia>
            <img src={this.movie.thumbnail} onClick={this.playMovie}/>
          </CardMedia>
          <CardTitle title={this.movie.title} subtitle={this.subtitle} />
          <CardActions className="MovieCard__Actions">
            <FavoritesSelect toggleFavorite={this.props.toggleFavorite} favoriteMovie={this.movie} />
            <FlatButton label="Play" onClick={this.playMovie} />
            <FlatButton label="Delete" onClick={this.deleteMovie} />
          </CardActions>
        </Card>
      </div>
    );
  }
}
