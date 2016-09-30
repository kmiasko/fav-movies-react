import React, { PropTypes, Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

export default class MovieAddInput extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {query: ''};
  }

  addMovie = () => {
    if (this.state.query) {
      this.props.addMovieQuery(this.state.query);
    }
  }

  setQuery = event => {
    this.setState({ query: event.target.value });
  }

  render() {
    return (
      <div>
        <TextField id="movie-add-query" hintText="Movie url or id:" onChange={this.setQuery}></TextField>
        <FlatButton label="Add Movie" onClick={this.addMovie} />
      </div>
    );
  }
}

MovieAddInput.propTypes = {
  addMovieQuery: PropTypes.func
};
