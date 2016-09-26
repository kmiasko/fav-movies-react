import React, { PropTypes, Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const itemCounts = [
  <MenuItem key={1} value={5} primaryText="5" />,
  <MenuItem key={2} value={10} primaryText="10" />,
  <MenuItem key={3} value={20} primaryText="20" />,
  <MenuItem key={4} value={50} primaryText="50" />,
  <MenuItem key={5} value={100} primaryText="100" />,
];

export default class ItemsCountSelect extends Component {

  constructor(props) {
    super(props);
    this.state = { itemCount: 10 };
  }

  handleChange = (event, index, value) => this.setState({itemCount: value});

  render() {
    return (
      <div className="ItemCountSelect">
        <SelectField
          value={this.state.itemCount}
          onChange={this.handleChange}
          floatingLabelText="Item count"
        >
          {itemCounts}
        </SelectField>
      </div>
    );
  }
}
