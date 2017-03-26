import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { Provider, connect  } from 'react-redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Router, browserHistory, Route, IndexRoute, Link} from 'react-router';
import reducers  from '../reducers';
import App from './app';
import Login from './auth/login';
import {authorizeUserLogin} from '../actions/index';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);


const Root = () => {

  const requireAuth = (nextState, replace) => {
    console.log(store.getState());
    if(!store.getState().users.currentUser){
      replace('/login')
    }
  };

  return(
   <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} onEnter={requireAuth} />
      <Route path="/login" component={Login} />
    </Router>
    </Provider>
);
}

export default Root;
