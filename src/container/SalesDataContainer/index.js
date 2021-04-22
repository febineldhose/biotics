import React, {Component} from 'react';
import SalesData from '../../stories/screens/SalesData';

export default class SalesDataUploadContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <SalesData {...this.props} />;
  }
}
