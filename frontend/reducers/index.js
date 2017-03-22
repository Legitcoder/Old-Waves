import { combineReducers } from 'redux';
import UsersReducer from './UsersReducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  users: UsersReducer,
  form: formReducer
});

export default rootReducer;
