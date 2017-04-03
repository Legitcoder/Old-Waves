import { combineReducers } from 'redux';
import UsersReducer from './UsersReducer';
import ArtistsReducer from './ArtistsReducer';

const rootReducer = combineReducers({
  users: UsersReducer,
  artists: ArtistsReducer
});

export default rootReducer;
