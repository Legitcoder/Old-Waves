import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { Provider, connect  } from 'react-redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Router, hashHistory, Route, IndexRoute, Link} from 'react-router';
import reducers  from '../reducers';
import { loadState, saveState } from './localStorage';
import App from './app';
import Login from './auth/login';
import Albums from './main/albums';
import Artists from './main/artists';
import ArtistAlbums from './main/artistAlbums';


const persistedState = loadState();
const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});


const Root = () => {

  const requireAuth = (nextState, replace) => {
    !store.getState().users.currentUser ? replace('/login') : replace('/artists');
  };

  return(
   <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" >
        <IndexRoute component={App} onEnter={requireAuth} />
        <Route path="/Artists" component={Artists} />
        <Route path="/ArtistAlbums" component={ArtistAlbums} />
        <Route path="/Albums" component={Albums} />
        <Route path="/Login" component={Login} />
      </Route>
    </Router>
    </Provider>
);
}

export default Root;
