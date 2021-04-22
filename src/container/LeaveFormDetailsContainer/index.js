import React, {Component} from 'react';
import LeaveFormDetails from '../../stories/screens/LeaveFormDetails';
export default class LeaveFormDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <LeaveFormDetails {...this.props} />;
  }
}
