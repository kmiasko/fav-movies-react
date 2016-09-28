import React from 'react';
import LayoutSelect from '../LayoutSelect';
import ItemsCountSelect from '../ItemsCountSelect';
import SortOrderSelect from '../SortOrderSelect';
import FavoritesSelect from '../FavoritesSelect';
import './ControlPanel.css';

export default function ControlPanel(props) {
  return (
    <div className="ControlPanel">
      <LayoutSelect setLayout={props.setLayout} />
      <ItemsCountSelect setItemsCount={props.setItemsCount} />
      <SortOrderSelect setOrder={props.setOrder} />
      <FavoritesSelect setFavorites={props.setFavorites} />
    </div>
  );
}
