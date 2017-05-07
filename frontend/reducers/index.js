import { combineReducers } from 'redux';
import UsersReducer from './UsersReducer';
import ArtistsReducer from './ArtistsReducer';
import AlbumsReducer from './AlbumsReducer';
import SongsReducer from './SongsReducer';
import PlaylistsReducer from './PlaylistsReducer';

const rootReducer = combineReducers({
  users: UsersReducer,
  artists: ArtistsReducer,
  albums: AlbumsReducer,
  songs: SongsReducer,
  playlists: PlaylistsReducer
});

export default rootReducer;
