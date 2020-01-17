import React from 'react';
import Counter from './src/screens/Counter';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './src/redux/reducers/rootReducer';

const App = () => {
  return (
    <Provider store={createStore(rootReducer)}>
      <Counter />
    </Provider>
  );
};

export default App;
