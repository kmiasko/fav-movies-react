import React, { PropTypes, Component } from 'react';
import _ from 'lodash';
import Pager from '../../core/Pager';

import './PagerPanel.css';

export default class PagerPanel extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.PG = new Pager();
    this.pager = this.PG.getPager(this.props.moviesLength, this.props.currentPage, this.props.pageSize);
  }

  render() {
    return (
      <div className="PagerPanel">
        <ul>
          { this.pager.pages.map((page, index) => <li key={index}>{page}</li>) }
        </ul>
      </div>
    );
  }
}
