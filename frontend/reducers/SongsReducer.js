import {
  SELECT_SONG
} from '../actions/types'

const INITIAL_STATE = {}

export default( state = INITIAL_STATE, action) => {
  switch(action.type){
    case SELECT_SONG:
      return Object.assign({}, state, {song: action.payload});
    default:
      return state;
  }
};
