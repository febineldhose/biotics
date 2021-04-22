import React, {Component} from 'react';
import CreateLeaveForm from '../../stories/screens/CreateLeaveForm';
class CreateLeaveFormInitial extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <CreateLeaveForm {...this.props} />;
  }
}
export default function CreateLeaveFormContainer(props) {
  return <CreateLeaveFormInitial {...props} />;
}
