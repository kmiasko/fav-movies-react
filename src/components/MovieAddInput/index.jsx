import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

export default class MovieAddInput extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.query = '';
  }

  render() {
    return (
      <div>
        <TextField id="movie-add-query" hintText="Movie url or id:"></TextField>
        <FlatButton label="Add Movie" />
      </div>
    );
  }
}
