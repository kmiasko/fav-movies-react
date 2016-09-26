import React, { Component } from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import './LayoutSelect.css';

export default class LayoutSelect extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.layout = 'grid';
  }

  render() {
    return (
      <div className="LayoutSelect">
        <RadioButtonGroup className="LayoutSelect__buttonGroup" defaultSelected="grid" name="layoutSelect">
          <RadioButton
            value="grid"
            label="Grid" />
          <RadioButton
            value="list"
            label="List" />
        </RadioButtonGroup>
      </div>
    );
  }
}
