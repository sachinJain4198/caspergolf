
import React from 'react';
import { Provider } from 'react-redux';
import StackNavigator from './Navigator/StackNavigator';
import { createStore, combineReducers } from 'redux';
import basicReducer from './store/reducers/basic';

const rootReducer = combineReducers({
  basic: basicReducer
})
const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
}
