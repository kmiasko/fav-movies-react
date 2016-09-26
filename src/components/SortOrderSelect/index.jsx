import React, { PropTypes, Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const sortOrders = [
  <MenuItem key={1} value="Desc" primaryText="Desc" />,
  <MenuItem key={2} value="Asc" primaryText="Asc" />,
];

export default class SortOrderSelect extends Component {

  constructor(props) {
    super(props);
    this.state = { sortOrder: "Desc" };
  }

  handleChange = (event, index, value) => this.setState({sortOrder: value});

  render() {
    return (
      <div className="ItemCountSelect">
        <SelectField
          value={this.state.sortOrder}
          onChange={this.handleChange}
          floatingLabelText="Sort order"
        >
          {sortOrders}
        </SelectField>
      </div>
    );
  }
}
