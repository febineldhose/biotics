import React, {Component} from 'react';
import TourPlan from '../../stories/screens/TourPlan';

class TourPlanInitial extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <TourPlan {...this.props} />;
  }
}
export default function TourPlanContainer(props) {
  return <TourPlanInitial {...props} />;
}
