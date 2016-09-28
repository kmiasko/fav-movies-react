import React, { PropTypes, Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const sortOrders = [
  <MenuItem key={1} value="desc" primaryText="Desc" />,
  <MenuItem key={2} value="asc" primaryText="Asc" />,
];

export default class SortOrderSelect extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = { sortOrder: "desc" };
  }

  handleChange = (event, index, value) => {
    this.setState({sortOrder: value}, () => this.props.setOrder(value));
  }

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
