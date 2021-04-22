import React, {Component} from 'react';
import CreateSalesData from '../../stories/screens/CreateSalesData';

export default class CreateSalesDataContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <CreateSalesData {...this.props} />;
  }
}
