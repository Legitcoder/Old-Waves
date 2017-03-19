import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import {Router, browserHistory} from 'react-router';
import {Route, IndexRoute} from 'react-router';
import reducers  from './reducers';
import App from './components/app';

const createStoreWithMiddleware = applyMiddleware()(createStore);



var Routes = (
    // <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={browserHistory}>
      <Route path="/" component={App} />
      </Router>
    // </Provider>
  );


document.addEventListener('DOMContentLoaded', function(){
ReactDom.render(Routes, document.getElementById('root'));
});
