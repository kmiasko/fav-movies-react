import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import FavoritesSelect from '../FavoritesSelect';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import './MovieListItem.css';

export default function MovieListItem(props) {
  const createDate = (date) => {
    let tmp_date = new Date(date);
    return `${tmp_date.getDate()}-${tmp_date.getMonth()}-${tmp_date.getFullYear()}`;
  }

  const subtitle = `Added: ${createDate(props.movie.added)} Views: ${props.movie.views} Likes: ${props.movie.likes}`;
  const playMovie = () => props.playMovie(props.movie);
  const deleteMovie = () => props.deleteMovie(props.movie);

  return (
    <div className="MovieListItem">
      <img src={props.movie.thumbnail} alt="Thumbnail" onClick={playMovie} />
      <ListItem primaryText={props.movie.title} secondaryText={subtitle} onClick={playMovie} />
      <FavoritesSelect toggleFavorite={props.toggleFavorite} favoriteMovie={props.movie} />
      <IconButton onClick={deleteMovie}>
        <NavigationClose />
      </IconButton>
    </div>
  );
}

MovieListItem.propTypes = {
  movie: PropTypes.object,
  playMovie: PropTypes.func,
  deleteMovie: PropTypes.func,
  toggleFavorite: PropTypes.func
}
