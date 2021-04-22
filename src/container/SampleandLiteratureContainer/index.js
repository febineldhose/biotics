import React, {Component} from 'react';
import SampleandLiterature from '../../stories/screens/SampleandLiterature';
import {RequestSampleConsumer} from './context';
import {increment, decrement} from './action';

export default class SampleandLiteratureContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <SampleandLiterature {...this.props} />;
  }
}
