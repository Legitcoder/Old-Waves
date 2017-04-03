import {
  FETCH_ARTISTS
} from '../actions/types'

const INITIAL_STATE = {
  all: []
}
export default( state = INITIAL_STATE, action) => {
  switch(action.type){
    case FETCH_ARTISTS:
      return Object.assign({}, state, {all: action.payload});
    default:
      return state;
  }
};
