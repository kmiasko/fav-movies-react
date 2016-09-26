import React, { PropTypes, Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

export default class FavoritesSelect extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = { favoritesOnly: false };
  }

  handleChange = (event, value) =>  this.setState({favoritesOnly: value});

  render() {
    return (
      <div className="FavoritesSelect">
        <Checkbox
          checkedIcon={<ActionFavorite />}
          uncheckedIcon={<ActionFavoriteBorder />}
          checked={this.state.favoritesOnly}
          onCheck={this.handleChange}
        />
      </div>
    );
  }
}
