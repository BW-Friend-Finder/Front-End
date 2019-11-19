/*
Login
Register
Like [(other user's id and current user's id)]
Dislike [(other user's id and current user's id)]
~Send Message (userid, conversation id, message)
~Recieve Message (userid, conversation id)
Update Profile - send back user object (optionals - just changes)
*/
export const LOGIN;
export const REGISTER;
export const LIKE;
export const DISLIKE;
export const SEND_MESSAGE;
export const RECEIVE_MESSAGES;
export const UPDATE_PROFILE;

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