import React, {Component} from 'react';
import Home from '../../stories/screens/Home';
import {getcountertypes} from './action';
import {AppStateContext} from '../../context';
import {changeNavigation} from '../../Services/changeNavigation';
import {SCREENS} from '../../stories/screens/config';
import {removePersistor} from '../../Services/Persistor/functionals';
import {removePersistvalue} from '../../Services/Persistor/actions';

class Homecontainerclass extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // const {dispatch, state} = this.props;
    // dispatch(getcountertypes());
  }
  render() {
    const {dispatch, state} = this.props;
    console.warn(state);
    return (
      <Home
        {...this.props}
        logout={() => {
          dispatch(removePersistvalue());
        }}
      />
    );
  }
}

export default function Homecontainer(props) {
  const [state, dispatch] = AppStateContext();
  return <Homecontainerclass {...props} dispatch={dispatch} state={state} />;
}
