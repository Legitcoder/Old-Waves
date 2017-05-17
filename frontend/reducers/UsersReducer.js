import {
  AUTHORIZE_USER_LOGIN,
  UNAUTHORIZED_LOGIN_ERROR,
  FETCH_USERS
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
      return Object.assign({}, state, {errorMessage: 'Invalid Username/Password'});
    case FETCH_USERS:
      return Object.assign({}, state, {all: action.payload});
    default:
      return state;
  }
};
