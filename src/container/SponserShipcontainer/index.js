import React, {Component} from 'react';
import SponserShip from '../../stories/screens/SponserShip';
import {increment} from '../SampleandLiteratureContainer/action';
class SponserShipInitial extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SponserShip {...this.props} onlogin={() => {}} onIncrement={() => {}} />
    );
  }
}
export default function SponserShipcontainer(props) {
  return <SponserShipInitial {...props} />;
}
