import { combineReducers } from 'redux';
import UsersReducer from './UsersReducer';
import ArtistsReducer from './ArtistsReducer';
import AlbumsReducer from './AlbumsReducer';

const rootReducer = combineReducers({
  users: UsersReducer,
  artists: ArtistsReducer,
  albums: AlbumsReducer
});

export default rootReducer;
