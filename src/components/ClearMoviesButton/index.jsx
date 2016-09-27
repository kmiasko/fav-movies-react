import React, { PropTypes, Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import LocalStorage from '../../core/LocalStorage';

export default class ClearMoviesButton extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.LS = new LocalStorage();
    this.clearMovies = this.clearMovies.bind(this);
  }

  clearMovies() {
    this.props.clearMovies();
    this.LS.save('movies', []);
  }

  render() {
    return (
      <RaisedButton label="Clear Movies" secondary={true} onClick={this.clearMovies}/>
    );
  }
}
