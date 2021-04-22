import React, {Component} from 'react';
import SampleandLiteratureDetails from '../../stories/screens/SampleandLiteratureDetails ';

export default class SampleandLiteratureDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <SampleandLiteratureDetails {...this.props} />;
  }
}
