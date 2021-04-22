import React, {Component} from 'react';
import CreateSampleandLiterature from '../../stories/screens/CreateSampleandLiterature';

export default class CreateSampleandLiteratureContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <CreateSampleandLiterature {...this.props} />;
  }
}
