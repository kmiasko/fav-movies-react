import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FavoritesSelect from '../FavoritesSelect';
import './MovieCard.css';

export default class MovieCard extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="MovieCard">
        <Card>
          <CardMedia>
            <img src="http://placehold.it/300x300" />
          </CardMedia>
          <CardTitle title="Movie title" subtitle="Added: 01-01-2016 Views: 1000 Likes: 20" />
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
