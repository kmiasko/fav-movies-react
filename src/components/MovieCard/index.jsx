import React, { PropTypes } from 'react';
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FavoritesSelect from '../FavoritesSelect';
import './MovieCard.css';

export default function MovieCard(props) {
  const createDate = (date) => {
    let tmp_date = new Date(date);
    return `${tmp_date.getDate()}-${tmp_date.getMonth()}-${tmp_date.getFullYear()}`;
  }

  const subtitle = `Added: ${createDate(props.movie.added)} Views: ${props.movie.views} Likes: ${props.movie.likes}`
  const playMovie = () => props.playMovie(props.movie);
  const deleteMovie = () => props.deleteMovie(props.movie);

  return (
    <div className="MovieCard">
      <Card>
        <CardMedia>
          <img src={props.movie.thumbnail} onClick={playMovie} alt="Movie thumbnail"/>
        </CardMedia>
        <CardTitle title={props.movie.title} subtitle={subtitle} />
        <CardActions className="MovieCard__Actions">
          <FavoritesSelect toggleFavorite={props.toggleFavorite} favoriteMovie={props.movie} />
          <FlatButton label="Play" onClick={playMovie} />
          <FlatButton label="Delete" onClick={deleteMovie} />
        </CardActions>
      </Card>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object,
  playMovie: PropTypes.func,
  deleteMovie: PropTypes.func,
  toggleFavorite: PropTypes.func
}
