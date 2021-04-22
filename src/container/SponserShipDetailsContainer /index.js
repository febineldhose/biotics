import React, {Component} from 'react';
import SponserShipDetails from '../../stories/screens/SponserShipDetails';

class SponserShipRequestDetailsInitial extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <SponserShipDetails {...this.props} />;
  }
}
export default function SponserShipRequestDetailsContainer(props) {
  return <SponserShipRequestDetailsInitial {...props} />;
}
