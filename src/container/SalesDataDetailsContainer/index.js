import React, {Component} from 'react';
import SalesDataDetails from '../../stories/screens/SalesDataDetails ';

export default class SalesDataDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <SalesDataDetails {...this.props} />;
  }
}
