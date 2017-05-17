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
import AlbumSongs from './main/albumSongs';
import Login from './auth/login';
import Artists from './main/artists';
import ArtistAlbums from './main/artistAlbums';
import Users from './main/Users';
import User from './main/User';


const persistedState = loadState();
const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
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
      <Route path="/" component={App}>
        <IndexRoute component={Artists} onEnter={requireAuth} />
        <Route path="/artists" component={Artists} />
        <Route path="/users" component={Users} />
        <Route path="/artists/:id/:artist" component={ArtistAlbums} />
        <Route path="/users/:id/:user" component={User} />
        <Route path="/artists/:id/:artist/:album" component={AlbumSongs} />
      </Route>
      <Route path="/login" component={Login} />
    </Router>
    </Provider>
);
}

export default Root;
