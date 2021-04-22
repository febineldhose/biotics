import React, {Component} from 'react';
import DailyReportDetails from '../../stories/screens/DailyReportDetails';
class DailyReportDetailsInitial extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <DailyReportDetails
        {...this.props}
        createreport={data => {}}
        getCountername={data => {}}
      />
    );
  }
}
export default function DailyReportDetailscontainer(props) {
  return <DailyReportDetailsInitial {...props} />;
}
