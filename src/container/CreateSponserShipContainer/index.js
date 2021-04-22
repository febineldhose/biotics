import React, {Component} from 'react';
import CreateSponserShip from '../../stories/screens/CreateSponserShip';

class CreateSponserShipRequestInitial extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <CreateSponserShip {...this.props} />;
  }
}
export default function CreateSponserShipRequestContainer(props) {
  return <CreateSponserShipRequestInitial {...props} />;
}
