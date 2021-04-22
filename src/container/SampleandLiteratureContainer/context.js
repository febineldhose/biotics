import React, {useContext} from 'react';
import reducer from './reducer';
//
export const RequestSample = React.createContext();
//
export const RequestSampleConsumer = RequestSample.Consumer;
export default function({children}) {
  const value = React.useReducer(reducer, {enthadey: 'febin'});
  return (
    <RequestSample.Provider value={value}>{children}</RequestSample.Provider>
  );
}
export function RequestsampleContext() {
  return useContext(RequestSample);
}
