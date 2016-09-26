import React, { PropTypes, Component } from 'react';
import LayoutSelect from '../LayoutSelect';
import ItemsCountSelect from '../ItemsCountSelect';
import SortOrderSelect from '../SortOrderSelect';
import FavoritesSelect from '../FavoritesSelect';
import './ControlPanel.css';

export default class ControlPanel extends Component {

  render() {
    return (
      <div className="ControlPanel">
        <LayoutSelect />
        <ItemsCountSelect />
        <SortOrderSelect />
        <FavoritesSelect />
      </div>
    );
  }
}
