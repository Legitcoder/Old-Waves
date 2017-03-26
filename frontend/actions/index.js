import {browserHistory} from 'react-router'
import axios from 'axios';
import {
  AUTHORIZE_USER_LOGIN,
  UNAUTHORIZED_LOGIN_ERROR
} from './types'

export const authorizeUserLogin = (props) => dispatch => {
  axios.post('/api/sessions', props)
  .then(currentUser => {
    dispatch({ type: AUTHORIZE_USER_LOGIN, payload: currentUser.data})
    browserHistory.push('/');
  })
  .catch(error =>{
    dispatch({type: UNAUTHORIZED_LOGIN_ERROR, payload: error})
  })
}
