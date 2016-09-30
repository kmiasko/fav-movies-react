import React, { PropTypes, Component } from 'react';
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FavoritesSelect from '../FavoritesSelect';
import './MovieCard.css';

export default class MovieCard extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.subtitle = `Added: ${this.createDate(this.props.movie.added)} Views: ${this.props.movie.views} Likes: ${this.props.movie.likes}`
  }

  createDate = (date) => {
    let tmp_date = new Date(date);
    return `${tmp_date.getDate()}-${tmp_date.getMonth()}-${tmp_date.getFullYear()}`;
  }

  playMovie = () => this.props.playMovie(this.props.movie);

  deleteMovie = () => this.props.deleteMovie(this.props.movie);

  render() {
    return (
      <div className="MovieCard">
        <Card>
          <CardMedia>
            <img src={this.props.movie.thumbnail} onClick={this.playMovie} alt="Movie thumbnail"/>
          </CardMedia>
          <CardTitle title={this.props.movie.title} subtitle={this.subtitle} />
          <CardActions className="MovieCard__Actions">
            <FavoritesSelect toggleFavorite={this.props.toggleFavorite} favoriteMovie={this.props.movie} />
            <FlatButton label="Play" onClick={this.playMovie} />
            <FlatButton label="Delete" onClick={this.deleteMovie} />
          </CardActions>
        </Card>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.object,
  playMovie: PropTypes.func,
  deleteMovie: PropTypes.func,
  toggleFavorite: PropTypes.func
}
