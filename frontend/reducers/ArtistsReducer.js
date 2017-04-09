import {
  FETCH_ARTISTS,
  FETCH_ARTIST
} from '../actions/types'

const INITIAL_STATE = {
  all: []
}
export default( state = INITIAL_STATE, action) => {
  switch(action.type){
    case FETCH_ARTISTS:
      return Object.assign({}, state, {all: action.payload});
    case FETCH_ARTIST:
      return Object.assign({}, state, {artist: action.payload});
    default:
      return state;
  }
};
