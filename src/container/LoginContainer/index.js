import React, {Component} from 'react';
import Login from '../../stories/screens/Login';
import {AppStateContext} from '../../context';
import {onlogin} from './actions';
class LoginInitial extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {dispatch, state} = this.props;
    return <Login {...this.props} onlogin={data => dispatch(onlogin(data))} />;
  }
}
export default function LoginContainer(props) {
  const [state, dispatch] = AppStateContext();
  return <LoginInitial {...props} state={state} dispatch={dispatch} />;
}
