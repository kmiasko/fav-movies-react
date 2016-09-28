import React, { Component } from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import './LayoutSelect.css';

export default class LayoutSelect extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = { layout: 'grid' };
  }

  setLayout = (event, value) => {
    this.setState({ layout: value }, () => this.props.setLayout(value));
  }

  render() {
    return (
      <div className="LayoutSelect">
        <RadioButtonGroup className="LayoutSelect__buttonGroup" defaultSelected={this.state.layout} name="layoutSelect" onChange={this.setLayout}>
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
