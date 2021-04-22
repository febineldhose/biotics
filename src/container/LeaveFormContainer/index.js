import React, {Component} from 'react';
import LeaveForm from '../../stories/screens/LeaveForm';
export default class LeaveFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <LeaveForm {...this.props} />;
  }
}
