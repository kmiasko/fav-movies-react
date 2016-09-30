import React, { PropTypes, Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

export default class FavoritesSelect extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    if (!this.props.favoriteMovie) {
      this.state = { favorite: false };
    } else {
      this.state = { favorite: this.props.favoriteMovie.favorite };
    }
  }

  handleChange = (event, value) =>  {
    if (!this.props.favoriteMovie) {
      this.setState({favorite: !this.state.favorite}, () => this.props.setFavorites(this.state.favorite));
    } else {
      this.setState({favorite: !this.state.favorite}, () => this.props.toggleFavorite(this.props.favoriteMovie, !this.props.favoriteMovie.favorite));
    }
  }

  render() {
    return (
      <div className="FavoritesSelect">
        <Checkbox
          checkedIcon={<ActionFavorite />}
          uncheckedIcon={<ActionFavoriteBorder />}
          checked={this.state.favorite}
          onCheck={this.handleChange}
        />
      </div>
    );
  }
}

FavoritesSelect.propTypes = {
  favoriteMovie: PropTypes.object
};
