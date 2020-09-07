import React, {PureComponent} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import allReducer from './src/reducer';
import createAppMiddleware from 'redux-saga';
import rootSaga from './src/saga/rootSaga';
import MainNavigation from './src/total/MainNavigation';
const SagaMiddleware = createAppMiddleware();
const store = createStore(allReducer, applyMiddleware(SagaMiddleware));
export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    );
  }
}
if (process.env.NODE_ENV !== 'test') {
  SagaMiddleware.run(rootSaga);
}
