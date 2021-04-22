import React, {Component} from 'react';
import CreateDailyreport from '../../stories/screens/CreateDailyReport';

class CreateDailyReportcontainerInitial extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <CreateDailyreport
        {...this.props}
        createreport={data => {}}
        getCountername={data => {}}
      />
    );
  }
}
export default function CreateDailyReportcontainer(props) {
  return <CreateDailyReportcontainerInitial {...props} />;
}
