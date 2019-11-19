/*
Login
Register
Like [(other user's id and current user's id)]
Dislike [(other user's id and current user's id)]
~Send Message (userid, conversation id, message)
~Recieve Message (userid, conversation id)
Update Profile - send back user object (optionals - just changes)
*/
import axios from 'axios'

export const LOGIN = 'LOGIN';
export const LIKE = 'LIKE';
export const DISLIKE = 'DISLIKE';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const UPDATE_MATCHES = 'UPDATE_MATCHES'

export const login = loginInfo => dispatch => {
  console.log('login')
  axios.post('https://friend-finder-dev.herokuapp.com/api/users/signin', loginInfo)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({
        type: LOGIN,
        payload: res.data.user_details
      });
    })
    .catch(console.log)
  
}
export const register = registerInfo => dispatch => {
  console.log('register')
  axios.post('https://friend-finder-dev.herokuapp.com/api/users/register', registerInfo)
    .then(res => {
      login({
        email: registerInfo.email,
        password: registerInfo.password
      })(dispatch)
    })
    .catch(console.log)
}
export const update_profile = updatedProfile => dispatch => {
  console.log('update')
  axios.post('', updatedProfile)
    .then(res => {
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data.updated_user
      })
    })
    .catch(console.log)
}

export const getMatches = () => dispatch => {
  console.log('get matches')
  axios.get('')
    .then(res => {
      dispatch({
        type: UPDATE_MATCHES,
        payload:
      })
    })
    .catch(console.log)
}

export const like = othersID => dispatch => {
  console.log('like')
  axios.post('', [{requestee_id: othersID}])
    .then(res => {

    })
    .catch(console.log)
}
export const dislike = othersID => dispatch => {
  console.log('dislike')
  axios.post('', [{requestee_id: othersID}])
    .then(res => {
      
    })
    .catch(console.log)
}