import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import {Router, browserHistory} from 'react-router';
import {Route, IndexRoute, Link} from 'react-router';
import reducers  from './reducers';
import App from './components/app';
import Login from './components/auth/login'

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers)

const requireAuth = (nextState, replace) => {
  if(1===2){
    return true
  }
  else{
    replace('/login')
  }
}

var Routes = (
     <Provider store={store}>
      <Router history={browserHistory}>
      <Route path="/" component={App} onEnter={requireAuth} />
      <Route path="/login" component={Login} />
      </Router>
     </Provider>
  );


document.addEventListener('DOMContentLoaded', function(){
ReactDom.render(Routes, document.getElementById('root'));
});
