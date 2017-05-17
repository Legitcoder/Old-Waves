import {hashHistory} from 'react-router'
import axios from 'axios';
import {
  AUTHORIZE_USER_LOGIN,
  UNAUTHORIZED_LOGIN_ERROR,
  FETCH_ARTISTS,
  FETCH_ARTIST,
  SELECT_ALBUM,
  SELECT_SONG,
  FETCH_USERS,
  FETCH_USER
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
}

export const fetchArtists = () => dispatch => {
  axios.get('/api/artists')
  .then(artists => {
    dispatch({ type: FETCH_ARTISTS, payload: artists.data})
  })
}

export const fetchUsers = () => dispatch => {
  axios.get('/api/users')
  .then(users => {
    dispatch({ type: FETCH_USERS, payload: users.data})
  })
}

export const selectUser = (user) => dispatch => {
  axios.get(`/api/users/${user.id}`)
  .then(user => {
    dispatch( {type: SELECT_USER, payload: user.data} )
  })
}

export const fetchArtist = (artist) => dispatch => {
  axios.get(`/api/artists/${artist.id}`)
  .then(albums => {
    dispatch({ type: FETCH_ARTIST, payload: albums.data})
  })
}

export const selectAlbum = (album) => dispatch => {
  axios.get(`/api/albums/${album.id}`)
  .then(album => {
    dispatch({ type: SELECT_ALBUM, payload: album.data})
  })
}

export const selectSong = (song) => dispatch => {
  dispatch({ type: SELECT_SONG, payload: song})
}
