import React, {Component} from 'react';
import CreateTourPlan from '../../stories/screens/CreateTourPlan';

export default class CreateTourPlanContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <CreateTourPlan {...this.props} />;
  }
}
