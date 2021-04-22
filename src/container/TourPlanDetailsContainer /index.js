import React, {Component} from 'react';
import TourPlanDetails from '../../stories/screens/TourPlanDetails';
export default class TourPlanDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <TourPlanDetails {...this.props} />;
  }
}
