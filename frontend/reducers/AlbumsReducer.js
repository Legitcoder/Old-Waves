import {
  SELECT_ALBUM
} from '../actions/types'

const INITIAL_STATE = {
  all: []
}
export default( state = INITIAL_STATE, action) => {
  switch(action.type){
    case SELECT_ALBUM:
      return Object.assign({}, state, {album: action.payload});
    default:
      return state;
  }
};
