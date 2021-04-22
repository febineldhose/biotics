import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../container/HomeContainer';
import DailyReport from '../container/DailyReportContainer';
import CreateDailyReport from '../container/CreateDailyReportContainer';
import DailyReportDetails from '../container/DailyReportDetailsContainer';
import CreateSponserShip from '../container/CreateSponserShipContainer';
import SponserShipDetails from '../container/SponserShipDetailsContainer ';
import CreateSampleandLiterature from '../container/CreateSampleandLiteratureContainer';
import SampleandLiterature from '../container/SampleandLiteratureContainer';
import SponserShip from '../container/SponserShipcontainer';
import SampleandLiteratureDetails from '../container/SampleandLiteratureDetailsContainer ';
import SalesData from '../container/SalesDataContainer';
import CreateSalesData from '../container/CreateSalesDataContainer';
import SalesDataDetails from '../container/SalesDataDetailsContainer';
import TourPlan from '../container/TourPlanContainer';
import CreateTourPlan from '../container/CreateTourPlanContainer';
import TourPlanDetails from '../container/TourPlanDetailsContainer ';
import LeaveForm from '../container/LeaveFormContainer';
import CreateLeaveForm from '../container/CreateLeaveFormContainer ';
import LeaveFormDetails from '../container/LeaveFormDetailsContainer';
const AppStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
  SampleandLiterature: {
    screen: SampleandLiterature,
    navigationOptions: {
      header: null,
    },
  },

  CreateSampleandLiterature: {
    screen: CreateSampleandLiterature,
    navigationOptions: {
      header: null,
    },
  },
  SampleandLiteratureDetails: {
    screen: SampleandLiteratureDetails,
    navigationOptions: {
      header: null,
    },
  },
  DailyReport: {
    screen: DailyReport,
    navigationOptions: {
      header: null,
    },
  },

  CreateDailyReport: {
    screen: CreateDailyReport,
    navigationOptions: {
      header: null,
    },
  },
  DailyReportDetails: {
    screen: DailyReportDetails,
    navigationOptions: {
      header: null,
    },
  },
  SponserShip: {
    screen: SponserShip,
    navigationOptions: {
      header: null,
    },
  },
  CreateSponserShip: {
    screen: CreateSponserShip,
    navigationOptions: {
      header: null,
    },
  },
  SponserShipDetails: {
    screen: SponserShipDetails,
    navigationOptions: {
      header: null,
    },
  },
  SalesData: {
    screen: SalesData,
    navigationOptions: {
      header: null,
    },
  },
  CreateSalesData: {
    screen: CreateSalesData,
    navigationOptions: {
      header: null,
    },
  },
  SalesDataDetails: {
    screen: SalesDataDetails,
    navigationOptions: {
      header: null,
    },
  },
  TourPlan: {
    screen: TourPlan,
    navigationOptions: {
      header: null,
    },
  },
  CreateTourPlan: {
    screen: CreateTourPlan,
    navigationOptions: {
      header: null,
    },
  },
  TourPlanDetails: {
    screen: TourPlanDetails,
    navigationOptions: {header: null},
  },
  LeaveForm: {
    screen: LeaveForm,
    navigationOptions: {header: null},
  },
  CreateLeaveForm: {
    screen: CreateLeaveForm,
    navigationOptions: {header: null},
  },
  LeaveFormDetails: {
    screen: LeaveFormDetails,
    navigationOptions: {header: null},
  },
});

const NavigationMain = createAppContainer(AppStack);

export default NavigationMain;
