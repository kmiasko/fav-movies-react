import React, { PropTypes, Component } from 'react';
import Dialog from 'material-ui/Dialog';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const customContentStyle = {
  maxWidth: '684px'
};

export default class MovieDialog extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      open: this.props.dialogOpen
    };
  }

  getChildContext = () => ({ muiTheme: getMuiTheme(baseTheme) });

  handleClose = () => {
    this.setState({open: false});
  };

  createMarkup = () => { return {__html: this.props.movie.embed }; };

  render() {
    return (
      <div>
        <Dialog
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          contentStyle={customContentStyle}
        >
          <div dangerouslySetInnerHTML={this.createMarkup()} />
      </Dialog>
    </div>
    );
  }

  componentWillReceiveProps = (newProps) => this.setState({ open: newProps.dialogOpen });
}

MovieDialog.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
