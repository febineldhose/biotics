import React, {Component} from 'react';
import {createDailyReport, getCountername} from './action';
import DailyReport from '../../stories/screens/DailyReport';

class DailyReportInitial extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <DailyReport
        {...this.props}
        createreport={data => {}}
        getCountername={data => {}}
      />
    );
  }
}
export default function DailyReportcontainer(props) {
  return <DailyReportInitial {...props} />;
}
