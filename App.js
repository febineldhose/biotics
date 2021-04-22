import React from 'react';
import Provider from './src/context';
import Navigator from './src/Navigation';
const App = () => {
  return (
    <Provider>
      <Navigator />
    </Provider>
  );
};
export default App;
