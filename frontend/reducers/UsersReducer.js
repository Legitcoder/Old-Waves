import _ from 'lodash';
import {
  AUTHORIZE_USER_LOGIN,
  UNAUTHORIZED_LOGIN_ERROR
} from '../actions/types'

const INITIAL_STATE = {
  all: [],
  currentUser: null
}
export default( state = INITIAL_STATE, action) => {
  switch(action.type){
    case AUTHORIZE_USER_LOGIN:
      return Object.assign({}, state, {currentUser: action.payload});
    case UNAUTHORIZED_LOGIN_ERROR:
      return Object.assign({}, state, {errorMessage: 'Invalid Credentials'});
    default:
      return state;
  }
};
