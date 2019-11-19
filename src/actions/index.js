/*
Login
Register
Like [(other user's id and current user's id)]
Dislike [(other user's id and current user's id)]
~Send Message (userid, conversation id, message)
~Recieve Message (userid, conversation id)
Update Profile - send back user object (optionals - just changes)
*/
export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const LIKE = 'LIKE';
export const DISLIKE = 'DISLIKE';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';

export const login = loginInfo => dispatch => {
  dispatch({
    type: LOGIN,
    payload: loginInfo
  });
}
export const register = registerInfo => dispatch => {
  dispatch({
    type: REGISTER,
    payload: registerInfo
  })
  dispatch({
    type: LOGIN,
    payload: {
      email: registerInfo.email,
      password: registerInfo.password
    }
  });
}
export const update_profile = updatedProfile => dispatch => {
  //TODO: Don't know how i need to send the data to the backend 
  // Approach 1: send back an object with key value pairs that have changed
  // Approach 2: send back an object with the type of change the key that has changed and the updated value
  /* Approach 1
  changes
  key
  oldUser && newUser
  if oldUser.key !=== newUser.key
  changes = {...changes, [key]: newUser.key}
  */
  /*
  typeOfChange
  approach 2
  key
  oldUser && newUser
  if oldUser.key === null && newUser.key !=== null
  typeOfChange = 'add'
  if oldUser.key !=== null && newUser.key === null
  typeOfChange = 'remove'
  if oldUser.key !=== null && newUser.key !=== null
  typeOfChange= 'update'
  {
    type: typeOfChange,
    key: key,
    change: newUser.key
  }
  */

  /*
  Approach 1 body = {
    first_name: 'new first name',
    gender: 'new gender',
    interests: ['oldInterestID', 'oldInterestID', 'newInterestID']
  }
  Approach 2 body = {
    type: 'update',
    key: 'first_name',
    change: 'new first name'
  }
  body = {
    type: 'add',
    key: 'gender',
    change: 'new gender'
  }
  body = {
    type: 'remove',
    key: 'interests',
    change: ['oldInterestID', 'oldInterestID']
  }
  body = {
    type: 'add',
    key: 'interests',
    change: ['oldInterestID', 'oldInterestID', 'newInterestID']
  }
  */
}