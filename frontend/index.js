import React from 'react';
import ReactDom from 'react-dom';
import Root from './components/root'
import {createStore, applyMiddleware} from 'redux';
import {Router, browserHistory, Route, IndexRoute, Link} from 'react-router';
import ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import reducers  from './reducers';


document.addEventListener('DOMContentLoaded', function(){
ReactDom.render(
    <Root />,
  document.getElementById('root'));
});
