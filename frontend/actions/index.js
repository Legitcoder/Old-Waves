import {hashHistory} from 'react-router'
import axios from 'axios';
import {
  AUTHORIZE_USER_LOGIN,
  UNAUTHORIZED_LOGIN_ERROR,
  FETCH_ARTISTS
} from './types'

export const authorizeUserLogin = (props) => dispatch => {
  axios.post('/api/sessions', props)
  .then(currentUser => {
    dispatch({ type: AUTHORIZE_USER_LOGIN, payload: currentUser.data})
    hashHistory.push('/');
  })
  .catch(error =>{
    dispatch({type: UNAUTHORIZED_LOGIN_ERROR, payload: error})
  })
}

export const createNewUser = (props) => dispatch => {
  axios.post('/api/users', props)
  .then(currentUser => {
    dispatch({ type: AUTHORIZE_USER_LOGIN, payload: currentUser.data})
    hashHistory.push('/');
  })
  // .catch(error =>{
  //   dispatch({type: UNAUTHORIZED_LOGIN_ERROR, payload: error})
  // })
}

export const fetchArtists = () => dispatch => {
  axios.get('/api/artists')
  .then(artists => {
    dispatch({ type: FETCH_ARTISTS, payload: artists.data})
  })
}
