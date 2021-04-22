import React, {createContext, useContext, useEffect} from 'react';
//
import {rootReducer} from '../reducers';
import {getPersistor} from '../Services/Persistor/functionals';
import store from '../store';

const Context = createContext();

//
const Provider = ({children}) => {
  const [state, usedispatch] = rootReducer();
  useEffect(() => {
    getPersistor(usedispatch);
  }, [null]);

  useEffect(() => {
    if (!store.isReady) {
      store.isReady = true;
      store.state = state;
      store.dispatch = action => {
        dispatch(action);
      };
    }
    return () => {
      store.isReady = false;
    };
  }, [usedispatch, state]);

  const dispatch = ({type, data, callback}) => {
    usedispatch({type, data});
    callback && callback(dispatch, data, state);
  };

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

//
//
export const AppStateContext = () => {
  return useContext(Context);
};

export default Provider;
